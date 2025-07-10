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
      toast.success("OTP sent to your mail");
      return data;
    } catch (err) {
      set({ isLoading: false });
      toast.error(err.response?.data?.message || err.message);
      throw err;
    }
  },

  verifyEmail: async (otp) => {
    set({ isLoading: true });
    try {
      const { data } = await axios.post(`${backendUrl}/verify-email`, { otp });
      set({ user: data.user, isLoggedIn: true, isLoading: false });

      toast.success("Email verified");
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
      set({ isLoading: false });
      toast.error(err.response?.data?.message || err.message);
      throw err;
    }
  },

  forgotPassword: async (email) => {
    set({ isLoading: true });
    try {
      const { data } = await axios.post(`${backendUrl}/forgot-password`, {
        email,
      });

      set({ isLoading: false });
      toast.success("Reset link sent to your mail");
      return data;
    } catch (err) {
      set({ isLoading: false });
      toast.error(err.response?.data?.message || err.message);
      throw err;
    }
  },

  resetPassword: async (token, password) => {
    set({ isLoading: true });
    try {
      const { data } = await axios.post(
        `${backendUrl}/reset-password/${token}`,
        { password }
      );

      set({ isLoading: false });
      toast.success("Password reset success");
      return data;
    } catch (err) {
      set({ isLoading: false });
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
