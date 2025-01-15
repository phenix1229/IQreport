

export const computeMonth = (tdMonth, bdMonth, tdDay, bdDay) => {
    if((tdDay < bdDay) && (tdMonth !== bdMonth)){
        console.log('this')
        return (11 - (bdMonth - tdMonth))
    } 
    
    if(tdDay > bdDay  || tdDay === bdDay){

        return (12 - (bdMonth - tdMonth))
    }

    if(tdMonth === bdMonth && (tdDay > bdDay || tdDay === bdDay)){
        return 0
    }
}

export const computeDay = (tdDay, bdDay) => {
    if(tdDay === bdDay){
        return 0
    }
    if(tdDay > bdDay){
        return tdDay - bdDay
    }
    return ((new Date(tdYear, (tdMonth -1), 0).getDate() - bdDay) + tdDay)
}

export const computeYear = (tdMonth, bdMonth, tdYear, bdYear) => {
    if(tdMonth < bdMonth || (tdMonth === bdMonth && tdDay < bdDay)){
        return (tdYear - bdYear) -1
    }
    return tdYear - bdYear
}