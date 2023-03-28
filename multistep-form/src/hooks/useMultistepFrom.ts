import { ReactElement, useState } from "react"

const useMultistepForm = (steps: ReactElement[]) => {
    const [currentStepIndex, setCurrectStepIndex] = useState(0)

    function next() {
        setCurrectStepIndex(i => {
            if (i >= steps.length - 1) return i
            return i + 1
        })
    }

    function back() {
        setCurrectStepIndex(i => {
            if (i <= 0) return i
            return i - 1
        })
    }

    function goTo(index: number) {
        setCurrectStepIndex(index)
    }

    return {
        currnetStepIndex: currentStepIndex,
        totalSteps: steps.length,
        isLastStep: currentStepIndex === steps.length - 1,
        step: steps[currentStepIndex],
        goTo,
        next,
        back,
    }
}

export default useMultistepForm