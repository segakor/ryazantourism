import Script from "next/script";
export const GoogleTranslateScript = () => {
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
