import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

function Product() {
  const [products, setProduct] = useState([]);
  const navigate = useNavigate();

  const delProduct = async (pid) => {
    try {
      const res = await axios.delete("http://localhost:3000/Product/" + pid);

      if (res) {
        alert("Product Deleted !");
        getProducts();
      }
    } catch (error) {}
  };

  const getProducts = async () => {
    try {
      let res = await axios.get("http://localhost:3000/Product");
      console.log(res.data);

      setProduct(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div style={{ textAlign: "center", margin: "50px" }}>
      <button
        onClick={() => navigate("/productadd")}
        className="text-white bg-blue-500 px-4 py-2 rounded"
      >
        Add New
      </button>

      <h1 className="text-3xl font-bold underline">Product Details</h1>

      <table
        className="border-separate border-spacing-2 border border-gray-400"
        style={{ margin: "auto", marginTop: "20px" }}
      >
        <thead>
          <tr>
            <th className="border">SRNO</th>
            <th className="border">Product Name</th>
            <th className="border">Price</th>
            <th className="border">Description</th>
            <th className="border">Image</th>
            <th colSpan={2} className="border">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {products.map((item, i) => (
            <tr key={i}>
              <td className="border">{i + 1}</td>
              <td className="border">{item.pname}</td>
              <td className="border">{item.price}</td>
              <td className="border">{item.des}</td>
              <td className="border">
                <img
                  src={item.pimg}
                  alt=""
                  style={{ height: "50px", width: "100px" }}
                />
              </td>
              <td>
                <button
                  onClick={() => {
                    delProduct(item.id);
                  }}
                  className="text-white bg-red-500 box-border border border-transparent hover:bg-danger-strong focus:ring-4 focus:ring-danger-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
                >
                  DELETE
                </button>
              </td>
              <td>
                <NavLink
                  to={"/productedit/" + item.id}
                  className="text-white bg-green-500 box-border border border-transparent hover:bg-danger-strong focus:ring-4 focus:ring-danger-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
                >
                  EDIT
                </NavLink>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Product;
