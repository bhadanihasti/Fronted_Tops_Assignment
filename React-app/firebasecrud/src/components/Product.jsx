import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";

function Product() {
  const navigate = useNavigate();
  const [product, setproduct] = useState([]);

  const getProduct = async () => {
    try {
      let q = query(collection(db, "user"));
      let docCol = onSnapshot(q, (querySnapshot) => {
        let productArray = [];
        querySnapshot.forEach((doc) => {
          productArray.push({ ...doc.data(), id: doc.id });
        });
        setproduct(productArray);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  const deleteProduct = async (pid) => {
    try {
      let docRef = doc(db, "user", pid);
      await deleteDoc(docRef);

      alert("product Deleted!!");
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
          {product.map((item, i) => (
            <tr className="border" key={i}>
              <th scope="row" className="border">
                {i + 1}
              </th>
              <td className="border">{item.pname}</td>
              <td className="border">{item.price}</td>
              <td className="border">
                <img
                  src={item.pimg}
                  style={{ height: "50px", width: "100px" }}
                  alt=""
                />
              </td>
              <td className="border">{item.description}</td>
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
                  onClick={() => navigate("/edit/" + item.id)}
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
