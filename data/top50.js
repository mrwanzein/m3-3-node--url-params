const mostPopArtist = (arr) => {
  let artistArr = [];
  let songObjectWithPopularity = {};
  let artistWithPopularityArr = [];

  arr.forEach((song) => {
    artistArr.push(song.artist);
  });

  for (let i = 0; i < artistArr.length; i++) {
    songObjectWithPopularity[artistArr[i]] = 0;
    for (let j = 0; j < artistArr.length; j++) {
      if (artistArr[i] === artistArr[j]) {
        songObjectWithPopularity[artistArr[i]] += 1;
      }
    }
  }

  for (const artist in songObjectWithPopularity) {
    artistWithPopularityArr.push([artist, songObjectWithPopularity[artist]]);
  }

  return artistWithPopularityArr.sort((a, b) => b[1] - a[1])[0][0];
};

const top50 = [
    {
        rank: 1,
        title: 'One Dance',
        artist: 'Drake featuring WizKid and Kyla Views',
        streams: 1011,
        publicationDate: '6-May-16'
    },
    {
        rank: 2,
        title: 'Lean On',
        artist: 'Major Lazer and DJ Snake',
        streams: 909,
        publicationDate: '1-Jun-15'
    },
    {
        rank: 3,
        title: 'Sorry',
        artist: 'Justin Bieber',
        streams: 828,
        publicationDate: '13-Nov-15'
    },
    {
        rank: 4,
        title: 'Love Yourself',
        artist: 'Justin Bieber',
        streams: 782,
        publicationDate: '13-Nov-15'
    },
    {
        rank: 5,
        title: 'Thinking Out Loud',
        artist: 'Ed Sheeran',
        streams: 770,
        publicationDate: '21-Jun-14'
    },
    {
        rank: 6,
        title: 'What Do You Mean?',
        artist: 'Justin Bieber',
        streams: 750,
        publicationDate: '13-Nov-15'
    },
    {
        rank: 7,
        title: 'I Took a Pill in Ibiza',
        artist: 'Mike Posner',
        streams: 730,
        publicationDate: '6-May-16'
    },
    {
        rank: 8,
        title: 'Cheerleader',
        artist: 'OMI',
        streams: 708,
        publicationDate: '2-Dec-14'
    },
    {
        rank: 9,
        title: 'Don\'t Let Me Down',
        artist: 'The Chainsmokers featuring Daya',
        streams: 694,
        publicationDate: '5-Feb-16'
    },
    {
        rank: 10,
        title: 'Closer',
        artist: 'The Chainsmokers featuring Halsey',
        streams: 678,
        publicationDate: '29-Jul-16'
    },
    {
        rank: 11,
        title: 'Uptown Funk',
        artist: 'Mark Ronson featuring Bruno Mars',
        streams: 665,
        publicationDate: '12-Jan-15'
    },
    {
        rank: 12,
        title: 'Can\'t Feel My Face',
        artist: 'The Weeknd',
        streams: 648,
        publicationDate: '28-Aug-15'
    },
    {
        rank: 13,
        title: 'Hello',
        artist: 'Adele',
        streams: 632,
        publicationDate: '23-Oct-15'
    },
    {
        rank: 14,
        title: '7 Years',
        artist: 'Lukas Graham',
        streams: 624,
        publicationDate: '1-Apr-16'
    },
    {
        rank: 15,
        title: 'Stitches',
        artist: 'Shawn Mendes',
        streams: 623,
        publicationDate: '14-Apr-15'
    },
    {
        rank: 16,
        title: 'Cheap Thrills',
        artist: 'Sia',
        streams: 616,
        publicationDate: '17-Dec-15'
    },
    {
        rank: 17,
        title: 'Take Me to Church',
        artist: 'Hozier',
        streams: 611,
        publicationDate: '29-Nov-13'
    },
    {
        rank: 18,
        title: 'Stressed Out',
        artist: 'Twenty One Pilots',
        streams: 603,
        publicationDate: '28-Apr-15'
    },
    {
        rank: 19,
        title: 'Where Are Ü Now',
        artist: 'Skrillex and Diplo featuring Justin Bieber',
        streams: 600,
        publicationDate: '24-Feb-15'
    },
    {
        rank: 20,
        title: 'See You Again',
        artist: 'Wiz Khalifa featuring Charlie Puth	Furious 7',
        streams: 599,
        publicationDate: '10-Mar-15'
    },
    {
        rank: 21,
        title: 'Work',
        artist: 'Rihanna featuring Drake',
        streams: 595,
        publicationDate: '29-Jan-16'
    },
    {
        rank: 22,
        title: 'This Is What You Came For',
        artist: 'Calvin Harris featuring Rihanna',
        streams: 585,
        publicationDate: '29-Apr-16'
    },
    {
        rank: 23,
        title: 'Cold Water',
        artist: 'Major Lazer featuring MØ and Justin Bieber',
        streams: 580,
        publicationDate: '22-Jul-16'
    },
    {
        rank: 24,
        title: 'Hotline Bling',
        artist: 'Drake',
        streams: 575,
        publicationDate: '31-Jul-15'
    },
    {
        rank: 25,
        title: 'Work from Home',
        artist: 'Fifth Harmony featuring Ty Dolla $ign',
        streams: 574,
        publicationDate: '27-May-16'
    },
    {
        rank: 26,
        title: 'Sugar',
        artist: 'Maroon 5',
        streams: 565,
        publicationDate: '10-Mar-15'
    },
    {
        rank: 27,
        title: 'Faded',
        artist: 'Alan Walker',
        streams: 559,
        publicationDate: '4-Dec-15'
    },
    {
        rank: 28,
        title: 'Stay with Me',
        artist: 'Sam Smith',
        streams: 554,
        publicationDate: '1-Jan-14'
    },
    {
        rank: 29,
        title: 'Chandelier',
        artist: 'Sia',
        streams: 553,
        publicationDate: '17-Mar-14'
    },
    {
        rank: 30,
        title: 'Light It Up',
        artist: 'Major Lazer featuring Nyla and Fuse ODG',
        streams: 551,
        publicationDate: '27-Nov-15'
    },
    {
        rank: 31,
        title: 'Photograph',
        artist: 'Ed Sheeran',
        streams: 538,
        publicationDate: '21-Jun-14'
    },
    {
        rank: 32,
        title: 'Me Myself & I',
        artist: 'G-Eazy and Bebe Rexha',
        streams: 538,
        publicationDate: '14-Oct-15'
    },
    {
        rank: 33,
        title: 'Love Me Like You Do',
        artist: 'Ellie Goulding',
        streams: 537,
        publicationDate: '10-Feb-15'
    },
    {
        rank: 34,
        title: 'The Hills',
        artist: 'The Weeknd	Beauty Behind the Madness',
        streams: 532,
        publicationDate: '28-Aug-15'
    },
    {
        rank: 35,
        title: 'Let Her Go',
        artist: 'Passenger',
        streams: 522,
        publicationDate: '24-Jul-12'
    },
    {
        rank: 36,
        title: 'Radioactive',
        artist: 'Imagine Dragons',
        streams: 521,
        publicationDate: '1-Jan-12'
    },
    {
        rank: 37,
        title: 'All of Me',
        artist: 'John Legend',
        streams: 519,
        publicationDate: '8-Aug-13'
    },
    {
        rank: 38,
        title: 'Lush Life',
        artist: 'Zara Larsson',
        streams: 513,
        publicationDate: '9-Jun-15'
    },
    {
        rank: 39,
        title: 'Let Me Love You',
        artist: 'DJ Snake featuring Justin Bieber',
        streams: 511,
        publicationDate: '5-Aug-16'
    },
    {
        rank: 40,
        title: 'Rather Be',
        artist: 'Clean Bandit featuring Jess Glynne',
        streams: 507,
        publicationDate: '17-Jan-14'
    },
    {
        rank: 41,
        title: 'Panda',
        artist: 'Desiigner',
        streams: 502,
        publicationDate: '26-Feb-16'
    },
    {
        rank: 42,
        title: 'Counting Stars',
        artist: 'OneRepublic',
        streams: 486,
        publicationDate: '26-Mar-13'
    },
    {
        rank: 43,
        title: 'Can\'t Stop the Feeling!',
        artist: 'Justin Timberlake',
        streams: 485,
        publicationDate: '6-May-16'
    },
    {
        rank: 44,
        title: 'Trap Queen', artist: 'Fetty Wap',
        streams: 481,
        publicationDate: '15-Dec-14'
    },
    {
        rank: 45,
        title: 'Wake Me Up',
        artist: 'Avicii featuring Aloe Blacc',
        streams: 478,
        publicationDate: '30-Jul-13'
    },
    {
        rank: 46,
        title: 'Roses',
        artist: 'The Chainsmokers featuring Rozes',
        streams: 477,
        publicationDate: '16-Jun-15'
    },
    {
        rank: 47,
        title: 'Sugar',
        artist: 'Robin Schulz featuring Francesco Yates',
        streams: 477,
        publicationDate: '17-Jul-15'
    },
    {
        rank: 48,
        title: 'Cake by the Ocean',
        artist: 'DNCE',
        streams: 474,
        publicationDate: '18-Sep-15'
    },
    {
        rank: 49,
        title: 'Happy',
        artist: 'Pharrell Williams',
        streams: 473,
        publicationDate: '18-Jun-13'
    },
    {
        rank: 50,
        title: 'Firestone',
        artist: 'Kygo featuring Conrad Sewell',
        streams: 471,
        publicationDate: '28-Aug-15'
    },
];

module.exports = { top50, mostPopArtist };