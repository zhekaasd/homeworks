import React, {useState} from 'react'
import AlternativeSuperButton from "../h4/common/c2-SuperButton/Alternative/AlternativeSuperButton";

import s from "./HW8.module.css";

// export type UserType =

export type PeopleType = {
    _id: number
    name: string
    age: number
}
export type InitialStatePeopleType = Array<PeopleType>
const initialPeople = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<InitialStatePeopleType>(initialPeople) // need to fix any

    // need to fix any
    const finalPeople = people.map((p) => (
        <div key={p._id}>
            <i>{p.name}</i>, <b>{p.age}</b>
        </div>
    ))

    // const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'up'}));

    const sortUp = () => setPeople([...people.sort((a,b) => a.name >= b.name ? 1 : -1)]);
    const sortDown = () => setPeople([...people.sort((a,b) => a.name >= b.name ? -1 : 1)]);




    return (
        <div>

            <hr/>
            homeworks 8


            <div style={{display: 'flex'}}>
                {/*should work (должно работать)*/}
                <div>
                    {finalPeople}
                </div>
                <div style={{marginLeft: '20px', display: 'flex', flexDirection: 'column', textAlign: 'center', justifyContent: 'space-around'}}>
                    <AlternativeSuperButton className={s.btn} onClick={sortUp}>▲</AlternativeSuperButton>
                    <AlternativeSuperButton className={s.btn} onClick={sortDown}>▼</AlternativeSuperButton>
                </div>


            </div>
            <div style={{marginTop: '20px'}}><AlternativeSuperButton onClick={() => setPeople([...people.filter((el) => el.age >= 18)])}>check 18</AlternativeSuperButton></div>


            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}

export default HW8;
