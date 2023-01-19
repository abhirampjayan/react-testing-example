import { render, screen } from '@testing-library/react';
import Greet from './Greet';

describe.only('Greet', () => {
  test('Greet test', () => {
    render(<Greet />);
    const element = screen.getByText('Greet');
    expect(element).toBeInTheDocument();
  });
  test.skip('Greet test 2', () => {
    render(<Greet />);
    const element = screen.getByText('Greet');
    expect(element).toBeInTheDocument();
  });
  describe('Nested', () => {
    test('Greet test with name', () => {
      render(<Greet name="hello" />);
      const element = screen.getByText('hello');
      expect(element).toBeInTheDocument();
    });
  });
});
describe('Skipped Group', () => {
  test('Greet test with name', () => {
    render(<Greet name="hello" />);
    const element = screen.getByText('hello');
    expect(element).toBeInTheDocument();
  });
});
