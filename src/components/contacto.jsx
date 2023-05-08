import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Contacto } from '../models/contacto.class'
import EnLinea from './EnLinea'

function ContactoComponent({contact}) {
  return (
    <Fragment>
      <h3>{contact.nombre}</h3>
      <h3>{contact.apellido}</h3>
      <h3>{contact.email}</h3>
      <EnLinea conectado={contact.conectado} />
    </Fragment>
  )
}

ContactoComponent.propTypes = {
  contact: PropTypes.instanceOf(Contacto).isRequired
}

export default ContactoComponent
