const express = require('express'),
http = require('http'),
path = require('path')

const app  = express()


app.set('appName', 'Blog')
app.set('port', process.env.PORT || 3000)
app.set('view engine', 'jade')
app.set('views', path.join(__dirname, "views"))


app.all('*', (req, res) => {
    res.render('index', {msg: 'Welcome to practical node'})
})

const server = http.createServer(app)

const boot = ()  => {
    server.listen(app.get('port'), () => {
        console.info(`Server is listening on ${app.get('port')}`)
    })
}

const shutdown = () => {
    server.close()
}

if(require.main === module){
    boot()
}else{
    console.info('Running app as a module')
    exports.boot = boot
    exports.shutdown = shutdown
    exports.port = app.get('port')
}

