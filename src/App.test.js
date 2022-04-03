import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import App from './App';
import Login from './Components/Login';
import firebase from './firebase';
import { Button } from 'react-bootstrap';
import Header from './Components/Header';

it('does not crash', async  => {
  document.documentElement.innerHTML = App;
  fireEvent.click(screen.getByRole('Header'));
  
  expect(document.documentElement.innerHTML('Gram (+) rod  ')).toHaveClass('btn btn-secondary');
})