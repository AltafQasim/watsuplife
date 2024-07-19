import * as Url from "../Service/Url";
import * as Services from "../Service/service";

export const GetListOfEvents = async (payload) => {
  let res = await Services.POST(Url.LIST_OF_EVENTS, payload);
  return res;
};

export const GetEventsCount = async (payload) => {
  let res = await Services.POST(Url.GET_EVENTS_COUNT, payload);
  return res;
};
