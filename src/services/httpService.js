import axios from "axios";

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    console.log("An unexpected error occurrred.");
    console.log(error);
  } else if (
    error.response.status === 401 &&
    error.response.statusText === "Unauthorized"
  ) {
    console.log(`httpService - 401`);
    console.log(`error response status: `, error.response.status);
    console.log(`error response statusText: `, error.response.statusText);
  }
  return Promise.reject(error);
});

function setToken(token = null) {
  if (token !== null) {
    // console.log(`set idToken: `, token);
    axios.defaults.headers.common["accesstoken"] = token;
  }
}

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete,
  setToken,
};
