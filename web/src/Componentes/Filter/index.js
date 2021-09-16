import React from 'react'
import * as Styled from './styles'
import Img from'../../Imgs/filter2.png';

function Filter({title}) {
    return (
        
        <Styled.Container>
            <img src={Img} alt="FILTRO"/>
            <spam>{title}</spam>
        </Styled.Container>

    )

}
export default Filter;