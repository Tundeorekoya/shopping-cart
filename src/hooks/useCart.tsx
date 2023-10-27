import { useContext } from "react";
import cartContext from "../context/Cartprovider";
import { useCartContextType } from "../context/Cartprovider";

const useCart = (): useCartContextType =>{
    return useContext(cartContext)


}


export default useCart
