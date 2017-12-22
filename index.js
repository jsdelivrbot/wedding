const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/our-story', (req, res) => res.render('pages/our-story'))
  .get('/rsvp', (req, res) => res.render('pages/rsvp'))
  .get('/accomodations', (req, res) => res.render('pages/accomodations'))
  .get('*', (req, res) => res.render('pages/error'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
