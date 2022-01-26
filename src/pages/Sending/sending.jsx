import React from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

import "./sending.scss";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Sending = () => {
  return (
    <div className="container">
      <div className="sending__top">
        <h2 className="sending__top-title">Оформление заказа</h2>
      </div>
      <div className="sending__main">
        <form className="sending__main-form">
          <TextField
            style={{ marginBottom: "50px" }}
            id="outlined-basic"
            label="Ваш инстаграм"
            variant="outlined"
          />
          <TextField
            style={{ marginBottom: "50px" }}
            id="outlined-basic"
            label="Имя"
            variant="outlined"
          />
          <TextField
            style={{ marginBottom: "50px" }}
            id="outlined-basic"
            label="Фамилия"
            variant="outlined"
          />
          <TextField
            style={{ marginBottom: "50px" }}
            id="outlined-basic"
            label="Телефон"
            variant="outlined"
            type={"number"}
          />
          <TextField
            style={{ marginBottom: "50px" }}
            id="outlined-basic"
            label="Область"
            variant="outlined"
          />
          <TextField
            style={{ marginBottom: "50px" }}
            id="outlined-basic"
            label="Город"
            variant="outlined"
          />
          <TextField
            style={{ marginBottom: "50px" }}
            id="outlined-basic"
            label="Отделение почты"
            variant="outlined"
          />

          <TextField
            style={{ marginBottom: "50px" }}
            id="outlined-basic"
            label="Примичание..."
            variant="outlined"
          />

          <Button
            className="sendin__main-btn"
            style={{ color: "grey", borderColor: "grey", marginBottom: "30px" }}
            size="large"
            variant="outlined"
          >
            Отправить
          </Button>
          <Link to="/cart">
            <Button
              style={{ color: "grey", borderColor: "grey", width: "100%" }}
              size="large"
              variant="outlined"
            >
              Вернуться назад
            </Button>
          </Link>
        </form>
      </div>
      {/* <div className="sending__photo">
        <img className="sending__photo-img" alt="sending__photo-img" />
      </div> */}
    </div>
  );
};

export default Sending;
