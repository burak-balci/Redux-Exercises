import React from "react";
import { useSelector } from "react-redux/es/exports";

function Header() {
  const { point } = useSelector((state) => state.framework);

  return <div className="header">POINT : {point}</div>;
}

export default Header;
