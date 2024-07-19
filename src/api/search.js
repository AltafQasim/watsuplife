import * as Url from "../Service/Url";
import * as Services from "../Service/service";

export const GetCombinedCityData = async (payload) => {
  let res = await Services.POST(Url.COMBINED_CITY_DATA, payload);
  return res;
};

export const Search = async (payload) => {
  let res = await Services.POST(Url.SEARCH, payload);
  return res;
};
