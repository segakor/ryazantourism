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
const currentDate = now.toLocaleString().slice(0, 10);
const nextYearDate = new Date(now.setFullYear(now.getFullYear() + 1))
  .toLocaleString()
  .slice(0, 10);

export const API_URL_CALENDAR = `https://api.tr.plenexy.digital/api/event_dates?event_date_from=${currentDate}&event_date_to=${nextYearDate}`;

export const API_URL_CALENDAR_DETAIL = `
https://api.tr.plenexy.digital/api/events?page=1&limit=10&with=category,tags&event_date=$date_raplace`;

export const API_URL_NOVOSTI_REGION = '/api-v2/newsRegion'
export const API_URL_NOVOSTI_ART = '/api-v2/newsArt'