"use client";
import { useState } from "react";
import "./style.css";

const hero = [
  {
    title: "История",
    desc: "Тысячелетнее путешествие во времени: громкие имена, интересные факты, невероятные сюжеты",
  },
  { title: "Культура", desc: "Культура" },
  { title: "Природа", desc: "Культура" },
  { title: "Кухня рязанского края", desc: "Культура" },
  { title: "Архитектура", desc: "Культура" },
];


export const Hero = () => {


  return (
    <div className="hero_wrapper">
      <img className="hero_image" src="/hero/hero1.jpg" alt="" />
      <div className="hero_inner">
        <div className="hero_inner_body">
          <h3>asdsad</h3>
          <p>ytyty</p>
        </div>
      </div>
    </div>
  );
};
