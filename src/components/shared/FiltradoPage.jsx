import React from 'react';
import styles from './style/FiltradoPage.module.css';

function FiltradoPage() {
  return (
    <div className={styles.filtrado}>
      <form className={styles.filtradoformulario}>
        <div>Cerear Busqueda Con filtro: &#x25BA;</div>
          <div className='div-filter'><span></span></div>
        <dir>
        <label htmlFor="">
          <span>Buscar Por Nombre</span>
          <input type="text" placeholder="Buscar Por nombre" />
        </label>
            <button>Busca</button>
        </dir>
        <dir>
        <label htmlFor="">
          <span>Buscar Por Pais</span>
          <input type="text" placeholder="Buscar Por nombre" />
        </label>
            <button>Busca</button>
        </dir>
        <dir>
        <label htmlFor="">
          <span>Buscar Por Dir..</span>
          <input type="text" placeholder="Buscar Por nombre" />
        </label>
            <button>Busca</button>
        </dir>

      </form>
    </div>
  );
}

export default FiltradoPage;
