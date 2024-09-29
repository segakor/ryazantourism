import { useEffect, useState } from "react";
import { parseCookies, setCookie } from "nookies";
import { Skeleton } from "@nextui-org/react";
import { MODE_VISUALLY_KEY_NAME } from "../ModeVisually/ModeVisually";

const COOKIE_NAME = "googtrans";

const config = {
  languages: [
    { title: "Ru", name: "ru" },
    { title: "En", name: "en" },
  ],
  defaultLanguage: "ru",
};

const LangSwitch = () => {
  const [currentLanguage, setCurrentLanguage] = useState<string>();
  const [languageConfig, setLanguageConfig] = useState<any>();
  const [disableCookieValue, setDisableCookieValue] = useState("");

  useEffect(() => {
    const cookies = parseCookies();
    const existingLanguageCookieValue = cookies[COOKIE_NAME];
    const disableCookieValue = cookies[COOKIE_NAME + "disabled"];

    if (!disableCookieValue) {
      setDisableCookieValue("1");
    }

    if (disableCookieValue === "1") {
      setDisableCookieValue("1");
    }

    if (disableCookieValue === "0") {
      setDisableCookieValue("0");
    }

    let languageValue;
    if (existingLanguageCookieValue) {
      const sp = existingLanguageCookieValue.split("/");
      if (sp.length > 2) {
        languageValue = sp[2];
      }
    }
    if (config && !languageValue) {
      languageValue = config.defaultLanguage;
    }
    if (languageValue) {
      setCurrentLanguage(languageValue);
    }

    if (config) {
      setLanguageConfig(config);
    }
  }, []);

  const switchLanguage = (lang: string) => () => {
    if (lang === "en") {
      setCookie(null, COOKIE_NAME, "/ru/en");
      setCookie(null, COOKIE_NAME + "disabled", "0");
      localStorage.setItem(COOKIE_NAME + "disabled", "0");
      window.location.reload();
      return;
    }

    if (lang === "ru") {
      setCookie(null, COOKIE_NAME, "/auto/" + lang);
      setCookie(null, COOKIE_NAME + "disabled", "1");
      localStorage.setItem(COOKIE_NAME + "disabled", "1");
      window.location.reload();
      return;
    }
  };

  const [modeVisually, setModeVisually] = useState("");

  useEffect(() => {
    const cookies = parseCookies();
    const value = cookies[MODE_VISUALLY_KEY_NAME];

    setModeVisually(value);
  }, []);

  const isModeEnabled = modeVisually === "1";

  const bgButton = !isModeEnabled ? "bg-[var(--color-green)]" : "bg-black text-white";


  if (!currentLanguage || !languageConfig) {
    return <Skeleton className="flex rounded-sm w-[50px] h-[26px]" />;
  }

  return (
    <div className="text-center notranslate w-[50px]">
      <div className="flex border-1 border-solid border-[#C9C9C9] cursor-pointer rounded-sm text-xs">
        <button
          onClick={switchLanguage("ru")}
          className={`p-1 transition-all ${disableCookieValue === "1" && bgButton
            }`}
        >
          <div className="opacity-70 font-medium">RU</div>
        </button>
        <button
          onClick={switchLanguage("en")}
          className={`p-1 transition-all ${currentLanguage === "en" && disableCookieValue === "0" && bgButton
            }`}
        >
          <div className="opacity-70 font-medium">EN</div>
        </button>
      </div>
    </div>
  );
};

export { LangSwitch, COOKIE_NAME };
