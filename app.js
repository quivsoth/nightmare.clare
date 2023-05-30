'use strict';
let koa = require('koa'),
    koarouter = require('koa-router'),
    path = require('path'),
    render = require('koa-ejs'),
    serve = require("koa-static"),
    mount = require("koa-mount");


const PORT = 3000;
const app = new koa();
const router = new koarouter();

app.use(serve(__dirname + '/public'));

// Routes
app.use(router.routes()).use(router.allowedMethods());
render(app, {
    root: path.join(__dirname, 'views'),
    public: path.join(__dirname, 'public'),
    layout: 'layout',
    viewExt: 'html',
    cache: false,
    debug: false 
});




//--------------------------------------------------
//TODO Move this to a diff class
router.get('/', async ctx => {
    await ctx.render('index', {showLayout: false});
    
});


router.get('/ballet', async ctx => {
    await ctx.render('ballet', {showLayout: false});
});

router.get('/story', async ctx => {
    await ctx.render('story', {showLayout: true});
});
//--------------------------------------------------

//app.use(async ctx => ctx.body = "HELLO");

app.listen(PORT, () => console.log('Application Activated, Listening on PORT : ' + PORT));