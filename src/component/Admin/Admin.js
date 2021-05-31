import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Admin.css";
import { useForm } from "react-hook-form";
import Manages from "../Manages/Manages";

const Admin = () => {
  const { register, handleSubmit } = useForm();
  const [item, setItem] = useState([]);
  const [imagesUrl, setImagesUrl] = useState(null);
  const [link, setLike] = useState(true);
  const [manage, setManage] = useState(true);
  const onSubmit = (data) => {
    const eventData = {
      name: data.name,
      img: imagesUrl,
      price: data.price,
      author_name: data.author_name,
    };
    fetch("https://apricot-cupcake-07787.herokuapp.com/product", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(eventData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    console.log(eventData);
  };

  const imgChange = (e) => {
    const imagesData = new FormData();
    imagesData.set("key", "3b61f7918dc1a39c2999937d1c16a97d");
    imagesData.append("image", e.target.files[0]);
    axios
      .post("https://api.imgbb.com/1/upload", imagesData)
      .then(function (response) {
        setImagesUrl(response.data.data.display_url);
      })
      .catch(function (error) {});
  };
  useEffect(() => {
    fetch("https://apricot-cupcake-07787.herokuapp.com/item")
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);

  const addFootball = () => {
    setLike(false);
    setManage(true);
  };

  const managesHandel = () => {
    setManage(false);
    setLike(true);
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-3 bg-warning">
          <div class="navbar-nav ml-auto">
            <button className="buttons" onClick={managesHandel}>
              Manage fruits
            </button>
            <button className="buttons" onClick={addFootball}>
              Add fruit
            </button>
            <button className="buttons">Edit fruit</button>
          </div>
        </div>
        <div className="col-md-9">
          {link ? (
            <div></div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)}>
              <h4 className="text-center">Add fruits</h4>
              <label for="staticEmail2">fruit Name :</label>
              <input
                className="form-control"
                name="name"
                defaultValue=""
                ref={register}
              />
              <label for="staticEmail2">Author Name :</label>
              <input
                className="form-control"
                name="author_name"
                defaultValue=""
                ref={register}
              />
              <label for="staticEmail2">Price :</label>
              <input
                className="form-control"
                name="price"
                defaultValue=""
                ref={register}
              />
              <label for="staticEmail2 " className="p-4 ">
                Add Football Cover Photo
              </label>
              <input onChange={imgChange} name="img" type="file" />
              <input type="submit" className="form-control bg-warning" />
            </form>
          )}
          {manage ? (
            <div></div>
          ) : (
            <div>
              <div className="row pt-1 bg-success text-light">
                <div className="col-md-3 ">
                  <h3>Fruits </h3>
                </div>
                <div className="col-md-3 ">
                  <h3>Price</h3>
                </div>
                <div className="col-md-3">
                  <h3>Author-name</h3>
                </div>

                <div className="col-md-3">
                  <h3>Delate</h3>
                </div>
              </div>
              <div className="row pt-2">
                {item.map((pd) => (
                  <div className="col-md-12">
                    <Manages key={pd.name} data={pd}></Manages>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
