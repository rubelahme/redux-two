import React, { useEffect, useState } from "react";
import HomeItem from "../HomeItem/HomeItem";
import "./Home.css";
const Home = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch("https://apricot-cupcake-07787.herokuapp.com/item")
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row">
          {item.length === 0 && (
            <div className="col-md-12">
              <div className="spinner">
                <div className="spinner-border text-danger" role="status"></div>
              </div>
            </div>
          )}
          {item.map((pd) => (
            <div className="col-md-3">
              <HomeItem key={pd.name} item={pd}></HomeItem>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
