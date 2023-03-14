import { useState } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

interface Props {
    size: number,
    onClickEvent: () => void,
}

const Like = ({ size, onClickEvent }: Props) => {
    const [isLike, setIsLike] = useState(false)
    const handleClick = () => {
        setIsLike(previous => !previous)
        onClickEvent()
    }

    return (
        isLike
            ? <AiFillHeart size={`${size.toString()}`} color="pink" onClick={handleClick} />
            : <AiOutlineHeart size={`${size.toString()}`} onClick={handleClick} />
    )
}

export default Like