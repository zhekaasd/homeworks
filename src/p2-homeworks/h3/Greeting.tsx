import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (name: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : s.someClass; // need to fix with (?:)

    const onKeyPressAddUser = (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter') {
            addUser();
        }
    }

    return (
        <div className={s.wrapper}>
            <input autoFocus onKeyPress={onKeyPressAddUser} value={name} onChange={setNameCallback} className={inputClass}/>
            <button disabled={error !== ''} onClick={addUser}>add</button>
            <span>{totalUsers}</span>
            {error && <div>{error}</div>}
        </div>
    )
}

export default Greeting
