import { useReducer } from "react";


export type cartItemType = {
  sku: string;
  name: string;
  price: string;
  qty: number;
};

type cartStateType = { cart: cartItemType[] };

const initCartState: cartStateType = { cart: [] };

const REDUCER_ACTION_TYPE = {
  ADD: "ADD",
  REMOVE: "REMOVE",
  QUANTITY: "QUANTITY",
  SUBMIT: "SUBMIT",
};
export type ReducerActionType = typeof REDUCER_ACTION_TYPE;

export type ReducerAction = {
  type: string,
  payload?: cartItemType,
};
const reducer = (state: cartItemType, action: ReducerAction): cartStateType => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.ADD: {
      if (!action.payload) {
        throw new Error("action.payload missing in ADD action");
      }
      const { sku, name, price } = action.payload;

      const filteredCart: cartItemType[] = state.cart.filter(
        (item) => item.sku !== sku
      );

      const itemExists : cartItemType | undefined = state.cart.find( (item)  => item.sku === sku)


    }
    case REDUCER_ACTION_TYPE.REMOVE: {
      if (!action.payload) {
        throw new Error("action.payload missing in REMOVE action");
      }
    }
    case REDUCER_ACTION_TYPE.QUANTITY: {
      if (!action.payload) {
        throw new Error("action.payload missing in QUANTITY action");
      }
    }
    case REDUCER_ACTION_TYPE.SUBMIT: {
      return { ...state, cart: [] };
    }
    default:
      throw new Error(" Unidetified  reducer action type");
  }
};
