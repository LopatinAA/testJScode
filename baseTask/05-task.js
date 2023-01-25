const text = 'Массив shools является массивом объектов. Переменная updatedShools вызывает функцию editName, которой передается требующая обновления гимназия, новое название гимназии и массив shools. Тем самым, изменение вносятся в новый массив без редактирвоания исходного массива:'
const arr = [...text]


const returnPosition = (arrDate) => {
    let arrIndex = [0]
for(let i = 0; i < arrDate.length;i++){
    if (arrDate[i] === '.' && arrDate[i+1] === ' ') {arrIndex.push(i+2)}
}
return arrIndex
}

const returnLastPositin = (arr,returnPosition) => {
    let arrLastIndex = []
    for(let i = 0;i < returnPosition.length;i++){
        arrLastIndex.push(arr.indexOf(' ',returnPosition[i]))
    }
return arrLastIndex
}

const returnWord = (arr,returnPosition,returnLastPositin) => {
    let arrWord = []
    let srtWord = '';
    for(let i = 0;i < returnPosition.length; i++) {
        for(let j = returnPosition[i]; j < returnLastPositin[i]; j++){
            //srtWord.concat(String(arr[j])) 
            srtWord += arr[j]  
        }
        arrWord.push(srtWord)
        srtWord = ''
    }
    return arrWord
}

const arrIndex = returnPosition(arr)
const arrlastIndex = returnLastPositin(arr,arrIndex)
const arrWord = returnWord(arr,arrIndex,arrlastIndex)

console.log(text)
console.log('baseTask-05: ',arrWord)
