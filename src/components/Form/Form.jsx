import React, {useCallback, useEffect, useState} from 'react';
import './Form.css'
import {useTelegram} from "../../hooks/useTelegram";

const Form = () => {
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [subject, setSubject] = useState('physical');

    const {tg} = useTelegram();

    const onSendData = useCallback(
        () =>{
            const data = {
                country,
                city,
                subject
            }
            tg.senData(JSON.stringify(data))
        }, [country, city, subject, tg]
    )

    useEffect(
        () =>{
            tg.onEvent('mainButtonClicked', onSendData)
            return () =>{
                tg.offEvent('mainButtonClicked', onSendData)
            }
        }, [tg, onSendData])

    useEffect(()=>{
        tg.MainButton.setParams({
            text: 'Отправить данные'
        })
    })

    useEffect(
        () => {
        if(!city && !country){
            tg.MainButton.hide();
        }else {
            tg.MainButton.show();
        }
    }, [country, city, tg])


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