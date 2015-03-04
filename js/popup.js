//upon loading the document grab url and search reddit for it
$(document).ready(function(){

	console.log("sent"); 
	
	chrome.runtime.sendMessage({method:"getUrl",from:"popup.js"},function(response){
						
		console.log("done"); 
						
		if (response.message == "OK"){
		
			var url = response.url; 
			
			console.log(url); 
			
			$("#content").html(url);
			
			//search reddit for this url 
			
		}
						
	});
	

});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){

	
	
});