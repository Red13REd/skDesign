import React, {useState} from 'react';
import {Button, FormContainer, InputWrapper, Rolling, ShowDop} from './components/styledFormItems';
import {Input} from './components/Input';
import {Icon, Select} from "./components/Select";
import {useAppDispatch, useCustomSelector} from "./store/store";
import {JsonTC, setData} from "./store/formReducer";
import {LoadingStatusType} from "./store/enums";

const cities = [
    {
        "id": "MOW",
        "name": "Москва"
    },
    {
        "id": "SPB",
        "name": "Санкт-Петербург"
    },
    {
        "id": "KZN",
        "name": "Казань"
    },
    {
        "id": "KDA",
        "name": "Краснодар"
    }
]
const sources = [
    "Инстаграм",
    "От друзей",
    "Реклама",
    "Поисковые системы",
    "Другое"
]

export const Form = () => {


    const form = useCustomSelector(state => state.form)
    const dispatch = useAppDispatch()

    const [formUserName, setFormUserName] = useState<string>('')
    const [formPhoneNumber, setFormPhoneNumber] = useState<string>('')
    const [formEmailValue, setEmailValue] = useState<string>('')
    const [formLinkProfile, setLinkProfile] = useState<string>('')
    const [formCity, setCity] = useState<string>('')
    const [formOrganizationName, setOrganizationName] = useState<string>('')
    const [formRecipient, setFormRecipient] = useState<string>('')
    const [formHowDidYouKnow, setFormHowDidYouKnow] = useState<string>('')

    // set true if user touch input
    const [formUserNameDirty, setFormUserNameDirty] = useState<boolean>(false)
    const [formPhoneNumberDirty, setFormPhoneNumberDirty] = useState<boolean>(false)
    const [formEmailValueDirty, setEmailValueDirty] = useState<boolean>(false)
    const [formLinkProfileDirty, setLinkProfileDirty] = useState<boolean>(false)
    const [formCityDirty, setCityDirty] = useState<boolean>(false)

    // Validation check
    const [errorFormUserName, setErrorFormUserName] = useState<boolean>(true)
    const [errorFormPhoneNumber, setErrorFormPhoneNumber] = useState<boolean>(true)
    const [errorFormEmailValue, setErrorFormEmailValue] = useState<boolean>(true)
    const [errorFormLinkProfile, setErrorFormLinkProfile] = useState<boolean>(true)
    const [errorFormCity, setErrorFormCity] = useState<boolean>(true)


    const [show, setShow] = useState<boolean>(false)


    const buttonDisable = errorFormUserName
        || errorFormPhoneNumber
        || errorFormEmailValue
        || errorFormLinkProfile
        || errorFormCity


    const clearForm = () => {
        setFormUserName('')
        setFormPhoneNumber('')
        setEmailValue('')
        setLinkProfile('')
        setCity('')
        setOrganizationName('')
        setFormRecipient('')
        setFormHowDidYouKnow('')
    }


    const setDataRedux = (e: React.MouseEvent) => {
        e.preventDefault()
        dispatch(setData({
            userName: formUserName,
            phoneNumber: formPhoneNumber,
            email: formEmailValue,
            linkProfile: formLinkProfile,
            city: formCity,
            organizationName: formOrganizationName,
            recipient: formRecipient,
            howDidYouKnow: formHowDidYouKnow,
        }))
        dispatch(JsonTC())
        clearForm()
    }


    const bluerHandler = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
        switch (e.target.name) {
            case 'name':
                setFormUserNameDirty(true)
                if (formUserName.length < 2) setErrorFormUserName(true)
                else setErrorFormUserName(false)
                break
            case 'phone number':
                setFormPhoneNumberDirty(true)
                if (!(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(formPhoneNumber))) setErrorFormPhoneNumber(true)
                else setErrorFormPhoneNumber(false)
                break
            case 'email':
                setEmailValueDirty(true)
                if (!(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formEmailValue))) setErrorFormEmailValue(true)
                else setErrorFormEmailValue(false)
                break
            case 'link':
                setLinkProfileDirty(true)
                if (formLinkProfile.length < 3) setErrorFormLinkProfile(true)
                else setErrorFormLinkProfile(false)
                break
            case 'city':
                setCityDirty(true)
                if (formCity === '') setErrorFormCity(true)
                else setErrorFormCity(false)
                break
        }
    }


    return (
        <FormContainer>
            <InputWrapper>
                <Input
                    name='name'
                    value={formUserName}
                    labelValue={'Ваше имя *'}
                    placeholder='Иван'
                    error={formUserNameDirty && errorFormUserName}
                    onChangeText={setFormUserName}
                    onChangeError={setErrorFormUserName}
                    onBlurCheckName={bluerHandler}
                />
                <Input
                    name='phone number'
                    value={formPhoneNumber}
                    labelValue={'Номер телефона *'}
                    placeholder='+7 (000) 000-00-00'
                    error={formPhoneNumberDirty && errorFormPhoneNumber}
                    onChangeText={setFormPhoneNumber}
                    onChangeError={setErrorFormPhoneNumber}
                    onBlurCheckName={bluerHandler}
                />
            </InputWrapper>
            <InputWrapper>
                <Input
                    name='email'
                    value={formEmailValue}
                    labelValue='E-mail *'
                    placeholder='example@skdesign.ru'
                    error={formEmailValueDirty && errorFormEmailValue}
                    onChangeText={setEmailValue}
                    onChangeError={setErrorFormEmailValue}
                    onBlurCheckName={bluerHandler}
                />
                <Input
                    name='link'
                    value={formLinkProfile}
                    labelValue='Ссылка на профиль *'
                    placeholder='instagram.com/skde…'
                    error={formLinkProfileDirty && errorFormLinkProfile}
                    onChangeText={setLinkProfile}
                    onChangeError={setErrorFormLinkProfile}
                    onBlurCheckName={bluerHandler}
                />
            </InputWrapper>
            <Select
                name='city'
                value={formCity}
                labelValue='Выберите город *'
                placeholder='Выберите город *'
                options={cities}
                error={formCityDirty && errorFormCity}
                onChangeOption={setCity}
                onChangeError={setErrorFormCity}
                onBlurCheckName={bluerHandler}
            />
            <Input
                value={formOrganizationName}
                labelValue={'Название организации/студии'}
                placeholder='SK Design'
                width='380px'
                onChangeText={setOrganizationName}
            />
            <ShowDop onClick={() => setShow(!show)}>
                <Icon bottom={'-3px'}
                      right={'-13px'}
                      pointerEvents={'auto'}
                />
                {show ? 'Скрыть дополнительные поля' : 'Показать дополнительные поля'}
            </ShowDop>
            {show ? <>
                <Input
                    value={formRecipient}
                    labelValue='Получатель *'
                    placeholder='ФИО'
                    width='380px'
                    onChangeText={setFormRecipient}
                />
                <Select
                    value={formHowDidYouKnow}
                    labelValue='От куда узнали про нас?'
                    placeholder='От куда узнали про нас?'
                    options={sources}
                    onChangeOption={setFormHowDidYouKnow}
                />
            </> : null}
            <div style={{'position': 'relative'}}>
                <Button
                    disabled={form.isLoad === LoadingStatusType.active}
                    onClick={setDataRedux}
                    width='380px'>{form.isLoad !== LoadingStatusType.active && 'Отправить заявку'}</Button>
                {form.isLoad === LoadingStatusType.active && <Rolling/>}
            </div>
        </FormContainer>
    );
};
