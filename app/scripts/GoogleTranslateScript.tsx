import Script from "next/script";
import { cookies } from "next/headers";

export const GoogleTranslateScript = () => {
  const COOKIE_NAME = "googtrans";

  const cookieStore = cookies();
  const cookieStoreArr = cookieStore.getAll().map((cookie) => {
    return { name: cookie.name, value: cookie.value };
  });

  if (cookieStoreArr.find((item) => item.name === COOKIE_NAME + 'disabled')?.value === '1') {
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
