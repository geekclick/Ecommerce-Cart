import React from "react";
import Card from "../components/Card";
import data from "../data";
import { useDispatch } from "react-redux";
import { addTocart } from "../store/reducers/cartSlice";

export default function Home() {
  const dispatch = useDispatch();
  const addItem = (item) => {
    dispatch(addTocart(item));
  };
  return (
    <div className="flex space-x-10 p-10">
      {data.map((item) => {
        return (
          <Card
            key={item.id}
            title={item.title}
            price={item.price}
            image={item.image}
            addItem={() => addItem(item)}
          />
        );
      })}
    </div>
  );
}
