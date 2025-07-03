import api from "./services";

export const registerUser = async (formData) => {
  const res = await api.post("/auth/register", formData);
  return res.data;
};

export const loginUser = async (formData) => {
  const res = await api.post("/auth/login", formData);

  // Store token in localStorage
  if (res.data.token) {
    localStorage.setItem("token", res.data.token);
  }

  return res.data;
};

export const logoutUser = () => {
  localStorage.removeItem("token");
};
