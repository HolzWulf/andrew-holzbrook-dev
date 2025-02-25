import { makeSherpa } from "../../_sherpa/Sherpa.ts";
import { type Hobby } from "./_Hobby.ts";

const sherpa = makeSherpa();

export const hobbies: Hobby[] = [
    { name: "Disc Golf", href: sherpa.play.discGolf({}) },
    { name: "Board Games", href: sherpa.play.boardGames({}) },
    { name: "Video Games", href: sherpa.play.videoGames({}) },
    { name: "Reading", href: sherpa.play.reading({}) },
];
