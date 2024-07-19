import axios from "axios";

export const GET = async (path, token) => {
  var headers;
  if (token) {
    headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
  } else {
    headers = {
      "Content-Type": "application/json",
    };
  }
  const Url = process.env.NEXT_PUBLIC_API_URL + path;
  try {
    const response = await axios.get(Url, {
      headers: headers,
    });
    return response;
  } catch (error) {
    if (error?.response?.status === 401) {
      const navEvent = new Event("Unauth");
      window.dispatchEvent(navEvent);
    }
    return error;
  }
};

export const POST = async (path, payload, token) => {
  var headers;
  if (token) {
    headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
  } else {
    headers = {
      "Content-Type": "application/json",
    };
  }

  const Url = process.env.NEXT_PUBLIC_API_URL + path;
  try {
    const response = await axios.post(Url, payload, {
      headers: headers,
    });
    return response;
  } catch (error) {
    if (error?.response?.status === 401) {
      const navEvent = new Event("Unauth");
      window.dispatchEvent(navEvent);
    }
    return error;
  }
};

export const PUT = async (path, payload, token) => {
  var headers;
  if (token) {
    headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
  } else {
    headers = {
      "Content-Type": "application/json",
    };
  }

  const Url = process.env.NEXT_PUBLIC_API_URL + path;
  try {
    const response = await axios.put(Url, payload, {
      headers: headers,
    });
    return response;
  } catch (error) {
    if (error?.response?.status === 401) {
      const navEvent = new Event("Unauth");
      window.dispatchEvent(navEvent);
    }
    return error;
  }
};

export const DELETE = async (path, payload, token) => {
  var headers;
  if (token) {
    headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
  } else {
    headers = {
      "Content-Type": "application/json",
    };
  }

  const Url = process.env.NEXT_PUBLIC_API_URL + path;
  try {
    const response = await axios.delete(
      Url,
      {
        headers: headers,
      },
      payload
    );
    return response;
  } catch (error) {
    if (error?.response?.status === 401) {
      const navEvent = new Event("Unauth");
      window.dispatchEvent(navEvent);
    }
    return error;
  }
};
