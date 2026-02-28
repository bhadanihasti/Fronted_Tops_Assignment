import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";

function Add() {
  const [product, setproducts] = useState({});
  const navigate = useNavigate();

  const change = (e) => {
    const { name, value } = e.target;
    setproducts({
      ...product,
      [name]: value,
    });
  };

  const handleclick = async () => {
    try {
      let docRef = collection(db, "user");
      let res = await addDoc(docRef, product);
      if (res) {
        alert("user added product");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container mx-auto bg-gray-200">
      <form>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12 pt-10">
            <h2 className="text-3xl font-semibold text-gray-900">
              Enter Product Details
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  for="first-name"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Product name
                </label>
                <div className="mt-2">
                  <input
                    id="first-name"
                    type="text"
                    name="pname"
                    autocomplete="given-name"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    onChange={change}
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  for="last-name"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Image
                </label>
                <div className="mt-2">
                  <input
                    id="last-name"
                    type="text"
                    name="pimg"
                    autocomplete="family-name"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    onChange={change}
                  />
                </div>
              </div>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  for="first-name"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Product Price
                </label>
                <div className="mt-2">
                  <input
                    id="first-name"
                    type="text"
                    name="price"
                    autocomplete="given-name"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    onChange={change}
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  for="last-name"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Description
                </label>
                <div className="mt-2">
                  <input
                    id="last-name"
                    type="text"
                    name="description"
                    autocomplete="family-name"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    onChange={change}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={handleclick}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default Add;
