const orientationPeople = (sing) => {
    console.log('baseTask-03:')
    return (                
        (sing === 'M') ? console.log('you true man') :
        (sing === 'F') ? console.log('you true girl') :
                         console.log('who are you?')
    )
    
}

orientationPeople('M')