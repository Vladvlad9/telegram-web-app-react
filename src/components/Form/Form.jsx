import React, {useCallback, useEffect, useState} from 'react';
import './Form.css'
import {useTelegram} from "../../hooks/useTelegram";

const Form = () => {

    const [Lname, setLname] = useState('');
    const [Fname, setFname] = useState('');
    const [Mname, setMname] = useState('');
    const [Restaurant, setRestaurant] = useState('');
    const {tg} = useTelegram();
    
    const onSendData = useCallback(() => {
        const data = {
            Lname,
            Fname,
            Mname,
            Restaurant
        }
        tg.sendData(JSON.stringify(data));
    }, [Lname, Fname, Mname, Restaurant, tg])


    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData, tg])

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Отправить данные'
        })
    }, [tg])


    useEffect(() => {
        if(!Lname || !Fname || !Mname || !Restaurant) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [Lname, Fname, Mname, Restaurant, tg])


    const onChangeLname = (e) => {
        setLname(e.target.value)
    }

    const onChangeFname = (e) => {
        setFname(e.target.value)
    }

    const onChangeMname = (e) => {
        setMname(e.target.value)
    }

    const onChangeRestaurant = (e) => {
        setRestaurant(e.target.value)
    }



    return (
        <div className={"form"}>
            <h3>Введите ваши данные</h3>
            <input
                className={'input'}
                type="text"
                placeholder={'Фамилия'}
                value={Lname}
                onChange={onChangeLname}
            />

            <input
                className={'input'}
                type="text"
                placeholder={'Имя'}
                value={Fname}
                onChange={onChangeFname}
            />

            <input
                className={'input'}
                type="text"
                placeholder={'Отчество'}
                value={Mname}
                onChange={onChangeMname}
            />

            <input
                className={'input'}
                type="text"
                placeholder={'Ресторан'}
                value={Restaurant}
                onChange={onChangeRestaurant}
            />
        </div>
    );
};

export default Form;
