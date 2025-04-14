import Grid from '@mui/material/Grid2';

const ReasoningAbilitiesReport = () => {

    const subject = localStorage.getItem("subjectFirstName");

    return (
        <>
            <Grid container size={12} spacing={2}>
                <p>
                    In order to assess {subject}’s current level of cognitive functioning, she was administered 10 subtests on the
                    Wechsler Intelligence Scale for Children, Fifth Edition (WISC-V). This assessment is an individually administered test
                    of intellectual and cognitive abilities. The assessment provides a Full-Scale IQ (FSIQ) composite score which
                    represents general intellectual ability. The primary subtests on the assessment contribute to evaluating five areas
                    of cognitive functioning including verbal comprehension, visual-spatial abilities, fluid reasoning, working memory,
                    and processing speed.

                    On the WISC-V, {subject} obtained a FSIQ score of 105 which falls at the 63rd percentile and in the Average range.
                    The FSIQ score is a measure of overall cognitive and reasoning ability. {subject} obtained a Verbal Comprehension
                    composite (VCI) score of 95 which falls at the 37th percentile and in the Average range. The VCI is a measure of
                    verbal ability including verbal comprehension, language development, and the ability to think with words and use
                    these verbal skills in solving new problems. {subject} obtained a Fluid Reasoning composite (FRI) score of 94 which
                    falls at the 34th percentile and in the Average range. The FRI is a measure of nonverbal reasoning abilities
                    including the ability to interpret patterns and sequences, and detect important elements among visual objects and
                    apply that knowledge to identify like or similar objects. {subject} obtained a Visual-Spatial composite (VSI) score of
                    97 which falls at the 42nd percentile and in the Average range. The VSI is a measure of the ability to understand,
                    attend, interpret visual information, visual-spatial reasoning ability, and to integrate and synthesize part-whole
                    relationships. {subject} obtained a Working Memory composite (WMI) score of 120 which falls at the 91st
                    percentile and in the Very High range. The WMI is a measure of the ability to sustain attention, and both short-
                    term visual and auditory memory. {subject} obtained a Processing Speed composite (PSI) score of 126 which falls
                    at the 96th percentile and in the Very High range. The PSI is a measure of visual discrimination skills, short-term
                    visual memory, processing speed of visual stimuli, and the ability to shift mental operations with ease and speed.

                    The FRI composite score is comprised of two subtests including Matrix Reasoning and Figure Weights. On the
                    Matrix Reasoning subtest. {subject} was presented with a pattern, and asked to complete the pattern. The Matrix
                    Reasoning subtest is a measure of the ability to form analogies and complete patterns. On the Figure Weights
                    subtest, {subject} was presented with a scale with missing weight(s), and asked to select the option that balances
                    the scale within a time limit. The Figure Weights subtest is a measure of nonverbal quantitative reasoning ability.
                    Since {subject} obtained a signi�cantly higher score on Matrix Reasoning than the Figure Weights subtest with
                    scaled scores of 13 and 5 respectively, it indicates that {subject}’s ability to identify, complete, and extend patterns
                    is significantly better developed than her nonverbal quantitative reasoning abilities. In addition, {subject}
                    performed in the Above-Average range on the Matrix Reasoning subtest reflecting that her ability to identify and
                    complete patterns is a significant strength. On the other hand, {subject} obtained her lowest score and performed
                    in the Below-Average range on the Figure Weights subtest indicating that her nonverbal quantitative reasoning
                    abilities is her least developed skills/abilities compared to other skills/abilities evaluated on the assessment and a
                    relative weakness.
                </p>
            </Grid>
        </>
    )
}


export default ReasoningAbilitiesReport