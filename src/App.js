import React, { useState } from "react";
import "./app.css";
import Checkbox from "./components/Checkbox";
import Button from "./components/Button";

const App = () => {
  const [checkedState, setCheckedState] = useState({
    all: false,
    items: [false, false, false, false],
  });

  const handleAllChange = () => {
    const newCheckedState = !checkedState.all;
    setCheckedState({
      all: newCheckedState,
      items: Array(4).fill(newCheckedState),
    });
  };

  const handleItemChange = (index) => {
    const updatedItems = [...checkedState.items];
    updatedItems[index] = !updatedItems[index];
    setCheckedState({
      all: updatedItems.every((item) => item),
      items: updatedItems,
    });
  };

  const handleDoneClick = () => {
    console.log("Done clicked with state:", checkedState);
  };

  return (
    <div className="checkbox-list-container">
      <Checkbox
        label="All pages"
        isChecked={checkedState.all}
        onToggle={handleAllChange}
      />
      <hr />
      {checkedState.items.map((isChecked, index) => (
        <Checkbox
          key={index}
          label={`Page ${index + 1}`}
          isChecked={isChecked}
          onToggle={() => handleItemChange(index)}
          labelClass="checkbox-content"
        />
      ))}
      <hr />
      <Button onClick={handleDoneClick} />
    </div>
  );
};

export default App;
