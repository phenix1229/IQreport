

export const computeMonth = (testMonth, birthMonth, testDay, birthDay) => {
    if((testDay < birthDay) && (testMonth !== birthMonth)){
        return (11 - (birthMonth - testMonth))
    } 
    
    if(testDay >= birthDay){

        return (12 - (birthMonth - testMonth))
    }

    if(testMonth === birthMonth && (testDay >= birthDay)){
        return 0
    }
}

export const computeDay = (testDay, birthDay) => {
    if(testDay === birthDay){
        return 0
    }
    if(testDay > birthDay){
        return testDay - birthDay
    }
    return ((new Date(testYear, (testMonth -1), 0).getDate() - birthDay) + testDay)
}

export const computeYear = (testMonth, birthMonth, testYear, birthYear) => {
    if(testMonth < birthMonth || (testMonth === birthMonth && testDay < birthDay)){
        return (testYear - birthYear) -1
    }
    return testYear - birthYear
}

export const bdScale = {
    "0to3": [[[0],1],[[1],3],[[2],4],[[3],5],[[4,5],6],[[6,7],7],[[8,9],8],[[10,11],9],[[12,13,14],10],[[15,16,17],11],[[18,19,20],12],[[21,22,23],13],[[24,25,26],14],[[27,28,29],15],[[30,31,32],16],[[33,34,35],17],[[36,37,38],18],[[39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58],19]],
    "4to7": [[[0],1],[[1],3],[[2],4],[[3],5],[[4,5],6],[[6,7,8],7],[[9,10],8],[[11,12,13],9],[[14,15],10],[[16,17,18],11],[[19,20,21],12],[[22,23,24],13],[[25,26,27],14],[[28,29,30],15],[[31,32,33],16],[[34,35,36],17],[[37,38,39],18],[[40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58],19]],
    "8to11": [[[0],1],[[1],2],[[2],3],[[3],4],[[4],5],[[5,6],6],[[7,8,9],7],[[10,11],8],[[12,13,14],9],[[15,16,17],10],[[18,19,20],11],[[21,22,23],12],[[24,25,26],13],[[27,28],14],[[29,30,31],15],[[32,33,34],16,[[35,36,37],17],[[38,39,40],18],[[41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58],19]]]
}