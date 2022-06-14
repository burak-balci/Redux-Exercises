import { createSlice } from "@reduxjs/toolkit";

export const memoryGameSlice = createSlice({
  name: "framework",
  initialState: {
    point: 100,
    frameworks: [
      {
        id: 1,
        name: "angular2",
        visible: false,
      },
      {
        id: 2,
        name: "vue",
        visible: false,
      },
      {
        id: 3,
        name: "react",
        visible: false,
      },
      {
        id: 4,
        name: "phantomjs",
        visible: false,
      },
      {
        id: 5,
        name: "ember",
        visible: false,
      },
      {
        id: 6,
        name: "meteor",
        visible: false,
      },
      {
        id: 7,
        name: "ionic",
        visible: false,
      },
      {
        id: 8,
        name: "nodejs",
        visible: false,
      },
      {
        id: 9,
        name: "yarn",
        visible: false,
      },
      {
        id: 10,
        name: "babel",
        visible: false,
      },
      {
        id: 11,
        name: "angular2",
        visible: false,
      },
      {
        id: 12,
        name: "vue",
        visible: false,
      },
      {
        id: 13,
        name: "react",
        visible: false,
      },
      {
        id: 14,
        name: "phantomjs",
        visible: false,
      },
      {
        id: 15,
        name: "ember",
        visible: false,
      },
      {
        id: 16,
        name: "meteor",
        visible: false,
      },
      {
        id: 17,
        name: "ionic",
        visible: false,
      },
      {
        id: 18,
        name: "nodejs",
        visible: false,
      },
      {
        id: 19,
        name: "yarn",
        visible: false,
      },
      {
        id: 20,
        name: "babel",
        visible: false,
      },
    ],
    selectedFrameworks: [],
    openedFrameworks: [],
  },
  reducers: {
    setVisible: (state, action) => {
      const { id } = action.payload;
      const item = state.frameworks.find((a) => a.id === id);
      item.visible = true;
    },
    shuffle: (state) => {
      for (let i = state.frameworks.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [state.frameworks[i], state.frameworks[j]] = [
          state.frameworks[j],
          state.frameworks[i],
        ];
      }
    },
    setUnvisible: (state) => {
      for (let i = 0; i < state.frameworks.length; i++) {
        state.frameworks[i].visible = false;
      }
    },
    addSelectedFrameworks: (state, action) => {
      state.selectedFrameworks = [...state.selectedFrameworks, action.payload];
    },
    resetPoint: (state) => {
      state.point = 100;
    },
    compareFrameworks: (state) => {
      if (state.selectedFrameworks.length === 2) {
        let first = state.selectedFrameworks[0].id;
        let second = state.selectedFrameworks[1].id;

        if (
          state.selectedFrameworks[0].name === state.selectedFrameworks[1].name
        ) {
          state.point += 50;
          state.openedFrameworks.push(state.selectedFrameworks);
        } else {
          for (let i = 0; i < state.frameworks.length; i++) {
            if (
              state.frameworks[i].id === first ||
              state.frameworks[i].id === second
            ) {
              state.frameworks[i].visible = false;
            }
          }
          state.point -= 10;
        }

        state.selectedFrameworks = [];
      }
    },
  },
});

export default memoryGameSlice.reducer;
export const {
  setVisible,
  shuffle,
  setUnvisible,
  addSelectedFrameworks,
  compareFrameworks,
  resetPoint,
} = memoryGameSlice.actions;
