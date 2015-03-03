//if user opens popup, grab the url and return it to popup.js
//send message to content script to grab article from page and look for keywords
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){

	if (request.method == "getUrl"){
	
		var msg = "";
		
		chrome.tabs.getSelected(integer windowId, function(tab){
			var tab_url = tab.url;
			var tab_id = tab.id; 
			msg="OK";
		});
		
		//send url to popup.js
		if (msg == "OK"){
			sendResponse({message:msg,url:tab_url});
			
			//send message to content.js to grab title and article
			chrome.tabs.sendMessage(tab_id,{method: "parseUrl",from: "background.js"},function(response){
				var response_msg = response.message; 
				
				
				
			});
		}
		
		
		
	}

});