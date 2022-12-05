'use strict';

const Controller = require('candyjs/web/Controller');

class IndexController extends Controller {

    run(req, res) {
        this.getView().enableLayout = true;
        this.render('index', {
            content: 'Hello CandyJs.'
        });
    }

}

module.exports = IndexController;
