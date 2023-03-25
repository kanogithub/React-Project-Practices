import { useState } from "react"
import { AlertType } from "../components/Alert"

const useAlert = () => {
    const [alertText, setAlertText] = useState('')
    const [alertColor, setAlertColor] = useState<AlertType>('primary')

    return { alertText, alertColor, setAlertText, setAlertColor }
}

export default useAlert