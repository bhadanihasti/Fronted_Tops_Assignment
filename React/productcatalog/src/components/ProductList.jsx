import ProductCard from "./ProductCard";
import img1 from "../components/Images/1.jpeg";
import img2 from "../components/Images/2.jpeg";
import img3 from "../components/Images/3.jpeg";
import img4 from "../components/Images/4.jpeg";

function ProductList() {
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 55000,
      image: img1,
    },
    {
      id: 2,
      name: "Mobile",
      price: 20000,
      image: img2,
    },
    {
      id: 3,
      name: "Headphones",
      price: 2000,
      image: img3,
    },
    {
      id: 4,
      name: "Mouse",
      price: 500,
      image: img4,
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
      }}
    >
      {products.map((item) => (
        <ProductCard product={item} />
      ))}
    </div>
  );
}

export default ProductList;
