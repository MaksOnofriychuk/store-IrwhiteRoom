import React from "react";
import Categories from "../../components/Categories/categories";
import Cards from "../../components/Cards/cards";

import "./home.scss";
import Sort from "../../components/Sort/sort";

const Home = () => {
  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все трусики</h2>
      <Cards />
    </div>
  );
};

export default Home;
