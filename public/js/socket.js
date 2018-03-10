


$(function () {
    var socket = io();

    $('#chat-box').submit(function()
    {
        socket.emit('chat message', $('#message').val());
        $('#message').val('');
        return false;
    });

    // EMIT for when user sends a chat message!
    socket.on('chat message', function(msg)
    {
        $('#chat').append($('<li>').text(msg));
    });


    // BROADCAST message for when user joins the chat!
    socket.on('notice', function(msg){
        $('#chat').append($('<li>').text(msg));
    });


    // DISPLAYS the current list of users online in the chat!
    socket.on('updatelist', function(users){
        $('#userlist').empty();
        for(var i = 0; i < users.length; i++)
        {
            $('#userlist').append($('<li>').text(users[i]));
        }
    });


});