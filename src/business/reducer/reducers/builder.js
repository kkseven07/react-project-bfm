const init = {
    page: {},
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
            value: "",
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
    { type, page, params, text, fieldType, which, leftRotate }
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
        case "CLEAN_BUILDER":
            return init;
        default:
            return state;
    }
};
