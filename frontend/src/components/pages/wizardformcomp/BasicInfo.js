import React from 'react'
import './BasicInfo.css'
import { TextField } from '@mui/material'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useFormContext, Controller, useForm } from 'react-hook-form';

function BasicInfo() {
  const { useFormContextControl , formState:{errors}, } = useFormContext();
  const { register } = useForm();
  return (
    <>
      <div className='basicinfo-body'>
        <div className='row'>
          <div className='col-6'>
            <Controller control={useFormContextControl} name='FirstName' rules={{required:"First Name is required",}} render={({ field }) => (
              <TextField id="FirstName" label="First Name" variant="standard" margin="normal" fullWidth  color="success" {...field}  error={errors.FirstName} helperText={errors.FirstName?.message} />
            )} />
          </div>
          <div className='col-6'>
            <Controller control={useFormContextControl} name='LastName' rules={{required:"Last Name is required",}} render={({ field }) => (
              <TextField id="LastName" label="Last Name" variant="standard" margin="normal" fullWidth color="success"   error={errors.LastName} helperText={errors.LastName?.message} {...field} />
            )} />
          </div>
        </div>
        <Controller control={useFormContextControl} name='Email' rules={{required:"Email is required",}} render={({ field }) => (
          <TextField id="Email" label="Email" variant="standard" margin="normal" fullWidth color="success" {...field} autoComplete='off'error={errors.Email} helperText={errors.Email?.message} />
        )} />
        <div className='row'>
          <div className='col-6'>
            <Controller control={useFormContextControl} name='Country' rules={{required:"Country is required",}} render={({ field }) => (
              <TextField id="Country" label="Country" variant="standard" margin="normal" fullWidth color="success" {...field} autoComplete='off' error={errors.Country} helperText={errors.Country?.message} />
            )} />
          </div>
          <div className='col-6'>
            <Controller control={useFormContextControl} name='City' rules={{required:"City is required",}} render={({ field }) => (
              <TextField id="City" label="City" variant="standard" margin="normal" fullWidth color="success" {...field} error={errors.City} helperText={errors.City?.message} />
            )} />
          </div>
        </div>
        <div className='row'>
          <div className='col-6'>
            <Controller control={useFormContextControl} name='mobileNo' rules={{required:"Mobile No is required",}} render={({ field }) => (
              <TextField id="mobileNo" label="Mobile No" variant="standard" margin="normal" fullWidth color="success" {...field} error={errors.mobileNo} helperText={errors.mobileNo?.message} />
            )} />
          </div>
          <div className='col-6'>
            <Controller control={useFormContextControl} name='pincode' rules={{required:"Pincode is required",}} render={({ field }) => (
              <TextField id="pincode" label="Pin Code" variant="standard" margin="normal" fullWidth color="success" {...field} error={errors.pincode} helperText={errors.pincode?.message} />
            )} />
          </div>
        </div>
        <div className='input-container'>
          <label htmlFor="DateofBirth" className="label">Date Of Birth</label>
          <Controller control={useFormContextControl} name='DateofBirth' rules={{required:"First Name is required",}} render={({ field }) => (
            <input type="date" id="DateofBirth" ref={register} {...field} error={errors.FirstName} helperText={errors.FirstName?.message} />
          )} />
        </div>

        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label" color="success">Gender</FormLabel>
          <Controller control={useFormContextControl} name='Gender' rules={{required:"First Name is required",}} render={({ field }) => (
            <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group" {...field} error={errors.FirstName} helperText={errors.FirstName?.message}>
              <FormControlLabel value="female" control={<Radio color="success" />} label="Female" />
              <FormControlLabel value="male" control={<Radio color="success" />} label="Male" />
              <FormControlLabel value="other" control={<Radio color="success" />} label="Other" />
            </RadioGroup>
          )} />
        </FormControl >


      </div>

    </>
  )
}

export default BasicInfo
