import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Productadd() {
  const [products, setProduct] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...products,
      [name]: value,
    });
  };

  const handleClick = async () => {
    try {
      let res = await axios.post("http://localhost:3000/Product", products);
      if (res) {
        alert("product added successfully");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1
        className="text-3xl font-bold underline"
        style={{ textAlign: "center", margin: "50px" }}
      >
        Product Form
      </h1>
      <form class="max-w-sm mx-auto">
        <div class="mb-5">
          <label
            for="pname"
            class="block mb-2.5 text-sm font-medium text-heading"
          >
            Product Name
          </label>
          <input
            type="text"
            id="pname"
            name="pname"
            class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
            placeholder="Enter Product Name"
            onChange={handleChange}
            required
          />
        </div>
        <div class="mb-5">
          <label
            for="price"
            class="block mb-2.5 text-sm font-medium text-heading"
          >
            Price
          </label>
          <input
            type="text"
            id="price"
            name="price"
            class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
            placeholder="Enter Product Price"
            onChange={handleChange}
            required
          />
        </div>
        <div class="mb-5">
          <label
            for="des"
            class="block mb-2.5 text-sm font-medium text-heading"
          >
            Description
          </label>
          <input
            type="text"
            id="des"
            name="des"
            class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
            placeholder="Enter Description"
            onChange={handleChange}
            required
          />
        </div>
        <div class="mb-5">
          <label
            for="img"
            class="block mb-2.5 text-sm font-medium text-heading"
          >
            Image
          </label>
          <input
            type="text"
            id="pimg"
            name="pimg"
            class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
            placeholder="Enter Product Image Url"
            onChange={handleChange}
            required
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

export default Productadd;
