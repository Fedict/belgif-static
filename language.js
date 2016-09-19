function setlang(lang) {
	var d = new Date();
	d.setTime(d.getTime() + 365*24*3600*1000);
	document.cookie = "lang=" + lang + "; expires=" + d.toUTCString();
}

function getlang() {
	var lang = "";

	var cookie = document.cookie;
	if ((cookie != "") && (cookie.indexOf("lang=") == 0)) {
		lang = cookie.substring(5, 7);
	}
	return lang;
} 
