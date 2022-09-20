import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, KeyboardEvent} from 'react'
import s from "./AlternativeSuperInputText.module.css";


type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
type AlternativeSuperInputTextType = DefaultInputPropsType & {
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: string
    spanClassName?: string //styles error, indicate name of class
    className?: string
}
const AlternativeSuperInputText: React.FC<AlternativeSuperInputTextType> = (
    {
        type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
        onChangeText, onChange,
        onKeyUp, onEnter,
        error, spanClassName, className,

        ...restProps// все остальные пропсы попадут в объект restProps
    }) => {

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e);

        onChangeText && onChangeText(e.currentTarget.value);
    };

    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
        onKeyUp && onKeyUp(e);

        onEnter && e.key === 'Enter' && onEnter();
    };

    const errorTextClassName = `${s.error} ${spanClassName && spanClassName}`;
    const finalInputClassName = `${error ? s.errorInput : s.input} ${className}`;
    return (
        <div className={s.wrapper}>
            <input
                type={'text'}
                className={finalInputClassName}
                onKeyUp={onKeyPressCallback}
                onChange={onChangeCallback}
                //onBlur={onChangeCallback}
                {...restProps}
            />
            <div className={errorTextClassName}>{error}</div>
        </div>


    )
}

export default AlternativeSuperInputText
