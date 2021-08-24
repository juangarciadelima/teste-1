import React from 'react'

export default props => {
  return (
    <>
      <label htmlFor="PassoInput">Passo : </label>
      <input
        id="PassoInput"
        type="number"
        value={props.passo}
        onChange={e => props.onPassoChange(+e.target.value)}
      />
    </>
  )
}
