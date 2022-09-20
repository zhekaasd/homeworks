import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from "./AlternativeSuperCheckbox.module.css";

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
type AlternativeSuperCheckboxPropsType = DefaultInputPropsType & {
    onChangeChecked?: (checked: boolean) => void
    spanClassName?: string
}

const AlternativeSuperCheckbox: React.FC<AlternativeSuperCheckboxPropsType> = (
    {
        type, onChange, onChangeChecked,
        className, spanClassName, children,
        ...restProps
    }) => {

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e);

        onChangeChecked && onChangeChecked(e.currentTarget.checked);
    }

    const finalInputClassName = `${s.checkbox} ${className ? className : ''} ${restProps.checked ? s.checked : ''}`

    return (
        <label>
            <input
                type={'checkbox'}
                onChange={onChangeCallback}
                className={finalInputClassName}
                {...restProps}
            />
            {children && <span className={restProps.checked ? s.checked : s.spanClassName}>{children}</span>}
        </label>
    )
}

export default AlternativeSuperCheckbox
