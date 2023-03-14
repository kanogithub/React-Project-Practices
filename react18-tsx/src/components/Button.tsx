import { ReactNode } from "react"
import styled from "styled-components"

type acceptBtnType = 'primary' | 'secondary' | 'warning' | 'success' | 'info' | 'danger'

interface ButtonProps {
    btnType: acceptBtnType,
}

const ButtonElem = styled.button<ButtonProps>`
    padding: 0.5rem 0.75rem;
    border: none;
    border-radius: 5px;
    background-color: ${props =>
        props.btnType === 'primary' ? '#0d6efd' :
            props.btnType === 'secondary' ? '#6c757d' :
                props.btnType === 'danger' ? '#dc3545' :
                    props.btnType === 'info' ? '#0dcaf0' :
                        props.btnType === 'success' ? '#198754' :
                            props.btnType === 'warning' ? '#ffc107' : ''
    };
    color: #efefef;
    margin: 0.25rem;
`

interface Props {
    type?: acceptBtnType
    children?: ReactNode
    onButtonClick: () => void
}

function Button({ type = 'primary', children = 'Button', onButtonClick }: Props) {
    return (
        <ButtonElem btnType={type} onClick={onButtonClick}>{children}</ButtonElem>
    )
}

export default Button