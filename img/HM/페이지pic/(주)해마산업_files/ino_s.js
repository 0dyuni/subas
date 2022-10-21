function get_fb() {
  // set up default options 
  var defaults = { 
    version:    '2.0.1', 
    login:      'inodea', 
    apiKey:     'R_8976df157e4b89774ca3938ffbf4c1bb', 
    history:    '0', 
    longUrl:    in_url 
  }; 
 
  // Build the URL to query 
  var daurl = "http://api.bit.ly/shorten?" 
    +"version="+defaults.version 

    //+"&longUrl="+defaults.longUrl
	+"&longUrl="+encodeURIComponent(defaults.longUrl)
	
    +"&login="+defaults.login 
    +"&apiKey="+defaults.apiKey 
    +"&history="+defaults.history 
    +"&format=json&callback=?"; 
    // Utilize the bit.ly API 
    $.getJSON(daurl, function(data){ 
 
        // Make a good use of short URL 
		//  $('#myContainer') 
        //    .append(data.results[defaults.longUrl].shortUrl); 	
			
		var LIST_URL = 'http://www.facebook.com/sharer.php?u=';
		var LIST_title = encodeURIComponent(in_title);		
	
		url = LIST_URL + data.results[defaults.longUrl].shortUrl + '&t=' + LIST_title ;
		//opener.parent.top_frame.location.href = url; 
		//window.location.href =url;

 window.name="_mainTarget";
  
   var winName="userS";
   var w="1024"  // 팝업 싸이즈 조절
   var h="700"
   var x=(screen.width) ? (screen.width-w)/2 : 0;  // 팝업 위치 조절
   var y=(screen.height) ? (screen.height-h)/2 : 0;  
   var features="resizable=yes, scrollbars=yes, width="+ w +", height="+ h +", left="+ x +", top="+ y;    
   window.open(url,winName,features);
		return false; 
    }); 
};















function get_tw() {
  // set up default options 
  var defaults = { 
    version:    '2.0.1', 
    login:      'inodea', 
    apiKey:     'R_8976df157e4b89774ca3938ffbf4c1bb', 
    history:    '0', 
    longUrl:    in_url 
  }; 
 
  // Build the URL to query 
  var daurl = "http://api.bit.ly/shorten?" 
    +"version="+defaults.version 

    //+"&longUrl="+defaults.longUrl
	+"&longUrl="+encodeURIComponent(defaults.longUrl)
	
    +"&login="+defaults.login 
    +"&apiKey="+defaults.apiKey 
    +"&history="+defaults.history 
    +"&format=json&callback=?"; 
    // Utilize the bit.ly API 
    $.getJSON(daurl, function(data){ 
 
        // Make a good use of short URL 
		//  $('#myContainer') 
        //    .append(data.results[defaults.longUrl].shortUrl); 
	
			
		var LIST_URL = 'http://twitter.com/home?status=';
		var LIST_title = encodeURIComponent(in_title);		
	
		url = LIST_URL  +  LIST_title + '  ' + data.results[defaults.longUrl].shortUrl ;
		//opener.parent.top_frame.location.href = url; 
		//window.location.href =url;

 window.name="_mainTarget";
  
   var winName="userS";
   var w="1024"  // 팝업 싸이즈 조절
   var h="700"
   var x=(screen.width) ? (screen.width-w)/2 : 0;  // 팝업 위치 조절
   var y=(screen.height) ? (screen.height-h)/2 : 0;  
   var features="resizable=yes, scrollbars=yes, width="+ w +", height="+ h +", left="+ x +", top="+ y;    
   window.open(url,winName,features);
		return false; 
    }); 
};









function get_mt() {
  // set up default options 
  var defaults = { 
    version:    '2.0.1', 
    login:      'inodea', 
    apiKey:     'R_8976df157e4b89774ca3938ffbf4c1bb', 
    history:    '0', 
    longUrl:    in_url 
  }; 
 
  // Build the URL to query 
  var daurl = "http://api.bit.ly/shorten?" 
    +"version="+defaults.version 

    //+"&longUrl="+defaults.longUrl
	+"&longUrl="+encodeURIComponent(defaults.longUrl)
	
    +"&login="+defaults.login 
    +"&apiKey="+defaults.apiKey 
    +"&history="+defaults.history 
    +"&format=json&callback=?"; 
    // Utilize the bit.ly API 
    $.getJSON(daurl, function(data){ 
 
        // Make a good use of short URL 
		//  $('#myContainer') 
        //    .append(data.results[defaults.longUrl].shortUrl); 
	
			
	http://me2day.net/posts/new?new_post[body]='".urlencode(할말)."' : ".$링크주소."&new_post[tags]=".urlencode("태그이름");



		var LIST_URL = 'http://me2day.net/posts/new?new_post[body]=';
		var LIST_title = encodeURIComponent(in_title);		
	
		url = LIST_URL + LIST_title + ' : ' + data.results[defaults.longUrl].shortUrl ;
		//opener.parent.top_frame.location.href = url; 
		//window.location.href =url;

 window.name="_mainTarget";
  
   var winName="userS";
   var w="1024"  // 팝업 싸이즈 조절
   var h="700"
   var x=(screen.width) ? (screen.width-w)/2 : 0;  // 팝업 위치 조절
   var y=(screen.height) ? (screen.height-h)/2 : 0;  
   var features="resizable=yes, scrollbars=yes, width="+ w +", height="+ h +", left="+ x +", top="+ y;    
   window.open(url,winName,features);
		return false; 
    }); 
};

















function get_yz() {
  // set up default options 
  var defaults = { 
    version:    '2.0.1', 
    login:      'inodea', 
    apiKey:     'R_8976df157e4b89774ca3938ffbf4c1bb', 
    history:    '0', 
    longUrl:    in_url 
  }; 
 
  // Build the URL to query 
  var daurl = "http://api.bit.ly/shorten?" 
    +"version="+defaults.version 

    //+"&longUrl="+defaults.longUrl
	+"&longUrl="+encodeURIComponent(defaults.longUrl)
	
    +"&login="+defaults.login 
    +"&apiKey="+defaults.apiKey 
    +"&history="+defaults.history 
    +"&format=json&callback=?"; 
    // Utilize the bit.ly API 
    $.getJSON(daurl, function(data){ 
 
        // Make a good use of short URL 
		//  $('#myContainer') 
        //    .append(data.results[defaults.longUrl].shortUrl); 
	
	


		var LIST_URL = 'http://yozm.daum.net/api/popup/prePost?link=';
		var LIST_title = encodeURIComponent(in_title);		
	
		url = LIST_URL  + data.results[defaults.longUrl].shortUrl + '&prefix=' + LIST_title ;
		//opener.parent.top_frame.location.href = url; 
		//window.location.href =url;

 window.name="_mainTarget";
  
   var winName="userS";
   var w="466"  // 팝업 싸이즈 조절
   var h="356"
   var x=(screen.width) ? (screen.width-w)/2 : 0;  // 팝업 위치 조절
   var y=(screen.height) ? (screen.height-h)/2 : 0;  
   var features="resizable=yes, scrollbars=yes, width="+ w +", height="+ h +", left="+ x +", top="+ y;    
   window.open(url,winName,features);
		return false; 
    }); 
};