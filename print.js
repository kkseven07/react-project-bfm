import shell from "shelljs";
import _ from "lodash";
import fs from 'fs'
let book_id = 257;

let raw = process.argv.slice(2,10)

let types = [
    "cover",
    "frontPage",
    "frontPageBack",
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
    "car",
    "leaders",
    "mirrorDate",
    "famousBirthShare",
    "easternWiseWord",
    "westernWiseWord",
    "coolPlace",
    "quotes",
    "qualityTable",
    "qualityTableChoice",
    "faceOfTime",
    "framefridge",
    "pastPhoto",
    "relaxPhoto",
    "poem",
    "composeWord",
    "introWiseWord",
    "wiseWord",
    "endPage"
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

let print = urls => {
    shell.exec(
        `electroshot [${urls} 1024x1024]  --delay 3500 --out ../print/${book_id} --filename '{name}.png'`
    );
};



let newPrint = () => {
    shell.exec(
        `electroshot [ http://localhost:8080/pages/${book_id}/scoop 1400x14000]  --delay 26500 --out ../print/${book_id} --filename '{name}.png'`
    );
};

let convert = book_id => {
    fs.readdir(`../print/${book_id}/`, (err, files) => {
        let filenames = types.map(
            (type, i) => `../print/${book_id}/${files.filter(file => file.indexOf(type) > -1)[0]}`
        ).join(" ");
        shell.exec(`convert ${filenames} ../print/${book_id}/output.pdf`);
    });
};

console.log(book_id);
shell.exec(`mkdir ../print/${book_id}`);
// print(urls);
// convert(book_id);
// let ls = JSON.parse(process.argv[2])
console.log(process.argv.slice(2,10))



