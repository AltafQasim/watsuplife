import * as Url from "../Service/Url";
import * as Services from "../Service/service";

export const GetListOfAds = async (payload) => {
  let res = await Services.POST(Url.LIST_OF_ADS, payload);
  return res;
};
