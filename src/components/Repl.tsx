import { execute } from "@/lib/execute"
import { KeyboardEvent, MutableRefObject, useEffect, useRef } from "react"


export const Repl = () => {
    useEffect(() => input.current?.focus())

    const input: MutableRefObject<HTMLInputElement | null> = useRef(null)

    const keyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {

        if (e.key === 'Enter') {
            const sourceCode = e.currentTarget.value.trim()
            const result = execute(sourceCode)

            if (typeof result === 'string') return alert(result)

            e.currentTarget.value = result.toString()
        }

        if (e.key === 'Backspace') return
        if (e.key === ' ') return
        if (e.key === '+') return
        if (e.key === '-') return

        if (Number.isNaN(parseInt(e.key))) {
            e.preventDefault()
        }

    }

    return (
        <input
            ref={input}
            className='px-4 py-2.5 text-green-300 bg-black border outline-none resize-none placeholder:text-neutral-600 border-neutral-600'
            spellCheck={false}
            onKeyDown={keyDownHandler}
            placeholder="2 + 5 - 4"
        />
    )
}