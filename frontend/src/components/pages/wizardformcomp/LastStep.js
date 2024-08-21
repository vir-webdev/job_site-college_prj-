import React from 'react';
import './LastStep.css';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import { useFormContext, Controller } from 'react-hook-form';

export default function LastStep() {
  const { useFormContextControl } = useFormContext();


  return (
    <>
      <div className="last-step-body ">
        <div className='laststep-header mt-5'>
          <h4> Language</h4>
        </div>
        <div className='laststep-description'>
          <p>Add Languages you know to increase your chances of getting hired </p>
        </div>
        <FormControl>
          <FormLabel><h5 className='mt-4'>What is your English level?</h5></FormLabel>
          <Controller control={useFormContextControl} name='EnglishLevel' render={({ field }) => (
            <RadioGroup name="radio-buttons-group" {...field}>
              <Radio value="No English" label="No English" color='success' />
              <Radio value="Basic" label="Basic" color='success' slotProps={{ input: { 'aria-describedby': 'basic-helper-text' } }} />
              <FormHelperText id="basic-helper-text">
                You can understand/speck basic sentences
              </FormHelperText>
              <Radio value="Intermediate" label="Intermediate" color='success' slotProps={{ input: { 'aria-describedby': 'intermediate-helper-text' } }} />
              <FormHelperText id="intermediate-helper-text">
                You can ave a conversation in English on some topic
              </FormHelperText>
              <Radio value="Advanced" label="Advanced" color='success' slotProps={{ input: { 'aria-describedby': 'Advanced-helper-text' } }} />
              <FormHelperText id="Advanced-helper-text">
                You can do your entire job in English and speck fluently
              </FormHelperText>
            </RadioGroup>
          )} />
        </FormControl>
      </div>
    </>
  )
}

