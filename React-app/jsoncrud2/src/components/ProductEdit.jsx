import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ProductEdit() {
  const [product, setproduct] = useState({
    pname: "",
    price: "",
    img: "",
    des: "",
  });
  const navigate = useNavigate();
  const pid = useParams().id;

  const getProductById = async () => {
    try {
      let res = await axios.get("http://localhost:3000/product/" + pid);
      if (res) {
        setproduct(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductById();
  }, [pid]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setproduct({
      ...product,
      [name]: value,
    });
  };

  const handleClick = async () => {
    try {
      let res = await axios.put(
        "http://localhost:3000/product/" + pid,
        product,
      );
      alert("updated");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form className="max-w-sm mx-auto">
        <h1 style={{ margin: "auto" }}>Product DEtail</h1>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2.5 text-sm font-medium text-heading"
          >
            Product Name
          </label>
          <input
            type="text"
            id="pname"
            className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
            placeholder="enter Product Name"
            name="pname"
            required
            value={product.pname}
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="price"
            className="block mb-2.5 text-sm font-medium text-heading"
          >
            Product Price
          </label>
          <input
            type="text"
            id="price"
            className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
            placeholder="price"
            name="price"
            required
            value={product.price}
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2.5 text-sm font-medium text-heading"
          >
            Image
          </label>
          <input
            type="text"
            id="img"
            className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
            placeholder="product url"
            name="img"
            required
            value={product.img}
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="price"
            className="block mb-2.5 text-sm font-medium text-heading"
          >
            Description
          </label>
          <input
            type="text"
            id="des"
            className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
            placeholder="description"
            name="des"
            required
            value={product.des}
            onChange={handleChange}
          />
        </div>

        <button
          type="button"
          className="text-white bg-blue-500 box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
          onClick={handleClick}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ProductEdit;
