function maxCharacterCount(str)
{
    let characterCount = {}
    let maxCount = 0
    let maxChar = ''
    for(let i =0; i<str.length; i++)
    {
        const char = str[i]
        characterCount[char] = characterCount[char] + 1 || 1
        if(characterCount[char] > maxCount)
        {
            maxChar = char
            maxCount = characterCount[char]
        }
    }

    return maxChar
}

console.log(maxCharacterCount('i loveee maaz'));
