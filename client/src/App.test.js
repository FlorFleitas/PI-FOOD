import { render, screen, shallow } from '@testing-library/react';
import App from './App';
import React from "react";
import NewRecipe from "../src/components/newRecipe/NewRecipe";

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});





