import { useActionState, useState } from 'react'
import { Form } from 'react-aria-components'
import DeleteIcon from '../../assets/delete.svg?react'
import buttonStyles from '../form-button/FormButton.module.css'
import styles from './MainForm.module.css'
import { InputSize } from '../form-input/FormInput.types.ts'
import { ButtonSize, ButtonVariant } from '../form-button/FormButton.types.ts'
import RangeInputSlider from '../form-fields/RangeInputSlider.tsx'
import FormInput from '../form-input/FormInput.tsx'
import FormButton from '../form-button/FormButton.tsx'

function MainForm() {
  const minSize = -5;
  const maxSize = 5;
  const step = 0.5;
  const defaultSize = 0;

  const initialState = {
    data: { name: '', size: defaultSize },
    error: null
  }
  const [state,submitAction,isPending] = useActionState(submitForm,initialState);
  const [results, setResults] = useState(null);

  async function submitForm(prevState,formData) {
    const name = formData.get('name');
    const size = formData.get('size')

    try {
      const response = await fakePost({ name, size })
      return { data: response, error: null }
    } catch (e) {
      return { ...prevState, error: e.message }
    }
  }

  return (
    <Form action={submitAction} className={styles['form']}>
      <div className={styles['form-inputs__container']}>
        {/* Name */}
        <FormInput
          label="Name"
          name="name"
          size={InputSize.Medium}
          placeholder="enter text"
        />

        {/* Size Range Components: Input & Slider */}
        <RangeInputSlider
          inputName="size"
          inputLabel="Size (GB)"
          sliderAriaLabel="Size (GB)"
          defaultValue={state.data.size}
          min={minSize}
          max={maxSize}
          step={step}
        />
      </div>

      {/* Form Buttons*/}
      <div className={styles['form-buttons__container']}>
        {/* Reset */}
        <FormButton
          type="reset"
          variant={ButtonVariant.PrimaryOutlined}
          icon={<DeleteIcon className={`${buttonStyles['button__icon']} ${buttonStyles['button__icon--delete']}`}/>}
          size={ButtonSize.Medium}
          ariaLabel="Reset"
          text="Reset"
        />

        {/* Submit */}
        <FormButton
          type="submit"
          variant={ButtonVariant.PrimaryContained}
          size={ButtonSize.Medium}
          ariaLabel="Submit"
          text="Submit"
        />
      </div>

     
    </Form>
  )
}

export default MainForm;
