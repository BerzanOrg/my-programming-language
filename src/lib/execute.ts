

export type LexicalToken =
    | { type: 'number', value: number }
    | { type: 'plus' }
    | { type: 'minus' }


export function lexicalAnalysis(sourceCode: string) {
    const tokens: Array<LexicalToken> = []

    let currentIndex = 0
    let currentChar = sourceCode.at(currentIndex)
    let currentNumber = ''

    while (currentChar) {
        switch (currentChar) {
            case ' ':
                if (currentNumber) {
                    tokens.push({ type: 'number', value: parseInt(currentNumber) })
                    currentNumber = ''
                }
                break
            case '+':
                if (currentNumber) {
                    tokens.push({ type: 'number', value: parseInt(currentNumber) })
                    currentNumber = ''
                }
                tokens.push({ type: 'plus' })
                break
            case '-':
                if (currentNumber) {
                    tokens.push({ type: 'number', value: parseInt(currentNumber) })
                    currentNumber = ''
                }
                tokens.push({ type: 'minus' })
                break
            case '0':
                currentNumber += currentChar
                break
            case '1':
                currentNumber += currentChar
                break
            case '2':
                currentNumber += currentChar
                break
            case '3':
                currentNumber += currentChar
                break
            case '4':
                currentNumber += currentChar
                break
            case '5':
                currentNumber += currentChar
                break
            case '6':
                currentNumber += currentChar
                break
            case '7':
                currentNumber += currentChar
                break
            case '8':
                currentNumber += currentChar
                break
            case '9':
                currentNumber += currentChar
                break
        }


        currentChar = sourceCode.at(++currentIndex)
    }

    if (currentNumber) {
        tokens.push({ type: 'number', value: parseFloat(currentNumber) })
        currentNumber = ''
    }

    return tokens
}



export function check(tokens: Array<LexicalToken>): string | null {
    let currentIndex = 0
    let currentToken = tokens.at(currentIndex)

    while (currentToken) {
        let nextToken = tokens.at(currentIndex + 1)

        if (currentToken.type === 'number' && nextToken && nextToken.type === 'number') return `+ or - expected after ${currentToken.value}`
        if (currentToken.type !== 'number' && nextToken && nextToken.type !== 'number') return `multiple operations are invalid`

        currentToken = tokens.at(++currentIndex)
    }

    return null
}

export function execute(sourceCode: string): string | number {
    const tokens = lexicalAnalysis(sourceCode)

    const error = check(tokens)
    if (error) {
        return error
    }

    let result: number = 0

    let currentIndex = 0
    let currentToken = tokens.at(currentIndex)


    while (currentToken) {
        let nextToken = tokens.at(currentIndex + 1)

        if (currentToken.type === 'number') {
            result += currentToken.value
        } else if (currentToken.type === 'minus' && nextToken?.type === 'number') {
            currentIndex++
            result -= nextToken.value
        } else if (currentToken.type === 'plus' && nextToken?.type === 'number') {
            currentIndex++
            result += nextToken.value
        }

        currentToken = tokens.at(++currentIndex)
    }

    return result
}