import { useState } from 'react'
import { TextField } from '@mui/material'

import { InputContainer, SubmitButton } from './styles'
import { useDestination, settingLocation } from '../context/destinationContext'

export const ZipCodeInput = ({ handleSubmit }) => {
  const { dispatch, zipCode, setZipCode, isValidZipCode, setIsValidZipCode } = useDestination()
  const [zipCodeValue, setZipCodeValue] = useState(zipCode)
  const [isValidZipCodeValue, setIsValidZipCodeValue] = useState(isValidZipCode)

  const handleZipCodeChange = (event) => {
    const { value } = event.target
    setZipCodeValue(value)

    // Validate ZIP code using a regular expression
    const zipCodeRegex = /^\d{5}(?:[-\s]\d{4})?$/
    setIsValidZipCodeValue(zipCodeRegex.test(value))
  }

  const handleButtonClick = () => {
    setZipCode(zipCodeValue)
    setIsValidZipCode(isValidZipCodeValue)
    settingLocation({ dispatch })
    if (handleSubmit) handleSubmit()
  }

  return (
    <InputContainer>
      <TextField
        helperText={isValidZipCodeValue && zipCodeValue ? '' : 'Invalid ZIP code'}
        id='zipCodeInput'
        label='ZIP Code'
        value={zipCodeValue}
        onChange={handleZipCodeChange}
      />
      <SubmitButton disabled={!isValidZipCodeValue} size='large' variant='contained' id='zipCodeSubmitButton' onClick={handleButtonClick}>
        Submit
      </SubmitButton>
    </InputContainer>
  )
}
