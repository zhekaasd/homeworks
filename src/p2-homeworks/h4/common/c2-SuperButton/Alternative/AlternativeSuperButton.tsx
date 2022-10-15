import React, { DetailedHTMLProps, ButtonHTMLAttributes } from 'react'
import s from "./AlternativeSuperButton.module.css";


type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

type AlternativeSuperButtonPropsType = DefaultButtonPropsType & {
    remove?: boolean, text?: boolean, active?: boolean
}

const AlternativeSuperButton: React.FC<AlternativeSuperButtonPropsType> = (
    {
        remove, text, active,  className, ...restProps
    }
) => {

    console.log(className)
    const finalClassName = `${remove ? s.remove : s.default}`;

    return (
            <button
                className={finalClassName + ' ' +  className }
                onClick={restProps.onChange}
                {...restProps}
            />
    )
}

export default AlternativeSuperButton;
