import Grid from '@mui/material/Grid2';

const LanguageAbilitiesReport = () => {
    
    const subject = localStorage.getItem('subjectFirstName');

    return (
        <p>
            The VCI composite score is comprised of two subtests including Vocabulary and Similarities. On the Vocabulary
            subtest, {subject} was presented with words, and was asked to provide definitions to these words. The Vocabulary
            subtest is a measure of language development and fund of information. On the Similarities subtest, {subject} was
            presented with two words that represent objects or concepts, and asked how they are alike. The Similarities
            subtest is a measure of verbal comprehension, concept formation, and concrete and abstract reasoning. Since
            {subject} obtained a slightly higher score on Similarities than the Vocabulary subtest with scaled scores of 10 and 8
            respectively, it indicates that {subject}’s ability to form concepts when presented with language and words is
            slightly better developed than her overall fund of knowledge and information. However, {subject} performed in the
            Average range on both subtests reflecting that both of these skills are relative strengths for her.
        </p>
    )
}


export default LanguageAbilitiesReport