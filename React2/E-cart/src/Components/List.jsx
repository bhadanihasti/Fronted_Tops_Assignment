export const List = ({ item }) => {
  return (
    <>
      <tr>
        <td className="fw-semibold">{item}</td>

        <td>
          <button className="btn btn-success me-2">Buy</button>

          <button className="btn btn-warning">Remove</button>
        </td>

        <td>
          <button className="btn btn-danger">Delete</button>
        </td>
      </tr>
    </>
  );
};
