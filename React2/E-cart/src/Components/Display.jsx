import { useState } from "react";
import { List } from "./List";

export const Display = ({ product, deleteProduct }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };
  const removeFromCart = (item) => {
    setCart(cart.filter((ele) => ele !== item));
  };
  return (
    <>
      <table className="table table-striped table-hover table-bordered shadow rounded">
        <thead className="table-dark text-center">
          <tr>
            <th>Product Name</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>

        <tbody className="text-center align-middle">
          {product.map((item, index) => {
            return (
              <List
                key={index}
                item={item}
                index={index}
                deleteProduct={deleteProduct}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                isExist={cart.includes(item)}
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Display;
