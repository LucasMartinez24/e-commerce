import { deleteProductById, addNewProduct, Producto} from "../../stores/productos/slice";
import { useAppDispatch } from "../store";
export const useProductActions = () => {
  const dispatch=useAppDispatch();

  const addProduct=(product:Producto)=>{
    dispatch(addNewProduct(product))
  }
  const deleteProduct=(id:number)=>{
    dispatch(deleteProductById(id))
  }

  return {deleteProduct,addProduct}
}