// ==UserScript==
// @id          Lichess_board
// @name        Lichess_board
// @namespace   https://github.com/gultekinmg/UserScripts/
// @description COORDINATES BORDERS - RICHWOOD Purplemovementmarkers - rgbacolorcodes http://www.hexcolortool.com
// @author      GMG
// @homepage    https://github.com/gultekinmg/UserScripts/tree/TemperMonkey
// @copyright   
// @license     
// @downloadURL https://raw.githubusercontent.com/gultekinmg/UserScripts/master/Lichess_UserScripts/_LichessExtend_css_board.js
// @updateURL   https://raw.githubusercontent.com/gultekinmg/UserScripts/master/Lichess_UserScripts/_LichessExtend_css_board.js
// @supportURL  https://github.com/gultekinmg/UserScripts/issues
// @match       https://*.lichess.org/*
// @include     https://*.lichess.org/*
// @grant       none
// @icon        https://raw.githubusercontent.com/ornicar/lila/master/public/images/favicon-32-black.png
// @run-at      document-start
// @version     0.1
// ==/UserScript==
(function () { var css = "";/// Add Style CSS

	css += [
		//COORDINATES
		".cg-board-wrap coords.files {font-size: larger; font-weight: bold; bottom: -16px; text-transform: lowercase;}",
		".cg-board-wrap coords.ranks {font-size: larger; font-weight: bold; left: -16px;}",
		// BORDERS https://userstyles.org/styles/140164
		".lichess_board {border: 18px solid #66492B !important;} ",
		".underboard    {margin-top: 50px !important;} ",
		".ranks coord   {margin-left: 2px !important;} ",
		".files coord   {margin-top: 0px !important;} ",
		// selected piece
		" .cg-board square.selected {background-color: rgba(15,0,125,0.5) !important;}",
		// destination dots, empty spaces
		" .cg-board square.move-dest {background: radial-gradient(rgba(15,0,125,0.3) 17%,#208530 0,rgba(0,0,0,0.3) 0,rgba(0,0,0,0) 0) !important;}",
		// highlight square on hover
		" .cg-board square.move-dest:hover {background: rgba(15,0,125,0.3) !important;}",
		// available capture
		" .cg-board square.oc.move-dest {background: radial-gradient(transparent 0%,transparent 60%,rgba(15,0,125,0.3) 80%) !important;}",
		// Re-color last move
		" .cg-board square.last-move { background-color: rgba(200,200,0,0.3) !important;}",
		// Coloring captured pieces.
		".mono-piece.queen  {filter: brightness(0) blur(1px);       -webkit-filter: brightness(0) blur(1px);}",
		".mono-piece.rook   {filter: sepia(100%);                   -webkit-filter: sepia(100%);}",
		".mono-piece.bishop {filter: sepia(60%) hue-rotate(150deg); -webkit-filter: sepia(60%) hue-rotate(150deg);}",
		".mono-piece.knight {filter: sepia(60%) hue-rotate(250deg); -webkit-filter: sepia(60%) hue-rotate(250deg);}",
		".mono-piece.pawn   {filter: sepia(70%) hue-rotate(60deg);  -webkit-filter: sepia(70%) hue-rotate(60deg);}",
		".mono-piece.king   {filter: sepia(100%) contrast(2.5);     -webkit-filter: sepia(100%) contrast(2.5);}"
		//"body.dark square[data-coord-x]::after, body.dark square[data-coord-y]::before {color: #0F0 !important;}",
		//"body.dark a [style] {text-shadow: -1px -1px #000, -1px 1px #000, 1px -1px #000, 1px 1px #000 !important}",
	].join("\n");
	if (typeof GM_addStyle != "undefined") {GM_addStyle(css);
	} else if (typeof PRO_addStyle != "undefined") {PRO_addStyle(css);
	} else if (typeof addStyle != "undefined") {addStyle(css);
	} else {
		var node = document.createElement("style");
		node.type = "text/css";
		node.appendChild(document.createTextNode(css));
		var heads = document.getElementsByTagName("head");
		if (heads.length > 0) {heads[0].appendChild(node);
		} else {document.documentElement.appendChild(node);} // no head yet, stick it wherever
	}
})();
