import Card from "./Card";
import Total from "./Total";
import { useSelector } from "react-redux";

function CardList() {
  const { items } = useSelector((state) => state.items);

  return (
    <div className="">
      <div className="flex flex-wrap justify-center">
        {items.map((item, i) => (
          <div key={i} className="m-2">
            <Card item={item} />
          </div>
        ))}
      </div>
      <Total />
    </div>
  );
}

export default CardList;
