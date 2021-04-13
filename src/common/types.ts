export type Category = "Any" | "Misc" | "Programming" | "Dark" | "Pun" | "Spooky" | "Christmas";

export type Flag = {
    nsfw: boolean,
    religious: boolean,
    political: boolean,
    racist: boolean,
    sexist: boolean,
    explicit: boolean
}

export type FlagKeys =
    "nsfw" |
    "religious" |
    "political" |
    "racist" |
    "sexist" |
    "explicit";

export type Joke = {
    id: number;
    safe: boolean;
    lang: "cs" | "de" | "en" | "fr" | "pt";
    type: "single" | "twopart";
    category: Category;
    setup: string;
    delivery: string;
    joke: string;
    flags: Flag
}