import { parse } from 'node-html-parser';

export const createSidebarItem = (htmlString: string) => {
  const root = parse(htmlString);

  const h3s = root.querySelectorAll('h3');

  const sideBarItem = Array.from(h3s).map(h3 => h3.textContent);

  return sideBarItem
}