var hoverDictionary = function () {
	return {
		init : function () {
			gBrowser.addEventListener ("load", function () {
				hoverDictionary.run();
			}, false);
		},
		run : function () {
			alert ("we're here");
		}
	}
}

window.addEventListener ("load", hoverDictionary.init(), false);
