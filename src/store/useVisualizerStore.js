import { create } from "zustand";

const useVisualizerStore = create((set) => ({
  entered: false,

  uploadedData: null,
  uploadedText: "",

  enterObservatory: () =>
    set({
      entered: true,
    }),

  setUploadedData: (data) =>
    set({
      uploadedData: data,
    }),

  setUploadedText: (text) =>
    set({
      uploadedText: text,
    }),
}));

export default useVisualizerStore;