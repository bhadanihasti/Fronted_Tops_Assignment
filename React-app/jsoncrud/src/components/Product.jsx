import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Product() {
  const [Product, setProduct] = useState([]);
  const navigate = useNavigate();

  const getProduct = async () => {
    try {
      let res = await axios.get("http://localhost:3000/Product", Product);

      if (res) {
        setProduct(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  const deleteProduct = async (pid) => {
    try {
      let res = await axios.delete("http://localhost:3000/Product/" + pid);
      if (res) {
        alert("Product Deleted");
        getProduct();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="text-center mt-20">
      <button
        type="button"
        className="text-white bg-blue-500 box-border border border-transparent p-5"
        onClick={() => navigate("/add")}
      >
        Add New
      </button>

      <table className="border-separate border-spacing-2 border border-gray-400 m-auto mt-20">
        <thead>
          <tr>
            <th scope="col" className="border">
              Product SRNo
            </th>
            <th scope="col" className="border">
              Product Name
            </th>
            <th scope="col" className="border">
              Price
            </th>
            <th scope="col" className="border">
              Image
            </th>
            <th scope="col" className="border">
              Description
            </th>
            <th scope="col" className="border" colSpan={2}>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {Product.map((item, i) => (
            <tr className="border" key={i}>
              <th scope="row" className="border">
                {i + 1}
              </th>
              <td className="border">{item.pname}</td>
              <td className="border">{item.price}</td>
              <td className="border">
                <img
                  src={item.img}
                  style={{ height: "50px", width: "100px" }}
                  alt=""
                />
              </td>
              <td className="border">{item.des}</td>
              <td className="border">
                <a
                  href="#"
                  className="font-medium text-white p-2 bg-red-500 hover:underline"
                  onClick={() => {
                    deleteProduct(item.id);
                  }}
                >
                  Delete
                </a>
              </td>
              <td className="border">
                <a
                  className="font-medium text-white p-2 bg-green-500 hover:underline"
                  onClick={() => navigate(`/edit/${item.id}`)}
                >
                  Edit
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Product;
