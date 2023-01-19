import { render, screen } from '@testing-library/react';
import Greet from './Greet';

test('Greet test', () => {
  render(<Greet />);
  const element = screen.getByText('Greet');
  expect(element).toBeInTheDocument();
});

test('Greet test with name', () => {
  render(<Greet name="hello" />);
  const element = screen.getByText('hello');
  expect(element).toBeInTheDocument();
});
