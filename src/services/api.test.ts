// import { render, fireEvent } from '@testing-library/react';
import { signIn, signUp } from './api';

describe('API functions', () => {
  test('signIn function', async () => {
    const userData = await signIn('test@example.com', 'password');
    expect(userData).toEqual(expect.objectContaining({ token: expect.any(String) }));
  });

  test('signUp function', async () => {
    const userData = await signUp('test@example.com', 'password');
    expect(userData).toEqual(expect.objectContaining({ token: expect.any(String) }));
  });
});
