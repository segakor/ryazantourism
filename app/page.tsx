import { LangSwitch } from "@/components/elements/LangSwitch/LangSwitch";
import { EventMainCard } from "@/components/modules/EventCard/EventMainCard";
import { HeroMain } from "@/components/modules/HeroMain";
import { MainBannerRoutes } from "@/components/modules/MainBannerRoutes";
import { MainNavigation } from "@/components/modules/MainNavigation";
import { News } from "@/components/modules/News";

import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Всё о туризме в Рязани и Рязанской области",
  description:
    "Собрали для вас только лучшие места, которые помогут вам насладиться Рязанью. Вы можете исследовать Рязань как самостоятельно, так и с помощью наших опытных экскурсоводов!",
};

const Main = () => {
  return (
    <main>
      <Script
        src="/assets/scripts/lang-config.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/assets/scripts/translation.js"
        strategy="beforeInteractive"
      />
      <Script
        src="//translate.google.com/translate_a/element.js?cb=TranslateInit"
        strategy="afterInteractive"
      />
      <HeroMain />
      <div className="grid_layout">
        <MainNavigation />
        <MainBannerRoutes />
        <EventMainCard />
        <News type="city" />
      </div>
    </main>
  );
};

export default Main;
