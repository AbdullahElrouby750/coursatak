import React from 'react'

export default function InputField({ id, value, type, placeholder, required, inputError, setInputError, setValue }) {


    return (
        <div className='w-50 ps-3 my-3'>
            <label htmlFor={id} className=' form-label me-1'>
                {placeholder}
                <span className=' text-danger '>{required && '*'}</span>
            </label>

            <input
                id={id}
                type={type}
                placeholder={placeholder}
                required={required}
                value={value}
                className=' form-control'
                onChange={ (e) => {
                    if(!setInputError){}
                    else if (e.target.value.trim() === '' || e.target.value.trim.length > 2) {
                        setInputError(true)
                    } else {
                        setInputError(false)
                    }
                }}
                onBlur={e => {
                    
                    if(!inputError){
                        setValue(e.target.value)
                        setInputError && setInputError(false)
                    }
                }}
            />
            <p className={`${!inputError && 'd-none'} text-danger me-1`}>من فضلك, أدخل {placeholder.slice(2)} صحيح!</p>
        </div>
    )
}
