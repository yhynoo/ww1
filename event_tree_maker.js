// Read file stream and decode as text
const readCSV = async (filePath) => {
    const file = await Deno.open(filePath);
    const raw = await Deno.readAll(file);
    file.close();

    const decoder = new TextDecoder();
    const text = decoder.decode(raw);
    return text.trim().split("\n").map((row) => row.split(";"));
};

// Generator for large event tree
const generateLargeTree = async (column, data) => {
    const ns = data[0][column];

    const output = `
    add_namespace = ${ns}

    country_event = {
        id = ${ns}.1
        title = "${data[1][column]}"
        desc = ${ns}.1.d
        is_triggered_only = yes

        option = {
            name = "${data[2][column]}"
            hidden_effect = { country_event = { id = ${ns}.2 days = 28 random_days = 42 } }
            ai_chance = { base = 2 }
        }
        option = {
            name = "${data[3][column]}"
            hidden_effect = { country_event = { id = ${ns}.4 days = 28 random_days = 42 } }
            ai_chance = { base = 1 }
        }
    }

    country_event = {
        id = ${ns}.2
        title = "${data[4][column]}"
        desc = ${ns}.2.d
        is_triggered_only = yes

        option = {
            name = "${data[5][column]}"
            hidden_effect = { news_event = { id = ${ns}.3 days = 7 random_days = 7 } }
            ai_chance = { base = 2 }
        }
        option = {
            name = "${data[6][column]}"
            // abort option
            ai_chance = { base = 1 }
        }
    }

    news_event = {
        id = ${ns}.3
        title = "${data[7][column]}"
        desc = ${ns}.3.d
        is_triggered_only = yes

        option = {
            name = "${data[8][column]}"
            // extra reward or result of choices
        }
    }

    country_event = {
        id = ${ns}.4
        title = "${data[9][column]}"
        desc = ${ns}.4.d
        is_triggered_only = yes

        option = {
            name = "${data[10][column]}"
            hidden_effect = { country_event = { id = ${ns}.5 days = 28 random_days = 42 } }
            ai_chance = { base = 3 }
        }
        option = {
            name = "${data[11][column]}"
            // abort + heavy penalties
            ai_chance = { base = 1 }
        }
    }

    country_event = {
        id = ${ns}.5
        title = "${data[12][column]}"
        desc = ${ns}.5.d
        is_triggered_only = yes

        option = {
            name = "${data[13][column]}"
            // accept the consequences
            ai_chance = { base = 2 }
        }
        option = {
            name = "${data[14][column]}" // challenge the consequences
            hidden_effect = { news_event = { id = ${ns}.6 hours = 6 random_hours = 12 } }
            ai_chance = { base = 1 }
        }
    }

    news_event = {
        id = ${ns}.6
        title = "${data[15][column]}"
        desc = ${ns}.6.d
        is_triggered_only = yes

        option = {
            name = "${data[16][column]}"
        }
    }
    `.trim();

    await Deno.writeTextFile(`x_generated_events/${ns}.txt`, output);
    console.log(`✅ Wrote: ${ns}.txt`);
};

const generateMediumTree = async (column, data) => {
    const ns = data[0][column];
    const output = `
        add_namespace = ${ns}
        country_event = {
            id = ${ns}.1
            title = "${data[1][column]}"
            desc = ${ns}.1.d

            is_triggered_only = yes

            option = {
                name = "${data[2][column]}"
                hidden_effect = { news_event = { id = ${ns}.2 days = 28 random_days = 42 } }

                ai_chance = { base = 2 }
            }
            option = {
                name = "${data[3][column]}"
                hidden_effect = { news_event = { id = ${ns}.3 days = 28 random_days = 42 } }

                ai_chance = { base = 1 }
            }
        }

        news_event = {
            id = ${ns}.2
            title = "${data[4][column]}"
            desc = ${ns}.2.d

            is_triggered_only = yes

            option = {
                name = "${data[5][column]}"
                // extra reward or result of choices
            }
        }

        news_event = {
            id = ${ns}.3
            title = "${data[6][column]}"
            desc = ${ns}.3.d

            is_triggered_only = yes

            option = {
                name = ${data[7][column]}
                // extra reward or result of choices

                hidden_effect = { country_event = { id = ${ns}.4 days = 28 random_days = 42 } }
            }
        }

        country_event = {
            id = ${ns}.4
            title = "${data[8][column]}"
            desc = ${ns}.4.d

            is_triggered_only = yes

            option = {
                name = "${data[9][column]}"
                // challenge the consequences

                ai_chance = { base = 1 }
            }
            option = {
                name = "${data[10][column]}" // accept the consequences
                hidden_effect = { news_event = { id = ${ns}.5 hours = 6 random_hours = 12 } }

                ai_chance = { base = 2 }
            }
        }

        news_event = {
            id = ${ns}.5
            title = "${data[11][column]}"
            desc = ${ns}.5.d

            is_triggered_only = yes

            option = {
                name = "${data[12][column]}"
                // extra reward for taking the chaotic path
            }
        }
    `
}

// Entry point
const main = async () => {
    const data = await readCSV("events_input.csv");

    if (data.length < 17) {
        console.error("❌ Not enough rows in CSV (need 17).");
        return;
    }

    for (let col = 0; col < data[0].length; col++) {
        await generateLargeTree(col, data);
    }
};

await main();
