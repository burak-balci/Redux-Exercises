import { useSelector, useDispatch } from "react-redux";
import {
  setParagraphs,
  setType,
} from "../redux/textgenerator/textGeneratorSlice";
import { fetchTextGenerator } from "../redux/textgenerator/services";
import { useEffect } from "react";

function Input() {
  const { paragraphs, textType } = useSelector((state) => state.text);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTextGenerator(paragraphs, textType));
  }, [paragraphs, textType]);

  return (
    <div>
      <form>
        <div className="flex m-5 space-x-5 items-center">
          <div className="flex flex-col text-white">
            Paragraphs
            <input
              type="number"
              value={paragraphs}
              className="text-black p-1 rounded-sm outline-none"
              onChange={(e) => dispatch(setParagraphs(e.target.value))}
            />
          </div>
          <div className="flex flex-col text-white">
            Include HTML
            <select
              className="text-black p-1 rounded-sm outline-none"
              onChange={(e) => dispatch(setType(e.target.value))}
            >
              <option value="html">Yes</option>
              <option value="text">No</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Input;
