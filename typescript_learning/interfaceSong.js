"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const song1 = {
    songName: "See you Again",
    singerName: "Charlie Puth",
    // function property
    printSongInfo: (songName, singerName) => {
        return `
    Song: ${songName}
    Singer: ${singerName}

    `;
    },
};
console.log(song1.printSongInfo("See you Again", "Charlie Puth"));
//# sourceMappingURL=interfaceSong.js.map