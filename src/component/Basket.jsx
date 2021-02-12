import React, { useReducer } from "react";

export const UserContext = React.createContext();

export const initialValue = 0;

const Reducer = (state, action) => {
  switch (action.type) {
    case "user":
      return { ...state, user: action.user };
    case "increment":
      console.log(action.item);
      return { ...state, basket: [...state.basket, action.item] };
    case "decrement":
      let newBasket = [...state.basket];
      let removedItem = action.item.id;
      let index = newBasket.findIndex((item) => item.id == removedItem);
      newBasket.splice(index, 1);
      return { ...state, basket: newBasket };
    case "reset":
      return initialValue;
  }
};

export default Reducer;
