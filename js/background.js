//if user opens popup, grab the url and return it to popup.js
//send message to content script to grab article from page and look for keywords
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){

	if (request.method == "getUrl"){
	
		var msg = "";
		
		chrome.tabs.getSelected(function(tab){
			var tab_url = tab.url;
			var tab_id = tab.id; 
			console.log(tab.url);
			
			console.log('here');
			
			sendResponse({message:"OK",url:tab_url});

			console.log('ahh');
			
			//send message to content.js to grab title and article
// 			chrome.tabs.sendMessage(tab_id,{method: "parseUrl",from: "background.js"},function(response){
// 				
// 				var response_msg = response.message; 
// 				
// 				if (response_msg.message == "OK"){
// 				
// 					var keyword_array = response_msg.keyword_array; 
// 					
// 						//send message to popup.js to search reddit with relevant keywords
// 					chrome.runtime.sendMessage({method:"searchKeywords",from:"background.js",keywords:response_msg.keyword_array},function(response1){
// 						
// 						if (response1 == "OK"){
// 							console.log("Keywords sent to popup."); 
// 						}
// 						
// 					});
// 					
// 				}
// 				
// 			});
			
		});

		return true; 
			
	}

});