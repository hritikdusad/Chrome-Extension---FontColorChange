chrome.runtime.sendMessage({todo: "showPageAction"});
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if (request.todo == "changeColor"){
        var addColor = '#' + request.clickedColor;               
        $( "h1, h2, h3, h4, h5, h6, p, span, div, a" ).each(function( i ) {
		      this.style.color = addColor;      
		 });

    }
});