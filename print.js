import shell from "shelljs";
import _ from "lodash";
import fs from "fs";

let you = [
    "initmister",
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
let mom = [
    "initmister",

    "cover",
    "frontPage",
    "frontPageBack",
    "intro",
    "epicStory",
    "scene",
    "momChemistryProoved",
    "formulaMom",
    "geniusQuoteMom",
    "prideOfMom",
    "establishedCollage",
    "ageFact",
    "cell",
    "factoid",
    "fruitDNA",
    "deducedAgeFact",
    "backToHistory",
    "scoop",
    "film",
    "toy",
    "bestseller",
    "musicHit",
    "mirrorDate",
    "famousBirthShare",
    "easternWiseWord",
    "westernWiseWord",
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
    "fashion",
    "leaders",
    "credoMom",
    "coolPlace",
    "qualityTable",
    "qualityTableChoice",
    "faceOfTime",
    "framefridge",
    "pastPhoto",
    "relaxPhoto",
    "momPoem",
    "thanksForMom",
    "endPage"
];
let dad = [
    "initmister",

    "cover",
    "frontPage",
    "frontPageBack",
    "intro",
    "epicStory",
    "scene",
    "dadChemistryProoved",
    "formulaDad",
    "geniusQuoteDad",
    "prideOfDad",
    "establishedCollage",
    "ageFact",
    "cell",
    "factoid",
    "fruitDNA",
    "deducedAgeFact",
    "backToHistory",
    "scoop",
    "film",
    "toy",
    "bestseller",
    "musicHit",
    "mirrorDate",
    "famousBirthShare",
    "easternWiseWord",
    "westernWiseWord",
    "shar",
    "chinesezodiac",
    "virtue",
    "vice",
    "brain",
    "car",
    "sport",
    "videoGame",
    "animal",
    "techState",
    "fashion",
    "leaders",
    "credoDad",
    "coolPlace",
    "qualityTable",
    "qualityTableChoice",
    "faceOfTime",
    "framefridge",
    "pastPhoto",
    "relaxPhoto",
    "dadPoem",
    "thanksForDad",
    "endPage"
];
let raw = process.argv.slice(2, 100);
let getUrls = (types, book_id) =>
    types
        .map(type => {
            return `http://localhost:8080/pages/${book_id}/${type}`;
        })
        .join(" ");

let print = (urls, book_id) => {
    console.log(urls);
    // если какой то концепт перепечатать
    // urls = urls
    //     .split(" ")
    //     .filter(
    //         v =>
    //             v.indexOf("initmister") > -1 ||
    //              v.indexOf("deducedAgeFact") > -1 ||
    //             v.indexOf("endPage") > -1
    //             // v.indexOf("initmister") > -1
    //     )
    //     .join(" ");
    shell.exec(
        `electroshot [${urls} 1024x1024]  --delay 5000  --out ../print/${book_id} --filename '{name}.png'`
    );
};

let printType = () => {
    let book_id = process.argv[2].split("-")[0];
    let type = process.argv[3];
    shell.exec(
        `electroshot http://localhost:8080/pages/${book_id}/${type} 1024x1024 --delay 5000 --out ../print/${book_id} --filename '{name}.png'`
    );
};

let convert = (book_id, types) => {
    fs.readdir(`../print/${book_id}/`, (err, files) => {
        let filenames = types
            // .filter(type=>[types[17],types[2], types[3], types[16]].indexOf(type)>-1)
            .filter(type => type !== "initmister")
            .map(
                (type, i) =>
                    `../print/${book_id}/${files.filter(file => file.indexOf(type) > -1)[0]}`
            )
            .join(" ");
        // console.log(filenames)
        shell.exec(`convert ${filenames} ../print/${book_id}/${book_id}.pdf`);
    });
};

let work = () => {
    raw.forEach(v => {
        let [id, type] = v.split("-");
        shell.exec(`mkdir ../print/${id}`);
        console.log(id);
        let urls = type === "you"
            ? [getUrls(you, id), you]
            : type === "mom"
                  ? [getUrls(mom, id), mom]
                  : [getUrls(dad, id), dad];
        // console.log(urls);
        // print(urls[0], id);
        convert(id, urls[1]);
    });
};

work();
// printType()

// const Pageres = require('pageres');

// const pageres = new Pageres({delay: 10})
//     .src('yeoman.io', ['1024x1024'], {crop: false})
//     .src('127.0.0.1:8080', ['100x10'])
//     .src('data:text/html;base64,PGgxPkZPTzwvaDE+', ['1024x768'])
//     .dest("../print")
//     .run()
//     .then(() => console.log('done'));

// var shashin = require('shashin');

// var info = shashin('google.com', '1024x768', { delay: 1, crop: true });
// var file = fs.createWriteStream('screenshot.png');

// // Don't forget to handle errors
// info.stream.on('error', function (err) {
//   console.error(err);
// });

// info.stream.pipe(file);

// 265-dad 266-mom 267-you
