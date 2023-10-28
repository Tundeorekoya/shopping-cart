import { ChangeEvent, ReactElement,memo } from "react";
import { cartItemType } from "../context/Cartprovider"
import { ReducerAction } from "../context/Cartprovider"
import { ReducerActionType } from "../context/Cartprovider"

type PropsType = {
  item: cartItemType;
  dispatch: React.Dispatch<ReducerAction>;
  REDUCER_ACTION: ReducerActionType;
};

const CartLineItem = ({ item, dispatch, REDUCER_ACTION }: PropsType) => {
     const img: string = new URL(
       `../images/${item.sku}.jpg`,
       import.meta.url
     ).href;


     const lineTotal : number = (item.qty * item.price)
     const highestQty:number = 20 > item.qty ? 20 :  item.qty
     
     const optionValues: number[] = [...Array(highestQty).keys()].map(i => i + 1)

     const option: ReactElement[] = optionValues.map((val) => {
       return (
         <option key={`opt${val}`} value={val}>
           {val}
         </option>
       );

     });
     const onChangeQty = (e: ChangeEvent<HTMLSelectElement>)=> {
        dispatch({
            type: REDUCER_ACTION.QUANTITY,
            payload: {...item, qty:Number(e.target.value)}
        })
     }
     const OnRemoveFromCart= () => dispatch({
        type: REDUCER_ACTION.REMOVE,
        payload: item,
     })

     const content = (
       <li className="cart__item">
         <img src={img} alt={item.name} className="cart__img" />
         <div aria-label="item Name">{item.name}</div>
         <div aria-label="Price Per Item">
           {" "}
           {new Intl.NumberFormat("en-US", {
             style: "currency",
             currency: "USD",
           }).format(item.price)}
         </div>
         <label htmlFor="itemQty" className="offscreen">
           item Quantity
         </label>
         <select
           name=""
           id="itemQty"
           className="cart__select"
           value={item.qty}
           aria-label="item Quantity"
           onChange={onChangeQty}
         >
           {option}
         </select>

         <div className="cart__item-subtotal" aria-label="line Item Subtotal">
           {new Intl.NumberFormat("en-US", {
             style: "currency",
             currency: "USD",
           }).format(lineTotal)}
         </div>

         <button
           className="cart__button"
           aria-label="Remove Item From Cart"
           title="Remove Item From Cart"
            onClick={ OnRemoveFromCart}
         >
           ❌
         </button>
       </li>
     );

  return content
};


export default CartLineItem
