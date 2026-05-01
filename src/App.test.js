import { render, screen } from '@testing-library/react';
import App from './App';

beforeAll(() => {
  global.IntersectionObserver = class IntersectionObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
});

test('renders portfolio homepage content', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', { name: /hi, i'm prerona choudhury/i })
  ).toBeInTheDocument();
  expect(screen.getByText(/cyber security enthusiast/i)).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /view projects/i })).toBeInTheDocument();
});
