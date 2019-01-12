const express = require('express');
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json())

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, DELETE, OPTIONS"
    );
    next();
  });

app.use('/api/profiles',(req, res, next) => {
    const profiles = [{
        id: 'p9TUDa3gig2auGW',
        name: 'Brian Jenkings',
        email: 'bjenkings@gmail.com',
        telephone: '407-342-1232',
        occupation: 'Engineer',
        industry: 'HVAC',
        location: "sanford",
        orginization: "Phi Beta Sigma",
        major: 'HR',
        chapter: 'Iota Rhos',
        whoiknow: 'wife',
        industriesICanHelp: 'Engineering, Web Developer',
        willingToMentor: 'Yes',
        businessname: 'ICS',
        businesswebsite: 'www.ics.com',
        businessdescription: 'Staffing',
        info: 'I can help people deeloper website.'
    }, {
        id: 'f44222',
        name: 'Matthe Shaw',
        email: 'MattSh2wcom',
        telephone: '321-322-3432',
        occupation: 'Sales',
        industry: 'HVAC',
        location: "Lake Mary",
        major: 'business',
        orginization: "Phi Beta Sigma",
        chapter: 'Iota Rhos',
        whoiknow: 'neighbor',
        industriesICanHelp: 'HR, Marketing',
        willingToMentor: 'Yes',
        businessname: 'none',
        businesswebsite: 'none',
        businessdescription: 'none',
        info: 'I can help with sales'
    }]

    res.status(200).json({
        message: "Network fetched success",
        profiles: profiles
    });
});

module.exports = app;