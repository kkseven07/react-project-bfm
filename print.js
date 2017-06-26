import shell from "shelljs";
import _ from "lodash";
import fs from "fs";
let raw = process.argv.slice(2, 10);
let you = [
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

let getUrls = (types,book_id) =>
    types
        .map(type => {
            return `http://localhost:8080/pages/${book_id}/${type}`;
        })
        .join(" ");

let print = (urls, book_id) => {
    shell.exec(
        `electroshot [${urls} 1024x1024]  --delay 5000  --out ../print/${book_id} --filename '{name}.png'`
    );
};

let convert = (book_id,types) => {
    fs.readdir(`../print/${book_id}/`, (err, files) => {
        let filenames = types
            .map(
                (type, i) =>
                    `../print/${book_id}/${files.filter(file => file.indexOf(type) > -1)[0]}`
            )
            .join(" ");
        shell.exec(`convert ${filenames} ../print/${book_id}/${book_id}.pdf`);
    });
};

let work = () => {
    raw.forEach(v => {
        let [id, type] = v.split("-");
        shell.exec(`mkdir ../print/${id}`);
        console.log(id);
        let urls = type === "you"
            ? [getUrls(you,id),you]
            : type === "mom" ? [getUrls(mom,id),mom] : [getUrls(dad,id),dad];
        console.log(urls)
        print(urls[0], id);
        convert(id,urls[1]);
    });
};

work();


// 265-dad 266-mom 267-you




