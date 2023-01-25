const arrDay = ['monday','tuesday','wednesday','thursday','friday','saturday','sunday']
const numberInDay = (num) => {
    return (console.log('baseTask-04:',arrDay[num-1]));
}

for (let i = 1; i < 8; i++) {
    numberInDay(i)
}