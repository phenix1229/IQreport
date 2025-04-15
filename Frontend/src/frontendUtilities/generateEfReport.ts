const subject = localStorage.getItem('subjectFirstName');
const gender = localStorage.getItem('gender');
const co = JSON.stringify(localStorage.getItem('coScaledScore'));
const ss = JSON.stringify(localStorage.getItem('ssScaledScore'));
const psi = JSON.stringify(localStorage.getItem('psi'));

const genderRef = () => {
    console.log(gender);
    if(gender === 'male'){
        return ['he','him','their'];
    }
    return ['she','her','their'];
}

const scaledRating = (test:number) => {
    if(test > 0 && test <= 4){
        return ['Far Below-Average','poorly developed','significant weakness'];
    }
    if(test >= 5 && test <= 7){
        return ['Below-Average','poorly developed','weakness'];
    }
    if(test >= 8 && test <= 12){
        return ['Average','','strength'];
    }
    if(test >= 13 && test <= 15){
        return ['Above-Average','well developed','significant strength'];
    }
    return ['Superior','very well developed','significant strength'];
}

const compareScales = () => {
    if(Number(co) > Number(ss)){
        return [scaledRating(Number(co))[1],scaledRating(Number(co))[2]];
    }
    return [scaledRating(Number(ss))[1],scaledRating(Number(ss))[2]];
}

const compositeRating = (score:number) => {
    if(score >= 0 && score <= 69){
        return 'Etremely Low';
    }
    if(score >= 70 && score <= 79){
        return 'Very Low';
    }
    if(score >= 80 && score <= 89){
        return 'Low Average';
    }
    if(score >= 90 && score <= 109){
        return 'Average';
    }
    if(score >= 110 && score <= 119){
        return 'High Average';
    }
    if(score >= 120 && score <= 129){
        return 'Very High';
    }
    if(score >= 130){
        return 'Extremely High';
    }
}

const intro = () => {
    return `The PSI composite score is comprised of two subtests including Coding and Symbol Search. On the Coding subtest, ${subject} was presented with numbers paired with 
            symbols, and was asked to copy symbols to numbers where no symbols were present within a time limit. The Coding subtest is a measure of short-term visual memory 
            and speed of mental operations. On the Symbol Search subtest, ${subject} was presented with a symbol, asked to choose the identical symbol in a row of five symbols. 
            If the symbol is not present in the row, ${subject} was asked to choose NO as an option. The subtest also has a time limit. The Symbol Search subtest is a measure 
            of visual perception, visual scanning ability, attention, and processing speed of visual stimuli.`
}

const higherLower = () => {
    if(co > ss){
        return `Since ${subject} obtained a higher score on Coding than the Symbol Search subtest with scaled scores of ${co} and ${ss} respectively, it indicates
                that ${subject}’s ability to shift mental operations with ease and speed is better developed than ${genderRef()[2]} visual scanning,
                visual perceptual skills, and the ability to attend to a rote task.`
    }
    if(co < ss){
        return `Since ${subject} obtained a higher score on the Symbol Search than the Coding subtest with scaled scores of ${ss} and ${co} respectively, it indicates
                that ${subject}’s visual scanning, visual perceptual skills, and the ability to attend to a rote task is better developed than ${genderRef()[2]} ability to shift 
                mental operations with ease and speed.`
    }
    return '';
}

const strengthWeakness = () => {
    return `${subject} performed in the ${scaledRating(Number(co))[0]} range on Coding and in the ${scaledRating(Number(ss))[0]} range on the Symbol Search. ${subject} obtained 
    a composite score in the ${compositeRating(Number(psi))} range on these two subtests indicating that these are ${compareScales()[0]} skills/abilities compared to other 
    skills/abilities evaluated on the assessment and a ${compareScales()[1]} for ${genderRef()[1]}.`
}

export {
    intro,
    higherLower,
    strengthWeakness
}