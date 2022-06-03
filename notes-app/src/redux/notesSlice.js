import { createSlice, nanoid } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
  name: "notes",
  initialState: {
    items: [
      {
        id: nanoid(),
        title: "Note 1",
        note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras hendrerit finibus erat, sed dignissim est.",
        color: "bg-red-600",
      },
      {
        id: nanoid(),
        title: "Note 2",
        note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras hendrerit finibus erat, sed dignissim est.",
        color: "bg-violet-700",
      },
      {
        id: nanoid(),
        title: "Note 3",
        note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras hendrerit finibus erat, sed dignissim est.",
        color: "bg-emerald-400",
      },
      {
        id: nanoid(),
        title: "Note 4",
        note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras hendrerit finibus erat, sed dignissim est.",
        color: "bg-cyan-500",
      },
      {
        id: nanoid(),
        title: "Note 5",
        note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras hendrerit finibus erat, sed dignissim est.",
        color: "bg-orange-400",
      },
    ],
    filtered: "",
  },
  reducers: {
    addNewNote: (state, action) => {
      const item = { ...action.payload, id: nanoid() };
      state.items = [...state.items, item];
    },
    deleteNote: (state, action) => {
      const id = action.payload;
      const index = state.items.findIndex((item) => item.id === id);
      state.items.splice(index, 1);
    },
    filterNote: (state, action) => {
      state.filtered = action.payload;
    },
  },
});

export const { addNewNote, deleteNote, filterNote } = noteSlice.actions;
export default noteSlice.reducer;
