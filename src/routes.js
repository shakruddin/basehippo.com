'use strict'


const routes = [
    {
        method: 'GET',
        path: '/',
        handler: function(request, reply){
            return reply.view('index')
        }
    },
    {
        method: 'GET',
        path: '/my-booking',
        handler: function(request, reply){
            return reply.view('my-booking', null, {'layout': 'user-header'})
        }
    },
    {
        method: 'GET',
        path: '/profile-settings',
        handler: function(request, reply){
            return reply.view('profile-settings', null, {'layout': 'user-header'})
        }
    },

]
export default routes;