import invert from "lodash/invert";
export const areEqualShallow = (a, b) => {
    for (var key in a) {
        if (a[key] !== b[key]) {
            return false;
        }
    }
    return true;
};

export const test = () => console.log("Ilyas is awesome");

export const fieldStyle = (isPristine, isValid) => {
    if (isPristine) {
        return "enter";
    } else if (!isValid) {
        return "enter error";
    } else {
        return "enter valid";
    }
};

export const getDate = (raw, monthMap) => {
    const date = new Date(raw);
    const day = date.getUTCDate();
    const month = invert(monthMap)[date.getUTCMonth()];
    const year = date.getUTCFullYear();
    return { day, month, year };
};

export const cellTime = (month, year) =>
    month > 9
        ? { month: month - 9, year }
        : { month: month + 3, year: year - 1 };

export const textColor = (bacgroundColor, colors) =>
    colors.filter(cmap => cmap.background === bacgroundColor)[0].text;

export const getBookName = (bookName, name) => {
    if (name === "") {
        return "КНИГА\nО\nТЕБЕ";
    }
    if (bookName.trim() === "") {
        return name.toUpperCase();
    }
    let str = bookName.toUpperCase();
    let ls = str.trim().split(/\s+/);
    let length = str.length;
    return ls.map((word, i) => {
        if (i === length - 1) {
            return word;
        } else {
            return word + "\n";
        }
    });
};

export const cutString = (string, limit) => {
    let newString = string.substring(0, limit);
    let dotIndex = 0;
    if (string.length > limit) {
        for (let i = 0; i < newString.length - 1; i++) {
            if (string.charAt(i) === ".") {
                dotIndex = i;
            }
        }
        // console.log(`${newString.substring(0, dotIndex)}...`)
        return `${newString.substring(0, dotIndex)}...`;
    } else return string;
};
export const checkLength = (name, breakpoint, fontsize) => {
    var diff = name.length - breakpoint;
    var size = fontsize;
    var k = diff;
    if (name.length > breakpoint) {
        for (let i = 0; i < diff; i++) {
            if (k - diff === 0) {
                size = size * 0.9;
                k = k - 1;
            } else if (diff - k > 0 && k - diff <= 3) {
                size = size * 0.96;
                k = k - 1;
            } else if (diff - k > 3) {
                size = size * 0.99;
                k = k - 1;
            }
        }
        return `${size}em`;
    }
    return "";
};

export const editable = [
    "intro",
    "virtue",
    "vice",
    "brain",
    "quote",
    "qualityTable",
    "easternWiseWord",
    "westernWiseWord",
    "coolPlace",
    "wiseWord",
    "fruitDNA"
];

export const monthsMap = {
    Январь: 0,
    Февраль: 1,
    Март: 2,
    Апрель: 3,
    Май: 4,
    Июнь: 5,
    Июль: 6,
    Август: 7,
    Сентябрь: 8,
    Октябрь: 9,
    Ноябрь: 10,
    Декабрь: 11
};
export const monthsMapYa = {
    Января: 0,
    Февраля: 1,
    Марта: 2,
    Апреля: 3,
    Мая: 4,
    Июня: 5,
    Июля: 6,
    Августа: 7,
    Сентября: 8,
    Октября: 9,
    Ноября: 10,
    Декабря: 11
};
export const monthsMapYe = {
    Январе: 0,
    Феврале: 1,
    Марте: 2,
    Апреле: 3,
    Мае: 4,
    Июне: 5,
    Июле: 6,
    Августе: 7,
    Сентябре: 8,
    Октябре: 9,
    Ноябре: 10,
    Декабре: 11
};
export const months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь"
];

export const colors = [
    {
        background: "#90d3e4",
        text: "white"
    },
    {
        background: "#fec00d",
        text: "black"
    },
    {
        background: "#74c19d",
        text: "white"
    },
    {
        background: "black",
        text: "white"
    },
    {
        background: "#d60000",
        text: "white"
    },
    {
        background: "#d6d6d6",
        text: "black"
    },
    {
        background: "#f47ff8",
        text: "white"
    },
    {
        background: "#5877ff",
        text: "white"
    }
];
