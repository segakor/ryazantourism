const IDEI_DLYA_PUTECHESTV =
  "https://api.tr.plenexy.digital/api/sights?page=1&limit=100&with=category,tags&category_id=";

export const API_URL = {
  CHEM_ZANYATSYA: IDEI_DLYA_PUTECHESTV + "7",
  GDE_POEST: IDEI_DLYA_PUTECHESTV + "12",
  GDE_OSTANOVYTSYA: IDEI_DLYA_PUTECHESTV + "16",
  VECHER_V_GORODE: IDEI_DLYA_PUTECHESTV + "26",
  ZDOROVE: IDEI_DLYA_PUTECHESTV + "21",
  SUVENIRY: IDEI_DLYA_PUTECHESTV + "30",
};

const now = new Date();
const currentDate = now.toLocaleDateString("ru");
const nextYearDate = new Date(
  now.setFullYear(now.getFullYear() + 1)
).toLocaleDateString("ru");

export const API_URL_CALENDAR = `https://api.tr.plenexy.digital/api/event_dates?event_date_from=${currentDate}&event_date_to=${nextYearDate}`;

export const API_URL_CALENDAR_DETAIL = `
https://api.tr.plenexy.digital/api/events?page=1&limit=10&with=category,tags&event_date=$date_raplace`;

export const URL = "https://ryazantourism.ru";
/* export const URL = "http://localhost:5001"; */

export const API_URL_NOVOSTI_REGION = URL + "/api-v2/newsRegion";
export const API_URL_NOVOSTI_ART = URL + "/api-v2/newsArt";
export const API_URL_CHTO_POSMOTRET = URL + "/api-v2/chtoposmotret";
export const API_URL_ORG_MARSH = URL + "/api-v2/organizovannyeMarshruty";
export const API_URL_SAM_MARSH = URL + "/api-v2/samostoyatelnyeMarshruty";
export const API_URL_ANSWER = URL + "/api-v2/answer";
export const API_URL_LONGREAD = URL + "/api-v2/longread";
export const API_URL_BANNER = URL + "/api-v2/banner";
export const API_URL_GID = URL + "/api-v2/gid";
export const API_URL_POCHITAT = URL + "/api-v2/biblioteka/pochitat";
export const API_URL_POSLUSHAT = URL + "/api-v2/biblioteka/poslushat";
export const API_URL_POSMOTRET = URL + "/api-v2/biblioteka/posmotret";
export const API_URL_PROMTURIZM = URL + "/api-v2/promturizm";
