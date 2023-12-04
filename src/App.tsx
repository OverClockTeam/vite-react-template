import React from 'react';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import router from '@app/router';
import { store } from '@app/store';

import 'react-photo-view/dist/react-photo-view.css';
import './App.less';

const App = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>
  )
}

export default App
