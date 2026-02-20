import React, { useState } from "react";

function Fruits() {
  const [fname, setFname] = useState("");
  const [flist, setFlist] = useState([]);

  return (
    <div>
      <form class="max-w-sm mx-auto mt-5">
        <h1>Fruits CRUD</h1>
        <div class="mb-5">
          <label
            for="fruits"
            class="block mb-2.5 text-sm font-medium text-heading"
          >
            Enter Fruits
          </label>
          <input
            type="text"
            id="fruits"
            class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
            required
          />
        </div>

        <button
          type="submit"
          class="text-white bg-blue-500 box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Fruits;
