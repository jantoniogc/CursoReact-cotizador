import React, { useState } from 'react';
import './App.css';
import Header from './components/header';
import Formulario from './components/Formulario';
import styled from '@emotion/styled';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #FFF;
  padding: 3rem;
`;

function App() {

  const [resumen, setResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: '',
      year: '',
      plan: ''
    }
  })

   const [cargando, setCargando] = useState(false);

  const { datos, cotizacion } = resumen;

  return (
    <Contenedor>
      <Header
        titulo="Cotizador de Seguros"
      ></Header>
      <ContenedorFormulario>
        <Formulario
          setResumen={setResumen}
          setCargando={setCargando}
        ></Formulario>
        {cargando ? <Spinner></Spinner> : null}
        
        <Resumen
          datos={datos}></Resumen>
        <Resultado
         cotizacion={cotizacion}></Resultado>
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
