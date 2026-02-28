import React from "react";

function Pattern({ type, rows = 5 }) {
  const generatePattern = () => {
    let output = [];

    for (let i = 1; i <= rows; i++) {
      let line = "";

      switch (type) {
        // 1️⃣ Right Half Pyramid
        case "rightHalf":
          line = "* ".repeat(i);
          break;

        // 2️⃣ Left Half Pyramid
        case "leftHalf":
          line = "  ".repeat(rows - i) + "* ".repeat(i);
          break;

        // 3️⃣ Full Pyramid
        case "full":
          line = "  ".repeat(rows - i) + "* ".repeat(2 * i - 1);
          break;

        // 4️⃣ Inverted Right Half
        case "invRight":
          line = "* ".repeat(rows - i + 1);
          break;

        // 5️⃣ Inverted Left Half
        case "invLeft":
          line = "  ".repeat(i - 1) + "* ".repeat(rows - i + 1);
          break;

        // 6️⃣ Inverted Full Pyramid
        case "invFull":
          line = "  ".repeat(i - 1) + "* ".repeat(2 * (rows - i) + 1);
          break;

        // 7️⃣ Diamond
        case "diamond":
          if (i <= rows / 2) {
            line = "  ".repeat(rows / 2 - i) + "* ".repeat(2 * i - 1);
          } else {
            let k = rows - i + 1;
            line = "  ".repeat(rows / 2 - k) + "* ".repeat(2 * k - 1);
          }
          break;

        default:
          line = "";
      }

      output.push(<div key={i}>{line}</div>);
    }

    return output;
  };

  return (
    <pre style={{ fontSize: "18px", lineHeight: "20px" }}>
      {generatePattern()}
    </pre>
  );
}

export default Pattern;
