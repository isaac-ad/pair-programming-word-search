const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (const size of letters) {
     const vertically = size.join("")
     if(vertically.includes(word))
     return true;
    }
    for (const l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    return false;
}

module.exports = wordSearch


