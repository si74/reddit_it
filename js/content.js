//set event listener
//if parseUrl command sent, parse and get keywords and title from article
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){

	if (request.method == "parseUrl"){
		keywords = parseArticle();
		if (keywords){
			
		}else{
		} 
		
		sendReponse({message:"OK"});

	}

});
