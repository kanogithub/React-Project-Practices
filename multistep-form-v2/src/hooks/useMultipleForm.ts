import { useState } from "react"

const useMultipleForm = (maxPage: number) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const next = () => {
        setCurrentIndex(prev => currentIndex >= maxPage - 1 ? maxPage - 1 : prev + 1)
    }

    const back = () => {
        setCurrentIndex(prev => currentIndex <= 0 ? 0 : prev - 1)
    }

    const goto = (index: number) => {
        if (index >= maxPage - 1) setCurrentIndex(maxPage - 1)
        if (index <= 0) setCurrentIndex(0)
        setCurrentIndex(index)
    }

    return {
        next,
        back,
        goto,
        isLastPage: currentIndex === maxPage - 1,
        currentIndex,
    }
}

export default useMultipleForm