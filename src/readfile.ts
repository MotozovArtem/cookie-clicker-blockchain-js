import {readFile} from "fs";

let readMyFile: Function;

readMyFile = (cb: any) => {
    readFile('index.js', {encoding: 'utf-8'}, cb);
};

export const readfile: Function = readMyFile;
