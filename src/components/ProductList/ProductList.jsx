import React from 'react';
import './ProductList.css';
import {useTelegram} from "../../hooks/useTelegram";
import {useCallback, useEffect, useState} from "react";


const ProductList = () => {
    const {user} = useTelegram();

    const [fName, setFName] = useState('');
    const [phone, setPhone] = useState('');
    const [time, setTime] = useState('');
    const {tg} = useTelegram();



    const onSendData = useCallback(() => {
        const data = {
            fName,
            phone,
            time
        }
        tg.sendData(JSON.stringify(data));
    }, [fName, phone, time, tg])

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
        if(!fName || !phone || !time) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [fName, phone, time, tg])

    const onChangeFName = (e) => {
        setFName(e.target.value)
    }

    const onChangePhone = (e) => {
        setPhone(e.target.value)
    }

    const onChangeTime = (e) => {
        setTime(e.target.value)
    }

    return (
        <div className={"form"}>
            <h3>Введите ваши данные</h3>
            <input
                className={'input'}
                type="text"
                placeholder={'ss'}
                value={user?.fName}
                onChange={onChangeFName}
            />

            <input
                className={'input'}
                type="text"
                placeholder={'Номер телефона'}
                value={phone}
                onChange={onChangePhone}
            />


            <input
                className={'input'}
                type="text"
                placeholder={'К какому времени вы хотели бы забрать заказ?'}
                value={time}
                onChange={onChangeTime}
            />

        </div>
    );
};

export default ProductList;