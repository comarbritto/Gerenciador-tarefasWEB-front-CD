
import React, {useState} from 'react';
import * as Styled from './styles';
import Header from '../../Componentes/Header';
import Footer from '../../Componentes/Footer';
import Filter from '../../Componentes/Filter';
import Imagem from'../../Imgs/filter2.png';


function Home() {

  const [filterActive, functionFilter] = useState();
  return (
    <Styled.Container>
      <Header />
        <Styled.ContainerFilter>
        
          <button type='button' onClick={() => functionFilter('todos')}> 
          <Filter title="Todos" img={Imagem} actived={filterActive == 'todos'}/>
          </button>
         
          <button type='button' onClick={() => functionFilter('hoje')}>
          <Filter title="HOJE" img={Imagem} actived={filterActive == 'hoje'}/> 
          </button>

          <button type='button' onClick={() => functionFilter('semana')}> 
          <Filter title="SEMANA"img={Imagem} actived={filterActive == 'semana'}/> 
          </button>
          
          <button type='button' onClick={() => functionFilter('mes')}> 
          <Filter title="MÊS" img={Imagem} actived={filterActive == 'mes'}/>   
          </button>
                         
        </Styled.ContainerFilter>    
      <Footer/>
    </Styled.Container>
  )
}

/* REPONSÁVEL POR EXPORTAR A FUNÇÃO PARA OUTRAS ÁREA DO CÓDIGO */
export default Home;
