import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/App';
import { Provider } from 'react-redux';
import configureStore from '../src/redux';

test('renders without crashing', () => {
  const div = document.createElement('div');
  const store = configureStore();
  ReactDOM.render(<Provider store={store}><App/></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
