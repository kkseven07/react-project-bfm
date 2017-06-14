export const toSave = form => {
    let obj = {};
    if (form.input) {
        if (form.input.value.trim() === "" && form.select.value !== "") {
            obj = { text: form.select.value };
        } else if (form.input.value.trim() !== "") {
            obj = { text: form.input.value };
        } else {
            obj = { text: null };
        }
    }

    return {
        selectedImage: form.selectedImage && form.selectedImage.url,
        ...obj
    };
};
