import { render, screen } from '@testing-library/react';
import App from 'app';

test('renders without crashing', () => {
  render(<App />);
});
