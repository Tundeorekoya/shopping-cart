import {useContext} from 'react'
import productsContext from '../context/ProductProvider'
import { useProductsContextType } from '../context/ProductProvider'


const useProducts = (): useProductsContextType=> {
    return useContext(productsContext)
}

export default useProducts