import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyItem, sellItem } from "../redux/itemsSlice";

function Card({ item }) {
  const dispatch = useDispatch();

  const [piece, setPiece] = useState(item.piece);
  const money = useSelector((state) => state.items.money);
  const initialMoney = useSelector((state) => state.items.initialMoney);

  const sell = () => {
    if (
      item.piece > 0 &&
      piece * item.price <= initialMoney - money &&
      item.piece >= piece
    ) {
      dispatch(
        sellItem({ id: item.id, piece: piece === 0 ? 1 : Number(piece) })
      );
    } else {
      return window.alert("Insufficient Item");
    }
    setPiece(0);
  };

  const buy = () => {
    if (piece * item.price > money) {
      return window.alert("Insufficient Balance");
    }
    dispatch(buyItem({ id: item.id, piece: piece === 0 ? 1 : Number(piece) }));
    setPiece(0);
  };

  return (
    <div className="flex rounded-md bg-white flex-col items-center justify-center">
      <div className="flex items-center flex-col">
        <img className="p-4 h-52" src={item.image} alt={item.title} />
        <h2 className="font-bold">{item.title}</h2>
        <h2 className="text-emerald-500 font-bold">
          ${Number(item.price).toLocaleString()}
        </h2>
      </div>
      <div className="block justify-center items-center p-1 mt-5 px-5 py-2 ">
        <button
          disabled={!item.piece}
          onClick={() => sell()}
          className="border h-auto bg-gray-300 w-24 m-1 border-gray-400 rounded-sm p-1"
        >
          Sell
        </button>
        <input
          onChange={(e) => {
            setPiece(e.target.value);
          }}
          value={piece}
          type="number"
          className="border text-center w-20 p-1 border-gray-300 rounded-sm outline-0"
        />
        <button
          onClick={() => buy()}
          className="border h-auto bg-emerald-400 w-24 m-1 border-emerald-500 p-1 rounded-sm"
        >
          Buy
        </button>
      </div>
    </div>
  );
}

export default Card;
