$(function(){
        var link1 = crossroads.addRoute("/sqliteclick",function(){
        
		.$(ajax({
		type: 'get',
		url: 'https://kerbau.odaje.biz/getstaff.php',
		data: {
			"email" : email;
		}
		cache: false.
		success: function(datareceived){
			var len = result.rows.length;

			if(len>0){
				htmlText=";
				for(i=0;i<len;i++){
					htmlText = htmlText + "<tr><td>"+(i+1)+"</td><td>" + results.rows.item(i).email + 
					"</td></tr>";
				}
				$('#maintable tbody').html(htmlText)
			}
		},
		error: function(){
			htmlText = "<tr><td>No data found!</td></tr>"
			$('#maintable tbody').html(htmlText)
		}); 
})