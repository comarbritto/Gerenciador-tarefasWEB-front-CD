
import React, {useState} from 'react';
import * as Styled from './styles';

/* IMAGENS */
import Imagem from'../../Imgs/filter2.png';
import futebol from'../../Imgs/futebol.jpg';
import viagem from'../../Imgs/viagem.png';
import cinema from'../../Imgs/cinema.png';
import lanche from'../../Imgs/lanche.jpg';
import prova from'../../Imgs/prova.jpg';
import academia from'../../Imgs/academia.jpg';
import compra from'../../Imgs/compra.jpg';
import trabalho from'../../Imgs/trabalho.png';

/* COMPONENTES*/
import Header from '../../Componentes/Header';
import Footer from '../../Componentes/Footer';
import Filter from '../../Componentes/Filter';
import TaskCard from '../../Componentes/TaskCard';


function Home() {

  const [filterActive, functionFilter] = useState();
  return (
    <Styled.Container>
      <Header />
        <Styled.ContainerFilter>
        
          <button type='button' onClick={() => functionFilter('todos')}> 
          <Filter title="TODOS" img={Imagem} actived={filterActive ==='todos'}/>
          </button>
         
          <button type='button' onClick={() => functionFilter('hoje')}>
          <Filter title="HOJE" img={Imagem} actived={filterActive === 'hoje'}/> 
          </button>

          <button type='button' onClick={() => functionFilter('semana')}> 
          <Filter title="SEMANA"img={Imagem} actived={filterActive === 'semana'}/> 
          </button>
          
          <button type='button' onClick={() => functionFilter('mes')}> 
          <Filter title="MÊS" img={Imagem} actived={filterActive === 'mes'}/>   
          </button>
                         
        </Styled.ContainerFilter>  

        <Styled.ContainerCard> 
        <TaskCard img={futebol} title="Futebol"/>
        <TaskCard img={viagem} title="Viagem"/>
        <TaskCard img={cinema} title="Cinema"/>
        <TaskCard img={lanche} title="Lanche"/>
        <TaskCard img={prova} title="Prova"/>
        <TaskCard img={academia} title="Academia"/>
        <TaskCard img={compra} title="Compra"/>
        <TaskCard img={trabalho} title="Trabalho"/>

        </Styled.ContainerCard>

      <Footer/>
    </Styled.Container>
  )
}

/* REPONSÁVEL POR EXPORTAR A FUNÇÃO PARA OUTRAS ÁREA DO CÓDIGO */
export default Home;
