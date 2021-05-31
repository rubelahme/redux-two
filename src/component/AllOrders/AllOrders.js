import React from "react";

const AllOrders = (props) => {
  const { img, email, price, product, date } = props.item;
  return (
    <div className="border border-dark m-1 text-center">
      <img src={img} alt="" />
      <p>Product : {product}</p>
      <p>Price : ${price}</p>
      <p>Email : {email}</p>
      <p>Date:{date}</p>
    </div>
  );
};

export default AllOrders;
