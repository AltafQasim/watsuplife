import * as Url from "../Service/Url";
import * as Services from "../Service/service";

export const GetListOfPredefinedData = async (payload) => {
  let res = await Services.POST(Url.LIST_OF_PREDEFINED, payload);
  return res;
};
