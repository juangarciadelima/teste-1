import './App.css'

import React from 'react'
import Primeiro from './components/basicos/Primeiro'
import ComParams from './components/basicos/ComParametros'
import ComFilhos from './components/basicos/ComFilhos'
import Card from './layout/Card'
import Repeticao from './components/basicos/Repeticao'
import Condicional from './components/basicos/Condicional'
import CondicionalComIf from './components/basicos/CondicionalComIf'
import Pai from './components/comunicacao/direta/Pai'
import Super from './components/comunicacao/indireta/Super'
import Input from './components/form/input'
import Contador from './components/contador/Contador'
import Mega from './components/mega/Mega'
export default props => (
  <div className="App">
    <h1>Fundamentos React</h1>

    <div className="Cards">
      <Card titulo="#11 - MegaSena" color="#293E6A">
        <Mega qtdeNumero={8} />
      </Card>
      <Card titulo="#10 - Contador" color="#9C0F5F">
        <Contador passo={10} valor={100} />
      </Card>
      <Card titulo="#09 - Input" color="#2F9599">
        <Input />
      </Card>
      <Card titulo="#08 - Comunicação Indireta" color="#000">
        <Super />
      </Card>
      <Card titulo="#07 - Comunicação Direta" color="#E8175D ">
        <Pai sobrenome="Ferreira" />
      </Card>
      <Card titulo="#06 - Condicional V2" color="#F67280">
        <CondicionalComIf numero={4} />
      </Card>
      <Card titulo="#05 - Condicional v1" color="#355C7D ">
        <Condicional numero={43} />
      </Card>
      <Card titulo="#04 - Repetição" color="#F8B195 ">
        <Repeticao />
      </Card>
      <Card titulo="#03 - Componentes com Filhos" color="#99B898 ">
        <ComFilhos>
          <ul>
            <li>Ana</li>
            <li>Bia</li>
            <li>Carlos</li>
            <li>Daniel</li>
          </ul>
        </ComFilhos>
      </Card>
      <Card titulo="#02 - Componente com Parametros" color="#2A363B ">
        <ComParams titulo="Esse é o título" subtitulo="Esse é o subtitulo" />
      </Card>
      <Card titulo="#01 - Primeiro Componente" color="#2F9599">
        <Primeiro />
      </Card>
    </div>
  </div>
)
