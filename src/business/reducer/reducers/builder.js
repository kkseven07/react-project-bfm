const init = {
    page: {},
    bookVersion: {
        value: "digital",
        size: "21",
        isPristine: true,
        giftWrap: ""
    },
    intro: {
        selectedImage: null,
        select: {
            value: "",
            isPristine: true,
            isValid: true,
            errorText: ""
        },
        input: { value: "", isPristine: true, isValid: true, errorText: "" },
        textarea: {value:"",  errorText:""}
    },
    film:{
        selectedImage:null
    },
    epicStory: {
        selectedImage: null
    },

    brain: {
        input: { value: "", isPristine: true, isValid: true, errorText: "" },
        input1: {value:"", isPristine: true, isValid: true, errorText: "" },
        input2: {value:"", isPristine: true, isValid: true, errorText: "" }
    },
    musicHit: {
        selectedImage: null
    },
    fruitDNA: {
        selectedImage: null
    },
    deducedAgeFact: {
        selectedImage: null
    },
    coolPlace: {
        selectedImage: null
    },
    easternWiseWord: {
        selectedImage: null
    },
    westernWiseWord: {
        selectedImage: null
    },
    wiseWord: {
        selectedImage: null,
        textarea: {value:"",  errorText:""}
    },
    framefridge: {
        textarea: {value:"",  errorText:""}
    },
    pastPhoto: {
        textarea: {value:"",  errorText:""}
    },
    relaxPhoto: {
        textarea: {value:"",  errorText:""}
    },
    virtue: {
        select: {
            value: "Хороший друг",
            isPristine: true,
            isValid: true,
            errorText: ""
        },
        input: { value: "", isPristine: true, isValid: true, errorText: "" }
    },
    vice: {
        select: {
            value: "Много спать",
            isPristine: true,
            isValid: true,
            errorText: ""
        },
        input: { value: "", isPristine: true, isValid: true, errorText: "" }
    },
    quotes: {
        input: { value: "", isPristine: true, isValid: true, errorText: "" },
        textarea: {value:"",  errorText:""}
    },
    qualityTableStep: 280
};

export default (
    state = init,
    { type, page, params, text, fieldType, which, leftRotate, version, whichVersion }
) => {
    switch (type) {
        case "BUILDER_IMAGE":
            let newImage = null;

            if (params.image) {
                newImage = params.image;
            }
            return {
                ...state,
                [page.type]: {
                    ...state[page.type],
                    selectedImage: newImage
                }
            };
        case "BUILDER_INPUT":
            return {
                ...state,
                [fieldType]: {
                    ...state[fieldType],
                    [which]: {
                        value: text,
                        isPristine: true
                    }
                }
            };
        case "ROTATE_QUALITY_TABLE":
            return {
                ...state,
                qualityTableStep: leftRotate
                    ? state.qualityTableStep - 1
                    : state.qualityTableStep + 1
            };
        // case "BOOK_VERSION":
        //     let toReturn;
        //     console.log(version, whichVersion)
        //     if (["21", "23"].indexOf(version) > -1) {
        //         toReturn = {
        //             size: version,
        //             value: whichVersion?whichVersion:state.bookVersion.value,
        //             giftWrap: state.bookVersion.giftWrap
        //         };
        //     } else if (version === "giftWrap") {
        //         toReturn = {
        //             size: state.bookVersion.size,
        //             value: whichVersion?whichVersion:state.bookVersion.value,
        //             giftWrap: state.bookVersion.giftWrap === "" ? version : ""
        //         };
        //     } else {
        //         toReturn = {
        //             value: version,
        //             size: state.bookVersion.size,
        //             giftWrap: state.bookVersion.giftWrap
        //         };
        //     }
        //     return {
        //         ...state,
        //         bookVersion: { ...toReturn, isPristine: false }
        //     };
        case "CLEAN_BUILDER":
            return init;
        // return {...init, bookVersion:state.bookVersion};
        default:
            return state;
    }
};
