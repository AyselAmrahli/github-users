import React from 'react';
import { render } from '@testing-library/react';
import UserDetailProvider from '../context/userDetailProvider';
import userEvent from '@testing-library/user-event';
import Home from './Home';

describe('Home page Component', () => {
  test('renders home components page', async () => {
    const { getByTestId } = render(<UserDetailProvider><Home/></UserDetailProvider>);
    const searchBtn = getByTestId('data-search-button');
    const input = getByTestId('data-search-user');

    userEvent.type(input, "ayselamrahli")

    expect(searchBtn).toHaveTextContent('Search');
    expect(searchBtn).not.toBeDisabled();
  });
});