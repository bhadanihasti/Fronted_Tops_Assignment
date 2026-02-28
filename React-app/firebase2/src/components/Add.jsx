import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";

function Add() {
  const navigate = useNavigate();
  const [product, setproduct] = useState({});

  const change = (e) => {
    const { name, value } = e.target;

    setproduct({
      ...product,
      [name]: value,
    });
  };

  const handleClick = async () => {
    try {
      let docRef = collection(db, "hasti");
      let res = await addDoc(docRef, product);

      if (res) {
        alert("adddded");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form class="max-w-sm mx-auto">
        <div class="mb-5">
          <label
            for="email"
            class="block mb-2.5 text-sm font-medium text-heading"
          >
            Your product
          </label>
          <input
            type="text"
            id="pname"
            class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
            placeholder="Product"
            name="pname"
            required
            onChange={change}
          />
        </div>
        <div class="mb-5">
          <label
            for="password"
            class="block mb-2.5 text-sm font-medium text-heading"
          >
            Your Price
          </label>
          <input
            type="text"
            id="password"
            class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
            placeholder="Price"
            name="price"
            required
            onChange={change}
          />
        </div>

        <div class="mb-5">
          <label
            for="email"
            class="block mb-2.5 text-sm font-medium text-heading"
          >
            Your product Image
          </label>
          <input
            type="text"
            id="img"
            class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
            placeholder="img url"
            name="img"
            required
            onChange={change}
          />
        </div>
        <div class="mb-5">
          <label
            for="password"
            class="block mb-2.5 text-sm font-medium text-heading"
          >
            Description
          </label>
          <input
            type="text"
            id="des"
            class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
            placeholder="description"
            name="des"
            required
            onChange={change}
          />
        </div>

        <button
          type="button"
          class="text-white bg-blue-500 box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
          onClick={handleClick}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Add;
