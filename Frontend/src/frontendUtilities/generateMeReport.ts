import {
    subject, 
    genderRef, 
    scaledRating,
    compositeRating,
    compareScales,
    wmi
} from "./utilities"

const ds = localStorage.getItem('dsScaledScore');
const ps = localStorage.getItem('psScaledScore');

const intro = () => {
    return `The WMI composite score is comprised of two subtests including Digit Span and Picture Span. On the Digit Span subtest, ${subject} was presented with a series of numbers, and asked to recall them forward, backward, or in numerical order. The Digit Span subtest is a measure of short-term auditory recall. On the Picture Span subtest, ${subject} was presented with pictoral object(s) on a stimulus page for a specified time, and was asked to select the same picture(s) from a response page. The Picture Span subtest is a measure of visual, short-term memory.`
}

const higherLower = () => {
    if(Number(ps) > Number(ds)){
        return `${subject} obtained a higher score on Picture Span than the Digit Span subtest with scaled scores of ${ps} and ${ds} respectively, indicating that ${genderRef()[2]} short-term auditory memory is better developed than ${genderRef()[2]} visual memory.`
    }
    if(Number(ds) > Number(ps)){
        return `{subject} obtained a higher score on Digit Span than the Picture Span subtest with scaled scores of ${ds} and ${ps} respectively, indicating that ${genderRef()[2]} visual memory is better developed than ${genderRef()[2]} short-term auditory memory.`
    }
    return `${subject} scored evenly (${ds}) on both subtests, indicating that both ${genderRef()[2]} short-term auditory and visual memory are similarly developed.`
}

const strengthWeakness = () => {
    return `${subject} performed in the ${scaledRating(Number(ds))[0]} range on Digit Span and in the ${scaledRating(Number(ps))[0]} range on the Picture Span subtest. ${subject} obtained a composite score in the ${compositeRating(Number(wmi))} range on these two subtests indicating that these are ${compareScales(Number(ds),Number(ps))[0]} skills/abilities compared to other skills/abilities evaluated on the assessment and a ${compareScales(Number(ds),Number(ps))[1]} for ${genderRef()[1]}.`
}

export {
    intro,
    higherLower,
    strengthWeakness
}