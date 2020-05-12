import http from "./httpService";

const apiEndpoint = "/users";

export function register(user) {
  const { username, name, password } = user;
  return http.post(apiEndpoint, {
    email: username,
    name: name,
    password: password,
  });
}
