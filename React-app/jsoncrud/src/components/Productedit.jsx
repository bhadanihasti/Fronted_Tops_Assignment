import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Productedit() {
  const [Product, setProduct] = useState({
    pname: "",
    price: "",
    img: "",
    des: "",
  });
  const pid = useParams().id;
  const navigate = useNavigate();

  const getProductById = async () => {
    try {
      let res = await axios.get("http://localhost:3000/Product/" + pid);
      if (res) {
        setProduct(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProduct({
      ...Product,
      [name]: value,
    });
  };

  useEffect(() => {
    getProductById();
  }, [pid]);

  const updateProduct = async () => {
    let res = await axios.put("http://localhost:3000/Product/" + pid, Product);

    if (res) {
      alert("producted updated");
      navigate("/");
    }
  };

  return (
    <div className="text-center mt-10  p-3">
      <h1 className="text-3xl font-bold underline m-auto ">Product Edit</h1>

      <form className="w-full max-w-lg mt-10 m-auto">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Product Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Enter Product Name"
              value={Product.pname}
              name="pname"
              onChange={handleChange}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Price
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Enter Product Price"
              value={Product.price}
              name="price"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Product Image
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Enter Image Url"
              value={Product.img}
              name="img"
              onChange={handleChange}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Description
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Description"
              value={Product.des}
              name="des"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="items-center ">
          <button
            className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-3 px-8 rounded"
            type="button"
            onClick={updateProduct}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default Productedit;
