import React, {useState} from 'react';
import './Form.css'

const Form = () => {
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [subject, setSubject] = useState('physical');

    const onChangeCounty = (e) =>{
        setCountry(e.target.value)
    }

    const onChangeCity = (e) =>{
        setCity(e.target.value)
    }

    const onChangeSubject = (e) =>{
        setSubject(e.target.value)
    }

    return (
        <div className={'form'}>
            <h3>Введите ваши данные</h3>
            <input className={'input'} type="text" placeholder={'Страна'} value={country} onChange={onChangeCounty}/>
            <input className={'input'} type="text" placeholder={'Улица'} value={city} onChange={onChangeCity}/>

            <select className={'select'} value={subject} onChange={onChangeSubject}>
                <option value={"physical"}>Физ. лицо</option>
                <option value={"legal"}>Юр. лицо</option>
            </select>
        </div>
    );
};

export default Form;