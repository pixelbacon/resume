// JavaScript Document
$(document).ready(function(e) {
    $("#references .contact").each(function(index, element) {
		var curString = $(this).html();
		curString = curString.replace("{at}", "@");
		$(this).html('<a href="mailto:' + curString + '">' + curString + '</a>');

        //console.log($(this).html());
    });

    $('#work article').matchHeight();
});

/*

function LI_onLoad()
{
	console.log("LI_onLoad()");
	IN.API.Raw("/people/url=http%3A%2F%2Fwww.linkedin.com%2Fin%whydoyouwork:public").result(LI_displayEmploymentHistory).error(LI_error);
}

function LI_displayEmploymentHistory(data)
{
	console.log("LI_displayEmploymentHistory()");
}

function LI_error()
{
	console.log("LI_error()");
}
*/
