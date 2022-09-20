import React, {ChangeEvent, useState} from 'react';
import SuperInputText from './common/c1-SuperInputText/SuperInputText';
import s from './HW4.module.css';
import SuperButton from './common/c2-SuperButton/SuperButton';
import SuperCheckbox from './common/c3-SuperCheckbox/SuperCheckbox';
import AlternativeSuperInputText from "./common/c1-SuperInputText/Alternative/AlternativeSuperInputText";
import AlternativeSuperButton from './common/c2-SuperButton/Alternative/AlternativeSuperButton';
import AlternativeSuperCheckbox from './common/c3-SuperCheckbox/Alternative/AlternativeSuperCheckbox';

function HW4() {
    const [text, setText] = useState<string>('');
    const error = text ? '' : 'error';


    const showAlert = () => {
        if (!text) {
            alert('введите текст...')
        } else {
            alert(text) // если нет ошибки показать текст
            setText('');
        }
    }

    const [checked, setChecked] = useState<boolean>(false);
    const testOnChange = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked);

    return (
        <div>
            <hr/>
            homeworks 4

            <div className={s.column}>
                <SuperInputText
                    value={text}
                    onChangeText={setText}
                    onEnter={showAlert}
                    error={error}
                    //spanClassName={s.testSpanError}
                />

                <SuperInputText
                    className={s.blue} // проверьте, рабоет ли смешивание классов
                />

                {/*----------------------------------------------------*/}

                <SuperButton>
                    default
                </SuperButton>

                <SuperButton
                    red // пропсу с булевым значением не обязательно указывать true
                    onClick={showAlert}
                >
                    delete {/*// название кнопки попадёт в children*/}
                </SuperButton>

                <SuperButton disabled>
                    disabled
                </SuperButton>

                {/*----------------------------------------------------*/}

                <SuperCheckbox
                    checked={checked}
                    onChangeChecked={setChecked}
                >
                    some text {/*// этот текст попадёт в children*/}
                </SuperCheckbox>

                {/*// onChange тоже должен работать*/}
                <SuperCheckbox checked={checked} onChange={testOnChange}/>
            </div>

            <hr/>
            <hr/>
            <hr/>
            <hr/>
            <hr/>
            <hr/>

            {/*для личного творчества, могу проверить*/}

            <div className={s.column}>
                <AlternativeSuperInputText
                    error={error}
                    value={text}
                    onChangeText={setText}
                    onEnter={showAlert}
                />
                <AlternativeSuperInputText />

                <AlternativeSuperButton >send</AlternativeSuperButton>
                <div style={{margin: '10px 0'}}>
                    <AlternativeSuperButton onChange={showAlert} remove>remove</AlternativeSuperButton>
                </div>
                <AlternativeSuperButton disabled>disabled</AlternativeSuperButton>

                <AlternativeSuperCheckbox checked={checked} onChangeChecked={setChecked}>Variant 1</AlternativeSuperCheckbox>
                <AlternativeSuperCheckbox checked={checked} onChange={testOnChange} />
            </div>
        </div>
    )
}

export default HW4
