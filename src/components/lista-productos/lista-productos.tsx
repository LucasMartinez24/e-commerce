import { useAppSelector } from '../../hooks/store';
import './listaProductos.css';
import Badge from '../badge/badge';
import { useProductActions } from '../../hooks/productos/useProductosActions';
const ListaProductos = () => {
  const productos=useAppSelector((state) => state.productos)
  const { deleteProduct }=useProductActions()
  return (
      <div className="table">
        <button className="buttons agregar"><a href="/admin/form">Agregar Producto</a></button>
        <Badge text={productos.length.toString()+" productos cargados"} variant="default" />
        <div className="table-section">
          <table className='table-products'>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Botones</th>
              </tr>
            </thead>
            <tbody>
              {productos.length > 0 ? (
                productos.map((item) => (
                  <tr key={item.id}>
                    <td><img src={item.imagen} alt="img" /></td>
                    <td>{item.nombre}</td>
                    <td>{item.precio.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' })}</td>
                    <td>
                      <button className='buttons'><i className="fa-solid fa-pen-to-square"></i></button>
                      {/* <Link to={`/formulario/${item.id}`}><i className="fa-solid fa-pen-to-square"></i></Link> */}
                      <button className='buttons' onClick={()=>deleteProduct(item.id)}><i className="fa-solid fa-trash"></i></button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr><td>No hay Productos</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default ListaProductos;
