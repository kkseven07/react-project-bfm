import invert from "lodash/invert";
export const areEqualShallow = (a, b) => {
    for (var key in a) {
        if (a[key] !== b[key]) {
            return false;
        }
    }
    return true;
};


export const fieldStyle = (isPristine, isValid) => {
    if (isPristine) {
        return "enter";
    } else if (!isValid) {
        return "enter error";
    } else {
        return "enter valid";
    }
};

export const getDate = (raw) => {
    const date = new Date(raw);
    const day = date.getDate()<10?`0${date.getDate()}`:date.getDate();
    const month = invert(monthsMap)[date.getMonth()];
    const year = date.getFullYear();
    const monthNumber = date.getMonth()<9?`0${date.getMonth()+1}`:date.getMonth()+1;
    const monthYa = invert(monthsMapYa)[date.getMonth()];
    const monthYe = invert(monthsMapYe)[date.getMonth()];
    const dayNoZero = date.getDate();
    return {day, month, year, monthNumber, monthYa, monthYe, dayNoZero};
};
export const cellTime = (month, year) =>
    month > 9
        ? { month: month - 9, year }
        : { month: month + 3, year: year - 1 };

export const textColor = (bacgroundColor, colors) =>
    colors.filter(cmap => cmap.background === bacgroundColor)[0].text;

export const getBookName = (bookName, name,bookType) => {
    const text=bookType==="you"?"ТЕБЕ":bookType==="mom"?"МАМЕ":"ПАПЕ"
    if (name === "") {
        return "КНИГА\nО\n"+text;
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
            if (string.charAt(i) === "." || string.charAt(i)===";")  {
                dotIndex = i;
            }
        }
        return `${newString.substring(0, dotIndex)}...`;
    } else return string;
};
export const checkLength = (name, breakpoint, fontsize, params) => {
    var diff = name.length - breakpoint;
    var size = fontsize;
    var k = diff;
    if (name.length > breakpoint) {
        if (!params) {
            for (let i = 0; i < diff; i++) {
                if (k - diff === 0) {
                    size = size * 0.9;
                    k = k - 1;
                } else if (diff - k > 0 && k - diff < 3) {
                    size = size * 0.95;
                    k = k - 1;
                } else if (diff - k >= 3 && k-diff<= 6) {
                    size = size * 0.99;
                    k = k - 1;
                } else if (diff - k >6) {
                    size = size * 0.999;
                    k = k - 1;
                }
            }
        }
        else if (params==='wise') {
            for (let i = 0; i < diff; i++) {
                if (diff - k === 0) {
                    size = size * 0.995;
                    k = k - 1;
                } else if (diff - k > 0 && diff - k < 50) {
                    size = size * 0.9925;
                    k = k - 1;
                } else if (diff - k > 50 && diff - k < 200) {
                    size = size * 0.9945;
                    k = k - 1;
                }
            }
        }
        else if (params==='film') {
            for (let i = 0; i < diff; i++) {
                    size = size * 0.995;
                    k = k - 1;
                if (diff - k > 0 && diff - k < 50) {
                    size = size * 0.969;
                    k = k - 1;
                } else if (diff - k > 50 && diff - k < 200) {
                    size = size * 0.996;
                    k = k - 1;
                }
            }
        }

        else if (params==='wise1') {
            for (let i = 0; i < diff; i++) {
                if (diff - k === 0) {
                    size = size * 0.995;
                    k = k - 1;
                } else if (diff - k > 0 && diff - k < 50) {
                    size = size * 0.9925;
                    k = k - 1;
                } else if (diff - k > 50 && diff - k < 200) {
                    size = size * 0.9965;
                    k = k - 1;
                }
            }
        }
        else if (params==='formulaMom') {
            for (let i = 0; i < diff; i++) {
                if (diff - k === 0) {
                    size = size * 0.9;
                    k = k - 1;
                } else if (diff - k > 0 && diff - k < 50) {
                    size = size * 0.93;
                    k = k - 1;
                }
            }
        }
        else if (params==='prideOfMom') {
            for (let i = 0; i < diff; i++) {
                if (diff - k === 0) {
                    size = size * 0.9;
                    k = k - 1;
                } else if (diff - k > 0 && diff - k < 50) {
                    size = size * 0.985;
                    k = k - 1;
                }
            }
        }
        else if (params==='thanksForMom') {
            for (let i = 0; i < diff; i++) {
                if (diff - k === 0) {
                    size = size * 0.85;
                    k = k - 1;
                } else if (diff - k > 0 && diff - k < 50) {
                    k = k - 1;
                    size = size * 0.99;
                } else if (diff - k > 50 && diff - k < 200) {
                    size = size * 0.998;
                    k = k - 1;
                }
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
    "film",
    "musicHit",
    "qualityTable",
    "easternWiseWord",
    "westernWiseWord",
    "coolPlace",
    "wiseWord",
    "fruitDNA",
    "epicStory",
    "framefridge",
    "deducedAgeFact",
    "quotes",
    "pastPhoto",
    "relaxPhoto",
    "momChemistryProoved",
    "formulaMom",
    'geniusQuoteMom',
    'prideOfMom',
    'credoMom',
    'thanksForMom',
    "dadChemistryProoved",
    "formulaDad",
    'geniusQuoteDad',
    'prideOfDad',
    'credoDad',
    'thanksForDad'
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
// export const colors = [
//     {
//         background: "#a0dbeb ",
//         text: "black"
//     },
//     {
//         background: "#73dcb4 ",
//         text: "black"
//     },
//     {
//         background: "#fa2d2e ",
//         text: "white"
//     },
//     {
//         background: "#ffd632 ",
//         text: "black"
//     },
//     {
//         background: "#c570e5 ",
//         text: "black"
//     },
//     {
//         background: "#ff8c1b ",
//         text: "black"
//     },
//     {
//         background: "#2d292a ",
//         text: "white"
//     },
//     {
//         background: "#ffc5d9 ",
//         text: "black"
//     }
//   ];
export const colors = [
    {
        background: "#ffd8d4 ",
        text: "black",
        borderColor:"rgb(247, 203, 199)"
    },
    {
        background: "rgb(176, 227, 215)",
        text: "black",
        borderColor:"rgb(178, 235, 222)"
    },
    {
        background: "rgb(35, 37, 37)",
        text: "white",
        borderColor:"rgb(32, 33, 33)"
    },
    {
        background: "rgb(255, 243, 123)",
        text: "black",
        borderColor:"rgb(251, 239, 106)"
    },
    {
        background: "rgb(247, 170, 85)",
        text: "black",
        borderColor:"rgb(243, 162, 74)"
    },
    {
        background: "rgb(190, 74, 132)",
        text: "black",
        borderColor:"rgb(202, 73, 139)"
    },
    {
        background: "rgb(214, 34, 30)",
        text: "white",
        borderColor:"rgb(223, 36, 31)"
    },
    {
        background: "rgb(175, 227, 124)",
        text: "black",
        borderColor:"rgb(167, 223, 111)"
    }
  ];


