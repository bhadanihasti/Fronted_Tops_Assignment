export const List = ({
  item,
  index,
  deleteProduct,
  addToCart,
  removeFromCart,
  isExist,
}) => {
  return (
    <tr>
      <td className="fw-semibold">{item}</td>

      <td>
        {!isExist ? (
          <button
            className="btn btn-success me-2"
            onClick={() => addToCart(item)}
          >
            Buy
          </button>
        ) : (
          <button
            className="btn btn-warning"
            onClick={() => removeFromCart(item)}
          >
            Remove
          </button>
        )}
      </td>

      <td>
        <button
          className="btn btn-danger"
          onClick={(e) => deleteProduct(index)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};
