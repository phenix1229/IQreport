import {
    subject,
    genderRef,
    vsi,
    compareScales,
    compositeRating,
    scaledRating

} from "./utilities";

const vp = JSON.stringify(localStorage.getItem('vpScaledScore'));
const bd = JSON.stringify(localStorage.getItem('bdScaledScore'));

const intro = () => {
    return `The VSI composite score is comprised of two subtests including Block Design and Visual Puzzles. On the Block Design subtest, ${subject} was presented with a design, and asked to assemble an identical design with blocks within a time limit. The Block Design subtest is a measure of visual processing, visual-spatial ability, and analysis and synthesis. On the Visual Puzzles subtest, ${subject} was presented with a visual image of a completed puzzle, and asked to choose three images that when combined would create the picture of the puzzle prompt within a timed limit. The Visual Puzzles subtest is a measure of analysis and synthesis skills of abstract visual stimuli.`
}

const higherLower = () => {
    if(Number(bd) > Number(vp)){
        return `Since ${subject} obtained a higher score on Block Design than the Visual Puzzles subtest with scaled scores of ${bd} and ${vp} respectively, it indicates that ${subject}’s visual processing, visual-spatial ability, and analysis and synthesis are better developed than ${genderRef()[2]} analysis and synthesis skills of abstract visual stimuli.`
    }
    if(Number(vp) > Number(bd)){
        return `Since ${subject} obtained a higher score on Visual Puzzles than the Block Design subtest with scaled scores of ${vp} and ${bd} respectively, it indicates that ${subject}’s analysis and synthesis skills of abstract visual stimuli are better developed than ${genderRef()[2]} visual processing, visual-spatial ability, and analysis and synthesis.`
    }
    return `${subject} scored equally (${vp}) on both subtests, indicating that ${genderRef()[2]} visual-spatial and analysis and synthesis skills of both abstract visual stimuli and when presented with a visual model are similarly developed.`
}

const strengthWeakness = () => {
    return `${subject} performed in the ${scaledRating(Number(bd))[0]} range on Block Design and in the ${scaledRating(Number(vp))[0]} range on the Visual Puzzles. ${subject} obtained a composite score in the ${compositeRating(Number(vsi))} range on these two subtests indicating that these are ${compareScales(Number(bd),Number(vp))[0]} skills/abilities compared to other skills/abilities evaluated on the assessment and a ${compareScales(Number(bd),Number(vp))[1]} for ${genderRef()[1]}.`
}

export {
    intro,
    higherLower,
    strengthWeakness
}