import shell from "shelljs";
let book_id = 741;
let types = [
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
    // "qualityTable",
    "qualityTableChoice",
    "faceOfTime",
    // "framefridge",
    // "car",
    // "leaders",
    // "introWiseWord",
    // "wiseWord"
];

let print = (type, i) => {
    shell.exec(
        `electroshot [http://localhost:8080/pages/${book_id}/${type} 2048x2048]  --delay 2500 --out ../print/2048 --filename '${i + "-" + type}.png'`
    );
};

types.map((type, i) => print(type, i));
