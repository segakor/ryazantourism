function TranslateInit() {
  const key = localStorage.getItem("googtrans" + "disabled");
  if (key === "1") {
    return null;
  }

  if (!window.__GOOGLE_TRANSLATION_CONFIG__) {
    return;
  }
  new google.translate.TranslateElement({
    pageLanguage: window.__GOOGLE_TRANSLATION_CONFIG__.defaultLanguage,
  });
}
