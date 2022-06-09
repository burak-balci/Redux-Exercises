import { useSelector, useDispatch } from "react-redux";
import { deleteItem } from "../redux/itemsSlice";

function Total() {
  const items = useSelector((state) => state.items.items);
  const money = useSelector((state) => state.items.money);
  const initialMoney = useSelector((state) => state.items.initialMoney);

  const dispatch = useDispatch();

  return (
    <div className="my-2 flex items-center border-1 p-3 flex-col w-full rounded-lg bg-slate-100">
      <h1 className="font-bold">Your Receipt</h1>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="border-b">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Items
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Piece
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Price
                    </th>
                  </tr>
                </thead>

                {items.map((item, i) =>
                  item.piece > 0 ? (
                    <tbody key={i}>
                      <tr className="border-b">
                        <td className="text-sm font-bold text-gray-900 px-6 py-4 whitespace-nowrap">
                          {item.title}
                        </td>
                        <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                          {item.piece.toLocaleString()}
                        </td>
                        <td className="text-sm text-emerald-500 font-bold px-6 py-4 whitespace-nowrap">
                          $
                          {(
                            Number(item.price) * Number(item.piece)
                          ).toLocaleString()}
                        </td>
                        <td>
                          <button
                            className="font-bold text-red-700"
                            onClick={() => dispatch(deleteItem(item))}
                          >
                            X
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  ) : (
                    ""
                  )
                )}
              </table>
              <div className="flex justify-center font-bold mt-2 text-red-500">
                TOTAL : ${(initialMoney - money).toLocaleString()}
              </div>
              <div className="flex justify-center font-bold mt-2 text-emerald-500">
                REMAINING BALANCE : ${money.toLocaleString()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Total;
