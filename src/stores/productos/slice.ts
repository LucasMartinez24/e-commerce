import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const DEFAULT_STATE=[
  {
    id: 1,
    nombre: "Smartphone X100",
    imagen: "https://cubotlifestyle.com/cdn/shop/files/Untitleddesign-2024-02-26T111123.508.png?v=1711789991",
    descripcion: "Un smartphone de última generación con pantalla AMOLED de 6.5 pulgadas.",
    precio: 699.99,
    cantidad: 50,
    disponibilidad: true,
    oferta: true
  },
  {
    id: 2,
    nombre: "Auriculares Inalámbricos",
    imagen: "https://www.heavenimagenes.com/heavencommerce/68ac9d04-8767-4aca-9951-49f2fea1383b/images/v2/GENERICO/23657_xlarge.jpg",
    descripcion: "Auriculares con cancelación de ruido y hasta 20 horas de batería.",
    precio: 149.99,
    cantidad: 100,
    disponibilidad: true,
    oferta: false
  },
  {
    id: 3,
    nombre: "Smart TV 55 pulgadas",
    imagen: "https://images.fravega.com/f1000/799a8ceaf934954792eea028e9b44cfd.jpg",
    descripcion: "Televisor inteligente con resolución 4K y HDR10+.",
    precio: 899.99,
    cantidad: 20,
    disponibilidad: true,
    oferta: true
  },
  {
    id: 4,
    nombre: "Laptop Ultraligera",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqpxeJ2VK6uiIgPi47g9vRbuvU53QQghyBcg&s",
    descripcion: "Laptop ultraligera con procesador Intel Core i7 y 16GB de RAM.",
    precio: 1299.99,
    cantidad: 15,
    disponibilidad: true,
    oferta: false
  },
  {
    id: 5,
    nombre: "Cámara DSLR",
    imagen: "https://blasfotografia.com/wp-content/uploads/2018/04/DSLR.jpg",
    descripcion: "Cámara profesional DSLR con lente de 24MP y video en 4K.",
    precio: 1099.99,
    cantidad: 10,
    disponibilidad: true,
    oferta: true
  }
];
export interface Producto {
  nombre:string
  imagen:string
  descripcion:string
  precio:number
  cantidad:number
  disponibilidad:boolean
  oferta:boolean
}
export interface ProductosWithId extends Producto{
  id:number
}
const initialState: ProductosWithId[] = (()=>{
  const persistanceState=localStorage.getItem("__redux__state__")
  if(persistanceState){
    return JSON.parse(persistanceState).productos
  }
  return DEFAULT_STATE
})()


export const productosSlice = createSlice({
  name: "productos",
  initialState,
  reducers: {
    addNewProduct: (state, action: PayloadAction<Producto>) => {
      const id = parseInt(crypto.randomUUID());
      console.log([...state, { id , ...action.payload }]);
      return [...state, { id , ...action.payload }];
    },
    deleteProductById: (state, action: PayloadAction<number, string>) => {
      const id = action.payload;
      return state.filter((item) => item.id !== id);
    }
  },
});

export default productosSlice.reducer
export const { addNewProduct, deleteProductById } = productosSlice.actions