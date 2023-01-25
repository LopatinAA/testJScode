console.log('baseTask-07')

export const returnStateOfAge = (age) => {
    let str = 
    (age <= 17 ) ? 'baby' : 
    (age <= 30 ) ? 'young' : 
    (age <= 55 ) ? 'mature' : 
    (age <= 100 ) ? 'old' : ''
    return str
}

for (let i = 1; i < 101; i++) {
    console.log(i,returnStateOfAge(i))
}
