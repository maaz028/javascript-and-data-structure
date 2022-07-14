class stack
{
    constructor()
    {
        this.dataStore = []
    this.stackLength = 5
    this.top = 0
    }
    
    pop()
    {
        return this.dataStore[--this.top]
    }
    push(element)
    {
       return this.dataStore[++this.top] = element
       
    }
    peek()
    {
        return this.dataStore[this.top]
    }

    clear()
    {
        this.top = 0
    }
    length()
    {
        return this.top
    }
}

const s = new stack()
s.push('maaz')
s.push('ashir')
console.log(s.peek())
console.log(s.length())
// s.clear()
console.log(s.length())
// s.pop()
// s.pop()
console.log(s.peek())