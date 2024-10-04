import React,{useState} from 'react'

export default function DateField({ id, placeholder, required, inputError, setInputError, max, min ,setValue}) {
    const [errMsg, setErrMsg] = useState('هذه الخانة مطلوبة');
    return (
        <div className='ps-3 w-100'>
            <input
                id={id}
                type="number"
                placeholder={placeholder}
                required={required}
                className=' form-control'
                min={min}
                max={max}
                onChange={(e) => {
                    if (isNaN(e.target.value)) {
                        setErrMsg('فقط الأرقام مسموح بها في هذه الخانة!');
                        setInputError(true);
                    }
                    else if (+e.target.value < min || +e.target.value > max) {
                        setErrMsg(`أدخل رقم في نطاق ${min} الى ${max}`);
                        setInputError(true);
                    }
                    else {
                        setErrMsg('');
                        setInputError(false);
                    }
                }}
                onBlur={e => {
                    if(!inputError){
                        setValue(e.target.value)
                        setInputError(false)
                    }
                }}
            />
            <p className={`${!inputError && 'd-none'} text-danger me-1`}>{errMsg}</p>

        </div>
    )
}
