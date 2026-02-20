import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import ProductList from "./components/ProductList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>🛒 Product Catalog</h1>
        <ProductList />
      </div>
    </>
  );
}

export default App;
