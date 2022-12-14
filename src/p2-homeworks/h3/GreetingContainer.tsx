import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        if(e.currentTarget.value.trim() === '') {
            setError('Field is required!')
            setName(e.currentTarget.value);
        } else {
            setError('');
            setName(e.currentTarget.value) // need to fix //trim();
        }
    }

    const onKeyPressAddUser = (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter') {
            addUser();
        }
    }

    const addUser = () => {
        const value = name.split(' ').filter((el) => el !== '').join(' ');

        if(value === '') {
            setError('Field is required!');
        } else {
            addUserCallback(value);
            alert(`Hello ${value}!`) // need to fix //trim()
            setName('');
            setError('');
        }
    }



    const totalUsers = users.length; // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            onKeyPressAddUser={onKeyPressAddUser}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
