import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    report:{
        subjectFirstName: '',
            subjectLastName: '',
            psychologistFirstName: '',
            psychologistLastName: '',
            testDate: '',
            birthDate: '',
            testAge: [],
            blockDesign: {rawScore:0,scaledScore:0},
            similarities: {rawScore:0,scaledScore:0},
            matrixReasoning: {rawScore:0,scaledScore:0},
            digitSpan: {rawScore:0,scaledScore:0},
            coding: {rawScore:0,scaledScore:0},
            vocabulary: {rawScore:0,scaledScore:0},
            figureWeights: {rawScore:0,scaledScore:0},
            visualPuzzles: {rawScore:0,scaledScore:0},
            pictureSpan: {rawScore:0,scaledScore:0},
            symbolSearch: {rawScore:0,scaledScore:0},
            scaledScoreToComposite: {
                verbalComprehension:{sumOfScale:0,compositeScore:0,percentRank:''},
                visuoSpacial:{sumOfScale:0,compositeScore:0,percentRank:''},
                fluidReasoning:{sumOfScale:0,compositeScore:0,percentRank:''},
                workingMemory:{sumOfScale:0,compositeScore:0,percentRank:''},
                processingSpeed:{sumOfScale:0,compositeScore:0,percentRank:''},
                fullScale:{sumOfScale:0,compositeScore:0,percentRank:''}
            },
            reportDetails: {
                reasoningAbilities:'',
                languageAbilities:'',
                visuospacialAbilities:'',
                memory:'',
                executiveFunction:''
            }
    }
}

export const reportSlice = createSlice({
    name:'report',
    initialState,
    reducers:{
        setReport: (state, action) => {
            state.report = action.payload;
            window.sessionStorage.setItem("report", JSON.stringify(action.payload))
        }
    }
})

export const {setReport} = reportSlice.actions;

export default reportSlice.reducer;