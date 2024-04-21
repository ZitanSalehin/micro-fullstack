/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [savedValue, setSavedValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/items", {
        name: inputValue,
      });

      if (response.status !== 201) {
        throw new Error("Failed to save");
      }

      setSavedValue(response.data.name);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={handleSubmit}>Save</button>
      {savedValue && <p>Saved Value: {savedValue}</p>}
    </div>
  );
}

export default App;
