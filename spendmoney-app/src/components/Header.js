import React from "react";
import { useSelector } from "react-redux";
import billGates from "../images/bill-gates.jpg";

function Header() {
  const money = useSelector((state) => state.items.money);

  return (
    <div className="flex flex-col items-center grow mb-2">
      <div className="flex items-center border-1 p-3 mt-3 flex-col w-full rounded-t-lg bg-slate-100">
        <img
          className="rounded-full w-64 h-64"
          src={billGates}
          alt="billGates"
        />
        <h1 className="flex mt-2 font-bold">Spend Bill Gates's Money</h1>
      </div>
      <div className="flex w-full bg-emerald-400 justify-center p-3 font-bold text-white rounded-b-lg border-1 border-emerald-500">
        {money.toLocaleString()}
      </div>
    </div>
  );
}

export default Header;
