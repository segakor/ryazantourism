"use client";
import "./style.css";
import Button from "@/components/elements/Button/Button";

export const News = () => {
  return (
    <section className="grid_layout">
      <div className="news_header">
        <div className="h2">
          {"Актуальная информация о происходящем в городе"}
        </div>
        <div>
          <Button name="все новости" onClick={() => console.log("allNews")} />
        </div>
      </div>
      <div className="news_body">
        <div className="news_card">
          <div className="h6 news_card_title">
            Музейный центр РИАМЗ приглашает на открытие выставки «Связь
            поколений»
          </div>
          <img className="news_card_arrows" src={"/news/arrows.svg"} alt="" />
          <div className="news_card_date">
            <div className="h3">24</div>
            <div className="h6">марта 2024</div>
          </div>
        </div>
        <div className="news_card">
          <div className="h6 news_card_title">
          В Рязани открылся новый отдел Рязанского историко-архитектурного музея-заповедника — Центр науки, традиций и искусства (ЦНТИ)
          </div>
          <img className="news_card_arrows" src={"/news/arrows.svg"} alt="" />
          <div className="news_card_date">
            <div className="h3">24</div>
            <div className="h6">марта 2024</div>
          </div>
        </div>
        <div className="news_card">
          <div className="h6 news_card_title">
          В Рязани открылся новый отдел Рязанского историко-архитектурного музея-заповедника — Центр науки, традиций и искусства (ЦНТИ)
          </div>
          <img className="news_card_arrows" src={"/news/arrows.svg"} alt="" />
          <div className="news_card_date">
            <div className="h3">24</div>
            <div className="h6">марта 2024</div>
          </div>
        </div>
        <div className="news_card">
          <div className="h6 news_card_title">
          В Рязани открылся новый отдел Рязанского историко-архитектурного музея-заповедника — Центр науки, традиций и искусства (ЦНТИ)
          </div>
          <img className="news_card_arrows" src={"/news/arrows.svg"} alt="" />
          <div className="news_card_date">
            <div className="h3">24</div>
            <div className="h6">марта 2024</div>
          </div>
        </div>
      </div>
      <svg height="0" width="0">
        <defs>
          <clipPath id="svgPathNewsCard" clipPathUnits="objectBoundingBox">
            <path
              d="M0.065,0 C0.029,0,0,0.021,0,0.048 V0.952 C0,0.979,0.029,1,0.065,1 H0.935 C0.971,1,1,0.979,1,0.952 V0.143 C1,0.117,0.971,0.095,0.935,0.095 H0.61 C0.575,0.095,0.545,0.074,0.545,0.048 V0.048 C0.545,0.021,0.516,0,0.481,0 H0.065"
              fill="black"
            ></path>
          </clipPath>
        </defs>
      </svg>
    </section>
  );
};
