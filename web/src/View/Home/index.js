
import React from 'react';
import * as Styled from './styles';
import Header from '../../Componentes/Header';
import Footer from '../../Componentes/Footer';
import Filter from '../../Componentes/Filter';

function Home() {
  return (
    <Styled.Container>
      <Header />
        <Styled.ContainerFilter>
          <Filter title="TODOS"/>
          <Filter title="HOJE"/>
          <Filter title="SEMANA"/>
          <Filter title="MÊS"/>                   
        </Styled.ContainerFilter>    
      <Footer/>
    </Styled.Container>
  )
}

/* REPONSÁVEL POR EXPORTAR A FUNÇÃO PARA OUTRAS ÁREA DO CÓDIGO */
export default Home;
