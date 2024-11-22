import React from 'react'
import { useFormik } from 'formik'

const Formik = () => {

    const initialValues = {
        FullName: '',
        email:'',
        password:''
    }

    const onSubmit = values => {
        console.log('formvalue',values);
        
    }

    const validate = values => {
        const errors = {}
        if(!values.FullName){
            errors.FullName = 'Required'
        }
        if(!values.email){
            errors.email = 'Required'
        }else if(
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ){
            errors.email = 'invalid email adress';
        }
        if(!values.password){
            errors.password = 'Required'
        }
        return errors
    }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })

  return (
    <div>
    <h1 className=' bg-green-300 p-4 text-center text-2xl font-black text-white'  style={{backgroundImage: "url('https://th.bing.com/th/id/OIG1.CgTbIrO0vUXLNU28HMdC')"}}>Form with Formik in ReactApp</h1>
    <div className='flex justify-center mt-16'>
        <form className='bg-slate-600 flex flex-col p-12 rounded-xl' style={{backgroundImage: "url('https://th.bing.com/th/id/OIG1.CgTbIrO0vUXLNU28HMdC')"}} onSubmit={formik.handleSubmit}>
            <label htmlFor="FullName" className=' text-white'>FullName</label>
            <input className='mb-6 p-2 rounded'
            type="text"
            name="FullName"
            id="FullName"
            onChange={formik.handleChange}
            />
            {
            formik.errors.FullName ? <div className='text-red-400'>*{formik.errors.FullName}</div> :null
            }

            <label htmlFor="email" className=' text-white'>Email</label>
            <input className='mb-6 p-2 rounded'
            type="email"
            name="email" 
            id="email"
            onChange={formik.handleChange}
            />
            {
            formik.errors.email ? <div className='text-red-400'>*{formik.errors.email}</div> :null
            }
            <label htmlFor="password" className=' text-white'>Password</label>
            <input className='mb-6 p-2 rounded'
            type="password"
            name="password"
            id="password"
            onChange={formik.handleChange}
            />
            {
            formik.errors.password ? <div className='text-red-400'>*{formik.errors.password}</div> :null
            }
            <button type="submit" className='bg-blue-600 text-white p-2'>Submit</button>
        </form>
    </div> 
</div>
  )
}

export default Formik
