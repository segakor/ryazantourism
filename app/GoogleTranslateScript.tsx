import Script from "next/script";

export const GoogleTranslateScript = () => {

  const initialState = {
    googtrans: typeof window !== "undefined" ? window.localStorage.getItem('googtrans') : false,
  };

  if (initialState.googtrans === "ru") {
    return null;
  }

  return (
    <>
      <Script
        src="/assets/scripts/lang-config.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/assets/scripts/translation.js"
        strategy="beforeInteractive"
      />
      <Script
        src="//translate.google.com/translate_a/element.js?cb=TranslateInit"
        strategy="afterInteractive"
      />
    </>
  );
};
