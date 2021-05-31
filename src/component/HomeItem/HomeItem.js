import React from "react";
import { useHistory } from "react-router";
import "./HomeItem.css";
const HomeItem = (props) => {
  const { name, price, img } = props.item;
  const history = useHistory();
  const handleMenu = () => {
    history.push(`/item/${name}`);
  };
  return (
    <div className="text-center homeItem mt-3">
      <img src={img} alt="" />
      <h5> Fruit :{name}</h5>

      <div className="d-flex p-4 border-top  item justify-content-between">
        <p>
          <strong>Price: ${price}</strong>
        </p>
        <button className="bg-success handleMenu mb-2" onClick={handleMenu}>
          Buy Item
        </button>
      </div>
    </div>
  );
};

export default HomeItem;
