import { List } from "./List";

export const Display = ({ product }) => {
  return (
    <>
      <table className="table table-striped table-hover table-bordered shadow rounded">
        <thead className="table-dark text-center">
          <tr>
            <th>Product Name</th>
            <th>Action</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody className="text-center align-middle">
          {product.map((item, index) => {
            return <List key={index} item={item} />;
          })}
        </tbody>
      </table>
    </>
  );
};

export default Display;
