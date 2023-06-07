import HomeTitleButton from "../home/HomeTitleButton";
import "./Title.css";

import { useLocation } from "react-router-dom";

const Title = () => {
  const location = useLocation();

  return (
    <div className="heading">
      <h1>The Generics</h1>
      {location.pathname === "/home" && <HomeTitleButton />}
    </div>
  );
};

export default Title;
