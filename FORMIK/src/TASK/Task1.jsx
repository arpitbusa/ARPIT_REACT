import React from 'react'
import * as Yup from 'yup'
import { Formik, Field, Form, ErrorMessage } from 'formik'

const Task1 = () => {

    const initialValues = {
        FullName: '',
        email: '',
        school: '',
        phone: '',
        Gender:'',
        Course:[],
        Location:'surat'
    }

    const onSubmit = values => {
        console.log(values);

    }

    const validationschema = Yup.object({
        FullName: Yup.string().required('Required'),
        email: Yup.string().required('Required').email('Invalid').matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 'Invalid Email Address'),
        school: Yup.string().required('Required'),
        phone: Yup.string().required('phone should contain 10 numbers'),
        Gender: Yup.string().required('Required'),
        Course: Yup.array().min(1,'invalid').required('required')
    })

    return (
        <div>
            <h1 className=' bg-green-300 p-4 text-center text-2xl font-black text-white' style={{ backgroundImage: "url('https://th.bing.com/th/id/OIG1.CgTbIrO0vUXLNU28HMdC')" }}>Student Details Form</h1>
            <div className='flex justify-center mt-16'>
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationschema}>
                    <Form className='bg-slate-600 flex flex-col p-12 rounded-xl' style={{ backgroundImage: "url('https://th.bing.com/th/id/OIG1.CgTbIrO0vUXLNU28HMdC')" }}>
                        <div className='grid grid-cols-2 gap-5'>
                            
                            <div className='flex flex-col'>
                                <label htmlFor="FullName" className=' text-white'>FullName</label>
                                <Field className='mb-6 p-2 rounded'
                                    type="text"
                                    name="FullName"
                                    id="FullName"
                                />
                                <ErrorMessage name="FullName"></ErrorMessage>
                            </div>

                            <div className='flex flex-col'>
                                <label htmlFor="email" className=' text-white'>Email</label>
                                <Field className='mb-6 p-2 rounded'
                                    type="email"
                                    name="email"
                                    id="email"
                                />
                                <ErrorMessage name="email"></ErrorMessage>
                            </div>

                            <div className='flex flex-col'>
                                <label htmlFor="school" className=' text-white'>school</label>
                                <Field className='mb-6 p-2 rounded'
                                    type="school"
                                    name="school"
                                    id="school"
                                />
                                <ErrorMessage name="school"></ErrorMessage>
                            </div>

                            <div className='flex flex-col'>
                                <label htmlFor="phone" className=' text-white'>phone</label>
                                <Field className='mb-6 p-2 rounded'
                                    type="tel"
                                    name="phone"
                                    id="phone"
                                />
                                <ErrorMessage name="phone"></ErrorMessage>
                            </div>
                        </div>

                            <div className='grid grid-cols-3'>
                                <div>
                                    <p className='text-white'>Gender</p>
                                    <div>
                                        <label htmlFor="male" className=' text-white'>
                                        <Field type="radio" name="Gender" id="male" value='male' />
                                        Male</label>
                                    </div>
                                    <div>
                                        <label htmlFor="female" className=' text-white'>
                                        <Field type="radio" name="Gender" id="female" value='Female'/>Female

                                        </label>
                                    </div>
                                    <ErrorMessage name="Gender"></ErrorMessage>
                                </div>
                                <div>
                                    <p className='text-white'>Course</p>
                                    <div>
                                        <Field type="checkbox" name="Course" value="it" />
                                        <label htmlFor="it" className=' text-white'>It</label>
                                    </div>
                                    <div>
                                        <Field type="checkbox" name="Course" value="HRM" />
                                        <label htmlFor="HRM" className=' text-white'>HRM</label>
                                    </div>
                                    <div>
                                        <Field type="checkbox" name="Course" value="English" />
                                        <label htmlFor="English" className=' text-white'>English</label>
                                    </div>
                                    <div>
                                        <Field type="checkbox" name="Course" value="Grapic Design" />
                                        <label htmlFor="Grapic Design" className=' text-white'>Grapic Design</label>
                                    </div>
                                 <ErrorMessage name="Course"></ErrorMessage>
                                </div>
                                <div>
                                    <p className='text-white'>Institute Location</p>
                                    <select name="location" id="location">
                                        <option value="surat">surat</option>
                                        <option value="ahmadabad">ahmadabad</option>
                                        <option value="mumbai">mumbai</option>
                                        <option value="vadodara">vadodara</option>
                                    </select>
                                    <ErrorMessage name="Location"></ErrorMessage>
                                </div>
                            </div>


                        <button type="submit" className='bg-blue-600 text-white p-2'>Submit</button>

                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default Task1
