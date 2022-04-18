const web = require('../models/book');
module.exports = {
  books: (req, res) => {web.find().lean().then((books) => {res.render('home', { books });}).catch(() => {
      })
  },
  detail: (req, res) => {web.findOne({ bookNumber: req.params.bookNumber }).lean().then((book) => { res.render('books', { book: book }); }).catch(() => {
      
  })
  },
};