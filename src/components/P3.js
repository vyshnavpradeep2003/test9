import React, { useState } from 'react';
import './style.css';
const ColorPicker = () => {
  const [selectedColor, setSelectedColor] = useState(null);

  const colors = [
    '#FF5733', 
    '#FFBD33', 
    '#33FF57', 
    '#33D3FF', 
    '#B533FF',
    '#000000',
    '#808080',
    '#800080',
    '#FF69B4'
  ];

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="color-picker">
      <h2>Color Picker</h2>
      <div className="color-palette">
        {colors.map((color, index) => (
          <div
            key={index}
            className="color-option"
            style={{ backgroundColor: color }}
            onClick={() => handleColorClick(color)}
          ></div>
        ))}
      </div>
      <div className="selected-color">
        {selectedColor && (
          <div>
            Selected Color: <span style={{ backgroundColor: selectedColor }}></span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ColorPicker;
