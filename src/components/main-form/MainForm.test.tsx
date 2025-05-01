import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import MainForm from './MainForm'

test('renders form with inputs and buttons', () => {
  render(<MainForm />)

  expect(screen.getByLabelText(/Name/i)).toBeInTheDocument()
  expect(screen.getByText(/Size \(GB\)/i)).toBeInTheDocument()
  expect(screen.getByRole('button', { name: /Submit/i })).toBeInTheDocument()
  expect(screen.getByRole('button', { name: /Clear/i })).toBeInTheDocument()
})

test('allows typing into input and submitting the form', async () => {
  render(<MainForm />)

  const nameInput = screen.getByLabelText(/Name/i)
  fireEvent.change(nameInput, { target: { value: 'Test User' } })

  const submitButton = screen.getByRole('button', { name: /Submit/i })
  fireEvent.click(submitButton)

  await waitFor(() => {
    expect(screen.getByText(/Submitted name:/i)).toBeInTheDocument()
    expect(screen.getByText(/Test User/i)).toBeInTheDocument()
  })
})

test('reset button clears results', async () => {
  render(<MainForm />)

  fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'Reset Me' } })
  fireEvent.click(screen.getByRole('button', { name: /Submit/i }))

  await waitFor(() => {
    expect(screen.getByText(/Submitted name:/i)).toBeInTheDocument()
  })

  fireEvent.click(screen.getByRole('button', { name: /Clear/i }))

  expect(screen.queryByText(/Submitted name:/i)).not.toBeInTheDocument()
})

