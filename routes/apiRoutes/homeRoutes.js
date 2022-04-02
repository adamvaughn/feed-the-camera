const router = require('express').Router();

router.get('/', (req, res) => {
    console.log(req.session);

});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }

    res.render('login');
});

module.exports = router;