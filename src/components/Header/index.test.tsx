import React from 'react';
import { render } from '@testing-library/react';
import Header from './index';

describe('Header Component', () => {
  test('renders header component ', async () => {
    const { getByTestId } = render(<Header />);

    const header = getByTestId('data-header');
    const content = getByTestId('data-header-content');

    expect(header).toHaveClass('header');
    expect(content).toHaveTextContent('Github Users');
  });
});