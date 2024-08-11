import { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("white");
  const handleChange = (event) => {
    setColor(event.target.value);
  };
  return (
    <>
      <div className="container">
        <div className="content">
          <h1 className="picker">color picker</h1>
          <div className="center">
            <div
              style={{ backgroundColor: color, color: color }}
              className="box"
            >
              {color}
            </div>
          </div>
          <label className="footer">
            Select a color
            <input type="color" value={color} onChange={handleChange} />
          </label>
        </div>
      </div>
    </>
  );
}

export default ColorPicker;
