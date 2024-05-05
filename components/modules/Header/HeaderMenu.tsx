import Link from "next/link";

type Props = {
  subItem: { label: string; path: string }[];
  isAdaptive?: boolean;
};
export const HeaderMenu = ({ subItem, isAdaptive }: Props) => {
  if (!subItem.length) {
    return null;
  }

  return (
    <div className={!isAdaptive ? "menu hover" : "submenu_item"}>
      <ul>
        {subItem.map((item, index) => (
          <li className="menu_subitem" key={index}>
            <Link className="subitem_link" href={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
