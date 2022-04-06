import React from 'react';
import {cleanup, fireEvent, queryByText, render} from '@testing-library/react';
import AuthContext from './contexts/AuthContext'
import CreateClass from './Components/ProfessorClasses'

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it('CheckboxWithLabel changes the text after click', () => {
  const codeID = "r4ndom"
  const {queryByText, getByText} = render(
    <CreateClass/>
  );

  expect(queryByText("ClassCode:")).toBeTruthy();

  fireEvent.click(getByText());

  expect(queryByLabelText(/on/i)).toBeTruthy();
});



// import { fireEvent, render, screen, waitFor } from '@testing-library/react';
// import '@testing-library/jest-dom';
// import React from 'react';
// import App from './App';
// import Login from './Components/Login';
// import firebase from './firebase';
// import { Button } from 'react-bootstrap';
// import Header from './Components/Header';

// it('does not crash', async  => {
//   document.documentElement.innerHTML = App;
//   fireEvent.click(screen.getByRole('Header'));
  
//   expect(document.documentElement.innerHTML('Gram (+) rod  ')).toHaveClass('btn btn-secondary');
// })