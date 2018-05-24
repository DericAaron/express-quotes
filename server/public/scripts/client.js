
$(document).ready(onReady)

function onReady(){
  createList();
  $('#addButton').on('click', submitQuote);
}

//function to append quotes to the DOM
function appendQuotes(quotes){
  output = ''

  for(quote of quotes){
    output += `<li>"${quote.quote}" by: ${quote.author}</li>`;
  }
  $('#quoteList').append(output);
}

//use ajax to get the quote array from server
function createList(){
  $.ajax({
    method: "GET",
    url: '/quote'
  }).then(function(response){
    console.log('Back from the server with:', response);
    appendQuotes(response);
  });
}

function submitQuote(){
  quote = $('#quoteIn').val();
  author = $('#authorIn').val();
}
