import { CanceledError } from "axios"
import { useState, useEffect } from "react"
import userService, { UserType } from "../services/user-service"

import useAlert from "./useAlert"

const useUsers = () => {
    const [users, setUsers] = useState<UserType[]>([])
    const [isLoading, setIsLoading] = useState(true)

    const { setAlertText, setAlertColor } = useAlert()

    useEffect(() => {
        // Fetch User at very first
        const { request, cancel } = userService.getAll()

        request
            .then(({ data: _returnUsers }) => {
                setUsers(_returnUsers)
                setAlertColor('secondary')
                setAlertText('Get User data and update.')
            })
            .catch((err) => {
                // if the request is canceled, will return an CanceledError
                if (err instanceof CanceledError) return
            })
            .finally(() => setIsLoading(false))

        return () => void cancel()
    }, [])

    return { users, setUsers, isLoading, setIsLoading }
}

export default useUsers