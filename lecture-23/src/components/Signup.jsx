import React from 'react'
import * as Yup from 'yup'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { useNavigate } from 'react-router-dom'
import { formDataSaveFromLocalStorage } from '../Auth/Auth'


const Signup = () => {
    const navigate = useNavigate();

  const initialValues = {
    FullName: '',
    email: '',
    password: ''
}

const onSubmit = (values) => {
formDataSaveFromLocalStorage(values)
navigate("/login")
console.log(values);

};

const validationschema = Yup.object({
    FullName: Yup.string().required('Required'),
    email: Yup.string().required('Required').email('Invalid').matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 'Invalid Email Address'),
    password: Yup.string().required('Required')
})
  return (
    <div>
            
            <div className='flex justify-center mt-16'>
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationschema}>
                    <Form className='bg-slate-600 flex flex-col p-12 rounded-xl'>
                    <label htmlFor="FullName" className=' text-white'>FullName</label>
                        <Field className='mb-6 p-2 rounded'
                            type="text"
                            name="FullName"
                            id="FullName"
                        />
                        <ErrorMessage name="FullName"></ErrorMessage>

                    <label htmlFor="email" className=' text-white'>Email</label>
                        <Field className='mb-6 p-2 rounded'
                            type="email"
                            name="email"
                            id="email"
                        />
                        <ErrorMessage name="email"></ErrorMessage>

                        <label htmlFor="password" className=' text-white'>Password</label>
                        <Field className='mb-6 p-2 rounded'
                            type="password"
                            name="password"
                            id="password"
                        />
                        <ErrorMessage name="password"></ErrorMessage>


                        <button type="submit" className='bg-blue-600 text-white p-2'>Submit</button>

                    </Form>
                </Formik>
            </div>
        </div>
  )
}

export default Signup
