import { useSelector } from "react-redux/es/exports";

function TextArea() {
  const { text, textType } = useSelector((state) => state.text);

  return (
    <div className="flex flex-col p-10 m-4 bg-gray-500 font-bold text-gray-100 text-md rounded-md">
      {text.map((paragraph, index) => (
        <p key={index}>
          {textType === "html" ? `<p>${paragraph}</p>` : paragraph}
        </p>
      ))}
    </div>
  );
}

export default TextArea;
