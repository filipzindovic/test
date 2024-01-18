import axios from "axios";

const makeUrl = (url) => `${process.env.VUE_APP_API_ENDPOINT_URL}/${url}`;

const defaultHeaders = {
  accept: "application/json",
  Authorization: `Bearer ${process.env.VUE_APP_API_AUTH_KEY}`,
};

const makeRequest = async ({
  method = "GET",
  url = "",
  data = null,
  headers = defaultHeaders,
  params = null,
  responseType = null,
}) => {
  try {
    const response = await axios({
      method,
      url: makeUrl(url),
      data,
      headers,
      params,
      responseType,
    });

    return response;
  } catch (error) {
    throw error;
  }
};

export { makeRequest };
