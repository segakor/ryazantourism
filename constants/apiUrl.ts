const BASE_URL =
  "https://api.tr.plenexy.digital/api/sights?page=1&limit=100&with=category,tags&category_id=";

export const API_URL = {
  CHEM_ZANYATSYA: BASE_URL + "7",
  GDE_POEST: BASE_URL + "12",
  GDE_OSTANOVYTSYA: BASE_URL + "16",
  VECHER_V_GORODE: BASE_URL + "26",
  ZDOROVE: BASE_URL + "21",
  SUVENIRY: BASE_URL + "30",
};

export const API_URL_SINGLY_ROUTES =
  "https://api.tr.plenexy.digital/api/routes?page=1&limit=10&with=category";

export const API_URL_DETAILS_SINGLY_ROUTES =
  "https://api.tr.plenexy.digital/api/routes";

const now = new Date();
const currentDate = now.toLocaleString().slice(0, 10);
const nextYearDate = new Date(now.setFullYear(now.getFullYear() + 1))
  .toLocaleString()
  .slice(0, 10);

export const API_URL_CALENDAR = `https://api.tr.plenexy.digital/api/event_dates?event_date_from=${currentDate}&event_date_to=${nextYearDate}`;

export const API_URL_CALENDAR_DETAIL = `
https://api.tr.plenexy.digital/api/events?page=1&limit=10&with=category,tags&event_date=$date_raplace`;
