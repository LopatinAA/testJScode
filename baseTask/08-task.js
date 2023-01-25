import { returnStateOfAge } from "./07-task";

const returnAgeAndName = (age,name) => {
    const strStareOfAge = returnStateOfAge(age)
    console.log(name, 'is',age,'years old and he is', strStareOfAge)
}

returnAgeAndName(23,'Mark')