export const scrollIntoView = (h3String?: string) => {
  const elements = document.querySelectorAll('h3');
  let foundElement = null;

  elements.forEach(element => {
    //@ts-ignore
    if (element?.textContent?.trim() === h3String) {
      foundElement = element;
    }
  });

  if (foundElement) {
    //@ts-ignore
    foundElement?.scrollIntoView({ behavior: 'smooth', block: "center" });
  }
};