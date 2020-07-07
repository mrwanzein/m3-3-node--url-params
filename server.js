'use strict';

const morgan = require('morgan');
const express = require('express');

const { top50, mostPopArtist } = require('./data/top50');

const PORT = process.env.PORT || 8000;

const app = express();

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));
app.set('view engine', 'ejs');

const show404 = (req, res) => {
    res.status(404);
    res.render('pages/fourOhFour', {
        title: 'I got nothing',
        path: req.originalUrl
    });
}

// endpoints here
app.get('/top50', (req, res) => {
    res.status(200);
    res.render('pages/top50', {
        title: 'Top 50 Songs Streamed on Spotify',
        top50: top50
    });
});

app.get('/top50/popular-artist', (req, res) => {
    const mostPopularArtistInChart = mostPopArtist(top50);
    let mostPopularArtistInChartSongs = [];

    top50.forEach(song => {
        if(song.artist === mostPopularArtistInChart) mostPopularArtistInChartSongs.push(song);
    });
    
    res.status(200);
    res.render('pages/top50', {
        title: 'Most Popular Artist',
        mostPopular: mostPopularArtistInChartSongs
    });
});

app.get('/top50/song/:songNum', (req, res) => {
    const { songNum } = req.params;

    if(songNum > top50.length || songNum <= 0) {
        show404(req, res);
    } else {
        res.status(200);
        res.render('pages/songPage', {
            title: `Song #${songNum}`,
            song: top50[songNum - 1],
            songNum: songNum
        });
    }

});

// handle 404s
app.get('*', (req, res) => {
    show404(req, res);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
