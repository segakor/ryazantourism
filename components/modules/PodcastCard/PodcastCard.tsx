import { data } from "@/constants/pages/marshruty/samostoyatelnye-marshruty/podcast";
import "./style.css";
import { Typography } from "@/components/elements/Typography/Typography";

export const PodcastCard = () => {
  return (
    <div className="podcast_card_group">
      {data.map((item, index) => (
        <PodcastCardItem {...item} key={index} />
      ))}
      <a
        className="podcast_card_link_all"
        href="https://izi.travel/ru/ac86-turistskiy-informacionnyy-centr-ryazanskoy-oblasti/ru"
        target="_blank"
      >
        Смотреть все аудиогиды по Рязани
      </a>
    </div>
  );
};

const PodcastCardItem = ({
  title,
  desc,
  link,
}: {
  title: string;
  desc: string;
  link: string;
}) => {
  return (
    <div className="podcast_card_item">
      <div className="podcast_card_item_body">
        <Typography variant="h5"className="font-semibold" >{title}</Typography>
        <p>{desc}</p>
        <div>
          <a className="podcast_card_link" href={link} target="_blank">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 7H7V17H5V7ZM1 10H3V14H1V10ZM9 2H11V20H9V2ZM13 4H15V22H13V4ZM17 7H19V17H17V7ZM21 10H23V14H21V10Z"
                fill="#252525"
              ></path>
            </svg>
            <span>Перейти к прослушиванию</span>
          </a>
        </div>
      </div>
    </div>
  );
};
