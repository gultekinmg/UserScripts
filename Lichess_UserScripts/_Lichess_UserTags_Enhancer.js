// ==UserScript==
// @id          _Lichess_UserTags_Enhancer
// @name        _Lichess_UserTags_Enhancer
// @namespace   https://github.com/gultekinmg/UserScripts/
// @description KeyBoard Process
// @author      GMG
// @homepage    https://github.com/gultekinmg/UserScripts/tree/TemperMonkey
// @copyright   
// @license     
// @downloadURL https://raw.githubusercontent.com/gultekinmg/UserScripts/master/Lichess_UserScripts/_LichessExtend_css_Pieces.js
// @updateURL   https://raw.githubusercontent.com/gultekinmg/UserScripts/master/Lichess_UserScripts/_LichessExtend_css_Pieces.js
// @supportURL  https://github.com/gultekinmg/UserScripts/issues
// @match       https://*.lichess.org/*
// @include     https://*.lichess.org/*
// @grant       none
// @icon        https://raw.githubusercontent.com/ornicar/lila/master/public/images/favicon-32-black.png
// @run-at      document-start
// @version     0.1
// ==/UserScript==

	let mycontext = ' This Text was injected to the DIV.';
	var _mytextnode = document.createTextNode(mycontext);
	var _parentelement = document.getElementById("site_description");
	_parentelement.innerHTML = '';
	_parentelement.appendChild(_mytextnode);
	
// ========================================================================================================
// Lichess_User_Enhancer@https://github.com/ddugovic/UserScripts
// ========================================================================================================

function shuffle_Array(array) {// Randomize array element order in-place. * Using Durstenfeld shuffle algorithm.
	for (var i = array.length - 1; i > 0; i--) {
		var j = Math.floor(Math.random() * (i + 1));
		var temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
	return array;
}
var $dark = $("body.dark");
if ($dark.length)   {var colors = shuffle_Array(["#EF2F41", "#5179FF", "orange", "silver", "yellow", "cyan", "white", 
	                            "aqua", "lime", "fuchsia", "gold", "forestgreen", "lightseagreen"]);
} else 				{var colors = shuffle_Array(["#EF2F41", "#61BDF2", "#5179D6", "#66CC66", "black", "maroon", "teal", 
	                            "blue", "navy", "fuchsia", "olive", "gray", "purple", "green", "red"]);}
var n = 0, colorContents = {};
var colorize = function () { var e = document.getElementById('user_tag');
	var keyContent = e.href;
	if (colorContents[keyContent] === undefined) colorContents[keyContent] = colors[n++ % colors.length];
	e.style.color = colorContents[keyContent];
	$('a[href^="/@/"]').each(function (i, e) {             var keyContent = $(e).attr('href');
		$('a[href^="/simul/"]').each(function (i, e) {     var keyContent = $(e).attr('href');
			if (colorContents[keyContent] === undefined) colorContents[keyContent] = colors[n++ % colors.length];
			$(e).css('color', colorContents[keyContent]);});
		$('span[data-href^="/@/"]').each(function (i, e) { var keyContent = $(e).attr('data-href');
			if (colorContents[keyContent] === undefined) colorContents[keyContent] = colors[n++ % colors.length];
			$(e).css('color', colorContents[keyContent]);});
		$('#lichess > div.user_show > div.content_box_top > h1').each(function (i, e) {var keyContent = $(e).attr('href');
			if (colorContents[keyContent] === undefined)colorContents[keyContent] = colors[n++ % colors.length];
			$(e).css('color', colorContents[keyContent]);});
		$('#tv_channels > a').each(function (i, e) {        var keyContent = $(e).attr('href');
			if (colorContents[keyContent] === undefined)colorContents[keyContent] = colors[n++ % colors.length];
			$(e).css('color', colorContents[keyContent]);});
	};
};
setInterval(function () { colorize(); }, 100); 
//colorize();
var newMutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
var list = document.querySelector('ol.messages');
var observer = new newMutationObserver(
	function (mutations) { mutations.forEach(function (mutation) {if (mutation.type === 'childList') {colorize();}});}
	);
var chat = $('#chat');
if (chat.length) {observer.observe(list, {attributes: true,childList: true,characterData: true});}
