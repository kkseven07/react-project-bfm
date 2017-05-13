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
    }
};

export default (
    state = init,
    { type, page, params, text, fieldType, which }
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
        case "CLEAN_BUILDER":
            return init
        default:
            return state;
    }
};
