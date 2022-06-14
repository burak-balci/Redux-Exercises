import Card from "./Card";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { compareFrameworks } from "../redux/memoryGameSlice";

function CardList() {
  const dispatch = useDispatch();
  const { frameworks } = useSelector((state) => state.framework);
  const { selectedFrameworks } = useSelector((state) => state.framework);

  useEffect(() => {
    if (selectedFrameworks.length === 2) {
      setTimeout(compare, 1000);
    }
  }, [selectedFrameworks]);

  function compare() {
    dispatch(compareFrameworks());
  }

  return (
    <div className="cardlist">
      {frameworks.map((framework) => (
        <Card key={framework.id} framework={framework} />
      ))}
    </div>
  );
}

export default CardList;
