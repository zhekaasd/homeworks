import React, {useState} from 'react'
import AlternativeGreeting from './AlternativeGreeting'
import GreetingContainer from './GreetingContainer'

// types
export type UserType = {
    _id: string
    name: string
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([]) // need to fix any

    const addUserCallback = (name: string) => { // need to fix any
        setUsers([...users, {_id: String(Date.now()), name: name}]) // need to fix
    }

    return (
        <div>
            <hr/>
            homeworks 3

            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            <AlternativeGreeting />
            <hr/>
        </div>
    )
}

export default HW3
