import { useEffect, useState } from "react";
import { parseCookies, setCookie } from "nookies";

const COOKIE_NAME = "googtrans";

interface LanguageDescriptor {
  name: string;
  title: string;
}

declare global {
  namespace globalThis {
    var __GOOGLE_TRANSLATION_CONFIG__: {
      languages: LanguageDescriptor[];
      defaultLanguage: string;
    };
  }
}

const LangSwitch = () => {
  const [currentLanguage, setCurrentLanguage] = useState<string>();
  const [languageConfig, setLanguageConfig] = useState<any>();

  useEffect(() => {
    const cookies = parseCookies();
    console.log(cookies)
    const existingLanguageCookieValue = cookies[COOKIE_NAME];

    let languageValue;
    if (existingLanguageCookieValue) {
      const sp = existingLanguageCookieValue.split("/");
      if (sp.length > 2) {
        languageValue = sp[2];
      }
    }
    if (global.__GOOGLE_TRANSLATION_CONFIG__ && !languageValue) {
      languageValue = global.__GOOGLE_TRANSLATION_CONFIG__.defaultLanguage;
    }
    if (languageValue) {
      setCurrentLanguage(languageValue);
    }
    if (global.__GOOGLE_TRANSLATION_CONFIG__) {
      setLanguageConfig(global.__GOOGLE_TRANSLATION_CONFIG__);
    }
  }, []);

  if (!currentLanguage || !languageConfig) {
    return null;
  }

  const switchLanguage = (lang: string) => () => {
    setCookie(null, COOKIE_NAME, "/auto/" + lang);
    window.location.reload();
  };

  return (
    <div className="text-center notranslate">
      <div className="flex border-1 border-solid border-[#C9C9C9] cursor-pointer rounded-sm text-xs">
       {languageConfig?.languages.map((ld: LanguageDescriptor, i: number) => (
        <>
          {currentLanguage === ld.name ||
          (currentLanguage === "auto" &&
            languageConfig.defaultLanguage === ld) ? (
            <div key={`l_s_${ld}`} className="p-1 bg-[var(--color-green)] transition-all">
              {ld.title.toUpperCase()}
            </div>
          ) : (
            <div
              key={`l_s_${ld}`}
              onClick={switchLanguage(ld.name)}
              className="p-1 transition-all"
            >
              {ld.title.toUpperCase()}
            </div>
          )}
        </>
      ))}
      </div>
     {/*  <div className="flex border-1 border-solid border-[#C9C9C9] cursor-pointer rounded-sm">
        <div className={`${languageConfig.defaultLanguage === ld && 'bg-[var(--color-green)]'} transition-all p-1` }>RU</div>
        <div className="bg-[var(--color-green)] transition-all p-1">EN</div>
      </div> */}
    </div>
  );
};

export { LangSwitch, COOKIE_NAME };
