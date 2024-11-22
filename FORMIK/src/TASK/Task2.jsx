import React from 'react'
import * as Yup from 'yup'
import { Formik, Field, Form, ErrorMessage } from 'formik'

const Task2 = () => {

    const initialValues = {
        Userid: '',
        password: '',
        Name: '',
        Address: '',
        Country: '',
        ZIPCode: '',
        Email: '',
        sex: '',
        Language: [],
        About: ''

    }

    const onSubmit = values => {
        console.log("jhfgad");

        console.log(values);

    }

    const validationschema = Yup.object({
        Userid: Yup.string().required('Required and Must be of lenght 5 to 12.'),
        password: Yup.string().required('Required and Must be of lenght 7 to 12.'),
        Name: Yup.string().required('Required and Alphabet only.'),
        Address: Yup.string().required('Optional'),
        ZIPCode: Yup.string().required('Required Must be numearic only.'),
        Email: Yup.string().required('Required. Must be a valid email.').email('Invalid').matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 'Invalid Email Address'),
        sex: Yup.string().required('Required'),
        Language: Yup.array().min(1, 'Required').required('Required'),
    })

    return (
        <div>
            <h1 className=' bg-green-300 p-4 text-center text-2xl font-black text-white' style={{ backgroundImage: "url('https://th.bing.com/th/id/OIG1.CgTbIrO0vUXLNU28HMdC')" }}>Registration Form</h1>
            <div className='flex justify-center mt-16'>
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationschema}>
                    <Form >
                        <div className='flex flex-col p-12 rounded-xl' style={{ backgroundImage: "url('https://th.bing.com/th/id/OIG1.CgTbIrO0vUXLNU28HMdC')" }}>

                            {/* user id */}
                            <div className='flex flex-col'>
                                <label htmlFor="Userid" className=' text-white'>User id :</label>
                                <Field className='rounded'
                                    type="number"
                                    name="Userid"
                                    id="Userid"
                                />
                                <div className='text-red-500'>
                                    <ErrorMessage name="Userid"></ErrorMessage>
                                </div>
                            </div>

                            {/* password */}
                            <div className='flex flex-col mt-3'>
                                <label htmlFor="password" className=' text-white'>password :</label>
                                <Field className='rounded'
                                    type="password"
                                    name="password"
                                    id="password"
                                />
                                <div className='text-red-500'>
                                    <ErrorMessage name="password"></ErrorMessage>
                                </div>
                            </div>

                            {/* Name */}
                            <div className='flex flex-col mt-3'>
                                <label htmlFor="Name" className=' text-white'>Name :</label>
                                <Field className='rounded'
                                    type="name"
                                    name="Name"
                                    id="Name"
                                />
                                <div className='text-red-500'>
                                    <ErrorMessage name="Name"></ErrorMessage>
                                </div>
                            </div>

                            {/* Address */}
                            <div className='flex flex-col mt-3'>
                                <label htmlFor="Address" className=' text-white'>Address :</label>
                                <Field className='rounded'
                                    type="text"
                                    name="Address"
                                    id="Address"
                                />
                                <div className='text-red-500'>
                                    <ErrorMessage name="Address"></ErrorMessage>
                                </div>
                            </div>


                            {/* Country */}
                            <div className='flex flex-col mt-3'>
                                <p className='text-white'>Country :</p>
                                <select name="Country" id="Country">
                                    <option value="select">(Please Select a Country)</option>
                                    <option value="india">india</option>
                                    <option value="dubai">dubai</option>
                                    <option value="china">china</option>
                                    <option value="america">america</option>
                                </select>
                                <div className='text-red-500'>
                                    <ErrorMessage name="Country"></ErrorMessage>
                                </div>
                            </div>

                            {/* ZIPCode */}
                            <div className='flex flex-col mt-3'>
                                <label htmlFor="ZIPCode" className=' text-white'>Zip code :</label>
                                <Field className='rounded'
                                    type="number"
                                    name="ZIPCode"
                                    id="ZIPCode"
                                />
                                <div className='text-red-500'>
                                    <ErrorMessage name="ZIPCode"></ErrorMessage>
                                </div>
                            </div>

                            {/* Email */}
                            <div className='flex flex-col mt-3'>
                                <label htmlFor="Email" className=' text-white'>Email :</label>
                                <Field className='rounded'
                                    type="email"
                                    name="Email"
                                    id="Email"
                                />
                                <div className='text-red-500'>
                                    <ErrorMessage name="Email"></ErrorMessage>
                                </div>
                            </div>

                            {/* Sex */}
                            <div className='flex flex-col mt-3'>
                                <p className='text-white'>Sex :</p>
                                <div >
                                    <label htmlFor="male" className='text-white'>
                                        <Field type="radio" name="Sex" id="male" value='male' />
                                        Male</label>
                                </div>
                                <div>
                                    <label htmlFor="female" className=' text-white'>
                                        <Field type="radio" name="Sex" id="female" value='Female' />Female

                                    </label>
                                </div>
                                <div className='text-red-500'>
                                    <ErrorMessage name="Sex"></ErrorMessage>
                                </div>
                            </div>

                            {/* Language */}
                            <div className='flex flex-col mt-3'>
                                <p className='text-white'>Language</p>
                                <div>
                                    <Field type="checkbox" name="Language" value="English" id="English" />
                                    <label htmlFor="English" className=' text-white'>English</label>
                                </div>
                                <div>
                                    <Field type="checkbox" name="Language" value="Non English" id="NonEnglish" />
                                    <label htmlFor="NonEnglish" className=' text-white'>Non English</label>
                                </div>
                                <div className='text-red-500'>
                                    <ErrorMessage name="Language"></ErrorMessage>
                                </div>
                            </div>

                            {/* About */}
                            <div className='flex flex-col mt-3'>
                                <div>
                                    <label htmlFor="About" className='text-white'>About :</label>
                                    <Field className='rounded'
                                        type="text" name="About" id="About" placeholder="Optional" />
                                </div>
                                <div className='text-red-500'>
                                    <ErrorMessage name="About"></ErrorMessage>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button type="submit" className='text-white bg-blue-500 mt-5'>Submit</button>

                        </div>

                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default Task2

