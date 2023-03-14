import { ReactNode, useState } from 'react'

interface Props {
    children: string,
    initialShowedNumber?: number,
}

const ExpandableText = ({ children, initialShowedNumber = 100 }: Props) => {
    const [isMore, setMore] = useState(false)

    const handleClick = () => setMore(!isMore)

    if (children.length <= initialShowedNumber) return <p>{children}</p>

    const text = isMore ? children : children.slice(0, initialShowedNumber)
    return (
        <p>
            {text}
            <span onClick={handleClick}> {isMore ? ' <Less' : '...More'}</span>
        </p>
    )
}

export default ExpandableText