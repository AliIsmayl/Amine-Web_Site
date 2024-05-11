import React from 'react'
import "./index.scss"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SendMeassage = () => {
    const initialValues = {
        firstname: '',
        email: '',
        message: ''
      };
    
      const validationSchema = Yup.object().shape({
        firstname: Yup.string().required('Adınızı daxil edin!'),
        email: Yup.string().email('düzqün email daxil edin').required('Email daxil edin!'),
        message: Yup.string().required('Müraciətin mətni daxil edin!')
      });
      const handleSubmit = (values, { resetForm }) => {
        resetForm()
        };    
  return (
    <div className='send-message'>
        <div className="container">
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
           <div className='form-group'>
           <Field
              name="firstname"
              type="text"
              placeholder="Ad*"
            />
           <div className="red"><ErrorMessage name="firstname"  />
</div> 
           </div>
            <div className='form-group'>
            <Field
              name="email"
              type="email"
              placeholder="Email*"
            />
           <div className="red"><ErrorMessage name="email"  />
</div> 
            </div>
          <div className='form-group'>
          <Field
              name="message"
              as="textarea"
              placeholder="Müraciətin mətni..."
            />
           <div className="red"><ErrorMessage name="message"  />
</div> 
          </div>
            <button  type="submit">Mesajınızı göndərin</button>
          </Form>
        )}
      </Formik>
        
        </div>
     
    </div>
  )
}

export default SendMeassage
