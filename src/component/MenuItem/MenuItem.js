import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { createProvider } from "../../App";
import { useForm } from "react-hook-form";

const MenuItem = () => {
  const { handleSubmit } = useForm();
  const [user, setUser] = useContext(createProvider);
  const { name } = useParams();
  const [menu, setMenu] = useState([]);
  console.log(setUser);
  useEffect(() => {
    fetch("https://apricot-cupcake-07787.herokuapp.com/items/" + name)
      .then((res) => res.json())
      .then((data) => setMenu(data));
  }, [name]);

  const onSubmit = (data) => {
    const eventData = {
      Name: user.displayName,
      email: user.email,
      product: menu.name,
      price: menu.price,
      img: menu.img,
      quantity: "1",
      date: new Date().toDateString("dd/MM/yyyy"),
    };
    fetch("https://apricot-cupcake-07787.herokuapp.com/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(eventData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("your orders successfully");
        }
        console.log(data);
      });
  };

  return (
    <div className=" bg-warning p-5">
      <div className="row">
        <div className="col">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="" className="bg-success mx-2 p-1">
              Product
            </label>
            <input name="firstName" defaultValue={menu.name} />
            <label htmlFor="" className="bg-success mx-2 p-1">
              Your Email
            </label>
            <input name="email" defaultValue={user.email} />
            <label htmlFor="" className="bg-success mx-2 p-1">
              Price
            </label>
            <input type="number" name="price" defaultValue={menu.price} />
            <label htmlFor="" className="bg-success mx-2 p-1">
              Quantity
            </label>
            <input name="quantity" type="number" defaultValue="1" />
            <input
              type="submit"
              value="Order"
              className="bg-info border border-dark ml-2 text-light"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
