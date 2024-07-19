import * as Url from "../Service/Url";
import * as Services from "../Service/service";

export const GetListOfBlogs = async (payload) => {
  let res = await Services.POST(Url.LIST_OF_Blog, payload);
  return res;
};

export const GetBlogByID = async (ID) => {
  let res = await Services.GET(Url.BLOG_BY_ID + ID);
  return res;
};

export const GetBlogBySeoURL = async (url) => {
  let res = await Services.GET(Url.BLOG_BY_SEO_URL + url);
  return res;
};

export const GetBlogCount = async (payload) => {
  let res = await Services.POST(Url.GET_BLOG_COUNT, payload);
  return res;
};
