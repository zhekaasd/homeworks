import React, {useEffect, useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {clearKey, restoreState, saveState} from './localStorage/localStorage'


const EDITABLE_SPAN_VALUE = 'editable-span-value';

function HW6() {
    const [value, setValue] = useState<string>('')

    useEffect(() => {
        setValue(restoreState(EDITABLE_SPAN_VALUE, ''));
    }, [])

    const save = () => {
        saveState<string>(EDITABLE_SPAN_VALUE, value)
    }
    const restore = () => {
        // setValue()
        let item  = restoreState(EDITABLE_SPAN_VALUE, '');
        setValue(item);
    }

    const clear = () => {
        let item = clearKey(EDITABLE_SPAN_VALUE, '');
        setValue(item);
    }

    console.log(value)

    return (
        <div>
            <hr/>
            homeworks 6

            {/*should work (должно работать)*/}
            <div>
                <SuperEditableSpan
                    value={value}
                    onChangeText={setValue}
                    spanProps={{children: value ? undefined : 'enter text...'}}
                />
            </div>
            <SuperButton onClick={save}>save</SuperButton>
            <SuperButton onClick={restore}>restore</SuperButton>
            <SuperButton onClick={clear}>clear</SuperButton>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperEditableSpan/>*/}
            <hr/>
        </div>
    )
}

export default HW6
