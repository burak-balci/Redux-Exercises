import { createSlice, nanoid } from "@reduxjs/toolkit";
import {
  airpods,
  bigMac,
  bike,
  colaPack,
  drone,
  horse,
  f1,
} from "../images/images";

export const itemSlice = createSlice({
  name: "items",
  initialState: {
    items: [
      {
        id: nanoid(),
        title: "Airpods",
        price: "6000",
        image: `${airpods}`,
        piece: 0,
      },
      {
        id: nanoid(),
        title: "Big Mac",
        price: "35",
        image: `${bigMac}`,
        piece: 0,
      },
      {
        id: nanoid(),
        title: "Bike",
        price: "4500",
        image: `${bike}`,
        piece: 0,
      },
      {
        id: nanoid(),
        title: "Coca Cola Pack",
        price: "50",
        image: `${colaPack}`,
        piece: 0,
      },
      {
        id: nanoid(),
        title: "Drone",
        price: "10000",
        image: `${drone}`,
        piece: 0,
      },
      {
        id: nanoid(),
        title: "Formula 1 Car",
        price: "15000000",
        image: `${f1}`,
        piece: 0,
      },
      {
        id: nanoid(),
        title: "Horse",
        price: "10000000",
        image: `${horse}`,
        piece: 0,
      },
    ],
    initialMoney: 100000000000,
    money: 100000000000,
    purchasedItems: [],
    piece: 0,
  },
  reducers: {
    buyItem: (state, action) => {
      const { id, piece } = action.payload;
      const item = state.items.find((a) => a.id === id);
      item.piece += piece;
      state.piece = piece;
      state.money -= Number(item.price) * Number(state.piece);
    },
    sellItem: (state, action) => {
      const { id, piece } = action.payload;
      const item = state.items.find((a) => a.id === id);
      state.piece = piece;
      state.money += Number(item.price) * Number(state.piece);
      item.piece -= state.piece;
    },
    deleteItem: (state, action) => {
      const { id } = action.payload;
      const item = state.items.find((a) => a.id === id);
      state.money += item.price * Number(item.piece);
      item.piece -= item.piece;
    },
  },
});

export const { buyItem, sellItem, deleteItem } = itemSlice.actions;
export default itemSlice.reducer;
