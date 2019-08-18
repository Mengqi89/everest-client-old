import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import './index.css';
import App from './components/App/App';
import { JobsProvider } from './contexts/JobsContext'
import { UserProvider } from './contexts/UserContext'

import {
  faDoorOpen, faPlusCircle, faPlus, faTimes, faSearch, faSpinner, faCheck, faClipboard
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faDoorOpen, // logo
  faPlusCircle,
  faPlus,
  faTimes,
  faSearch,
  faSpinner,
  faCheck,
  faClipboard
)
// console.log(process.env)
ReactDOM.render(
  <BrowserRouter>
    <JobsProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </JobsProvider>
  </BrowserRouter>
  , document.getElementById('root'));