class NewsController {
  // [GET] /news
  index(reg, res) {
    res.render('news');
  }

  show(reg, res) {
    res.send('NEW DETAILS');
  }
}

module.exports = new NewsController();
