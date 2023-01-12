import React, {useRef, useState} from 'react';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';
import SnackBar from './SnackBar';

const Contact = () => {
  const formId = 'FJfRZJs8';
  const formUrl = `https://submit-form.com/${formId}`;

  const initialFormState = {
    email: '',
    name: '',
    message: ''
  }

  const recaptchaKey = '6Lf_De8jAAAAAP18T3Hj9fDB4agLHdH_2XR7wuH2';
  const recatchaRef = useRef();

  const [formState, setFormState] = useState(initialFormState);
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [recatchaToken, setRecaptchaToken] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true);
    await submitForm();
    setSubmitting(false);
  }

  const submitForm = async () => {
    const payload = {
        ...formState,
        'g-recaptcha-response': recatchaToken
      };

    try {
      const result = await axios.post(formUrl, payload);
      console.log(result);
      setSuccessMessage({
        status: 'success'
      })
      setFormState(initialFormState);
      recatchaRef.current.reset();
      
      setTimeout(()=>{
        setSuccessMessage('')
      }, 3000)
      
    } catch (error) {
      setSuccessMessage({
        status: 'error'
      })

      setTimeout(()=>{
        setSuccessMessage('')
      }, 3000)
      console.log(error);
    }
  }

  const updateFormControl = (e) => {
    const { id, value } = e.target;
    const formKey = id;
    const updatedFormState = {...formState};
    updatedFormState[formKey] = value;
    setFormState(updatedFormState);
  }

  const updateRecaptchaToken = (token) => {
    setRecaptchaToken(token);
  }

  return (
    <div name='contact' className='w-full h-screen bg-white dark:bg-[#1f2021] text-[#1f2021] dark:text-white flex justify-center items-center p-4'>
        <div className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8 flex flex-col justify-center w-full h-full items-center'>
                <p className='text-4xl font-bold inline border-b-4 border-violet-400'>Get in touch</p>
                <p className='py-4'>If you are interested in knowing more about me or my work, send me a message.</p>
            </div>
         <form className='flex flex-col text-[#1f2021]' onSubmit={onSubmit}>
            <input 
              onChange={updateFormControl}
              className='border p-2' 
              type='text' 
              placeholder='Name' 
              name='name' 
              id='name' 
              value={formState.name}
              />
            <input 
              onChange={updateFormControl}
              className='my-4 p-2 border' 
              type="email" 
              placeholder='Email' 
              name='email'
              id='email'
              value={formState.email}
              required
              />
            <textarea 
              onChange={updateFormControl}
              className='border p-2 mb-4' 
              name="message" 
              rows="10" 
              placeholder='Message'
              id='message'
              value={formState.message}
              required
              
              ></textarea>

            <ReCAPTCHA
              ref={recatchaRef}
              sitekey={recaptchaKey}
              onChange={updateRecaptchaToken}
              />

            <button 
              disabled={submitting}
              className='px-4 py-3 my-8 mx-auto flex items-center cursor-pointer bg-violet-500 hover:bg-violet-400 text-white font-bold border-b-4 border-violet-700 hover:border-violet-500 rounded' 
              type='submit'>{submitting ? 'Sending...' : 'Send'}</button>
          </form>
          
          {successMessage && <SnackBar status={successMessage.status} message={true}/>}
        </div>
    </div>
  )
}
export default Contact;