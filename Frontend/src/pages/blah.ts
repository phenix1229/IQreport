const data = {
    "subjectFirstName":"sub",
    "subjectLastName":"two",
    "psychologistFirstName":"c",
    "psychologistLastName":"d",
    "testDate":[{"$numberInt":"2025"},{"$numberInt":"1"},{"$numberInt":"2"}],
    "birthDate":[{"$numberInt":"2018"},{"$numberInt":"2"},{"$numberInt":"3"}],
    "testAge":[{"$numberInt":"6"},{"$numberInt":"10"},{"$numberInt":"30"}],
    "blockDesign":{"rawScore":{"$numberInt":"0"},"scaledScore":{"$numberInt":"0"}},
    "similarities":{"rawScore":{"$numberInt":"0"},"scaledScore":{"$numberInt":"0"}},
    "matrixReasoning":{"rawScore":{"$numberInt":"0"},"scaledScore":{"$numberInt":"0"}},
    "digitSpan":{"rawScore":{"$numberInt":"0"},"scaledScore":{"$numberInt":"0"}},
    "coding":{"rawScore":{"$numberInt":"0"},"scaledScore":{"$numberInt":"0"}},
    "vocabulary":{"rawScore":{"$numberInt":"0"},"scaledScore":{"$numberInt":"0"}},
    "figureWeights":{"rawScore":{"$numberInt":"0"},"scaledScore":{"$numberInt":"0"}},
    "visualPuzzles":{"rawScore":{"$numberInt":"0"},"scaledScore":{"$numberInt":"0"}},
    "pictureSpan":{"rawScore":{"$numberInt":"0"},"scaledScore":{"$numberInt":"0"}},
    "symbolSearch":{"rawScore":{"$numberInt":"0"},"scaledScore":{"$numberInt":"0"}},
    "scaledScoreToComposite":{
        "verbalComprehension":{"sumOfScale":{"$numberInt":"0"},"compositeScore":{"$numberInt":"0"},"percentRank":""},
        "visualSpacial":{"sumOfScale":{"$numberInt":"0"},"compositeScore":{"$numberInt":"0"},"percentRank":""},
        "fluidReasoning":{"sumOfScale":{"$numberInt":"0"},"compositeScore":{"$numberInt":"0"},"percentRank":""},
        "workingMemory":{"sumOfScale":{"$numberInt":"0"},"compositeScore":{"$numberInt":"0"},"percentRank":""},
        "processingSpeed":{"sumOfScale":{"$numberInt":"0"},"compositeScore":{"$numberInt":"0"},"percentRank":""},
        "fullScale":{"sumOfScale":{"$numberInt":"0"},"compositeScore":{"$numberInt":"0"},"percentRank":""}
    },
    "reportDetails":{
        "reasoningAbilities":"In order to assess sub’s current level of cognitive functioning.",
        "languageAbilities":"The VCI composite score is comprised of two subtests including Vocabulary and Similarities.",
        "visuospatialAbilities":"able enough.",
        "memory":"remembers",
        "executiveFunction":"functions executively."
    }
}

export {data}