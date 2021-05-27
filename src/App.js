import React, { useState } from "react";

import "./styles.css";

export default function App() {
  const emojidict = {
    "🥝": "Kiwi",
    "🥥": "Coconut",
    "🍇": "Grapes",
    "🍈": "Melon",
    "🍉": "Watermelon",
    "🍊": "Orange",
    "🍋": "Lemon",
    "🍌": "Banana",
    "🍍": "Pineapple",
    "🥭": "Mango",
    "🍎": "Apple",
    "🍏": "Green Apple",
    "🍐": "Pear",
    "🍑": "Peach",
    "🍒": "Cherries",
    "🍓": "Strawberry"
  };

  const [meaning, setMeaning] = useState("");

  const inputHandler = (event) => {
    var inputtxt = event.target.value;
    var meaning = emojidict[inputtxt];
    if (meaning === undefined) {
      meaning = "Emoji doesn't exist in our database yet.";
    }
    setMeaning(meaning);
  };

  const emojiClick = (emoji) => {
    setMeaning(emojidict[emoji]);
  };

  return (
    <div className="App">
      <h1>Fruit Emoji Interpreter </h1>

      <input
        style={{ width: "200px", height: "25px" }}
        placeholder="Enter a fruit emoji"
        onChange={inputHandler}
      />
      <h3>
        {" "}
        meaning: <span> {meaning} </span>{" "}
      </h3>
      <h3>Our database: </h3>
      <div>
        {Object.keys(emojidict).map((item) => {
          return (

            <span
              style={{ cursor: "Pointer", padding: "2px", fontSize: "2rem" }}
              onClick={() => emojiClick(item)}
            >
              {" "}
              {item}{" "}
            </span>
          );
        })}
      </div>
    </div>
  );
}
