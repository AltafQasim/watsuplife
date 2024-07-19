import * as Url from "../Service/Url";
import * as Services from "../Service/service";

export const GetListOfPlace = async (payload) => {
  let res = await Services.POST(Url.LIST_OF_Place, payload);
  return res;
};

export const GetPlaceByID = async (ID) => {
  let res = await Services.GET(Url.PLACE_BY_ID + ID);
  return res;
};

export const GetPlaceCount = async (payload) => {
  let res = await Services.POST(Url.GET_PLACE_COUNT, payload);
  return res;
};
