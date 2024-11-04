// create getter and setter for JukeBox

let musicQueue = {
  songs: ['Party Rock Anthem', 'I Gotta Feeling', 'Macarena'],
  nextSong: 0,
  get next() {
    const songToPlay = this.songs[this.nextSong];
    this.nextSong += 1;
    if (this.nextSong >= this.songs.length) {
      this.nextSong = 0;
    }
    return songToPlay;
  },
  set next(index) {
    if (index > this.songs.length - 1 || index < 0) this.nextSong = 0;
    else this.nextSong = index;
  }
};

// Run through the queue three times
for (let c = 0; c < musicQueue.songs.length * 3; c++) {
  console.log('Now playing: ' + musicQueue.next);
}

// Test the next setter
musicQueue.next = 2;
console.log(musicQueue.next); // Macarena
musicQueue.next = 3;
console.log(musicQueue.next); // Party Rock Anthem
musicQueue.next = -1;
console.log(musicQueue.next); // Party Rock Anthem
