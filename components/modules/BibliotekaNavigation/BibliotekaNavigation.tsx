import Link from "next/link";

const GoToIcon = (
  <div className="md:w-20 md:h-20 bg-white flex justify-center rounded-full items-center group-hover/item:bg-[var(--color-green)] transition-all">
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="20" cy="20" r="20" />
      <path
        d="M25.5303 20.5303C25.8232 20.2374 25.8232 19.7626 25.5303 19.4697L20.7574 14.6967C20.4645 14.4038 19.9896 14.4038 19.6967 14.6967C19.4038 14.9896 19.4038 15.4645 19.6967 15.7574L23.9393 20L19.6967 24.2426C19.4038 24.5355 19.4038 25.0104 19.6967 25.3033C19.9896 25.5962 20.4645 25.5962 20.7574 25.3033L25.5303 20.5303ZM15 20.75H25V19.25H15V20.75Z"
        fill="black"
      />
    </svg>
  </div>
);

//TODO: не дает замапить item т.к. ругается на bg-[url()]

export const BibliotekaNavigation = () => {
  return (
    <section className="grid_layout">
      <div className="md:grid-cols-2 grid-cols-1 grid gap-7 color text-white md:my-40 my-20">
        {/* item */}
        <Link
          href="/posmotret"
          className="group/item cursor-pointer flex md:h-[510px] h-96 rounded-[40px] border-solid border-2 p-[40px] color-white bg-cover bg-[url('/bibliotekaNavigation/1.png')]"
        >
          <div className="flex flex-col justify-end">
            <div className="flex justify-between items-center">
              <div className="max-w-[360px]">
                <h3 className="h3 mb-5">Посмотреть</h3>
                <p className="text2">
                  В Рязань любят приезжать блогеры и журналисты. Смотрите, зачем
                </p>
              </div>
              {GoToIcon}
            </div>
          </div>
        </Link>
        {/* item */}
        <Link
          href="/pochitat"
          className="group/item cursor-pointer flex md:h-[510px] h-96 rounded-[40px] border-solid border-2 p-[40px] color-white bg-cover bg-[url('/bibliotekaNavigation/2.png')]"
        >
          <div className="flex-col justify-start">
            <div className="flex justify-between items-center">
              <div className="max-w-[360px]">
                <h3 className="h3 mb-5">Почитать</h3>
                <p className="text2">
                  Что нужно узнать о Рязани и области, прежде чем собраться в
                  гости
                </p>
              </div>
              {GoToIcon}
            </div>
          </div>
        </Link>
        {/* item */}
        <Link
          href="/poslushat"
          className="group/item cursor-pointer flex md:h-[510px] h-96 rounded-[40px] border-solid border-2 p-[40px] color-white bg-cover bg-[url('/bibliotekaNavigation/3.png')]"
        >
          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <div className="max-w-[360px]">
                <h3 className="h3 mb-5">Послушать</h3>
                <p className="text2">
                  Для тех, кто любит ушами: аудиогиды, подкасты и личные истории
                </p>
              </div>
              {GoToIcon}
            </div>
          </div>
        </Link>
        {/* item */}
        <Link
          href="/vdohnovitsiya"
          className="group/item cursor-pointer flex md:h-[510px] h-96 rounded-[40px] border-solid border-2 p-[40px] color-white bg-cover bg-[url('/bibliotekaNavigation/4.png')]"
        >
          <div className="flex flex-col justify-end">
            <div className="flex justify-between items-center">
              <div className="max-w-[360px]">
                <h3 className="h3 mb-5">Вдохновиться</h3>
                <p className="text2">
                  Эти снимки могли стать еще лучше, если бы на них оказались вы
                </p>
              </div>
              {GoToIcon}
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};
