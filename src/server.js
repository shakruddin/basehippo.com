import Hapi from 'hapi';
import Inert from 'inert';
import Vision from 'vision';


const server = new Hapi.Server();
import routes from './routes'

const port = process.env.PORT || 8000;

server.connection( {
    port: port,
    routes: { cors: true }
});

server.register([
    Inert,
    Vision,
    {
        register:require('hapi-swagger')
    }],
    function(err){
    if(err){
        server.log(['error'], 'hapi-swagger load error: ' + err)
    }
    else{
    }
        server.log(['start'], "hapi-swagger interface loaded!")
});

server.route(routes)
module.exports = server;


server.views({
    engines: {
        html: require('handlebars')
    },
    path: 'BaseHippo',
    layout: 'layout'
})



server.route({
path: '/{path*}',
method: "GET",

handler: {
    directory: {
        path: 'BaseHippo',
        listing: true,

    }
}

});

server.start(err => {

     if (err) {
         console.error( err );

     }
     console.log('hapi-auth-cookie successfully registered') 
     console.log( `Server started at ${ server.info.uri }` );

 });
