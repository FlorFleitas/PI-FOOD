import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, prettyDOM } from '@testing-library/react';

import LandingPage from '../components/landing page/LandingPage';


let h1;
beforeAll(() => {
  h1 = 'WELCOME TO THE #1 RECIPES WEBPAGE IN AMERICA!';
})

test('se esta renderizando el componente', () => {
  const component = render(<LandingPage ha1={h1} />);
});
