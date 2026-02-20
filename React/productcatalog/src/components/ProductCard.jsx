function ProductCard({ product }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", width: "200px" }}>
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: "100%",
          height: "150px",
          objectFit: "cover",
        }}
      />
      <div
        style={{
          textAlign: "center",
        }}
      >
        <h3>{product.name}</h3>
        <p>₹ {product.price}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
