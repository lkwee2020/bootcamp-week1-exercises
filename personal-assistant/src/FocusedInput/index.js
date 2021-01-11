import React, { useRef, useEffect } from 'react'

const FocusedInput = () => {
    const inputRef = useRef()
    useEffect(() => {
        inputRef.current.focus()
    }, [inputRef])

    return <input ref={inputRef} />
}

export default FocusedInput