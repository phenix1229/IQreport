import { 
    subject, 
    genderRef, 
    scaledRating,
    compositeRating, 
    vci,
    vciPercentile,
    vsi,
    vsiPercentile,
    wmi,
    wmiPercentile,
    fri,
    friPercentile,
    psi,
    psiPercentile,
    fsiq,
    fsiqPercentile
 } from "./utilities";

const mr = JSON.stringify(localStorage.getItem('mrScaledScore'));
const fw = JSON.stringify(localStorage.getItem('fwScaledScore'));

const intro = () => {
    return `In order to assess $$${subject}’s current level of cognitive functioning, ${genderRef()[0]} was administered 10 subtests on the
            Wechsler Intelligence Scale for Children, Fifth Edition (WISC-V). This assessment is an individually administered test
            of intellectual and cognitive abilities. The assessment provides a Full-Scale IQ (FSIQ) composite score which
            represents general intellectual ability. The primary subtests on the assessment contribute to evaluating five areas
            of cognitive functioning including verbal comprehension, visual-spatial abilities, fluid reasoning, working memory,
            and processing speed.`
}

const overView = () => {
    return `On the WISC-V, $${subject} obtained a FSIQ score of ${fsiq} which falls at the ${fsiqPercentile} percentile and in the ${compositeRating(Number(fsiq))} range.
            The FSIQ score is a measure of overall cognitive and reasoning ability. $${subject} obtained a Verbal Comprehension
            composite (VCI) score of ${vci} which falls at the ${vciPercentile} percentile and in the ${compositeRating(Number(vci))} range. The VCI is a measure of
            verbal ability including verbal comprehension, language development, and the ability to think with words and use
            these verbal skills in solving new problems. $${subject} obtained a Fluid Reasoning composite (FRI) score of ${fri} which
            falls at the ${friPercentile} percentile and in the ${compositeRating(Number(fri))} range. The FRI is a measure of nonverbal reasoning abilities
            including the ability to interpret patterns and sequences, and detect important elements among visual objects and
            apply that knowledge to identify like or similar objects. $${subject} obtained a Visual-Spatial composite (VSI) score of
            ${vsi} which falls at the ${vsiPercentile} percentile and in the ${compositeRating(Number(vsi))} range. The VSI is a measure of the ability to understand,
            attend, interpret visual information, visual-spatial reasoning ability, and to integrate and synthesize part-whole
            relationships. $${subject} obtained a Working Memory composite (WMI) score of ${wmi} which falls at the ${wmiPercentile}
            percentile and in the ${compositeRating(Number(wmi))} range. The WMI is a measure of the ability to sustain attention, and both short-
            term visual and auditory memory. $${subject} obtained a Processing Speed composite (PSI) score of ${psi} which falls
            at the ${psiPercentile} percentile and in the ${compositeRating(Number(psi))} range. The PSI is a measure of visual discrimination skills, short-term
            visual memory, processing speed of visual stimuli, and the ability to shift mental operations with ease and speed.`
}

const higherLower = () => {
    if(Number(mr) > Number(fw)){
        return `Since ${subject} obtained a higher score on Matrix Reasoning than the Figure Weights subtest with
                scaled scores of ${mr} and ${fw} respectively, it indicates that ${subject}’s ability to identify, complete, and extend patterns
                is better developed than ${genderRef()[2]} nonverbal quantitative reasoning abilities.`
    }
    return `Since ${subject} obtained a higher score on Figure Weights than the Matrix Reasoning subtest with
            scaled scores of ${fw} and ${mr} respectively, it indicates that ${subject}’s nonverbal quantitative reasoning abilities
            are significantly better developed than ${genderRef()[2]} ability to identify, complete, and extend patterns.`
}

const strengthWeakness = () => {
    return `The FRI composite score is comprised of two subtests including Matrix Reasoning and Figure Weights. On the
            Matrix Reasoning subtest ${subject} was presented with a pattern, and asked to complete the pattern. The Matrix
            Reasoning subtest is a measure of the ability to form analogies and complete patterns. On the Figure Weights
            subtest, ${subject} was presented with a scale with missing weight(s), and asked to select the option that balances
            the scale within a time limit. The Figure Weights subtest is a measure of nonverbal quantitative reasoning ability.
            ${higherLower()} ${subject} performed in the ${scaledRating(Number(mr))[0]} range on the Matrix Reasoning 
            subtest reflecting that ${genderRef()[2]} ability to identify and complete patterns is a ${scaledRating(Number(mr))[2]}. 
            ${subject} performed in the ${scaledRating(Number(fw))[0]} range on the Figure Weights subtest indicating that ${genderRef()[2]} 
            nonverbal quantitative reasoning abilities are a ${scaledRating(Number(fw))[2]}.`
}


export {
    intro,
    overView,
    strengthWeakness
}