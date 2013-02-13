function doClick(e) {  
    if($.win.children.length==1){
    	$.label.text="swipe to remove";	
		var web=Ti.UI.createWebView({
			url:"http://www.google.com",
			top:50,
			height:"fill",
			width:"fill",
		});
		
		$.win.add(web);
	}
}
function doSwipe(e) {
	if($.win.children.length>1){
		$.label.text="click to add web view";
    	$.win.remove($.win.children[1]);
    }
}	
$.win.open();
