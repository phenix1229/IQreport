import Grid from '@mui/material/Grid2';

const VisuospatialAbilitiesReport = () => {

    const subject = localStorage.getItem('subjectFirstName');

    return (
        <p>
            The VSI composite score is comprised of two subtests including Block Design and Visual Puzzles. On the Block
            Design subtest, {subject} was presented with a design, and asked to assemble an identical design with blocks
            within a time limit. The Block Design subtest is a measure of visual processing, visual-spatial ability, and analysis
            and synthesis. On the Visual Puzzles subtest, {subject} was presented with a visual image of a completed puzzle,
            and asked to choose three images that when combined would create the picture of the puzzle prompt within a
            timed limit. The Visual Puzzles subtest is a measure of analysis and synthesis skills of abstract visual stimuli. While
            {subject} obtained a slightly higher score on Block Design than the Visual Puzzles subtest with scaled scores of 10
            and 9 respectively, the difference is not significant indicating that her visual-spatial and analysis and synthesis
            skills of both abstract visual stimuli and when presented with a visual model are similarly developed. In addition,
            {subject} performed in the Average range on both subtests reflecting that both of these skills are relative strengths
            for her.
        </p>
    )
}


export default VisuospatialAbilitiesReport