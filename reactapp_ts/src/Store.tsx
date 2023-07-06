import React from "react";
import { Address, Restaurant } from "./model/restaurant";

interface OwnProps {
  data: Restaurant;
  changeAddress(address: Address): void;
}

const Store: React.FC<OwnProps> = ({ data }) => {
  return (
    <div>
      <p>{data.name}</p>
    </div>
  );
};

export default Store;
