//upon loading the document grab url and search reddit for it
$(document).ready(function(){

	console.log("sent"); 
	
	chrome.runtime.sendMessage({method:"getUrl",from:"popup.js"},function(response){
						
		console.log("done"); 
						
		if (response.message == "OK"){
		
			var url = response.url; 
			
			console.log(url); 
			
			//search reddit for this url
			 var url_encode = encodeURIComponent(url); 
			 var url_search_string =  "https://www.reddit.com/search.json?q="+url_encode; 

			 console.log(url_search_string);

			 $.get(url_search_string, function( data ) {

			 		//get first set of comments from the returned list
			 		var comment_search_string = "https://www.reddit.com"+data['data']['children'][0]['data']['permalink'];
			 		comment_search_string = comment_search_string.substring(0, comment_search_string.length - 1);
			 		comment_search_string = comment_search_string + ".json";

			 		//get text of comment
			 		$.get(comment_search_string,function(data2){

			 			var top_comment = data2[1]['data']['children'][0]['data']['body'];
			 			var top_comment_user = data2[1]['data']['children'][0]['data']['author'];

			 			$("#content").append('<br/><div id="top_group"><div id="top_comment">'+top_comment+'</div><br/><br/>');
			 			$("#content").append('<div id="top_comment_user">'+"-"+top_comment_user+'</div></div>');

	
			 		});

			 });
			
		}
						
	});
	

});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){

	
	
});