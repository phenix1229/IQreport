import {
    subject, 
    genderRef, 
    scaledRating,
    compositeRating,
    compareScales,
    vci
} from "./utilities"

const si = localStorage.getItem('siScaledScore');
const vc = localStorage.getItem('vcScaledScore');

const intro = () => {
    return `The VCI composite score is comprised of two subtests including Vocabulary and Similarities. On the Vocabulary
            subtest, ${subject} was presented with words, and was asked to provide definitions to these words. The Vocabulary
            subtest is a measure of language development and fund of information. On the Similarities subtest, ${subject} was
            presented with two words that represent objects or concepts, and asked how they are alike. The Similarities
            subtest is a measure of verbal comprehension, concept formation, and concrete and abstract reasoning.`
}

const higherLower = () => {
    if(Number(si) > Number(vc)){
        return `Since ${subject} obtained a higher score on Similarities than the Vocabulary subtest with scaled scores of ${si} and ${vc}
            respectively, it indicates that ${subject}’s ability to form concepts when presented with language and words is
            better developed than ${genderRef()[2]} overall fund of knowledge and information.`
    }
    if(Number(vc) > Number(si)){
        return `Since ${subject} obtained a slightly higher score on Vocabulary than the Similarities subtest with scaled scores of ${vc} and ${si}
            respectively, it indicates that {subject}’s overall fund of knowledge and information is better developed than ${genderRef()[2]} ability 
            to form concepts when presented with language and words.`
    }
    return `${subject} scored evenly on both subtests, indicating that ${genderRef()[2]} ability to form concepts when presented with language and words
            and ${genderRef()[2]} overall fund of knowledge and information are equally developed.`
}

const strengthWeakness = () => {
    return `${subject} performed in the ${scaledRating(Number(si))[0]} range on Similarities and in the ${scaledRating(Number(vc))[0]} range 
            on the Vocabulary subtest. ${subject} obtained a composite score in the ${compositeRating(Number(vci))} range on these two subtests indicating 
            that these are ${compareScales(Number(si),Number(vc))[0]} skills/abilities compared to other skills/abilities evaluated on the assessment 
            and a ${compareScales(Number(si),Number(vc))[1]} for ${genderRef()[1]}.`
}

export {
    intro,
    higherLower,
    strengthWeakness
}