import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setVisible,
  shuffle,
  setUnvisible,
  addSelectedFrameworks,
  resetPoint,
} from "../redux/memoryGameSlice";

import Swal from "sweetalert2";

function Card({ framework }) {
  const dispatch = useDispatch();

  const { selectedFrameworks } = useSelector((state) => state.framework);
  const { openedFrameworks } = useSelector((state) => state.framework);

  const handleClick = (item) => {
    if (selectedFrameworks.length < 2) {
      dispatch(setVisible(item));
      dispatch(addSelectedFrameworks(framework));
    }
  };

  if (openedFrameworks.length === 10) {
    Swal.fire({
      title: "Do you want to play again?",
      showCancelButton: true,
      confirmButtonText: "Restart",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Loading!", "", "success");
        window.location.reload();
      }
    });
  }

  useEffect(() => {
    dispatch(shuffle());
    dispatch(resetPoint());
    dispatch(setUnvisible());
  }, []);

  return (
    <div className="card">
      <div className="back">
        {framework.visible === false ? (
          <div onClick={() => handleClick(framework)} className="front">
            ?
          </div>
        ) : (
          <img
            src={`https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/${framework.name}.png`}
          />
        )}
      </div>
    </div>
  );
}

export default Card;
