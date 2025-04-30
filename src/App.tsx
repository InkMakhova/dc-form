import { JSX } from 'react'
import MainForm from './components/main-form/MainForm.tsx';
import UIComponents from './components/ui-components/UIComponents.tsx';
import styles from "./components/ui-components/UIComponents.module.css";

function App(): JSX.Element {
  return (
    <div className='content'>
      <h1>Small Form UI Components</h1>

      {/* Form Section */}
      <section>
        <h2>Form</h2>
        <MainForm/>
      </section>

      {/* UI Components Section */}
      <section className={styles['ui-components']}>
        <h2>Variations of components</h2>
        <UIComponents/>
      </section>
    </div>
  )
}

export default App
