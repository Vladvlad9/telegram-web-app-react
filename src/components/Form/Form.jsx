import React, {useCallback, useEffect, useState} from 'react';
import './Form.css'
import {useTelegram} from "../../hooks/useTelegram";

const Form = () => {
    const [FIO, setFIO] = useState('');
    const [city, setCity] = useState('');
    const [work_experience, setWorkExperience] = useState('');
    const [instagram, setInstagram] = useState('');
    const [english, setEnglish] = useState('');
    const [position, setPosition] = useState('');
    const [phone_number, setPhoneNumber] = useState('');
    const [salary, setSalary] = useState('');
    const {tg} = useTelegram();

    const onSendData = useCallback(() => {
        const data = {
            FIO,
            city,
            work_experience,
            instagram,
            english,
            position,
            phone_number,
            salary
        }
        tg.sendData(JSON.stringify(data));
    }, [FIO, city, work_experience, instagram, english, position, phone_number, salary, tg])


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
        if(!FIO || !city) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [FIO, city, tg])


    const onChangeFIO = (e) => {
        setFIO(e.target.value)
    }

    const onChangePhoneNumber = (e) => {
        setPhoneNumber(e.target.value)
    }

    const onChangeInstagram = (e) => {
        setInstagram(e.target.value)
    }

    const onChangeSalary = (e) => {
        setSalary(e.target.value)
    }


    const onChangeCity = (e) => {
        setCity(e.target.value)
    }

    const onChangeWorkExperience = (e) => {
        setWorkExperience(e.target.value)
    }

    const onChangeEnglish = (e) => {
        setEnglish(e.target.value)
    }

    const onChangePosition = (e) => {
        setPosition(e.target.value)
    }


    return (
        <div className={"form"}>
            <h3>Введите ваши данные</h3>
            <input
                className={'input'}
                type="text"
                placeholder={'ФИО'}
                value={FIO}
                onChange={onChangeFIO}
            />

            <select value={city} onChange={onChangeCity} className={'select'}>
                <option disabled>Гражданство</option>
                <option value={'1'}>РБ</option>
                <option value={'2'}>РФ</option>
                <option value={'3'}>КАЗ</option>
                <option value={'4'}>Другой</option>
            </select>

            <select value={work_experience} onChange={onChangeWorkExperience} className={'select'}>
                <option disabled>Опыт работы</option>
                <option value={'1'}>1</option>
                <option value={'2'}>1-3</option>
                <option value={'3'}>3-5</option>
                <option value={'4'}>'>'5</option>
            </select>

            <select value={english} onChange={onChangeEnglish} className={'select'}>
                <option disabled>Английский</option>
                <option value={'1'}>А1 (Beginner)</option>
                <option value={'2'}>А2 (Elementary)</option>
                <option value={'3'}>В1 (Intermediate)</option>
                <option value={'4'}>В2 (Upper Intermediate)</option>
                <option value={'5'}>С1 (Advanced)</option>
                <option value={'6'}>С2 (Proficiency)</option>
            </select>

            <select value={position} onChange={onChangePosition} className={'select'}>
                <option value="" hidden>Выбрать</option>
                <optgroup label="Семейство «Тыквенные»">
                    <option value={'1'}>Арбуз</option>
                    <option value={'2'}>Дыня</option>
                    <option value={'3'}>Тыква</option>
                </optgroup>
                <optgroup label="Семейство «Паслёновые»">
                    <option value={'5'}>Баклажан</option>
                    <option value={'6'}>Картофель</option>
                    <option value={'7'}>Томат</option>
                    <option value={'8'}>Перец стручковый</option>
                </optgroup>
            </select>

            <input
                className={'input'}
                type="tel"
                placeholder={'Номер телефона'}
                value={phone_number}
                onChange={onChangePhoneNumber}
            />

            <input
                className={'input'}
                type="text"
                placeholder={'Instagram'}
                value={instagram}
                onChange={onChangeInstagram}
            />

            <input
                className={'input'}
                type="text"
                placeholder={'ЗП'}
                value={salary}
                onChange={onChangeSalary}
            />

            {/*<select value={subject} onChange={onChangeSubject} className={'select'}>*/}
            {/*    <option value={'physical'}>Физ. лицо</option>*/}
            {/*    <option value={'legal'}>Юр. лицо</option>*/}
            {/*</select>*/}
        </div>
    );
};

export default Form;