import React ,{useState} from 'react'
import './Forgot.css';
import img from '../../img/forgotpass.jpg';
export default function Adv() {
  const [values,setvalues] = useState({
		email:""
		
	});
	const hendleChange = (event)=>{
		setvalues({
			...values, 
			[event.target.name]:event.target.value,
		});
	};
	const hendleFromSubmit = (event) => {
		event.preventDefault();
	};

	
	const [errors,setErrors] = useState ({});
	
  return (
    <>
    <div className='div2'>
        <div className='content'>
        <div class="logo-container">
        Forgot Password
      </div>
        <div className='forgot-img'>
            <img src={img} alt="" />
        </div>
    <div class="form-container">
     

      <form class="form">
        <div class="form-group">
          <label for="email">Email</label>
          <input type="text" id="email" name="email" placeholder="Enter your email" required="" 
          value={values.email} onChange={hendleChange}
          />
        </div>
        {errors.email && <p className='error'>{errors.email}</p>}
        <button className='forgot-button'
        onClick={hendleFromSubmit}
        > <span>submit</span>
						</button>
      </form>

      <p class="signup-link">
        Don't have an account?
        <a href="/" class="signup-link link"> Sign up now</a>
      </p>
    </div>
    </div>
    </div>
    </>
  )
}
