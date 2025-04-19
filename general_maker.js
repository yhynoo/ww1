function getRandomPortrait() {
    const num = Math.floor(Math.random() * 5) + 1; // 1 to 5
    return `GFX_Portrait_Europe_Generic_land_${num}`;
}

function randomizeSkill(base) {
    const delta = [-1, 0, 1][Math.floor(Math.random() * 3)];
    return Math.max(1, base + delta); // ensure minimum of 1
}

function maybeGetRandomTrait() {
    const traits = [
        "old_guard",
        "career_officer",
        "trait_cautious",
        "trait_reckless",
        "harsh_leader",
        "infantry_officer",
        "engineer_officer"
    ];
    if (Math.random() < 0.5) {
        return `{ ${traits[Math.floor(Math.random() * traits.length)]} }`;
    }
    return `{ }`;
}

const tag = "POL";
const input = await Deno.readTextFile("generals_input.csv");

const rows = input.trim().split("\n").slice(1);
const output = rows.map(row => {
    const [name, type, skillStr] = row.split(";");
    const skill = parseInt(skillStr.trim());
    const id = `${tag}_${name.toLowerCase().replace(/[^a-z0-9]+/g, "_")}`;
    const portraitPath = getRandomPortrait();
    const traitBlock = maybeGetRandomTrait();

    const atk = randomizeSkill(skill);
    const def = randomizeSkill(skill);
    const plan = randomizeSkill(skill);
    const logi = randomizeSkill(skill);

    return `    ${id} = {
        name = "${name}"
        portraits = {
            army = {
                large = "${portraitPath}"
            }
        }
        ${type} = {
            traits = ${traitBlock}
            skill = ${skill}
            attack_skill = ${atk}
            defense_skill = ${def}
            planning_skill = ${plan}
            logistics_skill = ${logi}
        }
    }`;
});

const fileContent = `characters = {\n${output.join("\n\n")}\n}`;
await Deno.writeTextFile("generals_output.txt", fileContent);
