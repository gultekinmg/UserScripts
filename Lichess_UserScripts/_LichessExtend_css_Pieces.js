// ==UserScript==
// @id          Lichess_Pieces
// @name        Lichess_Pieces
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
(function () { var css = "";/// Add Style CSS
	// ========================================================================================================
	// PIECES ****** base64
	// ========================================================================================================
	css += [
		"piece.pawn.white {", "background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAMAAAAPdrEwAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAACQUExURQAAAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsLCxUVFRcXFx4eHh8fHygoKCsrKywsLDAwMDo6Ojs7O0NDQ0ZGRkhISFBQUFNTU1xcXGNjY2dnZ3Nzc39/f4GBgYyMjI+Pj5qamp6enqWlpa6urrCwsLq6usDAwMbGxszMzNTU1N3d3efn5/Hx8f///0aaliwAAAAKdFJOUwAAQk5gepGqxePpJ+pWAAAESklEQVRYw+1ZXVPr2g6TZCct5fz/38qmWdZ5WOkHUHaShjN35g55gZZGcbUsWzYk/qtL+IX+hf6F/r+Hzgfv+eEngyRsTA//ynXQj75cUAwTzapp3T3kmqgzpFBEa3a1atNPRa3IiMMgCq3O7yqx1XNcf0bOUcdDDBKqKob2pniflrFjuRUMY5xeDocMUaTIwVbVIiHL0Jl5ej0OQZIgSDBsoHZDa8iXl2PwgtwPucH2AvSiZCLzcIieSAQAiczQEHvVKOE45jVFLz9TkHZDRyQ/S4EKcS80Iwc9VFPuJYSIz8AuACK4u/IpLpDuv/j7pNiqxla68uCqVmU/W1Q/XlVVAgi4Ixso1He1dz200VxTQgZQqFZVtgveH3WbqhkqzV/AZReqYdodtd0ENBWAcpVdxlReJnwJelK9BcGGzohdrqpmuO0tqoQcsN0ZLrvTMn3sBs9UvpJAdmygXK1awVOd9zewifiDAAEYhVaewFrRe1fkdSP+pHomloEJrPOKBrZCjRMAzwWhATA8TW2/GtWFWDWzacAgQoZdz/uQ3rYGRAi9z/buxQawle1r9912jAoxmTmKQ2oqNJR7iTqjWShMVVXbo1aOiBxzHCXOwqxyoTy5XDW5Cq29b4+a4eCQQ4LuFBeqXB0fcDShVE8co6cA3uocMUjddth2s8vVykZjY2tPHWNKCZFjaP5UwYVW8EQUgHN5+vYY/5ohIikmmPQtyQ0DbC77VqK2Cr0ACO1AIIyC5yfQeJ8+W7PtaiwEdBqAcgENPZ0bfkLoEo6vI1HVqnpBPaOo+gFoKkSApABYDbK0DL1iAkvN/ol3x77Cl6+wOB5D5JwEBihihZtchpZiSALoTowgoMCym1wBTUoXNu761Q8QwmDo6y2OH4jaY1wl2wkmguHd/jo4U32VJwBBiP3WPe/50B3Zuddfy4dBdyC8vOAiI1qRH3y8ZxD3QUvxeZShoACV+6ApXfjwLbHnN3ZBixgfJzBFKJ6vfBER19GONz+tEsygOT1ngiMz83QaxBsPNgyCptnz29tNsDKHGP45HW5ahGd6CUDsRXDeB2zojRmDhuPxTuQghD7SAEJpaI1mntu0ievMGE7HMTn76q4RiE3FaIT74AQ69c0S7TEhOeTr6+shebesAEH3xwgmDAsgieHqY5ehM+P19DLwY1Xu9sy9cBsmDQJk0V65apEyD6Ou8vM8mvvOUZOab6YjtVoy9CHQyp6tend7VyOJ3ihFqBeSx5Uqv/OBpkvzqsk9ofv4XB8Ca9/vGPIvpkzGnCCehzvfEc+5VrVtNYR9peAPR2gYqELh/hlgbi9Puge4oX0dcr0JWncV+rrDueEWvby1+MtUYMLuKrmM0R3ct0rI7QNHFRAQcLm1+jh6ibzP6/N50Bug/fbnU0752y1Pf8b6qNvy/ofPcs0vreWhardCe81O/cvQs2oC+6Hr979Jv9D/M+h/AfGuQXtOOuUnAAAAAElFTkSuQmCC')!important;}",
		"piece.bishop.white {", "background-image: url('data:image/png;base64,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')!important;}",
		"piece.knight.white {", "background-image: url('data:image/png;base64,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')!important;}",
		"piece.rook.white {", "background-image: url('data:image/png;base64,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')!important;}",
		"piece.queen.white {", "background-image: url('data:image/png;base64,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')!important;}",
		"piece.king.white {", "background-image: url('data:image/png;base64,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')!important;}",
		"piece.pawn.black {", "background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAMAAAAPdrEwAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAACBUExURQAAAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQICAgQDAwUFBAcGBQgHBwoKCQ0MDA8PDxMSEhYVFRoYFxwcHCEfHyYjISopKTIxMTk4OEFAQEtLS1VVVF9eXmdnZ3Fxb3x7fIWFhZCOjpubmqSkoq6ursjIxsbMGzEAAAALdFJOUwAAQk5YZnqRqsXjfgMg5gAAA/FJREFUWMPtmd1y6kgMhLtbssl5/6fdgNV7MWM7JIAN5tRWbYVU5QLD50Fq/ZrE33oJv+hf9C/6f4/OG+/55idDBOCabl69kYrIfehB7GjXeR869/22FEXSNuG4XF41yI/XmIzsh64qSp9vQp9SYwYBu1SePCX/eQt6zDiNEmCbZqEAjJ9vQA+pjzFEolyLi9PnrS/GVgHTGKdTpiSCAGiAhlneUMgmesjhNGREkKAB012h0wZ6KxolRogUSUIkQYIkpYOBHpI4H4rtX2MrDqJJEoBtu/uQANsNjimEIGEXOn+9YB4WH23YRbjdwT6Q+b5nKxdAwii7fCipfs+Dxe5C2/hi9INoNztYJoyC4f7mJj+3zeECVPONyu5yOYouu+jqUuvMzj+KrioS1VVso8plG1WH0S6ScssgTSS2XZvozfQEkmpmRscWbEyXw5nPUBPecuDm2nPhKBqGzFmGdjt+nSccR6Mgk+24rZOoOl+ONwstT3eTNIYBaIC3/PgQrSDJP4bU7DBrW2rNzkN8PgKHIjIzQMLV3QhbdhkBVNVUz6M1BJU5Zmtuyj1WbNOmy4Zkfj6PZhCU6AsJ9Jxn2+WWXGkAjBcM4ilYF5TY80eXnV215g9PD2LtbqeqCHEp5l16tmvNp1XT5RXxVU2ixGBK1cBzmcQxhQBVEJHJGNLT1I4s2+XpgkO6BlBAgIo0UK7lh3u7xd4xywgKASQXNxDSG9AhtQ7qmzTfUNFFStdKIol3nFpQSNf6IkAdRksM/VD/HmMLe7Kq5iZ1DbTNbnIPWhJ7d7rE6x5j7/iA5izy3VIH0SJvSA/gth83pwKy2eNra93+jp9aSxj6Wtk8hhbRvdiyLbHONVvDjDZV3e2xWIR7/aht6fVCcF0oSGxZRJv2WEvM2nHb3g7Ih1cjA016P5ppG4ghX8x8yhCHIVdzkL6ySkZcpufRihSGccg+7rLN0L2D70sApqZLPYmOITR+ZLZINEBZJbBcV12sdG9ddAedg8bTOGQP8dYeFIvmRIBmn2WMEM9PTAU5xMefcYj56hwp5BrovSIQFGr30iJS4/j1pp4nLoMU1fcW8yogY69BlCGxtTRcuhkv/K6TWS60Ytpra4Ioudr2oPW+taKXerA2D/I+NAm4Zjf18ajwZcxtY3T/xL2Qz7vjc/si3YdnzHD0IQzzmO47W9jE/e1rz9G9tS7jyiKbC4B8OPcTxGqZRSXfVjGvor3MA1i2fPS8IvIrp7Y92WSfoK+3FOwFx/fPfBddF02SlqGujwKeHbCE+fOn9jT1hsCg4f3LrH2dquHaR+HuKvOeZ5A3H0NMzz73qL3D3Ztev0+TftH/GfpfGeyQh38U8scAAAAASUVORK5CYII=')!important;}",
		"piece.knight.black {", "background-image: url('data:image/png;base64,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')!important;}",
		"piece.rook.black {", "background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAMAAAAPdrEwAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAB7UExURQAAAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQICAgMDAwQEBAYFBQgHBwkJCQwLCw4NDREPDxISEhYVFRkYFxwcHCAfHyUkJCsrKzIxMTk5OEJCQk9OTldXV2JiYmxrbHZ2doGAgI2NjJeXlaKiori4tkjKbaoAAAAKdFJOUwAARlhmepGqxeO/Oq5FAAAEl0lEQVRYw+1Z7Y7jNhAjKTm5Q9//Ya+xhv0hyZYTb2L7rkALrIBNNrZCj2Y4nyHxby3hG/ob+t3KT58NIE+Acccvzg8ASLfnbz1mtH11xSMAfoAGAJApZ0G/+uf0k3AEDAN4uG9jlQU8InVbKWdhXnf9ABC2gQBi7idUjhlu+Ed1zadjECBAgsMtK6fTZuQTdL9gjCLSvMYQ+6snPZn9z5CPz2hXoHn6xkGGNLO9CGfAww3aZ6HZjZfrezyfNdcTl3IemvU1r1TwSIt+3XNcU8j0V5C2zfsgnJmmRdg4LXX1kjxJdHXCjTqmKWAbjvNmrGCUBMK24YHm7FYd1HScfLYBosWjJ4/px/A7Vh90GVc8v7gMz0OLXgKGx8jmrcquSW13D9lC7rycNKMDTqHgakQDdjPq1q5noGN2ClkGm0YMR0c2+ttbwfOu1VwcpJRI2NGkrglsEdgf4t8u9JxqrrJFOqLjjTYd0cquv6cd/riAJFi9vCn7jfvNFZkHoIEwh71uTOHu+T2XwHFoOGp+NUysyDuby2M2zkDDpSdVdjf3G2WcgQbCtTwglwz8kn39eBjnoSsetUhN9hqkXyl/lzdJM7+LAaaZkuioQdt0JQ26AYQ4nQpEkYJSSol2RFTqVf0bAI2cwo6vEsKz+qrqkhJJ5TyJrB5pV9lXZ+++E1F2eb0HrZQETvmWuyXsqJCIiFjiU0ePUo4WwUngNCUsrlDlDKOLvnCmyoJyVNdB+mFRQC1NbVTkFga9dUuXw7qWJAFsiSKGfX5NOBGlHNV11QlJMUsSw2VMCMO+sCPiHK9LgZKgKecklxIlSqdHNwBQHhd4DSBS80A1acMBr1UIP9Q477yx+TUJ2SSXJmBRsxSXoFubwTWAyNGKYH/qFj5Do4ck1yqsuzn9ucZ5Uz3VHEa+fn9VN65Cs8ntrh6e6T7e13zsWQxjzO4G4HWFjHby0IYM1qOumFFcuqXug3yp9C5LrQ29aLg+jIdaPL2ntTY9wMplDke7CA0O7ndMDwegK62HPoB7lcglqYnthKJe8WhOvj31V7eU08LihR7dfGufBGWdI5+URKaURC6t1tLJccg1utWcexQ6ZyFNNyWJLTGCHtyHXBUjpditr3egNSWk+31S07UrqkIBMDrH10glaZ6PQKdJut2nPFSDCppQEHBVPbUWOTQ08fG5K9BN6eePnKUa+xr/2l9Ffh05MSE+Vaqaku63nFTTV+WIt/RdGwSu7NZLr5dfHs+sVvi20h0moFg1zLWqXLKNmeIDr1MP+jUu9156KJrYcya3YSp9NiMRvYRulLbDCHspsocZn/llU5p3m+jQUkfb9VF2K1dHNZzu0b2KbdjRStQ6VG3VL00PAdHHoFsLXkVryNGE78jYOs7RcS2XMcjYj9YJ1raY9KV4/TwXauOF4xPVL6AHDA9TyVeo0yVO7/mHjy+oXn2Sx6GN2rCEI8KOteUap6mfdZ2/Gg/VEUv7ZzkEx7l4Zzb3n7IDHUAUKlN1KOStd64jnGH85IPeWBtMSr2r8x/5Xeb5Cb+x/hc/VPlTS/qflPob+hv65PoHMiMJazYLGdgAAAAASUVORK5CYII=')!important;}",
		"piece.queen.black {", "background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAMAAAAPdrEwAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAB4UExURQAAAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQICAgMDAwUEBAYGBQgHBwkJCQ0NDREQEBQUFBgXFxwbGyIhISgnJy4uLTMzMzk5OEJBQU1NTVdYV2BeYGlpaXV0dIKCgIyMipiYmLCwrsrKxXZa00YAAAALdFJOUwAAQ05YZnqRqsXjaXg0pQAABq9JREFUWMPtWdt240gOA8AqOZme/f8fndnTsaqIfSjJuthOO5ndfWq/JEexIIgEUSRD4n/1EX5D/7+gCwDAzx9NOL9wfXy4QT8FLkG4t3zx+gPWTz5RA4Slub90/XT3J7pWLbj8eMsu2Kfrb39OmafrXwhIBN7/mNLZou9fXYH3P2vP5sj8nkLI8naJiArqmMJ4mxQRIL8tPglOg+DxdYteEO7nCumz2Fv6qE7DfWbr/j603X+mss0nCaev0dlbe5bFXysEVG/ZW6IfGVLN2Wajt08U8hm0Tbmn4WserxdmdqDN+d1qzDmLvH71eKeRref37SkHLZ4IFO7++F3nEwHx/C2Bb+Uk9i9Dk2ANME6pn6byeb28BB1ReA9d9F+ALqXo+DUhCsl/CA2wFh0jEsT0yuH0K9ZQCQnaQ4vDQ/4RaxElRB78iYggwF9JpOwE9eC0IyKoUFf0G2mUIMwHrEUYeYIuEUTv830WRTK61DejLQET9xKpEXDv7QBdqhg9hPkETRGSaG2vpxoGeAddK6mk0HbQCk3/ip9/ZTnawqBGSV3KlXQNmuQ5jyqMH5f5rxbpLY0M/nifaj0oYWENkBG3nImYCgzesQ7h7f1ymVY3LavG1PvsRwIhQGoHHXWVHnXMO4PZcn2bNY157W2e7wVSY0SVHhGRMBUaAOhzGt0+8no9ii87/y7Zjd7P2uOgE+0GXWPt5I7QvcfPns1Y8rVCC9fVRA9ZFEfIo42IiKXyeJpsxxo8J5A9uavGNg/BcIpDrNdMDQ2u8diB7bI4keEN6lbobW6AArqUg0AI2CAVEAEKRcDSPewlUi7iJG/IW6HnLKm2mRPauZfhiEgRxBjx4CkgZSIntP2ptnHMrhZT+YmJ8+2NpI2/CwBMwXHYj6/kVogXtsSu5HbR6onG6YdY62apWopujXp5i12rz63E9VbQkP2hqfaOnpr+2LCJ0K49BcCpcAn1rtJrJS/F7SjefY57Yk5ebtghFsI2RkEC4HiWD8+rlXqvaEfSR+iOuZkLb00VNbZGUgLGITCeRgCok1Ar4724zaeKOzQvLdQqdcG/s4ox2javGi5XIAQYw9kIgFUOlktxnxPZnnaq2fVRA7rgYy4AFDTWdpShnCpt2Lm1qAHUS7C3Dhwd+dhOOogIRJGQQExFsLFE2yhVhG0DzjFsUNMU7PNs5Ozn7WR2XSMCukT5uCKKdkeZyqLy5UmkAdWIYJ+bz6TPnWoLXQsDLJL6pQZy2D4IiiK8Yks0VSQxW+s4RfoOOrv6VSSgKbIW2mnYBg15xAkewhYUEjGQz6Tv+usWugpBkIV0ZuaSNcN2chtoKFGiM1vzPek76GyTf7qESBBOpzPTg6spEMToipdOJJeB+m6qvpsKesozYcJDBLadize7r4xH/EXD2Q0cC/ExdLYJmUDa3SalQXVEfAQmPQSIDq5OcL8KuJ9lespzyTQYIS2hGbGBASTSMOzssIdmHpB+AJ1dyJlS1JBuZ5gzObiGaYO2o9/K8sHE9GACMwCrTiGtdr3UyIjH8izSAHP4yaNlzaPhziSmt6B063699EtDhVgeAgrsfrIGesw66lssE4WH9RsAb7P6+JHjIEq/zNpmTAJFYMmSgXS2lh62TdDAsEXfbOW1WIsS4REOA57nNrcl5EWj8VneZDzixVjDqTQMSYQN9Pnj6tX2XEFw6MXmF2INwNcGGzHVwcyIqpxzeKm4JtbZ/XST95h1zt0ALpMNwmCo2L31XVcz1gJ+qr1H0AnkJQ2oam1JacJRMnMp9qVhUPRNLS+xRi0fTdPEIWKuBTLGjFWJAKjhWH45IGDVjIk2iZGo5dW5eMYQhhd9vA5tgjUyvL7piIKXWhwWOH4ZJuLXWbsHGcvtC8Ja4twort76FfEh+1Lfmfbmar5thwguHvClZZw9/N3O3j1qkgK2k3E09Hv6r7I2MpHOnl66X7tvQBxny46xv7BCbHJvvtG7y8UyQtlfDEga6Mto+fRWAyYDw67zKwExKH++bYNthdNfCogBMh9NhwexGBkFV7++rl2c5zxy3vx5t6lbjvvXoc1lglt7dJMIdJBOiDYBiySc+SSZD6HTY7T3OunSJEgZhE3apEEBQ/n5OnSrywlFet23cB26vI176dYAt9ehMS8LWoq3Mc48VgfRM7sBt/nZ+vFhNdVlhI7zssajx7HZR3eTD5D5GTQiYlnWiGsJem1Ttzuy944vQgMh6Rfr7czsT7fun0APdD7ZQab9BPc16GXdctx8ehwBn7kAz9uS3/8l/Q19//kPmmbdP4JqtKQAAAAASUVORK5CYII=')!important;}",
		"piece.king.black {", "background-image: url('data:image/png;base64,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')!important;}",
		"piece.bishop.black {", "background-image: url('data:image/png;base64,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')!important;}",
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
