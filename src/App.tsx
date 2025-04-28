import { JSX, useState } from 'react'
import AddIcon from './assets/plus.svg?react'
import { ButtonSize, ButtonType, IconPosition } from './components/form-button/FormButton.types.ts'
import { InputSize } from './components/form-input/FormInput.types.ts'
import FormButton from './components/form-button/FormButton.tsx'
import FormInput from './components/form-input/FormInput.tsx'
import FormNumberInput from './components/form-number-input/FormNumberInput.tsx'
import FormSlider from './components/slider/FormSlider.tsx'

function App(): JSX.Element {
  const [inputValue, setInputValue] = useState<string>('');
  const [volumeValue, setVolumeValue] = useState<number>(0);
  const [slider, setSlider] = useState<number>(0);

  return (
    <div>
      <h1>Small Form UI Components</h1>
      <h2>Form</h2>

      <section>
        <h2>Variations of components</h2>
        <div>
          <h3>Button</h3>
          {/* Small Primary Contained */}
          <FormButton
            type={ButtonType.PrimaryContained}
            size={ButtonSize.Small}
            text="Button"
            ariaLabel="Do something button"
            onPress={() => console.log("Click!")}
          />
          {/* Small Primary Contained */}
          <FormButton
            type={ButtonType.PrimaryContained}
            size={ButtonSize.Small}
            icon={<AddIcon/>}
            ariaLabel="Add something button"
            onPress={() => console.log("Click!")}
          />
          {/* Medium Primary Contained */}
          <FormButton
            type={ButtonType.PrimaryContained}
            size={ButtonSize.Medium}
            icon={<AddIcon/>}
            ariaLabel="Add something button"
            onPress={() => console.log("Click!")}
          />
          {/* Small Primary Contained Icon Left */}
          <FormButton
            type={ButtonType.PrimaryContained}
            size={ButtonSize.Small}
            icon={<AddIcon/>}
            iconPosition={IconPosition.Left}
            text="Button"
            ariaLabel="Add something button"
            onPress={() => console.log("Click!")}
          />
          {/* Small Primary Contained Icon Right*/}
          <FormButton
            type={ButtonType.PrimaryContained}
            size={ButtonSize.Small}
            icon={<AddIcon/>}
            iconPosition={IconPosition.Right}
            text="Button"
            ariaLabel="Add something button"
            onPress={() => console.log("Click!")}
          />
          {/* Small Primary Contained Disabled */}
          <FormButton
            type={ButtonType.PrimaryContained}
            size={ButtonSize.Small}
            icon={<AddIcon/>}
            iconPosition={IconPosition.Right}
            text="Button"
            ariaLabel="Add something button"
            disabled
            onPress={() => console.log("Click!")}
          />
          {/* Medium Primary Contained */}
          <FormButton
            type={ButtonType.PrimaryContained}
            size={ButtonSize.Medium}
            icon={<AddIcon/>}
            iconPosition={IconPosition.Right}
            ariaLabel="Add something button"
            text="Button"
            onPress={() => console.log("Click!")}
          />
          {/* Medium Primary Contained Icon Left */}
          <FormButton
            type={ButtonType.PrimaryContained}
            size={ButtonSize.Medium}
            icon={<AddIcon/>}
            iconPosition={IconPosition.Left}
            ariaLabel="Add something button"
            text="Button"
            onPress={() => console.log("Click!")}
          />
          {/* Medium Primary Contained Icon Right*/}
          <FormButton
            type={ButtonType.PrimaryContained}
            size={ButtonSize.Medium}
            icon={<AddIcon/>}
            iconPosition={IconPosition.Right}
            ariaLabel="Add something button"
            text="Button"
            onPress={() => console.log("Click!")}
          />
          {/* Medium Primary Contained Disabled */}
          <FormButton
            type={ButtonType.PrimaryContained}
            size={ButtonSize.Medium}
            icon={<AddIcon/>}
            iconPosition={IconPosition.Right}
            text="Button"
            ariaLabel="Add something button"
            disabled
            onPress={() => console.log("Click!")}
          />

          {/* Medium Primary Outlined */}
          <FormButton
            type={ButtonType.PrimaryOutlined}
            size={ButtonSize.Medium}
            icon={<AddIcon/>}
            iconPosition={IconPosition.Right}
            ariaLabel="Add something button"
            text="Button"
            onPress={() => console.log("Click!")}
          />
          {/* Medium Primary Outlined Icon Left */}
          <FormButton
            type={ButtonType.PrimaryOutlined}
            size={ButtonSize.Medium}
            icon={<AddIcon/>}
            iconPosition={IconPosition.Left}
            ariaLabel="Add something button"
            text="Button"
            onPress={() => console.log("Click!")}
          />
          {/* Medium Primary Outlined Icon Right*/}
          <FormButton
            type={ButtonType.PrimaryOutlined}
            size={ButtonSize.Medium}
            icon={<AddIcon/>}
            iconPosition={IconPosition.Right}
            ariaLabel="Add something button"
            text="Button"
            onPress={() => console.log("Click!")}
          />
          {/* Medium Primary Outlined Disabled */}
          <FormButton
            type={ButtonType.PrimaryOutlined}
            size={ButtonSize.Medium}
            icon={<AddIcon/>}
            iconPosition={IconPosition.Right}
            text="Button"
            ariaLabel="Add something button"
            disabled
            onPress={() => console.log("Click!")}
          />

          {/* Medium Secondary Contained */}
          <FormButton
            type={ButtonType.SecondaryContained}
            size={ButtonSize.Medium}
            icon={<AddIcon/>}
            iconPosition={IconPosition.Right}
            text="Button"
            ariaLabel="Add something button"
            onPress={() => console.log("Click!")}
          />
          {/* Medium Secondary Contained Icon Left */}
          <FormButton
            type={ButtonType.SecondaryContained}
            size={ButtonSize.Medium}
            icon={<AddIcon/>}
            iconPosition={IconPosition.Left}
            ariaLabel="Add something button"
            text="Button"
            onPress={() => console.log("Click!")}
          />
          {/* Medium Secondary Contained Icon Right*/}
          <FormButton
            type={ButtonType.SecondaryContained}
            size={ButtonSize.Medium}
            icon={<AddIcon/>}
            iconPosition={IconPosition.Right}
            text="Button"
            ariaLabel="Add something button"
            onPress={() => console.log("Click!")}
          />
          {/* Medium Secondary Contained Disabled */}
          <FormButton
            type={ButtonType.SecondaryContained}
            size={ButtonSize.Medium}
            icon={<AddIcon/>}
            iconPosition={IconPosition.Right}
            text="Button"
            ariaLabel="Add something button"
            disabled
            onPress={() => console.log("Click!")}
          />

          {/* Medium Secondary Outlined */}
          <FormButton
            type={ButtonType.SecondaryOutlined}
            size={ButtonSize.Medium}
            icon={<AddIcon/>}
            iconPosition={IconPosition.Right}
            text="Button"
            ariaLabel="Add something button"
            onPress={() => console.log("Click!")}
          />
          {/* Medium Secondary Outlined Icon Left */}
          <FormButton
            type={ButtonType.SecondaryOutlined}
            size={ButtonSize.Medium}
            icon={<AddIcon/>}
            iconPosition={IconPosition.Left}
            text="Button"
            ariaLabel="Add something button"
            onPress={() => console.log("Click!")}
          />
          {/* Medium Secondary Outlined Icon Right*/}
          <FormButton
            type={ButtonType.SecondaryOutlined}
            size={ButtonSize.Medium}
            icon={<AddIcon/>}
            iconPosition={IconPosition.Right}
            text="Button"
            ariaLabel="Add something button"
            onPress={() => console.log("Click!")}
          />
          {/* Medium Secondary Outlined Disabled */}
          <FormButton
            type={ButtonType.SecondaryOutlined}
            size={ButtonSize.Medium}
            icon={<AddIcon/>}
            iconPosition={IconPosition.Right}
            text="Button"
            ariaLabel="Add something button"
            disabled
            onPress={() => console.log("Click!")}
          />

          <h3>Input</h3>
          {/* Form Input Small */}
          <FormInput
            label="Label"
            placeholder="enter text"
            size={InputSize.Small}
            value={inputValue}
            onChange={(value: string): void => {
              setInputValue(value)
            }}
          />
          {/* Form Input Medium */}
          <FormInput
            label="Label"
            placeholder="enter text"
            size={InputSize.Medium}
            value={inputValue}
            onChange={(value: string): void => {
              setInputValue(value)
            }}
          />
          {/* Form Input Medium Disabled */}
          <FormInput
            label="Label"
            placeholder="enter text"
            size={InputSize.Medium}
            value={inputValue}
            onChange={(value: string): void => { setInputValue(value) }}
            disabled
          />

          <h3>Number Input</h3>
          <FormNumberInput
            label="Size(GB)"
            placeholder="Input size (GB)"
            // disabled
            min={0}
            max={10}
            value={volumeValue}
            onChange={(value: string): void => { setVolumeValue(Number(value)) }}
            onDecrement={(): void => { setVolumeValue(prevState => prevState - 1) }}
            onIncrement={(): void => { setVolumeValue(prevState => prevState + 1) }}
          />

          <h3>Slider</h3>
          <div style={{marginBottom: 25}}>
            <FormSlider
              // label='Slider'
              minValue={0}
              maxValue={10}
              value={slider}
              onChange={(value: number): void => { setSlider(value)}}
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
