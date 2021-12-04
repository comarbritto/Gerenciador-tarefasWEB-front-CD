import React, {useState, useEffect} from 'react';
import * as Styled from './styles';
import api from '../../Services/api';
import {Link} from 'react-router-dom';



/* IMAGENS */
import Imagem from '../../Imgs/filter.png';




/* COMPONENTES */
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Filter from '../../Components/Filter';
import TaskCard from '../../Components/TaskCard';



function Home() {

  //variável e função responsável por atualizar o valor do filtro
  const [filterActive, functionFilter] = useState('all');

  // a setTasks vai ser a função responsável por armazenar na variável tasks as tarefas retornadas do banco de dados
  const [tasks, setTasks] = useState([]);

  //função responsável por fazer as requisições para o backend
  async function loadTasks(){
    await api.get(`/task//filter/${filterActive}/11:11:11:11:11:11`)
    .then(response => {
      setTasks(response.data)
    })
  }

  useEffect(() => {
    loadTasks();
  }, [filterActive, loadTasks])

  return (
    <Styled.Container>
      <Header />
        <Styled.ContainerFilter>
          <button type='button' onClick={() => functionFilter('all')}>
          <Filter title="Todos" img={Imagem} actived={filterActive === 'all'}/>
          </button>

          <button type='button' onClick={() => functionFilter('today')}>
          <Filter title="Hoje" img={Imagem} actived={filterActive === 'today'}/>
          </button>

          <button type='button' onClick={() => functionFilter('week')}>
          <Filter title="Semana" img={Imagem} actived={filterActive === 'week'}/>
          </button>

          <button type='button' onClick={() => functionFilter('month')}>
          <Filter title="Mês" img={Imagem} actived={filterActive === 'month'}/>
          </button>
          
         </Styled.ContainerFilter>

         <Styled.ContainerCard>
           {
             tasks.map(
               t =>(  
               <Link to={`/task/${t._id}`}>  
                  <TaskCard type={t.type} title={t.title} when={t.when} />
               </Link>
               ))
           }
         </Styled.ContainerCard>
      
      <Footer />
    </Styled.Container>
  )
}

/* REPONSÁVEL POR EXPORTAR A FUNÇÃO PARA OUTRAS ÁREA DO CÓDIGO */
export default Home;