console.log('client.js has been loaded');

$(document).ready(function(){
    console.log('jQuery has been loaded');

    
    
    $.ajax({
        method: 'GET',
        url: '/quote/all',
        success: function(response) {
            console.log('Random quote response', response);
            $('p').text(response.quoteText);
        }//success is a callback function, response = res.send
    });
    $.ajax({
        method: 'GET',
        url: '/quote/first',
        success: function(response){
            $('p').text(response.quoteText);
        console.log('first quote respose', response)
        }
    });
    $('#newQuoteButton').on('click', function(){
        console.log('something!');
        $.ajax({
            method: 'POST',
            url: '/quote/new',
            data: {quote_to_add: $('#inputQuote').val()},
            success: function(response) {
                console.log('a new quote post response:', response);
                //get request for all of the quotes
                getAllQuotes();
            }
        });
        
    });
    getAllQuotes();
})

function getAllQuotes() {
    $.ajax({
        method: 'GET',
        url: '/quote/all',
        success: function(response) {
            console.log('all quotes array', response);
            var outputString = '';
            for (var i = 0; i < response.length; i++) {
                outputString += '<li>' + response[i].quoteText + '</li>';
            }
            
            $('ul').html(outputString);
        }
    });
}
//1. list on reload, 2. dont duplicate list(just the new one). 3.input box (not aloha everytime) 