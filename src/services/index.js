import { SERVER_URL } from "../config";
const fetchUrl = (url, data = null, method = "GET") => {
  const headers_no = {
    method,
  };
  if (method != "GET") {
    headers_no["headers"] = { "Content-Type": "application/json" };
    headers_no["body"] = JSON.stringify(data);
  }

  return fetch(`${SERVER_URL + url}`, headers_no)
    .then((res) => {
      return res.json();
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getPostData = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts");
};

export const doRegister = (data) => {
  const { username, password, address } = data;
  return fetch(`${SERVER_URL}/users/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
};

export const doLogin = (data) => {
  const { username, password } = data;
  return fetch(`${SERVER_URL}/users/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((res) => {
      return res.json();
    })
    .catch((error) => {
      console.log(error);
    });
};

export const blogData = () => {
  return fetchUrl(`/blogs`);
};
