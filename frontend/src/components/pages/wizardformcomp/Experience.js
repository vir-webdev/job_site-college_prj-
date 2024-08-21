import React from 'react'
import './Experience.css';
import { useFormContext, Controller } from 'react-hook-form';
import FormLabel from '@mui/joy/FormLabel';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Sheet from '@mui/joy/Sheet';
function Experience() {
  const { useFormContextControl } = useFormContext();

  return (
    <>
      <div className='experience-body'>
        <div className='experience-data mt-5'>
          <FormLabel id="storage-label-eduction" ><h5 className='mb-4'>Year of Experience</h5></FormLabel>
          <Controller control={useFormContextControl} name='Experience' render={({ field }) => (
            <RadioGroup aria-labelledby="storage-label" orientation="horizontal" size="lg" {...field}
              sx={{
                gap: 1,
              }}>
              {['Fresher', '1-6 Months', '1-2 Years', '2-5 Years', '5+ Years '].map((value) => (
                <Sheet key={value}
                  sx={{
                    p: 1,
                    pl: 2,
                    pr: 2,
                    borderRadius: '20px',
                    boxShadow: 'lg',
                  }}
                >
                  <Radio
                    label={value}
                    overlay
                    disableIcon
                    value={value}
                    slotProps={{
                      label: ({ checked }) => ({
                        sx: {
                          fontWeight: 'lg',
                          fontSize: 'md',
                          color: checked ? 'text.primary' : 'text.success',
                        },
                      }),
                      action: ({ checked }) => ({
                        sx: (theme) => ({
                          ...(checked && {
                            '--variant-borderWidth': '2px',
                            '&&': {
                              // && to increase the specificity to win the base :hover styles
                              borderColor: theme.vars.palette.success[400],
                            },
                          }),
                        }),
                      }),
                    }}
                  />
                </Sheet>
              ))}
            </RadioGroup>
          )} />
        </div>
      </div>
    </>
  )
}

export default Experience
