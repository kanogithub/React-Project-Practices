import { ReactNode } from "react"

type AlertType = 'primary' | 'secondary' | 'warning'

interface Props {
    children: ReactNode,
    onClose: () => void,
    color?: AlertType
}

function Alert({ children, onClose, color = 'primary' }: Props) {
    return (
        <div className={`alert alert-${color} alert-dismissible fade show m-2`} role="alert">
            {children}
            <button type="button" className="btn-close" onClick={onClose}></button>
        </div>
    )
}

export default Alert