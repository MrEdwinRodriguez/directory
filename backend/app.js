const express = require('express');

const app = express();

app.use('/api/profiles',(req, res, next) => {
    const profiles = [{
        id: 'fdaffadfaf',
        name: 'p9TUDa3gig2auGW',
        email: 'mredwinrodriguez@gmail.com',
        telephone: '407-342-1232',
        occupation: 'Engineer',
        industry: 'HVAC',
        location: "sanford",
        orginization: "Phi Beta Sigma",
        chapter: 'Iota Rhos',
        whoiknow: 'wife',
        businessname: 'ICS',
        businesswebsite: 'www.ics.com',
        businessdescription: 'Staffing',
        info: 'I can help people deeloper website.'
    }]

    res.status(200).json(profiles);
});

module.exports = app;