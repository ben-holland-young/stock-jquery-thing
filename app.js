jQuery.ajax({
        url: "https://www.quandl.com/api/v3/datasets/WIKI/AAPL.json",
        type: "GET",
        data: {
                    "api_key": "xzBh9JuvESDS6uyTEX2D",
                },
})
.done(function(data, textStatus, jqXHR) {
        console.log("HTTP Request Succeeded: " + jqXHR.status);
        //console.log(data)
        var now = data["dataset"]["data"][0];
        var names = data["dataset"]["column_names"]
        for (var i = 0; i < now.length; i++) {
            console.log(names[i] + " : " + now[i]); 	
            //$(".body").add("<h1>"+ names[i] + " : " + now[i] + "</h1>");
        } 
})
.fail(function(jqXHR, textStatus, errorThrown) {
        console.log("HTTP Request Failed");
})
.always(function() {
        /* ... */
});



