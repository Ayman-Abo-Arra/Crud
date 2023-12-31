import React from 'react'

function Input({id,title,type,name,handelData,customCLasses,errors,value}) {
  return (

    <div className='mb-3'>
      <label htmlFor={id} className='form-lable'>{title} </label>
      <input type={type} name={name} className={`form-control ${customCLasses}`} id={id} onChange={handelData} value={value}/>
      {errors[name] && <p className='text-danger'> {errors[name]} </p> }

    </div>
  )
}

export default Input