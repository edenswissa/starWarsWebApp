import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './store/reducer';
import SWapp from './sWapp/SWapp';
import { CookiesProvider } from 'react-cookie';

const store = createStore(reducer);

function App() {
  return (
    <CookiesProvider>
      <Provider store={store}>
        <BrowserRouter>
          <SWapp />
        </BrowserRouter>
      </Provider>
    </CookiesProvider>
  );
}

export default App;
