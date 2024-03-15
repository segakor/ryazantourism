import { headerMenu } from "@/constants/contstants";
import { HeaderMenu } from "./HeaderMenu";

export const HeaderNav = () => {
  return (
    <nav>
      <ul className="header_nav">
        {headerMenu.map((item, index) => (
          <li className="menu_item" key={index}>
            <span className="menu_link">{item.item}</span>
            {!!item.subItem.length && (
              <div className="chevron">
                <svg
                  width="10"
                  height="5"
                  viewBox="0 0 10 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 5L0.669872 0.500001L9.33013 0.5L5 5Z"
                    fill="#141414"
                  ></path>
                </svg>
              </div>
            )}
            <HeaderMenu subItem={item.subItem} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
