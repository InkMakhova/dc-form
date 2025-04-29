import { JSX } from 'react'
import MainForm from './components/main-form/MainForm.tsx';
import UIComponents from './components/ui-components/UIComponents.tsx';

function App(): JSX.Element {
  return (
    <>
      <h1>Small Form UI Components</h1>
      <h2>Form</h2>
      <MainForm />
      <UIComponents />
    </>
  )
}

export default App
