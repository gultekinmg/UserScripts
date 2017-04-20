// ==/UserScript==
// @id          Lichess_KeyBoard
// @name        Lichess_KeyBoard
// @namespace   https://github.com/gultekinmg/UserScripts/
// @description KeyBoard Process
// @author      GMG
// @homepage    https://github.com/gultekinmg/UserScripts/tree/TemperMonkey
// @copyright   
// @license     
// @downloadURL https://raw.githubusercontent.com/gultekinmg/UserScripts/master/Lichess_UserScripts/_Lichess_Enhancer_KeyBoard.js
// @updateURL   https://raw.githubusercontent.com/gultekinmg/UserScripts/master/Lichess_UserScripts/_Lichess_Enhancer_KeyBoard.js
// @supportURL  https://github.com/gultekinmg/UserScripts/issues
// @match       https://*.lichess.org/*
// @include     https://*.lichess.org/*
// @grant       none
// @icon        https://raw.githubusercontent.com/ornicar/lila/master/public/images/favicon-32-black.png
// @run-at      document-start
// @version     0.1
// ==/UserScript==
(function() {
// ======================================================================================================== 
// quick_buttons
// ========================================================================================================
// berserk button Hit "b" on your keyboard
Mousetrap.bind('b', function() { (function () {document.querySelector('button.berserk').click();})(); }); 
//setTimeout(function() {document.querySelector('button.berserk').click();}, 100);
// refresh ---------
Mousetrap.bind('y', function() { (function () { location.reload();})(); }); 
//Mousetrap.bind('y', function() { (function (){setTimeout(function(){location.reload();}, 1000);})(); });
})();
		