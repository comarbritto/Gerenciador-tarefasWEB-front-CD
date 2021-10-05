import React from 'react'
import * as Styled from './styles'


function TaskCard(props){
    return (
        
        <Styled.Container>
         <Styled.TopCard>
            <img src={props.img} alt="tarefa"></img>
            <h3>{props.title}</h3>
         </Styled.TopCard>
         <Styled.BottomCard>
            <strong>16/09/2021</strong>
            <span>21:16</span>

         </Styled.BottomCard>
        </Styled.Container>

    )

}
export default TaskCard;