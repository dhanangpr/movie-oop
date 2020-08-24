class Movie {
  constructor(title, duration, category) {
    this.title = title;
    this.duration = duration;
    this.category = category;
  }
  watch(){
    return "Kamu menonton film "+this.title+" dengan kategori "+this.category+" berdurasi "+this.duration
  }
  streamAt(){
    return "Film "+this.title+" ditayangkan di Televisi"
  }
}

class Soundtrack extends Movie{
  constructor(title, titleSong, singer) {
    super(title);
    this.titleSong = titleSong;
    this.singer = singer;
  }
  movieSoundtrack(){
    return "Film "+this.title+" memiliki lagu soundtrack berjudul "+this.titleSong+" yang dinyanyikan oleh "+this.singer
  }
}

class Channel extends Movie{
  constructor(title, duration, category, channelName) {
    super(title, duration, category);
    this.channelName = channelName;
  }
  streamAt(){
    return "Film "+this.title+" ditayangkan di "+this.channelName
  }
}

let data = new Movie('Suspicious Partner', '60 minutes', 'Romance');
let ost = new Soundtrack('Suspicious Partner', 'How do you feel', 'Ridho Majid');
let stream = new Channel('Suspicious Partner', '60 minutes', 'Romance','Netflix');

console.log(data.watch());
console.log(ost.movieSoundtrack());
console.log(stream.streamAt());