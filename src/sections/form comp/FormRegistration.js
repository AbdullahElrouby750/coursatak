import React, { useState, useEffect } from 'react';
import InputField from './InputField';
import DateField from './DateField';
import PasswordField from './PasswordField';

import style from './FormRegistration.module.css';

import { validatePassword, checkPassword } from '../../logic/passValidation';
import { setData} from '../../logic/handlingData';

export default function FormRegistration({setSection, setStudentData}) {

    const currentDate = new Date()
    const maxYear = currentDate.getFullYear() - 12;
    const minYear = currentDate.getFullYear() - 24;
    let dayRangeErrMsg = ''
    function checkDate(yearVal, monthVal, dayVal) {
        switch (+monthVal) {

            case 4, 6, 9, 11:
                if (+dayVal > 31) {
                    dayRangeErrMsg = 'Invalid date. Month should have 30 or 31 days.';
                    return true;
                }
                break;

            case 2:
                if (+yearVal % 4 === 0) {
                    if (+dayVal > 29) {
                        dayRangeErrMsg = 'Invalid date. February should have 29 days.';
                        return true;
                    }
                }
                else {
                    if (+dayVal > 28) {
                        dayRangeErrMsg = 'Invalid date. February should have 28 days.';
                        return true;
                    }
                }
                break;

            default:
                return false;
        }
    }


    //VAlidation and error messages
    const [nameErr, setNameErr] = useState(false);
    const [officeErr, setofficeErr] = useState(false);
    const [addressErr, setAddressErr] = useState(false);
    const [dayErr, setDayErr] = useState(false);
    const [monthErr, setMonthErr] = useState(false);
    const [yearErr, setyearErr] = useState(false);
    const [dateErr, setDateErr] = useState(false);
    const [passErr, setPassErr] = useState(false);
    const [rePassErr, setRePassErr] = useState(false);

    //values
    const [name, setName] = useState(null);
    const [joinData, setJoinData] = useState(null);
    const [office, setOffice] = useState(null);
    const [address, setAddress] = useState(null);
    const [day, setDay] = useState(null);
    const [month, setMonth] = useState(null);
    const [year, setYear] = useState(null);
    const [age, setAge] = useState(null);
    const [ID, setID] = useState(null);
    const [password, setPassword] = useState(null);
    const [rePassword, setRePassword] = useState(null);

    //check date range
    useEffect(() => {
        if ((day && month && year) || (day && month)) {
            setDateErr(checkDate(year, month, day));
        }
    }, [day, month, year])

    // calculate age from year day month and set randome code number from 6 digits using date of birth data
    useEffect(() => {
        if (year && month && day) {
            const dob = new Date(year, month - 1, day);
            const diff = Date.now() - dob.getTime();
            const ageDate = new Date(diff);
            setAge(Math.abs(ageDate.getUTCFullYear() - 1970));
            setID(Math.floor(Math.random() * (10 * year * (month+1) * day)).toString().padStart(6, '0'));
        }
    }, [year, month, day])



    //check pass validation

    let [passErrMsg, setMsg] = useState('هذه الخانة مطلوبة')
    let [rePassErrMsg, setRemsg] = useState('هذه الخانة مطلوبة')
    useEffect(() => {
        if (password || rePassword) {
            setMsg(validatePassword(password));
            setRemsg(checkPassword(rePassword, password));
            if (passErrMsg) setPassErr(true)
                else setPassErr(false)
            if (rePassErrMsg) setRePassErr(true);
                else setRePassErr(false);
        }
    }, [password, rePassword, rePassErrMsg, passErrMsg])


    const studentData = {
        name: name,
        joinData: joinData,
        office: office,
        address: address,
        dateOfBirth: `${day}/${month}/${year}`,
        age: age,
        ID: ID,
        password: password,
    }

    // const tempData = {
    //     ID: 1,
    //     groubName: 'مجموعة 1',
    //     teacher:'محمد فايز',
    //     courseTime:'السبت الساعة 5 م',
    //     subscibeType:'مجاني',
    //     skitchPrice:'مجاني'
    // }

    return (
        <div className={style.formWrapper}>

            <div className='w-100 d-flex flex-wrap justify-content-start'>
                <InputField id="userName" type="text" placeholder="الإسم" required inputError={nameErr} setInputError={setNameErr} setValue={setName} />
                <InputField id="joinDate" type="date" placeholder="موعج الإلتحاق بالمدرسة" required setValue={setJoinData} />
                <InputField id="officeName" type="text" placeholder="المكتب التابع له" required inputError={officeErr} setInputError={setofficeErr} setValue={setOffice} />
                <InputField id="address" type="text" placeholder="العنوان" required inputError={addressErr} setInputError={setAddressErr} setValue={setAddress} />

            </div>

            <div className='w-100 d-flex flex-column '>
                <label htmlFor="day">ناريخ الميلاد<span className=' text-danger'>*</span></label>

                <div className='my-2 d-flex'>
                    <DateField id='day' placeholder="يوم" required={true} inputError={dayErr} setInputError={setDayErr} setValue={setDay} min={1} max={31} />
                    <DateField id='month' placeholder="شهر" required={true} inputError={monthErr} setInputError={setMonthErr} setValue={setMonth} min={1} max={12} />
                    <DateField id='year' placeholder="سنة" required={true} inputError={yearErr} setInputError={setyearErr} setValue={setYear} min={minYear} max={maxYear} />
                </div>
                <p className={`${!dateErr && 'd-none'} text-danger me-1`}>{dayRangeErrMsg}</p>

            </div>

            <div className={`${style.passWrapper} w-100 d-flex justify-content-start`}>
                <PasswordField id='password' placeholder='كلمة السر' inputError={passErr} setInputError={setPassErr} setValue={setPassword} errMsg={passErrMsg} />
                <PasswordField id='rePassword' placeholder='تأكيد كلمة السر' inputError={rePassErr} setInputError={setRePassErr} setValue={setRePassword} errMsg={rePassErrMsg} />
            </div>

            <button className='btn btn-primary w-50'
                onClick={async () => {
                    if (!nameErr && !officeErr && !addressErr && !addressErr && !monthErr && !yearErr && !dateErr && !passErr && !rePassErr)
                        if (name && joinData && joinData && joinData && joinData && joinData && joinData && joinData && joinData) {
                            console.log(studentData);

                            await setData('students', studentData)
                            .then(() => setSection('home'))
                            .catch(() => console.log("Failed to save student data"));

                            setStudentData(studentData);
                        } else {
                            if (!name) setNameErr(true)
                            if (!joinData) setJoinData(true)
                            if (!office) setofficeErr(true)
                            if (!address) setAddressErr(true)
                            if (!day) setDayErr(true)
                            if (!month) setMonthErr(true)
                            if (!year) setyearErr(true)
                            if (!password) setPassErr(true)
                            if (!rePassword) setRePassErr(true)
                        }
                }}
            >الدخول</button>

        </div>
    )
}
