import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import LoginPage from './LoginPage';

describe('LoginPage route component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <LoginPage />
      , div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(
        <LoginPage />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
})