const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

function getImages() {
  var fs = require('fs');
  var sourceUrl = process.argv[1].split("/")

  var imagePath = '/' + sourceUrl[1] + '/' + sourceUrl[2] + '/' + sourceUrl[3] + '/public/images'
  var items = fs.readdirSync(imagePath);


  return items;

}

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index-new', {
    page: req.url }))
  .get('/our-story', (req, res) => res.render('pages/our-story', {
    page: req.url }))
  .get('/rsvp', (req, res) => res.render('pages/rsvp', {
    page: req.url }))
  .get('/accommodations', (req, res) => res.render('pages/accommodations', {
    page: req.url }))
  /* .get('/our-photos', (req, res) => res.render('pages/photos', {
    page: req.url })) */
  .get('/our-photos', (req, res) => {
    /*var items = getImages().slice(1);

    res.render('pages/photos-revamp', {page: req.url, imagesArray: items}, function(err, html) {
      if(err) {
          res.redirect('/404'); // File doesn't exist
      } else {
          res.send(html);
          console.log('all good');
      }
    })*/

    res.render('pages/photos-old', {page: req.url})
  })
  .get('*', (req, res) => res.render('pages/error', {
    page: req.url }))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
