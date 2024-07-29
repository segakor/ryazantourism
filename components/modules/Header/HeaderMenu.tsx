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
    <div className={!isAdaptive ? "group-hover/item:opacity-100 opacity-0 absolute bg-white shadow-2xl top-[calc(100%)] transition-all p-[1.875rem] rounded-[0.875rem] pointer-events-none cursor-default group-hover/item:pointer-events-auto" : "submenu_item"}>
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
