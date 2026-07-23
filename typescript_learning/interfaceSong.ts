interface Song {
  songName: string;
  singerName: string;
  printSongInfo(songName: string, singerName: string): string;
}

const song1: Song = {
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
