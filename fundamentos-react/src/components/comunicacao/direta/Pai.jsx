import React from 'react'
import Filho from './Filho'

export default props => (
  <>
    <div>
      <Filho {...props}>
        <strong>João</strong>
      </Filho>
      <Filho sobrenome={props.sobrenome}>
        <strong>Pedro</strong>
      </Filho>
      <Filho sobrenome="Silva">
        <strong>Maristela</strong>
      </Filho>
    </div>
  </>
)
