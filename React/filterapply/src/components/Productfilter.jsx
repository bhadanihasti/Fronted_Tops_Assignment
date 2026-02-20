import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";

function Productfilter() {
  const [product, setProduct] = useState([]);
  const [id, setid] = useState(0);
  const [search, setSearch] = useState("");

  const getProducts = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      console.log(res.data);

      setProduct(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const filterProduct = useMemo(() => {
    // if (id == 0) {
    //   return product;
    // } else {
    //   let newArray = product.filter((item) => item.id === id);
    //   return newArray;
    // }

    let filtered = product;
    // ID filter
    if (id !== 0) {
      filtered = filtered.filter((item) => item.id === id);
    }

    // Search filter (title par)
    if (search !== "") {
      filtered = filtered.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase()),
      );
    }
    return filtered;
  }, [id, product, search]);

  const handleClick = (id) => {
    setid(id);
  };
  return (
    <div className="p-20">
      <h1 className="text-3xl my-5">FilterApply</h1>
      <ul className="flex gap-5">
        <li>
          <button
            className="bg-red-500 text-white p-3"
            onClick={() => {
              handleClick(0);
            }}
          >
            All
          </button>
        </li>

        <li>
          <input
            type="text"
            name=""
            id=""
            className="p-3 border"
            placeholder="search Product "
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </li>

        {/* {product.map((item) => (
          <li key={item.id}>
            <button
              className="bg-red-500 text-white p-3"
              onClick={() => handleClick(item.id)}
            >
              {item.title}
            </button>
          </li>
        ))} */}
      </ul>

      <table
        className="border-separate border-spacing-2 border border-gray-400"
        style={{ margin: "auto", marginTop: "20px" }}
      >
        <thead>
          <tr>
            <th className="border">id</th>
            <th className="border">title</th>
            <th className="border">price</th>
            <th className="border">description</th>
          </tr>
        </thead>
        <tbody>
          {filterProduct.map((index, i) => (
            <tr key={index.id}>
              <td className="border">{index.id}</td>
              <td className="border">{index.title}</td>
              <td className="border">{index.price}</td>
              <td className="border">{index.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Productfilter;
