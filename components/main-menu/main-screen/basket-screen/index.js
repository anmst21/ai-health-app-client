import React from "react";
import ChevronBack from "@/components/misc/ChevronBack";
import _ from "lodash";
import LogoRound from "@/components/misc/logo-round";
import BasketItem from "./BasketItem";

const products = [
  { name: "Product 1", weight: "2kg" },
  { name: "Product 2", weight: "2kg" },
  { name: "Product 3", weight: "2kg" },
  { name: "Product 4", weight: "2kg" },
  { name: "Product 5", weight: "2kg" },
  { name: "Product 6", weight: "2kg" },
  { name: "Product 7", weight: "2kg" },
  { name: "Product 8", weight: "2kg" },
  { name: "Product 9", weight: "2kg" },
  { name: "Product 10", weight: "2kg" },
];

const BasketScreen = () => {
  return (
    <div className="main-screen__weekly-container">
      <div className="main-screen__absolute--header directions-card__fix">
        <div className="settings-page__header--text">
          <ChevronBack fix linkTo="/app/complexId123/directions" />
          <h1>Basket</h1>
        </div>
        <LogoRound dir basket />
      </div>
      <div className="basket-screen__container">
        {_.map(products, (product, index) => (
          <BasketItem
            name={product.name}
            index={index}
            weight={product.weight}
          />
        ))}
      </div>
    </div>
  );
};

export default BasketScreen;
