const init = {
    page: {},
    bookVersion:{value:"digital",isPristine:true},
    intro: {
        selectedImage: null,
        select: {
            value: "",
            isPristine: true,
            isValid: true,
            errorText: ""
        },
        input: { value: "", isPristine: true, isValid: true, errorText: "" }
    },
    fruitDNA: {
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
        selectedImage: null
    },
    virtue: {
        select: {
            value: "",
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
    qualityTableStep: 280
};

export default (
    state = init,
    { type, page, params, text, fieldType, which, leftRotate, version }
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
        case "BOOK_VERSION":
            return {
                ...state,
                bookVersion:{value:version,isPristine:false}
            }
        case "CLEAN_BUILDER":
            return init
            // return {...init, bookVersion:state.bookVersion};
        default:
            return state;
    }
};
