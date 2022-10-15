import React from 'react'
import {homeWorkReducer} from '../homeWorkReducer'

let initialState: any[] // need to fix any

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ]
})


describe('sorted name test', () => {
    test('sort name up', () => {
        const newState = homeWorkReducer(initialState, {type: 'SORT_ITEM', payload: {method: 'up'}});

        expect(newState[0].name).toBe('Александр');
        expect(newState[newState.length - 1].name).toBe('Кот');
    });

    test('sort name down', () => {
        const newState = homeWorkReducer(initialState, {type: 'SORT_ITEM', payload: {method: 'down'}})

        expect(newState[0].name).toBe('Кот');
        expect(newState[newState.length - 1].name).toBe('Александр');
    });
})


test('check age 18', () => {
    const newState = homeWorkReducer(initialState, {type: 'CHECK_ITEM_18', payload: {minAge: 18}})

    expect(newState.length).toBe(4);
})
