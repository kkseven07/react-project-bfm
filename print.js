import shell from "shelljs";
// let book_id = 1175
// let book_id = 1176
// let book_id = 1177
let book_id = 24;

let types = [
    "cover",
    "intro",
    "epicStory",
    "scene",
    "ageFact",
    "establishedCollage",
    "cell",
    "factoid",
    "fruitDNA",
    "deducedAgeFact",
    "backToHistory",
    "scoop",
    "film",
    "toy",
    "candy",
    "musicHit",
    "shar",
    "chinesezodiac",
    "virtue",
    "vice",
    "brain",
    "holiday",
    "sport",
    "videoGame",
    "animal",
    "techState",
    "bestseller",
    "fashion",
    "mirrorDate",
    "famousBirthShare",
    "easternWiseWord",
    "westernWiseWord",
    "coolPlace",
    "poem",
    "qualityTable",
    "qualityTableChoice",
    "faceOfTime",
    "framefridge",
    "car",
    "leaders",
    "introWiseWord",
    "wiseWord"
];

let types1 = [
    // "cover",
    // "intro",
    // "epicStory",
    // "scene",
    // "ageFact",
    // "establishedCollage",
    // "cell",
    // "factoid",
    // "fruitDNA",
    "deducedAgeFact",
    "backToHistory",
    "scoop",
    "film",
    "toy",
    "candy",
    "musicHit",
    "shar",
    "chinesezodiac",
    "virtue",
    "vice",
    "brain",
    "holiday",
    "sport",
    "videoGame",
    "animal",
    "techState",
    "bestseller"
    // "fashion",
    // "mirrorDate",
    // "famousBirthShare",
    // "easternWiseWord",
    // "westernWiseWord",
    // "coolPlace",
    // "poem",
    // "qualityTable",
    // "qualityTableChoice",
    // "faceOfTime",
    // "framefridge",
    // "car",
    // "leaders",
    // "introWiseWord",
    // "wiseWord"
];

let types2 = [
    // "cover",
    // "intro",
    // "epicStory",
    // "scene",
    // "ageFact",
    // "establishedCollage",
    // "cell",
    // "factoid",
    // "fruitDNA",
    // "deducedAgeFact",
    // "backToHistory",
    // "scoop",
    // "film",
    // "toy",
    // "candy",
    // "musicHit",
    // "shar",
    // "chinesezodiac",
    // "virtue",
    // "vice",
    // "brain",
    // "holiday",
    // "sport",
    // "videoGame",
    // "animal",
    // "techState",
    // "bestseller",
    "fashion",
    "mirrorDate",
    "famousBirthShare",
    "easternWiseWord",
    "westernWiseWord",
    "coolPlace",
    "poem",
    "qualityTable",
    "qualityTableChoice",
    "faceOfTime",
    "framefridge",
    "car",
    "leaders",
    "introWiseWord",
    "wiseWord"
];
let urls = types
    .map(type => {
        return `http://localhost:8080/pages/${book_id}/${type}`;
    })
    .join(" ");
let urls1 = types1
    .map(type => {
        return `http://localhost:8080/pages/${book_id}/${type}`;
    })
    .join(" ");
let urls2 = types2
    .map(type => {
        return `http://localhost:8080/pages/${book_id}/${type}`;
    })
    .join(" ");

let print = (urls) => {
    shell.exec(
        `electroshot [${urls} 1400x2400]  --delay 3500 --out ../print/${book_id} --filename '{name}.png'`
    );

};

let newPrint=()=>{
    shell.exec(
        `electroshot [ http://localhost:8080/pages/${book_id}/scoop 1400x14000]  --delay 26500 --out ../print/${book_id} --filename '{name}.png'`
    );
}

let convert = book_id => {
    let filenames = types
        .map((type, i) => {
            return `../print/${book_id}/${i + "-" + type}.png`;
        })
        .join(" ");
    console.log(filenames);
    shell.exec(`convert ${filenames}  ../print/${book_id}/output.pdf`);
};
console.log(book_id);
shell.exec(`mkdir ../print/${book_id}`);
// print(urls);
newPrint()
// print(urls1);
// print(urls2);
// convert(book_id)
// setTimeout(() => convert(book_id), 500000);

// let newPrint = (type, i, book_id) => {
//     let files=types.map((type,i)=>{
//         return `[http://localhost:8080/pages/${1183}/${type} 1400x1400]`
//     })
//     .join(" ")
//     shell.exec(
//         `electroshot ${files} --delay 2500 --out ../print/hope --filename {name}.png`
//         );
// };
// newPrint("e",1,1183)
