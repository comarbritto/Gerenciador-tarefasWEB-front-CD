import React from 'react'
import * as Styled from './styles'

function Filter(props) {
    return (
        
        <Styled.Container activation = {props.actived}>
            <img src={props.img} alt="FILTRO"/>
            <spam>{props.title}</spam>
        </Styled.Container>

    )

}
export default Filter;