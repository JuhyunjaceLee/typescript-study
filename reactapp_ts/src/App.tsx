import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Store from "./Store";
import { Address, Restaurant } from "./model/restaurant";

let data: Restaurant = {
  name: "WelcomeWelWell",
  category: "Korean Food",
  address: {
    city: "Seoul",
    detail: "someWhere",
    zipCode: 12345678,
  },
  menu: [
    { name: "rice", price: 1000 },
    { name: "soup", price: 2000 },
  ],
};
const App: React.FC = () => {
  const [myRestaurant, setMyRestaurant] = useState<Restaurant>(data);

  const changeAddress = (address: Address) => {
    setMyRestaurant({ ...myRestaurant, address: address });
  };

  return (
    <div className="App">
      <Store data={myRestaurant} changeAddress={changeAddress} />
    </div>
  );
};

export default App;
