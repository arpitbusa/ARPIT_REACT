import React from 'react'
import * as Yup from 'yup'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { useNavigate } from 'react-router-dom'
import { getFormDataFromLocalStorage } from '../Auth/Auth'

const Login = () => {
    const navigate = useNavigate();

    const initialValues = {
        email: '',
        password: ''
    }

    const onSubmit = (values, { isSubmitting, isError }) => {
        const user = getFormDataFromLocalStorage(values.email)
        if (user && user.password == values.password) {
            localStorage.setItem('authenticate', true)
            navigate('/')
        }
        else {
            isError({ password: "Invalid Email And Password" })
        }
        isSubmitting(false)
    }

    const validationschema = Yup.object({
        email: Yup.string().required('Required').email('Invalid').matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 'Invalid Email Address'),
        password: Yup.string().required('Required')
    })

    return (

        <div>

            <div className='flex justify-center mt-16'>
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationschema}>
                    {
                        ({ isSubmitting }) => (

                            <Form className='bg-slate-600 flex flex-col p-12 rounded-xl'>
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

                                <button type="submit" className='bg-blue-600 text-white p-2' disabled={isSubmitting}>Submit</button>

                            </Form>
                        )
                    }
                </Formik>
            </div>
        </div>
    )
}

export default Login
