import React, { Component } from 'react'
import { Section } from '../../components/Utils/Utils'
import startled from './undraw_startled.svg'

import './NotFoundPage.scss'

export default class NotFoundPage extends Component {
  render() {
    return (
      <Section className='NotFoundPage'>
        <img src={startled} alt='startled' />
        <h2>404 - Page not found</h2>
        <p>Try going back to your previous page.</p>
      </Section>
    )
  }
}
