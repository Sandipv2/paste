import { create } from "zustand";
import toast from "react-hot-toast";
import axios from "axios";

axios.defaults.withCredentials = true;

const backendUrl = import.meta.env.VITE_BACKEND_URL + "/api/pastes";

export const usePasteStore = create((set) => ({
  pastes: [],
  isLoading: false,

  create: async (title, content) => {
    set({ isLoading: true });
    try {
      const {data} = await axios.post(`${backendUrl}/`, { title, content });
      set({ isLoading: false });
      return data;
    } catch (err) {
      set({ isLoading: false });
      toast.error(err.response.data.message || err.message);
      throw err;
    }
  },

  getAllPastes: async () => {
    set({ isLoading: true });
    try {
      const { data } = await axios.get(`${backendUrl}/`);
      set({ isLoading: false, pastes: data.data });
      return data;
    } catch (err) {
      set({ isLoading: false });
      toast.error(err.response.data.message || err.message);
      throw err;
    }
  },

  remove: async (pasteId) => {
    set({ isLoading: true });
    try {
      const { data } = await axios.delete(`${backendUrl}/${pasteId}`);
      set({ isLoading: false });
      return data;
    } catch (err) {
      set({ isLoading: false });
      toast.error(err.response.data.message || err.message);
      throw err;
    }
  },

  getPaste: async (pasteId) => {
    set({ isLoading: true });
    try {
      const { data } = await axios.get(`${backendUrl}/${pasteId}`);
      set({ isLoading: false });
      return data;
    } catch (err) {
      set({ isLoading: false });
      throw err;
    }
  }
}));
