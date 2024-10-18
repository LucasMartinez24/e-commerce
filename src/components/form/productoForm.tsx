import React, { useRef, useState, useEffect } from 'react';
import "./productoForm.css";
import { useProductActions } from '../../hooks/productos/useProductosActions';
import Badge from '../badge/badge';
const ProductoForm: React.FC = () => {
  const { addProduct } = useProductActions();
  const buttonRef = useRef<HTMLDivElement | null>(null);
  const [uploadCompleted, setUploadCompleted] = useState(false);
  const [uploadPercent, setUploadPercent] = useState<number | undefined>(undefined);
  const [result,setResult] = useState<'ok'|'error'>()
  // Simulación del progreso de carga
  useEffect(() => {
    if (uploadPercent !== undefined) {
      // Añade la clase 'active' al botón
      if (buttonRef.current) {
        buttonRef.current.classList.add('active');
      }

      setTimeout(() => {
        // Remueve la clase 'active' y cambia el icono/texto después de 3 segundos
        if (buttonRef.current) {
          buttonRef.current.classList.remove('active');
        }
        setUploadCompleted(true); // Indica que la carga se ha completado
      }, 5000);
    }
  }, [uploadPercent]);

  // Simula la subida de la imagen
  const handleImageUpload = () => {
    setUploadPercent(100); // Simula el porcentaje de subida
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const form = event.currentTarget;
    const formData = new FormData(form);

    const producto = {
      nombre: formData.get('nombre') as string,
      descripcion: formData.get('descripcion') as string,
      precio: parseFloat(formData.get('precio') as string),
      cantidad: parseInt(formData.get('cantidad') as string),
      disponibilidad: formData.get('disponibilidad') === '1',
      oferta: formData.get('oferta') === '1',
      // imagen: formData.get('imagen') as string,
      imagen:"https://cubotlifestyle.com/cdn/shop/files/Untitleddesign-2024-02-26T111123.508.png?v=1711789991"
    };
    if(!form.checkValidity()){
      return setResult('error')
    }
    addProduct(producto);
    setResult('ok')
    form.reset(); 
  }
  return (
    <section className='section'>
      <div className="producto-container">
        <h2>Productos</h2>
        <span className="result">
              {result === 'ok' && <Badge text={"Guardado con exito"} variant='success'></Badge>}
              {result === 'error' && <Badge text={"Error al guardar"} variant='error'></Badge>}
            </span>
        <form className="formProducto" onSubmit={handleSubmit}>
          <input type="hidden" name="id" />
          <div className="input-box">
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" placeholder="Ingrese el nombre del producto:" id="nombre" required name="nombre" />
          </div>
          <div className="input-box">
            <label htmlFor="descripcion">Descripción:</label>
            <input type="text" placeholder="Ingrese una descripción del producto" id="descripcion" required name="descripcion" />
          </div>
          <div className="input-box">
            <label htmlFor="precio">Precio:</label>
            <input type="number" placeholder="Ingrese el precio:" id="precio" required name="precio" />
          </div>
          <div className="input-box">
            <label htmlFor="cantidad">Cantidad disponible:</label>
            <input type="number" placeholder="Ingrese la cantidad disponible:" id="cantidad" required name="cantidad" />
          </div>
          <div className="select-box">
            <label htmlFor="disponibilidad">Disponibilidad:</label>
            <select name="disponibilidad" id="disponibilidad" required>
              <option value="1">Sí</option>
              <option value="0">No</option>
            </select>
          </div>
          <div className="select-box">
            <label htmlFor="oferta">Es una Oferta:</label>
            <select name="oferta" id="oferta" required>
              <option value="1">Sí</option>
              <option value="0">No</option>
            </select>
          </div>
          <div className="imagen">
            <div>
              <label htmlFor="img">Imagen:</label>
              <input type="file" accept=".png,.jpg" placeholder="Ingrese un URL de imagen" name="imagen" id="img" />
            </div>
            <div className="button" ref={buttonRef} onClick={handleImageUpload}>
              <div className="cont">
                <i className={`bx ${uploadCompleted ? 'bx-check-circle' : 'bx-cloud-upload'}`}></i>
                <span className="button-text">
                  {uploadCompleted ? 'Imagen Subida' : 'Cargar img'}
                </span>
              </div>
            </div>
            <button type="submit">Enviar</button>
            
          </div>
        </form>
      </div>
    </section>
  );
};

export default ProductoForm;
