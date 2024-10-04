import React, { useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import style from './FormRegistration.module.css';

export default function PasswordField({ id, placeholder, inputError, setInputError, setValue, errMsg}) {
    
    const [visible, setVisibile] = useState(false)
    return (
        <div className='w-100 ms-3'>
            <label htmlFor={id} className=' form-label me-1'>
                {placeholder}
                <span className=' text-danger '>*</span>
            </label>

            <div className='position-relative'>
                <input
                    id={id}
                    type={visible ? 'text' : 'password'}
                    placeholder={placeholder}
                    required
                    className=' form-control'
                    onInput={(e) => {
                        
                        setValue(e.target.value);
                        if (e.target.value.trim() === '' || e.target.value.trim.length > 2) {
                            setInputError(true)
                            errMsg = 'Password must be at least 3 characters long'
                        } else {
                            setInputError(false)
                            errMsg = ''
                        }
                    }}
                    onBlur={e => {
                        if (!inputError) {
                            setValue(e.target.value);
                            setInputError(false);
                        }
                    }}
                />
                <div className={style.eye}>

                    <FontAwesomeIcon icon={visible ? faEyeSlash : faEye} onClick={() => {setVisibile(!visible)}}/>
                </div>
            </div>
            <p 
            className={`${!inputError && 'd-none'} text-danger me-1`}

            >{errMsg}</p>
        </div>
    )
}
