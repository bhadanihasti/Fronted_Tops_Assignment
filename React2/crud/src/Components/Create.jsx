const Create = ({ addStudent }) => {
  const submitHandler = (e) => {
    e.preventDefault();
    var data = {
      name: e.target[0].value,
      email: e.target[1].value,
      phone: e.target[2].value,
    };
    addStudent(data);
    e.target[0].value = "";
    e.target[1].value = "";
    e.target[2].value = "";
  };
  return (
    <div className="card shadow border-0 rounded-4 mb-5">
      <div className="card-header bg-dark text-white text-center py-3 rounded-top-4">
        <h2 className="mb-0">User Form</h2>
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
              />
            </div>

            <div className="col-md-4">
              <label className="form-label fw-semibold">Email</label>

              <input
                type="email"
                className="form-control"
                placeholder="Enter Email"
              />
            </div>

            <div className="col-md-4">
              <label className="form-label fw-semibold">Phone</label>

              <input
                type="number"
                className="form-control"
                placeholder="Enter Phone"
              />
            </div>

            <div className="col-12 text-center mt-4">
              <button type="submit" className="btn btn-dark px-5 py-2">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Create;
