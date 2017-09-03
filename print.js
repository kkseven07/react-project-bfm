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
let algo_map = {
    1: [16, 1],
    2: [2, 15],
    3: [14, 3],
    4: [4, 13],
    5: [12, 5],
    6: [6, 11],
    7: [10, 7],
    0: [8, 9]
};

let raw = process.argv.slice(2, 100);
let getUrls = (types, book_id) =>
    types
        .map(type => {
            return `http://localhost:8080/pages/${book_id}/${type}`;
        })
        .join(" ");
let convertBooklet = (names, book_id) => {
    fs.readdir(`../print/${book_id + "-print"}/`, (err, files) => {
        let filenames = names
            .map(
                (type, i) =>
                    `../print/${book_id + "-print"}/${files.filter(file => file.indexOf(type) > -1)[0]}`
            )
            .join(" ");
        shell.exec(
            `convert ${filenames} ../print/${book_id + "-print"}/${book_id}booklet.pdf`
        );
        // shell.exec(
        //     `convert -size 1000x1000 -density 270x270 ${filenames} ../print/${book_id + "-print"}/${book_id}bookletc.pdf`
        // );
    });
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
        shell.exec(`convert ${filenames} ../print/${book_id}/${book_id}.pdf`);
    });
};

let printBooklet = (urls, book_id) => {
    shell.exec(
        `electroshot [${urls} 1896x976]  --delay 6500  --out ../print/${book_id + "-print"} --filename '{name}.png'`
    );
};

let getPrintUrls = (book_type, book_id, types_arr) => {
    let all = _.range(1, 25);
    let booklet = types_arr.slice(1, 100);
    let names = all
        .map(number => {
            if (number > 8 && number < 17) {
                return algo_map[number % 8].map(v => v + 16);
            } else if (number > 16) {
                return algo_map[number % 8].map(v => v + 32);
            }
            return algo_map[number % 8];
        })
        .map(concept_pair => {
            return concept_pair.map(v => booklet[v]).join("-");
        })
        // .filter(concept_pair => {
        //     return (
        //         // concept_pair.indexOf("candy") > -1 ||
        //         concept_pair.indexOf("scoop") > -1 ||
        //         concept_pair.indexOf("fashion") > -1
        //     );
        // });
    let result = names.map(url_part => {
        return `http://localhost:8080/pages/${book_id}/${url_part}`;
    });
    let toReturn =
        `http://localhost:8080/pages/${book_id}/initmister` +
        " " +
        result.join(" ");
    return { print_urls: toReturn, booklet_names: names };
};

let print = (urls, book_id) => {
    console.log(urls);
    // если какой то концепт перепечатать
    // urls = urls
    //     .split(" ")
    //     .filter(
    //         v =>
    //             v.indexOf("initmister") > -1 ||
    //             // v.indexOf("animal") > -1 ||
    //             v.indexOf("framefridge") > -1||
    //             // v.indexOf("pastPhoto") > -1||
    //             // v.indexOf("relaxPhoto") > -1||
    //             // v.indexOf("wiseWord") > -1||
    //             // v.indexOf("poem") > -1||
    //             // v.indexOf("car") > -1||
    //             v.indexOf("endPage") > -1
    //     )
    //     .join(" ");
    shell.exec(
        `electroshot [${urls} 700x700]  --delay 6500  --out ../print/${book_id} --filename '{name}.png'`
    );
};

let work = () => {
    raw.forEach(v => {
        let [id, type] = v.split("-");
        shell.exec(`mkdir ../print/${id}`);
        shell.exec(`mkdir ../print/${id + "-print"}`);
        console.log(id);
        let urls = type === "you"
            ? [getUrls(you, id), you]
            : type === "mom"
                  ? [getUrls(mom, id), mom]
                  : [getUrls(dad, id), dad];
        let { print_urls, booklet_names } = getPrintUrls(type, id, urls[1]);

        printBooklet(print_urls, id);
        convertBooklet(booklet_names, id);
        // print(urls[0], id);
        // convert(id, urls[1]);
    });
};

work();
