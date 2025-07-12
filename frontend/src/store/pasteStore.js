import { create } from "zustand";
import toast from "react-hot-toast";
import axios from "axios";

axios.defaults.withCredentials = true;

const backendUrl =
  import.meta.env.VITE_NODE_ENV === 'development'
    ? 'http://localhost:3000/api/pastes'
    : '/api/pastes'; 
    
export const usePasteStore = create((set) => ({
  pastes: [],
  isLoading: false,
  isCreating: false,
  isDeleting: false,

  create: async (title, content) => {
    set({ isCreating: true });
    try {
      const { data } = await axios.post(`${backendUrl}/`, { title, content });
      set({ isCreating: false });
      return data;
    } catch (err) {
      set({ isCreating: false });
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
    set({ isDeleting: true });
    try {
      const { data } = await axios.delete(`${backendUrl}/${pasteId}`);
      set({ isDeleting: false });
      return data;
    } catch (err) {
      set({ isDeleting: false });
      toast.error(err.response.data.message || err.message);
      throw err;
    }
  },

  update: async (pasteId, title, content) => {
    set({ isCreating: true });
    try {
      const { data } = await axios.put(`${backendUrl}/${pasteId}`, {
        title,
        content,
      });
      set({ isCreating: false });
      return data;
      
    } catch (err) {
      set({ isCreating: false });
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
  },
}));
