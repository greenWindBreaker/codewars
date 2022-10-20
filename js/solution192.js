//solution192
//Your task is to remove all duplicate words from a string, leaving only single (first) words entries.
//ex: 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta' = 'alpha beta gamma delta'

const removeDuplicateWords = s => [...new Set(s.split(' '))].join(' ')

//testcases:
console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'))//alpha beta gamma delta
console.log(removeDuplicateWords('dog cat cat mouse'))//dog cat mouse