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
			 var url_encode = encodeURIComponent(url); 
			 var url_search_string =  "https://www.reddit.com/search.json?q="+url_encode; 

			 console.log(url_search_string);

			 $.get(url_search_string, function( data ) {

			 		console.log(data);
			 		first_child = data['data']['children'][0];
			 		
			 		//get first set of comments from the returned list
  					$( "#content" ).append(data);
  					console.log('yes');
			 });
			
		}
						
	});
	

});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){

	
	
});