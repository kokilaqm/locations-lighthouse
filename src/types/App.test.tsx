import React from 'react'
import { render, screen } from '@testing-library/react'
import { App } from '../App'

test('should display app component content', () => {
  render(<App />)
  const linkElement = screen.getByText(/Patient Profile/i)
  expect(linkElement).toBeInTheDocument()
})
