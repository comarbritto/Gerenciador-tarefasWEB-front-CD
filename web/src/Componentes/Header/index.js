
import React from 'react'
import * as Styled from './styles'


function Header(){
    return (
        
        <Styled.Container>
          <Styled.Menu>
            <a href="www.google.com.br">INÍCIO</a>
            <span className="barra"  />
            <a href="www">TAREFA</a>
          </Styled.Menu>
        </Styled.Container>

    )

}


export default Header;