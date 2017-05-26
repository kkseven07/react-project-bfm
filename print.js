import shell from "shelljs";
// let book_id = 1175
// let book_id = 1176
// let book_id = 1177
let book_id = 1178


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
let print = (type, i, book_id) => {
    shell.exec(
        `electroshot [http://localhost:8080/pages/${book_id}/${type} 1400x1400]  --delay 3500 --out ../print/${book_id} --filename '${i + "-" + type}.png'`
    );
};

let convert = book_id => {
    let filenames = types
        .map((type, i) => {
            return `../print/${book_id}/${i + "-" + type}.png`;
        })
        .join(" ");
    console.log(filenames);
    shell.exec(`convert ${filenames}  ../print/${book_id}/output.pdf`);
};
console.log(book_id)
shell.exec(`mkdir ../print/${book_id}`);
types.map((type, i) => print(type, i, book_id));
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






