import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import './index.css';
import App from './components/App/App';
import { UserProvider } from './contexts/UserContext'

import {
  faDoorOpen, faPlusCircle, faPlus, faTimes, faSearch, faSpinner
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faDoorOpen, // logo
  faPlusCircle,
  faPlus,
  faTimes,
  faSearch,
  faSpinner
)

ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <App />
    </UserProvider>
  </BrowserRouter>
  , document.getElementById('root'));