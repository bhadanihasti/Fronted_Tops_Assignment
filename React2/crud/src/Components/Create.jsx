import { useEffect, useRef } from "react";

const Create = ({ addStudent, editstduent, editIndex }) => {
  const username = useRef();
  const email = useRef();
  const phone = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    var data = {
      username: username.current.value,
      email: email.current.value,
      phone: phone.current.value,
    };
    addStudent(data);
    username.current.value = "";
    email.current.value = "";
    phone.current.value = "";
  };
  useEffect(() => {
    if (editstduent) {
      username.current.value = editstduent.username || "";
      email.current.value = editstduent.email || "";
      phone.current.value = editstduent.phone || "";
    }
  }, [editstduent]);

  return (
    <div className="card shadow border-0 rounded-4 mb-5">
      <div className="card-header bg-dark text-white text-center py-3 rounded-top-4">
        <h2 className="mb-0">
          {editIndex != null ? "Update User" : "User Form"}
        </h2>
      </div>

      <div className="card-body p-4">
        <form onSubmit={submitHandler}>
          <div className="row g-4">
            <div className="col-md-4">
              <label className="form-label fw-semibold">Username</label>

              <input
                type="text"
                className="form-control"
                placeholder="Enter Username"
                ref={username}
              />
            </div>

            <div className="col-md-4">
              <label className="form-label fw-semibold">Email</label>

              <input
                type="email"
                className="form-control"
                placeholder="Enter Email"
                ref={email}
              />
            </div>

            <div className="col-md-4">
              <label className="form-label fw-semibold">Phone</label>

              <input
                type="number"
                className="form-control"
                placeholder="Enter Phone"
                ref={phone}
              />
            </div>

            <div className="col-12 text-center mt-4">
              <button type="submit" className="btn btn-dark px-5 py-2">
                {editIndex != null ? "Update" : "Submit"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Create;
