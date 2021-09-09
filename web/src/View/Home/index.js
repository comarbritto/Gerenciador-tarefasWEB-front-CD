
import React from 'react';
import * as Styled from './styles';
import Header from '../../Componentes/Header';
import Footer from '../../Componentes/Footer';

function Home() {
  return (
    <Styled.Container>
      <Header />
      <Footer/>
    </Styled.Container>
  )
}

/* REPONSÁVEL POR EXPORTAR A FUNÇÃO PARA OUTRAS ÁREA DO CÓDIGO */
export default Home;
