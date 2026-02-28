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
import { QuerySnapshot } from "firebase/firestore/lite";

function Product() {
  const navigate = useNavigate();
  const [product, setproduct] = useState([]);

  const getProduct = async () => {
    try {
      let q = query(collection(db, "hasti"));
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
  });

  const deteteData = async (pid) => {
    try {
      let docRef = doc(db, "hasti", pid);
      let res = await deleteDoc(docRef);

      if (res) {
        alert("deletedddd");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button
        style={{ margin: "auto" }}
        type="button"
        class="text-white bg-blue-500 box-border border border-transparent hover:bg-brand-strong focus:ring-4 text-center focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
        onClick={() => {
          navigate("/add");
        }}
      >
        Add new
      </button>

      <div class="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
        <table class="w-full text-sm text-left rtl:text-right text-body">
          <thead class="bg-neutral-secondary-soft border-b border-default">
            <tr>
              <th scope="col" class="px-6 py-3 font-medium">
                SR NO :
              </th>
              <th scope="col" class="px-6 py-3 font-medium">
                Product name
              </th>
              <th scope="col" class="px-6 py-3 font-medium">
                Color
              </th>
              <th scope="col" class="px-6 py-3 font-medium">
                Category
              </th>
              <th scope="col" class="px-6 py-3 font-medium">
                Price
              </th>
              <th scope="col" class="px-6 py-3 font-medium">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {product.map((item, i) => (
              <tr
                class="odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b border-default"
                key={i}
              >
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-heading whitespace-nowrap"
                >
                  {i + 1}
                </th>
                <td class="px-6 py-4">{item.pname}</td>
                <td class="px-6 py-4">{item.price}</td>
                <td class="px-6 py-4">
                  <img
                    src={item.img}
                    alt=""
                    style={{ height: "100px", width: "100px" }}
                  />
                </td>
                <td class="px-6 py-4">{item.des}</td>
                <td class="px-6 py-4">
                  <a
                    href="#"
                    class="font-medium text-fg-brand hover:underline"
                    onClick={() => {
                      deteteData(item.id);
                    }}
                  >
                    Delete
                  </a>
                </td>
                <td class="px-6 py-4">
                  <a
                    href=""
                    class="font-medium text-fg-brand hover:underline"
                    onClick={() => {
                      navigate(`/edit/${item.id}`);
                    }}
                  >
                    Edit
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Product;
