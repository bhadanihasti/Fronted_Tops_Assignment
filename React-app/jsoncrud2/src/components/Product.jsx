import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Product() {
  const [product, setproduct] = useState([]);
  const navigate = useNavigate();

  const getProduct = async () => {
    try {
      let res = await axios.get("http://localhost:3000/product", product);

      if (res) {
        setproduct(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  const deleteData = async (pid) => {
    try {
      let res = await axios.delete("http://localhost:3000/product/" + pid);

      if (res) {
        alert("deleted");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <button
        type="button"
        class="text-white bg-blue-500 box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
        onClick={() => {
          navigate("/add");
        }}
      >
        Add New
      </button>

      <div class="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
        <table class="w-full text-sm text-left rtl:text-right text-body">
          <thead class="bg-neutral-secondary-soft border-b border-default">
            <tr>
              <th scope="col" class="px-6 py-3 font-medium">
                SR NO:
              </th>
              <th scope="col" class="px-6 py-3 font-medium">
                Product name
              </th>
              <th scope="col" class="px-6 py-3 font-medium">
                price
              </th>
              <th scope="col" class="px-6 py-3 font-medium">
                image
              </th>
              <th scope="col" class="px-6 py-3 font-medium">
                description
              </th>
              <th scope="col" class="px-6 py-3 font-medium" colSpan={2}>
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
                    style={{ height: "50px", width: "50px" }}
                  />
                </td>
                <td class="px-6 py-4">{item.des}</td>
                <td class="px-6 py-4">
                  <a
                    href="#"
                    class="font-medium text-white bg-red-500 p-5 hover:underline"
                    onClick={() => {
                      deleteData(item.id);
                    }}
                  >
                    Delete
                  </a>
                </td>

                <td class="px-6 py-4">
                  <a
                    href=""
                    class="font-medium text-white bg-green-500 p-5 hover:underline"
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
