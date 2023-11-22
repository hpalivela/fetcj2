import React, { useState } from "react";
import "./Header.css";
const Header = () => {
  const [data, setData] = useState(false);
  const [value, setValue] = useState(false);
  const [val,setVal]=useState(false);

  const textHandler = () => {
    setData(true);
    setValue(false);
    setVal(false);
  };
  const secondHandler = () => {
    setValue(true);
    setData(false);
    setVal(false);
  };
  const thirdHandler=()=>{
    setVal(true);
    setValue(false);
    setData(false);
  }
  return (
    <div className="ending">
      <div className="butt">
        <button onClick={textHandler}>click me</button>
        <button onClick={secondHandler}>click me2</button>
        <button onClick={thirdHandler}>click me3</button>
      </div>
      {data ?  <h1>hello</h1>:<h1>bye</h1>}
      {value && <h1>hiiiiii</h1>}
      {val && <h1>boyyyy</h1>}
    </div>
  );
};
export default Header;
