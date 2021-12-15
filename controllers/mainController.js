const date = require('../getDate.js');
const Wish = require('../models/wish')

exports.getMainPage = (request, response)=>{
    Wish.fetchWishes(wishes => {
        console.log(wishes)
        let today = date.getDate();
        response.render('index', {dateToRender: today, myWishes: wishes});
    });
    
    
}

exports.getDate = (req, res)=> { //req - request, res - response
    let today = date.getDate();
    res.send(today);

}

exports.getWeekday = (req, res) => {
    let weekday = date.getWeekDay();
    res.send(weekday);
}

exports.postWish = (req, res) => {
    console.log(req.body.userWish);
    const newWish = new Wish(req.body.userWish, req.file.filename);
    newWish.saveWish();

    res.redirect    ('/');
}

exports.deleteWish = (req, res) => {
    let wishToDelete = req.body.wishToDelete;
    Wish.deleteWish(wishToDelete);
    res.redirect('/');
} 