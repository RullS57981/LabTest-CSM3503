$(function(){
        var link1 = crossroads.addRoute("/getstaff.php",function(){
        
		.$(ajax({
		type: 'get',
		url: 'https://kerbau.odaje.biz/getstaff.php',
		data: {
			"employeeNumber" : employeeNumber;
			"firstName" : firstName;
			"lastName" : lastName;
			"officeCode" : officeCode;
			"extension" : extension;
			"email" : email;
			"jobTitle" : jobTitle;
			"reportsTo" : reportsTo;
		}
		cache: false.
		success: function(datareceived){
			var len = result.rows.length;

			if(len>0){
				htmlText=";
				for(i=0;i<len;i++){
					htmlText = htmlText + "<tr><td>"+(i+1)+"</td><td>"+results.rows.item(i).employeeNumber+ 
					"</td><td>" + results.rows.item(i).firstName+ 
					"</td><td>" + results.rows.item(i).lastName+ 
					"</td><td>" + results.rows.item(i).officeCode+ 
					"</td><td>" + results.rows.item(i).extension+ 
					"</td><td>" + results.rows.item(i).email+ 
					"</td><td>" + results.rows.item(i).jobTitle+ 
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