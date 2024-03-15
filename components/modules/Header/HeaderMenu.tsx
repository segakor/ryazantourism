type Props = {
  subItem: { label: string; path: string }[];
};
export const HeaderMenu = ({ subItem }: Props) => {
  if (!subItem.length) {
    return null;
  }

  return (
    <div className="menu hover">
      <ul>
        {subItem.map((item, index) => (
          <li className="menu_subitem" key={index}>
            <a className="subitem_link">{item.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
