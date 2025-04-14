import Grid from '@mui/material/Grid2';

const MemoryReport = () => {

    const subject = localStorage.getItem('subjectFirstName');
    const dsScaledScore = '';
    const psScaledScore = '';

    return (
        <p>
            The WMI composite score is comprised of two subtests including Digit Span and Picture Span. On the Digit Span
            subtest, {subject} was presented with a series of numbers, and asked to recall them forward, backward, or in
            numerical order. The Digit Span subtest is a measure of short-term auditory recall. On the Picture Span subtest,
            {subject} was presented with pictoral object(s) on a stimulus page for a specified time, and was asked to
            select the same picture(s) from a response page. The Picture Span subtest is a measure of visual, short-term
            memory. While {subject} obtained a slightly higher score on Picture Span than the Digit Span subtest with scaled
            scores of 14 and 13 respectively, the difference is not significant indicating that both her short-term auditory and
            visual memory are similarly developed. In addition, {subject} performed in the Above-Average range on both
            subtests reflecting that both of these skills are significant strengths for her.
        </p>
    )
}


export default MemoryReport