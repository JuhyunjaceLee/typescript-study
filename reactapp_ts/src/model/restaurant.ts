// let data = {
//   name: "type Store",
//   category: "Korean Food",
//   address: {
//     city: "Seoul",
//     detail: "someWhere",
//     zipCode: 12345678,
//   },
//   menu: [
//     { name: "rice", price: 1000 },
//     { name: "soup", price: 2000 },
//   ],
// };

export type Restaurant = {
  name: string;
  category: string;
  address: Address;
  menu: Menu[];
};

export type Address = {
  city: string;
  detail: string;
  zipCode: number;
};

export type Menu = {
  name: string;
  price: number;
};
