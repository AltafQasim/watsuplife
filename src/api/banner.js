import * as Url from "../Service/Url";
import * as Services from "../Service/service";

export const GetListOfSubBanner = async (payload) => {
  let res = await Services.POST(Url.LIST_OF_SUB_BANNER, payload);
  return res;
};
