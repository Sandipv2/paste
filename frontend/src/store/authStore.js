import { create } from "zustand";
import axios from "axios";
import toast from "react-hot-toast";

const backendUrl = import.meta.env.VITE_BACKEND_URL + "/api/auth";

axios.defaults.withCredentials = true;

export const useAuthStore = create((set) => ({
  user: null,
  isLoggedIn: false,
  isLoading: false,

  signup: async (name, email, password) => {
    set({ isLoading: true });
    try {
      const { data } = await axios.post(`${backendUrl}/register`, {
        name,
        email,
        password,
      });
      set({
        user: data.user,
        isLoggedIn: true,
        isLoading: false,
      });
      return data;
    } catch (err) {
      set({ isLoading: false });
      toast.error(err.response?.data?.message || err.message);
      throw err;
    }
  },

  login: async (email, password) => {
    set({ isLoading: true });
    try {
      const { data } = await axios.post(`${backendUrl}/login`, {
        email,
        password,
      });

      set({
        isLoading: false,
        user: data.user,
        isLoggedIn: true,
      });
      return data;
    } catch (err) {
      set({
        isLoading: false,
        isLoggedIn: false,
      });
      toast.error(err.response?.data?.message || err.message);
      throw err;
    }
  },

  logout: async () => {
    set({ isLoading: true });
    try {
      const { data } = await axios.post(`${backendUrl}/logout`);
      set({ isLoading: false, user: null, isLoggedIn: false });
      return data;
    } catch (err) {
      toast.error(err.response?.data?.message || err.message);
      throw err;
    }
  },

  checkAuth: async () => {
    set({ isLoading: true });
    try {
      const { data } = await axios.get(`${backendUrl}/check-auth`);
      set({
        isLoading: false,
        user: data.user,
        isLoggedIn: true,
      });
      return data;
    } catch (err) {
      set({
        isLoading: false,
        user: null,
        isLoggedIn: false,
      });
      return null;
    }
  },
}));
