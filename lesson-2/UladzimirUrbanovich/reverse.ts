function reverseSentence(sentence: string): string {
    const splittedSentence: string[] = splitSentence(sentence);
    return splittedSentence
        .map((word: string) => reverseWord(word))
        .join('');
}

function splitSentence(sentence: string): string[] {
    const regExp: RegExp = /[\s,.]+/g;
    let match: RegExpExecArray | null = regExp.exec(sentence);
    const result: string[] = [];
    let lastIndex: number = 0;

    while (match !== null) {
        const word: string = sentence.slice(lastIndex, match.index);
        const splitterLength: number = match[0].length;

        lastIndex = match.index + splitterLength;
        result.push(word, match[0]);
        match = regExp.exec(sentence);
    }

    return result;
}

function reverseWord(word: string): string {
    const isWord: boolean = /[a-zA-Z]+/.test(word);
    if (!isWord) {
        return word;
    }

    const letters: string[] = word.split('');
    const reversed: string[] = letters
        .filter((letter: string) => /[a-zA-Z]+/.test(letter))
        .reverse();

    letters.forEach((letter: string, index: number) => {
        if (/[a-zA-Z]+/.test(letter)) { return; }
        reversed.splice(index, 0, letter);
    });

    return reversed.join('');
}