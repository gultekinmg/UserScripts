// ==/UserScript==
// @id          _Lichess_Enhancer_Theme
// @name        _Lichess_Enhancer_Theme
// @namespace   https://github.com/gultekinmg/UserScripts/
// @description KeyBoard Process
// @author      GMG
// @homepage    https://github.com/gultekinmg/UserScripts/tree/TemperMonkey
// @copyright   
// @license     
// @downloadURL https://raw.githubusercontent.com/gultekinmg/UserScripts/TemperMonkey/_Lichess_Enhancer_Theme.js
// @updateURL   https://raw.githubusercontent.com/gultekinmg/UserScripts/TemperMonkey/_Lichess_Enhancer_Theme.js
// @supportURL  https://github.com/gultekinmg/UserScripts/issues
// @match       https://*.lichess.org/*
// @include     https://*.lichess.org/*
// @grant       none
// @icon        https://raw.githubusercontent.com/ornicar/lila/master/public/images/favicon-32-black.png
// @run-at      document-start
// @version     0.1
// ==/UserScript==
(function () { var css = "";                                       /// Add Style CSS
	if (false || (new RegExp("^.*lichess\\.org/tournament.*$")).test(document.location.href))
		css += ["#site_description { position: absolute; top: 35px;}", // damned division found***
			    "#site_header {margin-left: -100px;}"].join("\n");
	css += [ /*Better Join and Withdraw button */
		"button.fbt.text { border-radius: 0 !important; border: 1px solid rgba(100, 100, 100, 250) !important; color: rgba(255, 255, 255, 255) !important;",
		"top: 0 !important; height: 100% !important; right: 0 !important; background-color: rgba(215, 113, 11, 0) !important; transition: 0s none !important;}",
		"button.fbt.text {background-color: rgba(156, 147, 100, 100)!important; transition: 0s none !important;}",
		"button.fbt.text:hover {background-color: rgba(56, 147, 232, 255)!important;}",
		"button.fbt.text.highlight:active {background-color: #333 !important;margin-top: -8px !important; height: 41px!important;}",
		"button.fbt.text.highlight:hover {background-color: rgba(215, 113, 11, 255) !important;}",
		"button.fbt.text.disabled {color: rgba(116, 116, 116, 255) !important;}",
		"button.fbt.text.disabled:hover {background-color: rgba(215, 113, 11, 0)!important;}"].join("\n");
	// Theme
	css += [
		//".purple .is2d .cg-board, #top div.color_demo.purple { background-image:url(\"http://s020.radikal.ru/i702/1702/93/7fc55914c47b.png\")  !important;}",
		"body.dark {", 
		"color: #DBC73C !important;",                                                     /* text color #0AA*/ 
		"background-image: -webkit-linear-gradient(top,green 0%,black 100px);",           // background-color
		// "background-color: #DBC73C !important;",
		// "background-image:url(\"http://s45.radikal.ru/i109/1702/cf/c5146e286ee0.png\")  !important;",
		
		// "font: 13px \'Open Sans\',\'Lucida Grande\',\'Lucida Sans Unicode\',Geneva,Verdana,Sans-Serif;",/* font */
		
		"#premove_alert, #dont_touch { top: 721px !important;  width: 720px !important;}",/* Premove Alert */
		"body.dark .color-icon::before {color: #0BA}",					/* icon sides *****/
		"body.dark move:not(.active) {color: #0AA}",					/* MOVELIST **/
		"body.dark #friend_box .title {color: yellow}",					/* FRENLIST **/
		"body.dark #chat span {color: #0BA}",					/* CHATTITLE */
		"body.dark #site_header .watchers {background: dark !important}",					/* observers */

		"body.dark span.extension {color: #0AA !important}",
		"body.dark .button, {color: #0BA !important; background-color: rgba(156, 147, 100, 100)!important; transition: 0s none !important;}",
		"body.dark a:not(.win):not(.loss):not(.draw):not([style]) {color: #0BA !important;}",
		
		"body.dark #tournament streak {color: #0AA !important}",
		"body.dark #tournament .time {color: #FF0 !important}",
		"body.dark #tournament table double {color: #FF0 !important}",
		"body.dark #tournament a.user_link .progress {color: #FFF}",
		"body.dark #tournament .rating.progress {color: #FFF}",
		
		"body.dark move.active {color: #FF0 !important}",
		
		"body.dark .side_box .clock * {color: #FF0 !important}",
		"body.dark .user_tv {color: #FF0 !important}",
		
		"body.dark .scheduled td.name a, body.dark #enterable_simuls td.name a {color: yellow !important;text-shadow: none !important}",
		"#tournament_list table.slist .name {letter-spacing: 3px; font-size: 1.7em; display: block;color: yellow}",
		"#tournament_list .scheduled .icon span { color: #d59120; opacity: 1.8;}",
		"#tournament_list .icon span {font-size: 3em;opacity: 0.6;}",		
		/* Coloring data icons. ******/
		/* bullet         */ "[data-icon*='T']::before { color: rgb(255, 169,  53) !important;}",
		/* blitz          */ "[data-icon*=')']::before { color: rgb(184,  51,  16) !important;}",
		/* classical      */ "[data-icon*='+']::before { color: rgb(116, 191,   0) !important;}",
		/* correspondence */ "[data-icon*=';']::before { color: rgb( 99, 138, 189) !important;}",
		/* fischerrandom  */ "[data-icon*=''']::before { color: rgb(186, 190, 161) !important;}",
		/* kingincenter   */ "[data-icon*='(']::before { color: rgb( 77,  51, 219) !important;}",
		/* threecheck     */ "[data-icon*='.']::before { color: rgb(  0, 132, 132) !important;}",
		/* antichess      */ "[data-icon*='@']::before { color: rgb(201, 100, 116) !important;}",
		/* atomic         */ "[data-icon*='>']::before { color: rgb(159,  80, 178) !important;}",
		/* horde          */ "[data-icon*='_']::before { color: black !important;}",			
		/* position       */ "[data-icon*='*']::before { color: rgb(145, 206, 172) !important;}", 
		/* training       */ "[data-icon*='-']::before { color: rgb(255, 217, 238) !important;}",
		/* opening        */ "[data-icon*=']']::before { color: rgb(255, 233, 144) !important;}",
		
		/* shadow */ ".is-gold[data-icon]::before, #hooks_wrap .hooks_chart .plot.rated { text-shadow: 0 0 2px #d59120 !important;}",
		/* mod */            "[data-icon=]::before {  background: linear-gradient(0deg, rgb(41, 81, 109), rgb(72, 209, 136));  -webkit-background-clip: text;  -webkit-text-fill-color: transparent;}",
		/* override non-trophy mod icons: text-fill-color is annoying */ "*:not(.trophy) > [data-icon=] { text-shadow: none !important;}",
		/* modtool: count */ "[data-icon=] { color: rgba(56, 145, 122, 0.5) !important;}",
		/* streamer */       "[data-icon=]::before {  background: radial-gradient(circle, rgb(162, 114, 140), rgb(131, 78, 107));  -webkit-background-clip: text;  -webkit-text-fill-color: transparent;}",
		/* marathon */ ".scheduled_tournaments > [data-icon=\\]::before, #enterable_tournaments [data-icon=\\]::before, #tournament_list [data-icon=\\]::before  { color: #8C556F !important;}",
		"#tournament_schedule .tournament.marathon > .icon::before { content: '\\'; color: #303E43 !important;}",
		"#marathon_promo::before { color: #303E43 !important;}",
		
		/* daily_puzzle */   "#daily_puzzle {width: 224px; position: absolute; top: 267px; left: 532px;}",
		
		// "body.dark div.pgn {","font-family: \'ChessSansPiratf\', \'Liberation Mono\', \'Roboto\', Geneva, Verdana, sans-serif;","font-weight: bold}"
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
