function init () {
			getBrowser().addEventListener ("load", function () {
				run();
			}, false);
}
function run () {
			var contextMenu = document.getElementById ("contentAreaContextMenu");
			if (contextMenu) {
				contextMenu.addEventListener ("popupshowing", hdCheckContextMenu, false);
				contextMenu.appendChild (document.getElementById ("hover_dictionary_context_menuitem"));
			}
			
		}

function hdCheckContextMenu () {
	var target = document.popupNode;
	if (target) {
		var data = document.defaultView.getSelection();
		var menuitem = document.getElementById ("hover_dictionary_context_menuitem");
		
	}
}

window.addEventListener ("load", function () {
			run(); }, false);
