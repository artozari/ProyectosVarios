import React from 'react'
function EnLinea({conectado}) {
  return (
    <h3>{conectado? `En Linea`: `Fuera de Linea`}</h3>
  )
}

export default EnLinea
