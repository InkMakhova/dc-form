import { useActionState, useState } from 'react'
import { Form } from 'react-aria-components'
import DeleteIcon from '../../assets/delete.svg?react'
import buttonStyles from '../form-button/FormButton.module.css'
import styles from './MainForm.module.css'
import { InputSize } from '../form-input/FormInput.types.ts'
import { ButtonSize, ButtonVariant } from '../form-button/FormButton.types.ts'
import { FormDataType, SubmitResult, FormState} from "./MainForm.types.ts";
import RangeInputSlider from '../form-fields/RangeInputSlider.tsx'
import FormInput from '../form-input/FormInput.tsx'
import FormButton from '../form-button/FormButton.tsx'

function MainForm() {
  const minSize = 10;
  const maxSize = 100;
  const step = 5;
  const defaultSize = 55;

  const initialState = {
    data: { name: '', size: defaultSize },
    error: null
  }
  const [state,submitAction,isPending] = useActionState<FormState, FormData>(submitForm,initialState);
  const [results, setResults] = useState<SubmitResult | null>(null);

  async function fakePost(data: FormDataType): Promise<SubmitResult> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ ...data, submittedAt: new Date().toLocaleTimeString() });
      }, 1000);
    });
  }

  async function submitForm(prevState: FormState, formData: FormData): Promise<FormState> {
    const name = formData.get('name') as string;
    const sizeValue = formData.get('size');
    const size = sizeValue !== null ? parseFloat(sizeValue as string) : NaN;

    try {
      const response = await fakePost({ name, size })
      setResults(response);
      return initialState;
    } catch (e: unknown) {
      const message = e instanceof Error ? e.message : 'Unknown error';
      return { ...prevState, error: message }
    }
  }

  function reset() { setResults(null) }

  // Render
  return (
    <Form action={submitAction} className={styles['form']} onReset={reset}>
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
          text={isPending ? "Submitting..." : "Submit"}
          pending={isPending}
        />
      </div>

      { results && (
          <div>
            <p><strong>Submitted name:</strong> {results.name}</p>
            <p><strong>Submitted size:</strong> {results.size} GB</p>
            <p><strong>Time:</strong> {results.submittedAt}</p>
          </div>
        )
      }

      { state.error &&
        <div>
          <p><strong>Error:</strong> {state.error}</p>
        </div>
      }
    </Form>
  )
}

export default MainForm;
