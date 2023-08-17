import React, { useState } from "react";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [mount, setAmount] = useState(0);
  return (
    <>
      <h3>Add new transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            type="text"
            placeholder="Enter text..."
          />
        </div>

        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            value={mount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
            type="number"
            placeholder="Enter amount..."
          />
        </div>

        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
