import React from "react";
import "./manages.css";

const Manages = (props) => {
  const { name, price, author_name, _id } = props.data;
  const handleDelate = (id) => {
    fetch("https://apricot-cupcake-07787.herokuapp.com/delete/" + id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      <div className="row manages">
        <div className="col-md-3 p-2">
          <h6>{name}</h6>
        </div>
        <div className="col-md-3">
          <h6>{price}</h6>
        </div>
        <div className="col-md-3">
          <h6>{author_name}</h6>
        </div>
        <div className="col-md-3">
          <button onClick={() => handleDelate(_id)} className="bg-danger">
            Delate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Manages;
