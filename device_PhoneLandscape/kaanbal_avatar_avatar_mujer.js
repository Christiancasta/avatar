if (window.VarCurrentView) VarCurrentView.set('PhoneLandscape');
function init_PhoneLandscape() {
	if ( rcdObj.view != 'PhoneLandscape' ) return;
	if (!isOPAPub() || isLOPopup()) window.init_page();
	preload(rcdObj['preload_'+rcdObj.view]);
}
function defineFuncs_PhoneLandscape() {
	if ( rcdObj.view != 'PhoneLandscape' ) return;
	try{
		if (window.initGEV)
		{
		 initGEV(0,swipeLeft,swipeRight);

		}
		} catch(e) { if (window.console) window.console.log(e); }	pageClick = n;
	pageRClick = n;
	pageKey = n;
}
image23.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj23Img\" src=\"images/fondo_casa%402x-8.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 785px; height: 442px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 0px; top: 0px; width: 785px; height: 442px; z-index: 2; border-radius: 0px;",
	cssClasses:	"",
	id:		"23",
	htmlId:		"tobj23",
	bInsAnc:	0,
	cwObj:		{
		"name":	"fondo"
	},
	objData:	{"a":[0,32,0,[0,0,785,442]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":0,"width":1280,"height":720}}
};
image403.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj403Img\" src=\"images/titulo_2%402x-8.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 186px; height: 145px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 505px; top: 84px; width: 186px; height: 145px; z-index: 3; border-radius: 0px;",
	cssClasses:	"",
	id:		"403",
	htmlId:		"tobj403",
	bInsAnc:	0,
	cwObj:		{
		"name":	"titulo_2"
	},
	objData:	{"a":[0,32,0,[505,84,186,145]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":823,"y":137,"width":304,"height":236}}
};
image25.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj25Img\" src=\"images/footer%402x-8.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 785px; height: 91px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 0px; top: 418px; width: 785px; height: 91px; z-index: 4; border-radius: 0px;",
	cssClasses:	"",
	id:		"25",
	htmlId:		"tobj25",
	bInsAnc:	0,
	cwObj:		{
		"name":	"footer"
	},
	objData:	{"a":[0,288,0,[0,418,785,91]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":681,"width":1280,"height":148}}
};
textbutton32.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div id=\"tobj32inner\"><svg viewBox=\"0 0 55 59\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(27.5 29.5)\" style=\"\">\n	<path d=\"M 0 0 L 55 0 L 55 59 L 0 59 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-27.5, -29.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_2_297\" x=\"0.22499999999999998\" y=\"0.22499999999999998\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"30\" height=\"32\" xlink:href=\"images/cerrar%402x-8.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 55 0 L 55 59 L 0 59 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_2_297&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-27.5, -29.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(27.5 29.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 730px; top: 35px; width: 55px; height: 59px; z-index: 166; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"32",
	htmlId:		"tobj32",
	bInsAnc:	false,
	cwObj:		{
		"name":	"btnClose",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkExitClose',actItem:function(){ {cleanupTitle('kaanbal_avatar.html'); trivExitPage('ObjLayerActionExit()',false);} 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33120,0,[730,35.00000000000001,55,59]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1190,"y":57,"width":90,"height":97},"bTriggerScreenRdrOnShow":false,"svgDataNormal":"<g transform=\"translate(27.5 29.5)\" style=\"\">\n\t<path d=\"M 0 0 L 55 0 L 55 59 L 0 59 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-27.5, -29.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_2_297\" x=\"0.22499999999999998\" y=\"0.22499999999999998\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"30\" height=\"32\" xlink:href=\"images/cerrar%402x-8.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 55 0 L 55 59 L 0 59 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_2_297&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-27.5, -29.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(27.5 29.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(27.5 29.5)\" style=\"\">\n\t<path d=\"M 0 0 L 55 0 L 55 59 L 0 59 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-27.5, -29.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_2_299\" x=\"-0.07499999999999996\" y=\"-0.07499999999999996\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"63\" height=\"67\" xlink:href=\"images/cerrar_over%402x-8.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 55 0 L 55 59 L 0 59 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_2_299&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-27.5, -29.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(27.5 29.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(27.5 29.5)\" style=\"\">\n\t<path d=\"M 0 0 L 55 0 L 55 59 L 0 59 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-27.5, -29.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_2_301\" x=\"0.22499999999999998\" y=\"0.22499999999999998\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"30\" height=\"32\" xlink:href=\"images/cerrar%402x-8.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 55 0 L 55 59 L 0 59 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_2_301&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-27.5, -29.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(27.5 29.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(27.5 29.5)\" style=\"\">\n\t<path d=\"M 0 0 L 55 0 L 55 59 L 0 59 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-27.5, -29.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_2_303\" x=\"0.22499999999999998\" y=\"0.22499999999999998\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"30\" height=\"32\" xlink:href=\"images/cerrar%402x-8.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 55 0 L 55 59 L 0 59 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_2_303&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-27.5, -29.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(27.5 29.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled"}
};
textbutton34.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div id=\"tobj34inner\"><svg viewBox=\"0 0 66 68\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(33 34)\" style=\"\">\n	<path d=\"M 0 0 L 66 0 L 66 68 L 0 68 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-33, -34) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_2_305\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"66\" height=\"68\" xlink:href=\"images/check%402x-8%20copia.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 66 0 L 66 68 L 0 68 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_2_305&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-33, -34) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(33 34)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 726px; top: 119px; width: 66px; height: 68px; z-index: 167; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"34",
	htmlId:		"tobj34",
	bInsAnc:	false,
	cwObj:		{
		"name":	"btnOk",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og2081.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ textbutton34.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ textbutton32.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ textbutton38.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og69.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og54.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og129.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og401.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og457.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og481.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og498.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og513.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og524.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og390.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og456.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og480.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og2602.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33120,0,[726,119,66,68]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1184,"y":194,"width":107,"height":111},"bTriggerScreenRdrOnShow":false,"svgDataNormal":"<g transform=\"translate(33 34)\" style=\"\">\n\t<path d=\"M 0 0 L 66 0 L 66 68 L 0 68 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-33, -34) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_2_305\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"66\" height=\"68\" xlink:href=\"images/check%402x-8%20copia.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 66 0 L 66 68 L 0 68 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_2_305&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-33, -34) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(33 34)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(33 34)\" style=\"\">\n\t<path d=\"M 0 0 L 66 0 L 66 68 L 0 68 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-33, -34) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_2_307\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"66\" height=\"68\" xlink:href=\"images/check_over%402x-8.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 66 0 L 66 68 L 0 68 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_2_307&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-33, -34) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(33 34)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(33 34)\" style=\"\">\n\t<path d=\"M 0 0 L 66 0 L 66 68 L 0 68 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-33, -34) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_2_309\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"66\" height=\"68\" xlink:href=\"images/check%402x-8%20copia.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 66 0 L 66 68 L 0 68 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_2_309&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-33, -34) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(33 34)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(33 34)\" style=\"\">\n\t<path d=\"M 0 0 L 66 0 L 66 68 L 0 68 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-33, -34) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_2_311\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"66\" height=\"68\" xlink:href=\"images/check%402x-8%20copia.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 66 0 L 66 68 L 0 68 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_2_311&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-33, -34) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(33 34)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled"}
};
textbutton38.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div id=\"tobj38inner\"><svg viewBox=\"0 0 50 55\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(25 27.5)\" style=\"\">\n	<path d=\"M 0 0 L 50 0 L 50 55 L 0 55 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-25, -27.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_2_313\" x=\"0.22499999999999998\" y=\"0.22499999999999998\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"27\" height=\"30\" xlink:href=\"images/reiniciar%402x-8.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 50 0 L 50 55 L 0 55 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_2_313&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-25, -27.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(25 27.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 732px; top: 80px; width: 50px; height: 55px; z-index: 168; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"38",
	htmlId:		"tobj38",
	bInsAnc:	false,
	cwObj:		{
		"name":	"btnReload",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkResetVars',actItem:function(){ ResetVars(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og542.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og543.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og544.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og545.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og705.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og706.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og707.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og708.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og709.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og885.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og886.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og887.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og948.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og949.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og950.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og951.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1032.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1033.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1034.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1118.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1119.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1120.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1300.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33120,0,[732,80,50,55]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1193,"y":131,"width":82,"height":90},"bTriggerScreenRdrOnShow":false,"svgDataNormal":"<g transform=\"translate(25 27.5)\" style=\"\">\n\t<path d=\"M 0 0 L 50 0 L 50 55 L 0 55 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-25, -27.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_2_313\" x=\"0.22499999999999998\" y=\"0.22499999999999998\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"27\" height=\"30\" xlink:href=\"images/reiniciar%402x-8.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 50 0 L 50 55 L 0 55 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_2_313&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-25, -27.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(25 27.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(25 27.5)\" style=\"\">\n\t<path d=\"M 0 0 L 50 0 L 50 55 L 0 55 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-25, -27.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_2_315\" x=\"-0.07499999999999996\" y=\"-0.07499999999999996\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"57\" height=\"63\" xlink:href=\"images/reiniciar_over%402x-8.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 50 0 L 50 55 L 0 55 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_2_315&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-25, -27.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(25 27.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(25 27.5)\" style=\"\">\n\t<path d=\"M 0 0 L 50 0 L 50 55 L 0 55 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-25, -27.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_2_317\" x=\"0.22499999999999998\" y=\"0.22499999999999998\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"27\" height=\"30\" xlink:href=\"images/reiniciar%402x-8.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 50 0 L 50 55 L 0 55 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_2_317&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-25, -27.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(25 27.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(25 27.5)\" style=\"\">\n\t<path d=\"M 0 0 L 50 0 L 50 55 L 0 55 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-25, -27.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_2_319\" x=\"0.22499999999999998\" y=\"0.22499999999999998\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"27\" height=\"30\" xlink:href=\"images/reiniciar%402x-8.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 50 0 L 50 55 L 0 55 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_2_319&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-25, -27.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(25 27.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled"}
};
og2081.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og2081",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
textbutton2082.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<div id=\"tobj2082inner\"><svg viewBox=\"0 0 55 59\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(27.5 29.5)\" style=\"\">\n	<path d=\"M 0 0 L 55 0 L 55 59 L 0 59 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-27.5, -29.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_2_321\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"55\" height=\"59\" xlink:href=\"images/descargar_pasivo%402x-8.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 55 0 L 55 59 L 0 59 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_2_321&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-27.5, -29.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(27.5 29.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: hidden; position: absolute; left: 711px; top: 85px; width: 55px; height: 59px; z-index: 169; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"2082",
	htmlId:		"tobj2082",
	bInsAnc:	false,
	cwObj:		{
		"name":	"btnDescargar",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ textbutton2082.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og69.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og54.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:300,name:'OnMClkRunJS',actItem:function(){ runJS2086();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33088,0,[711,85,55,59]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1160,"y":139,"width":90,"height":97},"bTriggerScreenRdrOnShow":false,"svgDataNormal":"<g transform=\"translate(27.5 29.5)\" style=\"\">\n\t<path d=\"M 0 0 L 55 0 L 55 59 L 0 59 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-27.5, -29.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_2_321\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"55\" height=\"59\" xlink:href=\"images/descargar_pasivo%402x-8.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 55 0 L 55 59 L 0 59 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_2_321&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-27.5, -29.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(27.5 29.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(27.5 29.5)\" style=\"\">\n\t<path d=\"M 0 0 L 55 0 L 55 59 L 0 59 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-27.5, -29.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_2_323\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"55\" height=\"59\" xlink:href=\"images/descargar_over%402x-8.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 55 0 L 55 59 L 0 59 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_2_323&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-27.5, -29.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(27.5 29.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(27.5 29.5)\" style=\"\">\n\t<path d=\"M 0 0 L 55 0 L 55 59 L 0 59 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-27.5, -29.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_2_325\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"55\" height=\"59\" xlink:href=\"images/descargar_pasivo%402x-8.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 55 0 L 55 59 L 0 59 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_2_325&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-27.5, -29.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(27.5 29.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(27.5 29.5)\" style=\"\">\n\t<path d=\"M 0 0 L 55 0 L 55 59 L 0 59 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-27.5, -29.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_2_327\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"55\" height=\"59\" xlink:href=\"images/descargar_pasivo%402x-8.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 55 0 L 55 59 L 0 59 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_2_327&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-27.5, -29.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(27.5 29.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled"}
};
image2087.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj2087Img\" src=\"images/escenario_festival%402x-8.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 785px; height: 442px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 0px; top: 0px; width: 785px; height: 442px; z-index: 5; border-radius: 0px;",
	cssClasses:	"",
	id:		"2087",
	htmlId:		"tobj2087",
	bInsAnc:	0,
	cwObj:		{
		"name":	"escenario_festival@2x-8"
	},
	objData:	{"a":[0,0,0,[0,0,785,442]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":0,"width":1280,"height":720}}
};
og542.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og542",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
image526.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj526Img\" src=\"images/M1-tono_1.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 63px; height: 286px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 386px; top: 121px; width: 63px; height: 286px; z-index: 6; border-radius: 0px;",
	cssClasses:	"",
	id:		"526",
	htmlId:		"tobj526",
	bInsAnc:	0,
	cwObj:		{
		"name":	"M1-tono_1"
	},
	objData:	{"a":[0,256,0,[386,121,63,286]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":630,"y":197,"width":103,"height":466}}
};
image540.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj540Img\" src=\"images/M1-brazo_4.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 17px; height: 105px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 377px; top: 174px; width: 17px; height: 105px; z-index: 7; border-radius: 0px;",
	cssClasses:	"",
	id:		"540",
	htmlId:		"tobj540",
	bInsAnc:	0,
	cwObj:		{
		"name":	"M1-brazo_1"
	},
	objData:	{"a":[0,256,0,[377,174,17,105]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":614,"y":284,"width":28,"height":171}}
};
og543.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og543",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
image528.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj528Img\" src=\"images/M1-tono_2.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 63px; height: 286px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 386px; top: 121px; width: 63px; height: 286px; z-index: 8; border-radius: 0px;",
	cssClasses:	"",
	id:		"528",
	htmlId:		"tobj528",
	bInsAnc:	0,
	cwObj:		{
		"name":	"M1-tono_2"
	},
	objData:	{"a":[0,256,0,[386,121,63,286]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":630,"y":197,"width":103,"height":466}}
};
image538.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj538Img\" src=\"images/M1-brazo_3.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 17px; height: 105px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 377px; top: 174px; width: 17px; height: 105px; z-index: 9; border-radius: 0px;",
	cssClasses:	"",
	id:		"538",
	htmlId:		"tobj538",
	bInsAnc:	0,
	cwObj:		{
		"name":	"M1-brazo_2"
	},
	objData:	{"a":[0,256,0,[377,174,17,105]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":614,"y":284,"width":28,"height":171}}
};
og544.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og544",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
image530.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj530Img\" src=\"images/M1-tono_3.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 63px; height: 286px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 386px; top: 121px; width: 63px; height: 286px; z-index: 10; border-radius: 0px;",
	cssClasses:	"",
	id:		"530",
	htmlId:		"tobj530",
	bInsAnc:	0,
	cwObj:		{
		"name":	"M1-tono_3"
	},
	objData:	{"a":[0,256,0,[386,121,63,286]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":630,"y":197,"width":103,"height":466}}
};
image536.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj536Img\" src=\"images/M1-brazo_2.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 17px; height: 105px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 377px; top: 174px; width: 17px; height: 105px; z-index: 11; border-radius: 0px;",
	cssClasses:	"",
	id:		"536",
	htmlId:		"tobj536",
	bInsAnc:	0,
	cwObj:		{
		"name":	"M1-brazo_3"
	},
	objData:	{"a":[0,256,0,[377,174,17,105]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":614,"y":284,"width":28,"height":171}}
};
og545.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og545",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
image532.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj532Img\" src=\"images/M1-tono_4.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 63px; height: 286px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 386px; top: 121px; width: 63px; height: 286px; z-index: 12; border-radius: 0px;",
	cssClasses:	"",
	id:		"532",
	htmlId:		"tobj532",
	bInsAnc:	0,
	cwObj:		{
		"name":	"M1-tono_4"
	},
	objData:	{"a":[0,256,0,[386,121,63,286]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":630,"y":197,"width":103,"height":466}}
};
image534.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj534Img\" src=\"images/M1-brazo_1.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 17px; height: 105px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 377px; top: 174px; width: 17px; height: 105px; z-index: 13; border-radius: 0px;",
	cssClasses:	"",
	id:		"534",
	htmlId:		"tobj534",
	bInsAnc:	0,
	cwObj:		{
		"name":	"M1-brazo_4"
	},
	objData:	{"a":[0,256,0,[377,174,17,105]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":614,"y":284,"width":28,"height":171}}
};
og1119.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og1119",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
image1103.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj1103Img\" src=\"images/M1-brazo_kaanbal_tono_1.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 48px; height: 50px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 346px; top: 175px; width: 48px; height: 50px; z-index: 14; border-radius: 0px;",
	cssClasses:	"",
	id:		"1103",
	htmlId:		"tobj1103",
	bInsAnc:	0,
	cwObj:		{
		"name":	"M1-brazo_kaanbal_tono_1"
	},
	objData:	{"a":[0,256,0,[346,175,48,50]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":564,"y":285,"width":78,"height":82}}
};
image1105.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj1105Img\" src=\"images/M1-brazo_kaanbal_tono_2.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 48px; height: 50px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 346px; top: 175px; width: 48px; height: 50px; z-index: 15; border-radius: 0px;",
	cssClasses:	"",
	id:		"1105",
	htmlId:		"tobj1105",
	bInsAnc:	0,
	cwObj:		{
		"name":	"M1-brazo_kaanbal_tono_2"
	},
	objData:	{"a":[0,256,0,[346,175,48,50]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":564,"y":285,"width":78,"height":82}}
};
image1107.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj1107Img\" src=\"images/M1-brazo_kaanbal_tono_3.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 48px; height: 50px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 346px; top: 175px; width: 48px; height: 50px; z-index: 16; border-radius: 0px;",
	cssClasses:	"",
	id:		"1107",
	htmlId:		"tobj1107",
	bInsAnc:	0,
	cwObj:		{
		"name":	"M1-brazo_kaanbal_tono_3"
	},
	objData:	{"a":[0,256,0,[346,175,48,50]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":564,"y":285,"width":78,"height":82}}
};
image1109.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj1109Img\" src=\"images/M1-brazo_kaanbal_tono_4.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 48px; height: 50px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 346px; top: 175px; width: 48px; height: 50px; z-index: 17; border-radius: 0px;",
	cssClasses:	"",
	id:		"1109",
	htmlId:		"tobj1109",
	bInsAnc:	0,
	cwObj:		{
		"name":	"M1-brazo_kaanbal_tono_4"
	},
	objData:	{"a":[0,256,0,[346,175,48,50]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":564,"y":285,"width":78,"height":82}}
};
og1120.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og1120",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
image1111.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj1111Img\" src=\"images/M1-brazo_tono_1.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 48px; height: 50px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 346px; top: 175px; width: 48px; height: 50px; z-index: 18; border-radius: 0px;",
	cssClasses:	"",
	id:		"1111",
	htmlId:		"tobj1111",
	bInsAnc:	0,
	cwObj:		{
		"name":	"M1-brazo_tono_1"
	},
	objData:	{"a":[0,256,0,[346,175,48,50]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":564,"y":285,"width":78,"height":82}}
};
image1113.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj1113Img\" src=\"images/M1-brazo_tono_2.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 48px; height: 50px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 346px; top: 175px; width: 48px; height: 50px; z-index: 19; border-radius: 0px;",
	cssClasses:	"",
	id:		"1113",
	htmlId:		"tobj1113",
	bInsAnc:	0,
	cwObj:		{
		"name":	"M1-brazo_tono_2"
	},
	objData:	{"a":[0,256,0,[346,175,48,50]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":564,"y":285,"width":78,"height":82}}
};
image1115.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj1115Img\" src=\"images/M1-brazo_tono_3.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 48px; height: 50px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 346px; top: 175px; width: 48px; height: 50px; z-index: 20; border-radius: 0px;",
	cssClasses:	"",
	id:		"1115",
	htmlId:		"tobj1115",
	bInsAnc:	0,
	cwObj:		{
		"name":	"M1-brazo_tono_3"
	},
	objData:	{"a":[0,256,0,[346,175,48,50]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":564,"y":285,"width":78,"height":82}}
};
image1117.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj1117Img\" src=\"images/M1-brazo_tono_4.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 48px; height: 50px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 346px; top: 175px; width: 48px; height: 50px; z-index: 21; border-radius: 0px;",
	cssClasses:	"",
	id:		"1117",
	htmlId:		"tobj1117",
	bInsAnc:	0,
	cwObj:		{
		"name":	"M1-brazo_tono_4"
	},
	objData:	{"a":[0,256,0,[346,175,48,50]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":564,"y":285,"width":78,"height":82}}
};
og885.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og885",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
image868.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj868Img\" src=\"images/M3-ojos_1_color_1.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 16px; height: 9px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 402px; top: 135px; width: 16px; height: 9px; z-index: 22; border-radius: 0px;",
	cssClasses:	"",
	id:		"868",
	htmlId:		"tobj868",
	bInsAnc:	0,
	cwObj:		{
		"name":	"M3-ojos_1_color_1"
	},
	objData:	{"a":[0,256,0,[402,135,16,9]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":655,"y":220,"width":26,"height":15}}
};
image870.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj870Img\" src=\"images/M3-ojos_1_color_2.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 16px; height: 9px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 402px; top: 135px; width: 16px; height: 9px; z-index: 23; border-radius: 0px;",
	cssClasses:	"",
	id:		"870",
	htmlId:		"tobj870",
	bInsAnc:	0,
	cwObj:		{
		"name":	"M3-ojos_1_color_2"
	},
	objData:	{"a":[0,256,0,[402,135,16,9]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":655,"y":220,"width":26,"height":15}}
};
image872.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj872Img\" src=\"images/M3-ojos_1_color_3.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 16px; height: 9px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 402px; top: 135px; width: 16px; height: 9px; z-index: 24; border-radius: 0px;",
	cssClasses:	"",
	id:		"872",
	htmlId:		"tobj872",
	bInsAnc:	0,
	cwObj:		{
		"name":	"M3-ojos_1_color_3"
	},
	objData:	{"a":[0,256,0,[402,135,16,9]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":655,"y":220,"width":26,"height":15}}
};
og886.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og886",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
image874.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj874Img\" src=\"images/M3-ojos_2_color_1.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 21px; height: 8px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 399px; top: 135px; width: 21px; height: 8px; z-index: 25; border-radius: 0px;",
	cssClasses:	"",
	id:		"874",
	htmlId:		"tobj874",
	bInsAnc:	0,
	cwObj:		{
		"name":	"M3-ojos_2_color_1"
	},
	objData:	{"a":[0,256,0,[399,135,21,8]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":651,"y":220,"width":34,"height":13}}
};
image876.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj876Img\" src=\"images/M3-ojos_2_color_2.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 21px; height: 8px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 399px; top: 135px; width: 21px; height: 8px; z-index: 26; border-radius: 0px;",
	cssClasses:	"",
	id:		"876",
	htmlId:		"tobj876",
	bInsAnc:	0,
	cwObj:		{
		"name":	"M3-ojos_2_color_2"
	},
	objData:	{"a":[0,256,0,[399,135,21,8]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":651,"y":220,"width":34,"height":13}}
};
image878.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj878Img\" src=\"images/M3-ojos_2_color_3.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 21px; height: 8px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 399px; top: 135px; width: 21px; height: 8px; z-index: 27; border-radius: 0px;",
	cssClasses:	"",
	id:		"878",
	htmlId:		"tobj878",
	bInsAnc:	0,
	cwObj:		{
		"name":	"M3-ojos_2_color_3"
	},
	objData:	{"a":[0,256,0,[399,135,21,8]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":651,"y":220,"width":34,"height":13}}
};
og887.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og887",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
image880.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj880Img\" src=\"images/M3-ojos_3_color_1.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 18px; height: 6px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 400px; top: 136px; width: 18px; height: 6px; z-index: 28; border-radius: 0px;",
	cssClasses:	"",
	id:		"880",
	htmlId:		"tobj880",
	bInsAnc:	0,
	cwObj:		{
		"name":	"M3-ojos_3_color_1"
	},
	objData:	{"a":[0,256,0,[400,136,18,6]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":652,"y":222,"width":30,"height":9}}
};
image882.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj882Img\" src=\"images/M3-ojos_3_color_2.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 18px; height: 6px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 400px; top: 136px; width: 18px; height: 6px; z-index: 29; border-radius: 0px;",
	cssClasses:	"",
	id:		"882",
	htmlId:		"tobj882",
	bInsAnc:	0,
	cwObj:		{
		"name":	"M3-ojos_3_color_2"
	},
	objData:	{"a":[0,256,0,[400,136,18,6]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":652,"y":222,"width":30,"height":9}}
};
image884.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj884Img\" src=\"images/M3-ojos_3_color_3.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 18px; height: 6px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 400px; top: 136px; width: 18px; height: 6px; z-index: 30; border-radius: 0px;",
	cssClasses:	"",
	id:		"884",
	htmlId:		"tobj884",
	bInsAnc:	0,
	cwObj:		{
		"name":	"M3-ojos_3_color_3"
	},
	objData:	{"a":[0,256,0,[400,136,18,6]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":652,"y":222,"width":30,"height":9}}
};
og1032.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og1032",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
image1019.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj1019Img\" src=\"images/M5-jeans_1_1.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 56px; height: 158px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 385px; top: 228px; width: 56px; height: 158px; z-index: 31; border-radius: 0px;",
	cssClasses:	"",
	id:		"1019",
	htmlId:		"tobj1019",
	bInsAnc:	0,
	cwObj:		{
		"name":	"M5-jeans_1"
	},
	objData:	{"a":[0,256,0,[385,228,56,158]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":628,"y":371,"width":91,"height":258}}
};
image1021.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj1021Img\" src=\"images/M5-jeans_2.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 53px; height: 166px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 387px; top: 224px; width: 53px; height: 166px; z-index: 32; border-radius: 0px;",
	cssClasses:	"",
	id:		"1021",
	htmlId:		"tobj1021",
	bInsAnc:	0,
	cwObj:		{
		"name":	"M5-jeans_2"
	},
	objData:	{"a":[0,256,0,[387,224,53,166]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":631,"y":366,"width":86,"height":270}}
};
og1033.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og1033",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
image1023.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj1023Img\" src=\"images/M5-playera_1_1.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 59px; height: 52px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 383px; top: 168px; width: 59px; height: 52px; z-index: 33; border-radius: 0px;",
	cssClasses:	"",
	id:		"1023",
	htmlId:		"tobj1023",
	bInsAnc:	0,
	cwObj:		{
		"name":	"M5-playera_1"
	},
	objData:	{"a":[0,256,0,[383,168,59,52]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":624,"y":274,"width":96,"height":84}}
};
image1025.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj1025Img\" src=\"images/M5-playera_2_1.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 59px; height: 52px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 383px; top: 168px; width: 59px; height: 52px; z-index: 34; border-radius: 0px;",
	cssClasses:	"",
	id:		"1025",
	htmlId:		"tobj1025",
	bInsAnc:	0,
	cwObj:		{
		"name":	"M5-playera_2"
	},
	objData:	{"a":[0,256,0,[383,168,59,52]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":624,"y":274,"width":96,"height":85}}
};
image1027.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj1027Img\" src=\"images/M5-playera_3_1.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 59px; height: 52px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 383px; top: 168px; width: 59px; height: 52px; z-index: 35; border-radius: 0px;",
	cssClasses:	"",
	id:		"1027",
	htmlId:		"tobj1027",
	bInsAnc:	0,
	cwObj:		{
		"name":	"M5-playera_3"
	},
	objData:	{"a":[0,256,0,[383,168,59,52]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":624,"y":274,"width":96,"height":84}}
};
og1034.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og1034",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
image1029.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj1029Img\" src=\"images/M5-vestido_1.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 55px; height: 129px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 386px; top: 172px; width: 55px; height: 129px; z-index: 36; border-radius: 0px;",
	cssClasses:	"",
	id:		"1029",
	htmlId:		"tobj1029",
	bInsAnc:	0,
	cwObj:		{
		"name":	"M5-vestido_1"
	},
	objData:	{"a":[0,256,0,[386,172,55,129]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":629,"y":280,"width":89,"height":211}}
};
image1031.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj1031Img\" src=\"images/M5-vestido_2.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 64px; height: 139px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 381px; top: 167px; width: 64px; height: 139px; z-index: 37; border-radius: 0px;",
	cssClasses:	"",
	id:		"1031",
	htmlId:		"tobj1031",
	bInsAnc:	0,
	cwObj:		{
		"name":	"M5-vestido_2"
	},
	objData:	{"a":[0,256,0,[381,167,64,139]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":621,"y":273,"width":104,"height":226}}
};
og1118.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og1118",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
image1095.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj1095Img\" src=\"images/M6-bolsa.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 38px; height: 116px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 385px; top: 162px; width: 38px; height: 116px; z-index: 38; border-radius: 0px;",
	cssClasses:	"",
	id:		"1095",
	htmlId:		"tobj1095",
	bInsAnc:	0,
	cwObj:		{
		"name":	"M6-bolsa"
	},
	objData:	{"a":[0,256,0,[385,162,38,116]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":628,"y":264,"width":62,"height":189}}
};
image1097.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj1097Img\" src=\"images/M6-lentes_armazon_1.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 28px; height: 8px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 396px; top: 137px; width: 28px; height: 8px; z-index: 39; border-radius: 0px;",
	cssClasses:	"",
	id:		"1097",
	htmlId:		"tobj1097",
	bInsAnc:	0,
	cwObj:		{
		"name":	"M6-lentes_1"
	},
	objData:	{"a":[0,256,0,[396,137,28,8]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":646,"y":223,"width":45,"height":13}}
};
image1099.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj1099Img\" src=\"images/M6-lentes_sol_1.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 28px; height: 9px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 396px; top: 137px; width: 28px; height: 9px; z-index: 40; border-radius: 0px;",
	cssClasses:	"",
	id:		"1099",
	htmlId:		"tobj1099",
	bInsAnc:	0,
	cwObj:		{
		"name":	"M6-lentes_2"
	},
	objData:	{"a":[0,256,0,[396,137,28,9]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":646,"y":223,"width":45,"height":14}}
};
image1101.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj1101Img\" src=\"images/M6-sombrero.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 39px; height: 23px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 390px; top: 114px; width: 39px; height: 23px; z-index: 41; border-radius: 0px;",
	cssClasses:	"",
	id:		"1101",
	htmlId:		"tobj1101",
	bInsAnc:	0,
	cwObj:		{
		"name":	"M6-sombrero"
	},
	objData:	{"a":[0,256,0,[390,114,39,23]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":636,"y":186,"width":64,"height":38}}
};
og705.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og705",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
image656.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj656Img\" src=\"images/M2-cabello_1_color_1.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 49px; height: 80px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 386px; top: 113px; width: 49px; height: 80px; z-index: 42; border-radius: 0px;",
	cssClasses:	"",
	id:		"656",
	htmlId:		"tobj656",
	bInsAnc:	0,
	cwObj:		{
		"name":	"M2-cabello_1_color_1"
	},
	objData:	{"a":[0,256,0,[386,113,49,80]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":629,"y":185,"width":80,"height":131}}
};
image658.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj658Img\" src=\"images/M2-cabello_1_color_2.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 49px; height: 80px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 386px; top: 113px; width: 49px; height: 80px; z-index: 43; border-radius: 0px;",
	cssClasses:	"",
	id:		"658",
	htmlId:		"tobj658",
	bInsAnc:	0,
	cwObj:		{
		"name":	"M2-cabello_1_color_2"
	},
	objData:	{"a":[0,256,0,[386,113,49,80]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":629,"y":185,"width":80,"height":131}}
};
image660.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj660Img\" src=\"images/M2-cabello_1_color_3.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 49px; height: 80px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 386px; top: 113px; width: 49px; height: 80px; z-index: 44; border-radius: 0px;",
	cssClasses:	"",
	id:		"660",
	htmlId:		"tobj660",
	bInsAnc:	0,
	cwObj:		{
		"name":	"M2-cabello_1_color_3"
	},
	objData:	{"a":[0,256,0,[386,113,49,80]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":629,"y":185,"width":80,"height":131}}
};
image662.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj662Img\" src=\"images/M2-cabello_1_color_4.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 49px; height: 80px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 386px; top: 113px; width: 49px; height: 80px; z-index: 45; border-radius: 0px;",
	cssClasses:	"",
	id:		"662",
	htmlId:		"tobj662",
	bInsAnc:	0,
	cwObj:		{
		"name":	"M2-cabello_1_color_4"
	},
	objData:	{"a":[0,256,0,[386,113,49,80]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":629,"y":185,"width":80,"height":131}}
};
image664.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj664Img\" src=\"images/M2-cabello_1_color_5.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 49px; height: 80px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 386px; top: 113px; width: 49px; height: 80px; z-index: 46; border-radius: 0px;",
	cssClasses:	"",
	id:		"664",
	htmlId:		"tobj664",
	bInsAnc:	0,
	cwObj:		{
		"name":	"M2-cabello_1_color_5"
	},
	objData:	{"a":[0,256,0,[386,113,49,80]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":629,"y":185,"width":80,"height":131}}
};
og706.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og706",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
image666.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj666Img\" src=\"images/M2-cabello_2_color_1.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 36px; height: 50px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 394px; top: 120px; width: 36px; height: 50px; z-index: 47; border-radius: 0px;",
	cssClasses:	"",
	id:		"666",
	htmlId:		"tobj666",
	bInsAnc:	0,
	cwObj:		{
		"name":	"M2-cabello_2_color_1"
	},
	objData:	{"a":[0,256,0,[394,120,36,50]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":642,"y":196,"width":58,"height":81}}
};
image668.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj668Img\" src=\"images/M2-cabello_2_color_2.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 36px; height: 50px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 394px; top: 120px; width: 36px; height: 50px; z-index: 48; border-radius: 0px;",
	cssClasses:	"",
	id:		"668",
	htmlId:		"tobj668",
	bInsAnc:	0,
	cwObj:		{
		"name":	"M2-cabello_2_color_2"
	},
	objData:	{"a":[0,256,0,[394,120,36,50]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":642,"y":196,"width":58,"height":81}}
};
image670.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj670Img\" src=\"images/M2-cabello_2_color_3.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 36px; height: 50px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 394px; top: 120px; width: 36px; height: 50px; z-index: 49; border-radius: 0px;",
	cssClasses:	"",
	id:		"670",
	htmlId:		"tobj670",
	bInsAnc:	0,
	cwObj:		{
		"name":	"M2-cabello_2_color_3"
	},
	objData:	{"a":[0,256,0,[394,120,36,50]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":642,"y":196,"width":58,"height":81}}
};
image672.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj672Img\" src=\"images/M2-cabello_2_color_4.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 36px; height: 50px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 394px; top: 120px; width: 36px; height: 50px; z-index: 50; border-radius: 0px;",
	cssClasses:	"",
	id:		"672",
	htmlId:		"tobj672",
	bInsAnc:	0,
	cwObj:		{
		"name":	"M2-cabello_2_color_4"
	},
	objData:	{"a":[0,256,0,[394,120,36,50]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":642,"y":196,"width":58,"height":81}}
};
image674.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj674Img\" src=\"images/M2-cabello_2_color_5.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 36px; height: 50px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 394px; top: 120px; width: 36px; height: 50px; z-index: 51; border-radius: 0px;",
	cssClasses:	"",
	id:		"674",
	htmlId:		"tobj674",
	bInsAnc:	0,
	cwObj:		{
		"name":	"M2-cabello_2_color_5"
	},
	objData:	{"a":[0,256,0,[394,120,36,50]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":642,"y":196,"width":58,"height":81}}
};
og707.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og707",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
image676.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj676Img\" src=\"images/M2-cabello_3_color_1.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 55px; height: 88px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 383px; top: 111px; width: 55px; height: 88px; z-index: 52; border-radius: 0px;",
	cssClasses:	"",
	id:		"676",
	htmlId:		"tobj676",
	bInsAnc:	0,
	cwObj:		{
		"name":	"M2-cabello_3_color_1"
	},
	objData:	{"a":[0,256,0,[383,111,55,88]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":624,"y":181,"width":90,"height":144}}
};
image678.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj678Img\" src=\"images/M2-cabello_3_color_2.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 55px; height: 88px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 383px; top: 111px; width: 55px; height: 88px; z-index: 53; border-radius: 0px;",
	cssClasses:	"",
	id:		"678",
	htmlId:		"tobj678",
	bInsAnc:	0,
	cwObj:		{
		"name":	"M2-cabello_3_color_2"
	},
	objData:	{"a":[0,256,0,[383,111,55,88]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":624,"y":181,"width":90,"height":144}}
};
image682.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj682Img\" src=\"images/M2-cabello_3_color_4.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 55px; height: 88px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 383px; top: 111px; width: 55px; height: 88px; z-index: 54; border-radius: 0px;",
	cssClasses:	"",
	id:		"682",
	htmlId:		"tobj682",
	bInsAnc:	0,
	cwObj:		{
		"name":	"M2-cabello_3_color_4"
	},
	objData:	{"a":[0,256,0,[383,111,55,88]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":624,"y":181,"width":90,"height":144}}
};
image680.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj680Img\" src=\"images/M2-cabello_3_color_3.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 55px; height: 88px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 383px; top: 111px; width: 55px; height: 88px; z-index: 55; border-radius: 0px;",
	cssClasses:	"",
	id:		"680",
	htmlId:		"tobj680",
	bInsAnc:	0,
	cwObj:		{
		"name":	"M2-cabello_3_color_3"
	},
	objData:	{"a":[0,256,0,[383,111,55,88]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":624,"y":181,"width":90,"height":144}}
};
image684.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj684Img\" src=\"images/M2-cabello_3_color_5.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 55px; height: 88px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 383px; top: 111px; width: 55px; height: 88px; z-index: 56; border-radius: 0px;",
	cssClasses:	"",
	id:		"684",
	htmlId:		"tobj684",
	bInsAnc:	0,
	cwObj:		{
		"name":	"M2-cabello_3_color_5"
	},
	objData:	{"a":[0,256,0,[383,111,55,88]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":624,"y":181,"width":90,"height":144}}
};
og708.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og708",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
image686.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj686Img\" src=\"images/M2-cabello_4_color_1.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 44px; height: 90px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 384px; top: 117px; width: 44px; height: 90px; z-index: 57; border-radius: 0px;",
	cssClasses:	"",
	id:		"686",
	htmlId:		"tobj686",
	bInsAnc:	0,
	cwObj:		{
		"name":	"M2-cabello_4_color_1"
	},
	objData:	{"a":[0,256,0,[384,117,44,90]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":626,"y":191,"width":71,"height":146}}
};
image688.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj688Img\" src=\"images/M2-cabello_4_color_2.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 44px; height: 90px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 384px; top: 117px; width: 44px; height: 90px; z-index: 58; border-radius: 0px;",
	cssClasses:	"",
	id:		"688",
	htmlId:		"tobj688",
	bInsAnc:	0,
	cwObj:		{
		"name":	"M2-cabello_4_color_2"
	},
	objData:	{"a":[0,256,0,[384,117,44,90]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":626,"y":191,"width":71,"height":146}}
};
image690.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj690Img\" src=\"images/M2-cabello_4_color_3.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 44px; height: 90px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 384px; top: 117px; width: 44px; height: 90px; z-index: 59; border-radius: 0px;",
	cssClasses:	"",
	id:		"690",
	htmlId:		"tobj690",
	bInsAnc:	0,
	cwObj:		{
		"name":	"M2-cabello_4_color_3"
	},
	objData:	{"a":[0,256,0,[384,117,44,90]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":626,"y":191,"width":71,"height":146}}
};
image692.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj692Img\" src=\"images/M2-cabello_4_color_4.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 44px; height: 90px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 384px; top: 117px; width: 44px; height: 90px; z-index: 60; border-radius: 0px;",
	cssClasses:	"",
	id:		"692",
	htmlId:		"tobj692",
	bInsAnc:	0,
	cwObj:		{
		"name":	"M2-cabello_4_color_4"
	},
	objData:	{"a":[0,256,0,[384,117,44,90]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":626,"y":191,"width":71,"height":146}}
};
image694.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj694Img\" src=\"images/M2-cabello_4_color_5.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 44px; height: 90px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 384px; top: 117px; width: 44px; height: 90px; z-index: 61; border-radius: 0px;",
	cssClasses:	"",
	id:		"694",
	htmlId:		"tobj694",
	bInsAnc:	0,
	cwObj:		{
		"name":	"M2-cabello_4_color_5"
	},
	objData:	{"a":[0,256,0,[384,117,44,90]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":626,"y":191,"width":71,"height":146}}
};
og709.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og709",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
image696.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj696Img\" src=\"images/M2-cabello_5_color_1.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 51px; height: 59px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 384px; top: 110px; width: 51px; height: 59px; z-index: 62; border-radius: 0px;",
	cssClasses:	"",
	id:		"696",
	htmlId:		"tobj696",
	bInsAnc:	0,
	cwObj:		{
		"name":	"M2-cabello_5_color_1"
	},
	objData:	{"a":[0,256,0,[384,110,51,59]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":626,"y":179,"width":83,"height":97}}
};
image698.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj698Img\" src=\"images/M2-cabello_5_color_2.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 51px; height: 59px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 384px; top: 110px; width: 51px; height: 59px; z-index: 63; border-radius: 0px;",
	cssClasses:	"",
	id:		"698",
	htmlId:		"tobj698",
	bInsAnc:	0,
	cwObj:		{
		"name":	"M2-cabello_5_color_2"
	},
	objData:	{"a":[0,256,0,[384,110,51,59]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":626,"y":179,"width":83,"height":97}}
};
image700.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj700Img\" src=\"images/M2-cabello_5_color_3.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 51px; height: 59px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 384px; top: 110px; width: 51px; height: 59px; z-index: 64; border-radius: 0px;",
	cssClasses:	"",
	id:		"700",
	htmlId:		"tobj700",
	bInsAnc:	0,
	cwObj:		{
		"name":	"M2-cabello_5_color_3"
	},
	objData:	{"a":[0,256,0,[384,110,51,59]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":626,"y":179,"width":83,"height":97}}
};
image702.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj702Img\" src=\"images/M2-cabello_5_color_4.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 51px; height: 59px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 384px; top: 110px; width: 51px; height: 59px; z-index: 65; border-radius: 0px;",
	cssClasses:	"",
	id:		"702",
	htmlId:		"tobj702",
	bInsAnc:	0,
	cwObj:		{
		"name":	"M2-cabello_5_color_4"
	},
	objData:	{"a":[0,256,0,[384,110,51,59]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":626,"y":179,"width":83,"height":97}}
};
image704.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj704Img\" src=\"images/M2-cabello_5_color_5.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 51px; height: 59px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 384px; top: 110px; width: 51px; height: 59px; z-index: 66; border-radius: 0px;",
	cssClasses:	"",
	id:		"704",
	htmlId:		"tobj704",
	bInsAnc:	0,
	cwObj:		{
		"name":	"M2-cabello_5_color_5"
	},
	objData:	{"a":[0,256,0,[384,110,51,59]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":626,"y":179,"width":83,"height":97}}
};
og948.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og948",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
image917.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj917Img\" src=\"images/M4-labios_1_color_1.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 9px; height: 4px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 405px; top: 151px; width: 9px; height: 4px; z-index: 67; border-radius: 0px;",
	cssClasses:	"",
	id:		"917",
	htmlId:		"tobj917",
	bInsAnc:	0,
	cwObj:		{
		"name":	"M4-labios_1_color_1"
	},
	objData:	{"a":[0,256,0,[405,151,9,4]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":661,"y":246,"width":14,"height":6}}
};
image919.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj919Img\" src=\"images/M4-labios_1_color_2.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 9px; height: 4px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 405px; top: 151px; width: 9px; height: 4px; z-index: 68; border-radius: 0px;",
	cssClasses:	"",
	id:		"919",
	htmlId:		"tobj919",
	bInsAnc:	0,
	cwObj:		{
		"name":	"M4-labios_1_color_2"
	},
	objData:	{"a":[0,256,0,[405,151,9,4]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":661,"y":246,"width":14,"height":6}}
};
image921.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj921Img\" src=\"images/M4-labios_1_color_3.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 9px; height: 4px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 405px; top: 151px; width: 9px; height: 4px; z-index: 69; border-radius: 0px;",
	cssClasses:	"",
	id:		"921",
	htmlId:		"tobj921",
	bInsAnc:	0,
	cwObj:		{
		"name":	"M4-labios_1_color_3"
	},
	objData:	{"a":[0,256,0,[405,151,9,4]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":661,"y":246,"width":14,"height":6}}
};
image923.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj923Img\" src=\"images/M4-labios_1_color_4.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 9px; height: 4px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 405px; top: 151px; width: 9px; height: 4px; z-index: 70; border-radius: 0px;",
	cssClasses:	"",
	id:		"923",
	htmlId:		"tobj923",
	bInsAnc:	0,
	cwObj:		{
		"name":	"M4-labios_1_color_4"
	},
	objData:	{"a":[0,256,0,[405,151,9,4]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":661,"y":246,"width":14,"height":6}}
};
og949.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og949",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
image925.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj925Img\" src=\"images/M4-labios_2_color_1.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 9px; height: 4px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 405px; top: 150px; width: 9px; height: 4px; z-index: 71; border-radius: 0px;",
	cssClasses:	"",
	id:		"925",
	htmlId:		"tobj925",
	bInsAnc:	0,
	cwObj:		{
		"name":	"M4-labios_2_color_1"
	},
	objData:	{"a":[0,256,0,[405,150,9,4]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":661,"y":245,"width":14,"height":6}}
};
image927.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj927Img\" src=\"images/M4-labios_2_color_2.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 9px; height: 4px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 405px; top: 150px; width: 9px; height: 4px; z-index: 72; border-radius: 0px;",
	cssClasses:	"",
	id:		"927",
	htmlId:		"tobj927",
	bInsAnc:	0,
	cwObj:		{
		"name":	"M4-labios_2_color_2"
	},
	objData:	{"a":[0,256,0,[405,150,9,4]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":661,"y":245,"width":14,"height":6}}
};
image929.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj929Img\" src=\"images/M4-labios_2_color_3.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 9px; height: 4px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 405px; top: 150px; width: 9px; height: 4px; z-index: 73; border-radius: 0px;",
	cssClasses:	"",
	id:		"929",
	htmlId:		"tobj929",
	bInsAnc:	0,
	cwObj:		{
		"name":	"M4-labios_2_color_3"
	},
	objData:	{"a":[0,256,0,[405,150,9,4]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":661,"y":245,"width":14,"height":6}}
};
image931.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj931Img\" src=\"images/M4-labios_2_color_4.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 9px; height: 4px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 405px; top: 150px; width: 9px; height: 4px; z-index: 74; border-radius: 0px;",
	cssClasses:	"",
	id:		"931",
	htmlId:		"tobj931",
	bInsAnc:	0,
	cwObj:		{
		"name":	"M4-labios_2_color_4"
	},
	objData:	{"a":[0,256,0,[405,150,9,4]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":661,"y":245,"width":14,"height":6}}
};
og950.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og950",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
image933.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj933Img\" src=\"images/M4-labios_3_color_1.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 9px; height: 3px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 405px; top: 150px; width: 9px; height: 3px; z-index: 75; border-radius: 0px;",
	cssClasses:	"",
	id:		"933",
	htmlId:		"tobj933",
	bInsAnc:	0,
	cwObj:		{
		"name":	"M4-labios_3_color_1"
	},
	objData:	{"a":[0,256,0,[405,150,9,3]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":661,"y":245,"width":14,"height":5}}
};
image935.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj935Img\" src=\"images/M4-labios_3_color_2.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 9px; height: 3px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 405px; top: 150px; width: 9px; height: 3px; z-index: 76; border-radius: 0px;",
	cssClasses:	"",
	id:		"935",
	htmlId:		"tobj935",
	bInsAnc:	0,
	cwObj:		{
		"name":	"M4-labios_3_color_2"
	},
	objData:	{"a":[0,256,0,[405,150,9,3]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":661,"y":245,"width":14,"height":5}}
};
image937.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj937Img\" src=\"images/M4-labios_3_color_3.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 9px; height: 3px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 405px; top: 150px; width: 9px; height: 3px; z-index: 77; border-radius: 0px;",
	cssClasses:	"",
	id:		"937",
	htmlId:		"tobj937",
	bInsAnc:	0,
	cwObj:		{
		"name":	"M4-labios_3_color_3"
	},
	objData:	{"a":[0,256,0,[405,150,9,3]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":661,"y":245,"width":14,"height":5}}
};
image939.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj939Img\" src=\"images/M4-labios_3_color_4.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 9px; height: 3px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 405px; top: 150px; width: 9px; height: 3px; z-index: 78; border-radius: 0px;",
	cssClasses:	"",
	id:		"939",
	htmlId:		"tobj939",
	bInsAnc:	0,
	cwObj:		{
		"name":	"M4-labios_3_color_4"
	},
	objData:	{"a":[0,256,0,[405,150,9,3]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":661,"y":245,"width":14,"height":5}}
};
og951.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og951",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
image941.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj941Img\" src=\"images/M4-labios_4_color_1.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 9px; height: 2px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 405px; top: 150px; width: 9px; height: 2px; z-index: 79; border-radius: 0px;",
	cssClasses:	"",
	id:		"941",
	htmlId:		"tobj941",
	bInsAnc:	0,
	cwObj:		{
		"name":	"M4-labios_4_color_1"
	},
	objData:	{"a":[0,256,0,[405,150,9,2]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":661,"y":245,"width":14,"height":4}}
};
image943.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj943Img\" src=\"images/M4-labios_4_color_2.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 9px; height: 2px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 405px; top: 150px; width: 9px; height: 2px; z-index: 80; border-radius: 0px;",
	cssClasses:	"",
	id:		"943",
	htmlId:		"tobj943",
	bInsAnc:	0,
	cwObj:		{
		"name":	"M4-labios_4_color_2"
	},
	objData:	{"a":[0,256,0,[405,150,9,2]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":661,"y":245,"width":14,"height":4}}
};
image945.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj945Img\" src=\"images/M4-labios_4_color_3.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 9px; height: 2px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 405px; top: 150px; width: 9px; height: 2px; z-index: 81; border-radius: 0px;",
	cssClasses:	"",
	id:		"945",
	htmlId:		"tobj945",
	bInsAnc:	0,
	cwObj:		{
		"name":	"M4-labios_4_color_3"
	},
	objData:	{"a":[0,256,0,[405,150,9,2]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":661,"y":245,"width":14,"height":4}}
};
image947.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj947Img\" src=\"images/M4-labios_4_color_4.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 9px; height: 2px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 405px; top: 150px; width: 9px; height: 2px; z-index: 82; border-radius: 0px;",
	cssClasses:	"",
	id:		"947",
	htmlId:		"tobj947",
	bInsAnc:	0,
	cwObj:		{
		"name":	"M4-labios_4_color_4"
	},
	objData:	{"a":[0,256,0,[405,150,9,2]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":661,"y":245,"width":14,"height":4}}
};
og1300.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og1300",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
image1291.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj1291Img\" src=\"images/M7-convers_1.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 33px; height: 22px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 399px; top: 387px; width: 33px; height: 22px; z-index: 83; border-radius: 0px;",
	cssClasses:	"",
	id:		"1291",
	htmlId:		"tobj1291",
	bInsAnc:	0,
	cwObj:		{
		"name":	"M7-zapatos_1"
	},
	objData:	{"a":[0,256,0,[399,387,33,22]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":651,"y":631,"width":53,"height":36}}
};
image1295.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj1295Img\" src=\"images/M7-zapatos_2_1.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 33px; height: 22px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 399px; top: 387px; width: 33px; height: 22px; z-index: 84; border-radius: 0px;",
	cssClasses:	"",
	id:		"1295",
	htmlId:		"tobj1295",
	bInsAnc:	0,
	cwObj:		{
		"name":	"M7-zapatos_2"
	},
	objData:	{"a":[0,256,0,[399,387,33,22]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":651,"y":631,"width":53,"height":36}}
};
image1293.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj1293Img\" src=\"images/M7-zapatos_1_1.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 33px; height: 22px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 399px; top: 387px; width: 33px; height: 22px; z-index: 85; border-radius: 0px;",
	cssClasses:	"",
	id:		"1293",
	htmlId:		"tobj1293",
	bInsAnc:	0,
	cwObj:		{
		"name":	"M7-zapatos_3"
	},
	objData:	{"a":[0,256,0,[399,387,33,22]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":651,"y":631,"width":53,"height":36}}
};
image1296.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj1296Img\" src=\"images/M7-zapatos_2_1.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 33px; height: 22px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 399px; top: 387px; width: 33px; height: 22px; z-index: 86; border-radius: 0px;",
	cssClasses:	"",
	id:		"1296",
	htmlId:		"tobj1296",
	bInsAnc:	0,
	cwObj:		{
		"name":	"M7-zapatos_4"
	},
	objData:	{"a":[0,256,0,[399,387,33,22]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":651,"y":631,"width":53,"height":36}}
};
og129.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og129",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
image96.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj96Img\" src=\"images/Mbarra_color_piel.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 188px; height: 94px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 132px; top: 359px; width: 188px; height: 94px; z-index: 87; border-radius: 0px;",
	cssClasses:	"",
	id:		"96",
	htmlId:		"tobj96",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Mbarra_color_piel"
	},
	objData:	{"a":[0,256,0,[132,359,188,94]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":216,"y":585,"width":306,"height":153}}
};
image98.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj98Img\" src=\"images/Mpiel_1.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 15px; height: 22px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 171px; top: 375px; width: 15px; height: 22px; z-index: 88; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"98",
	htmlId:		"tobj98",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Mpiel_1",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ { VarmColor1.set('1');  triv$('.VarmColor1', getDisplayDocument()).html(VarmColor1.getValueForDisplay()); }
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og542.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og543.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og544.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og545.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[171,375,15,22]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":279,"y":612,"width":24,"height":36}}
};
image100.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj100Img\" src=\"images/Mpiel_2.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 15px; height: 22px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 204px; top: 375px; width: 15px; height: 22px; z-index: 89; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"100",
	htmlId:		"tobj100",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Mpiel_2",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ { VarmColor1.set('2');  triv$('.VarmColor1', getDisplayDocument()).html(VarmColor1.getValueForDisplay()); }
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og543.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og542.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og544.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og545.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[204,375,15,22]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":333,"y":612,"width":24,"height":36}}
};
image102.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj102Img\" src=\"images/Mpiel_3.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 15px; height: 22px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 236px; top: 375px; width: 15px; height: 22px; z-index: 90; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"102",
	htmlId:		"tobj102",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Mpiel_3",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ { VarmColor1.set('3');  triv$('.VarmColor1', getDisplayDocument()).html(VarmColor1.getValueForDisplay()); }
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og544.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og542.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og543.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og545.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[236,375,15,22]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":384,"y":612,"width":24,"height":36}}
};
image104.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj104Img\" src=\"images/Mpiel_4.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 15px; height: 22px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 270px; top: 375px; width: 15px; height: 22px; z-index: 91; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"104",
	htmlId:		"tobj104",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Mpiel_4",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ { VarmColor1.set('4');  triv$('.VarmColor1', getDisplayDocument()).html(VarmColor1.getValueForDisplay()); }
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og545.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og542.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og543.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og544.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[270,375,15,22]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":441,"y":612,"width":24,"height":36}}
};
og401.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og401",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
image404.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj404Img\" src=\"images/Mbarra_cabello.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 188px; height: 94px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 196px; top: 359px; width: 188px; height: 94px; z-index: 92; border-radius: 0px;",
	cssClasses:	"",
	id:		"404",
	htmlId:		"tobj404",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Mbarra_cabello"
	},
	objData:	{"a":[0,256,0,[196,359,188,94]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":319,"y":586,"width":306,"height":153}}
};
image381.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj381Img\" src=\"images/Mcolor_cabello_1.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 17px; height: 17px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 212px; top: 383px; width: 17px; height: 17px; z-index: 93; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"381",
	htmlId:		"tobj381",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Mcolor_cabello_1",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ { VarmColor2.set('1');  triv$('.VarmColor2', getDisplayDocument()).html(VarmColor2.getValueForDisplay()); }
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og401.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og390.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[212,383,17,17]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":345,"y":625,"width":27,"height":27}}
};
image383.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj383Img\" src=\"images/Mcolor_cabello_2.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 17px; height: 17px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 247px; top: 383px; width: 17px; height: 17px; z-index: 94; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"383",
	htmlId:		"tobj383",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Mcolor_cabello_2",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ { VarmColor2.set('2');  triv$('.VarmColor2', getDisplayDocument()).html(VarmColor2.getValueForDisplay()); }
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og401.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og390.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[247,383,17,17]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":403,"y":625,"width":27,"height":27}}
};
image385.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj385Img\" src=\"images/Mcolor_cabello_3.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 17px; height: 17px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 281px; top: 383px; width: 17px; height: 17px; z-index: 95; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"385",
	htmlId:		"tobj385",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Mcolor_cabello_3",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ { VarmColor2.set('3');  triv$('.VarmColor2', getDisplayDocument()).html(VarmColor2.getValueForDisplay()); }
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og401.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og390.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[281,383,17,17]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":458,"y":625,"width":27,"height":27}}
};
image387.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj387Img\" src=\"images/Mcolor_cabello_4.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 17px; height: 17px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 312px; top: 383px; width: 17px; height: 17px; z-index: 96; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"387",
	htmlId:		"tobj387",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Mcolor_cabello_4",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ { VarmColor2.set('4');  triv$('.VarmColor2', getDisplayDocument()).html(VarmColor2.getValueForDisplay()); }
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og401.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og390.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[312,383,17,17]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":509,"y":625,"width":27,"height":27}}
};
image389.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj389Img\" src=\"images/Mcolor_cabello_5.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 17px; height: 17px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 347px; top: 383px; width: 17px; height: 17px; z-index: 97; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"389",
	htmlId:		"tobj389",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Mcolor_cabello_5",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ { VarmColor2.set('5');  triv$('.VarmColor2', getDisplayDocument()).html(VarmColor2.getValueForDisplay()); }
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og401.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og390.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[347,383,17,17]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":566,"y":625,"width":27,"height":27}}
};
og390.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og390",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
image142.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj142Img\" src=\"images/Mbarra_cabello.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 188px; height: 94px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 196px; top: 359px; width: 188px; height: 94px; z-index: 98; border-radius: 0px;",
	cssClasses:	"",
	id:		"142",
	htmlId:		"tobj142",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Mbarra_cabello"
	},
	objData:	{"a":[0,256,0,[196,359,188,94]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":319,"y":586,"width":306,"height":153}}
};
image392.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj392Img\" src=\"images/Mcabello_1.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 20px; height: 33px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 211px; top: 376px; width: 20px; height: 33px; z-index: 99; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"392",
	htmlId:		"tobj392",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Mcabello_1",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og706.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og707.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og708.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og709.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor2.equals('1'))image656.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor2.equals('2'))image658.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor2.equals('3'))image660.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor2.equals('4'))image662.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor2.equals('5'))image664.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[211,376,20,33]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":344,"y":613,"width":33,"height":54}}
};
image394.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj394Img\" src=\"images/Mcabello_2.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 20px; height: 28px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 247px; top: 380px; width: 20px; height: 28px; z-index: 100; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"394",
	htmlId:		"tobj394",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Mcabello_2",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og705.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og707.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og708.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og709.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor2.equals('1'))image666.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor2.equals('2'))image668.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor2.equals('3'))image670.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor2.equals('4'))image672.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor2.equals('5'))image674.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[247,380,20,28]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":402,"y":619,"width":32,"height":45}}
};
image396.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj396Img\" src=\"images/Mcabello_3.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 20px; height: 33px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 279px; top: 377px; width: 20px; height: 33px; z-index: 101; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"396",
	htmlId:		"tobj396",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Mcabello_3",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og705.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og706.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og708.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og709.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor2.equals('1'))image676.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor2.equals('2'))image678.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor2.equals('3'))image680.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor2.equals('4'))image682.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor2.equals('5'))image684.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[279,377,20,33]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":455,"y":614,"width":33,"height":54}}
};
image398.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj398Img\" src=\"images/Mcabello_4.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 16px; height: 33px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 313px; top: 378px; width: 16px; height: 33px; z-index: 102; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"398",
	htmlId:		"tobj398",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Mcabello_4",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og705.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og706.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og707.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og709.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor2.equals('1'))image686.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor2.equals('2'))image688.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor2.equals('3'))image690.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor2.equals('4'))image692.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor2.equals('5'))image694.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[313,378,16,33]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":511,"y":616,"width":26,"height":54}}
};
image400.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj400Img\" src=\"images/Mcabello_5.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 22px; height: 25px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 347px; top: 380px; width: 22px; height: 25px; z-index: 103; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"400",
	htmlId:		"tobj400",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Mcabello_5",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og705.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og706.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og707.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og708.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor2.equals('1'))image696.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor2.equals('2'))image698.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor2.equals('3'))image700.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor2.equals('4'))image702.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor2.equals('5'))image704.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[347,380,22,25]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":566,"y":619,"width":36,"height":41}}
};
og457.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og457",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
image452.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj452Img\" src=\"images/Mbarra_ojos.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 188px; height: 94px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 256px; top: 359px; width: 188px; height: 94px; z-index: 104; border-radius: 0px;",
	cssClasses:	"",
	id:		"452",
	htmlId:		"tobj452",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Mbarra_ojos"
	},
	objData:	{"a":[0,256,0,[256,359,188,94]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":417,"y":586,"width":306,"height":153}}
};
image441.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj441Img\" src=\"images/Mcolor_ojos_1.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 17px; height: 17px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 296px; top: 376px; width: 17px; height: 17px; z-index: 105; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"441",
	htmlId:		"tobj441",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Mcolor_ojos_1",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ { VarmColor3.set('1');  triv$('.VarmColor3', getDisplayDocument()).html(VarmColor3.getValueForDisplay()); }
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og457.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og456.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[296,376,17,17]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":483,"y":613,"width":27,"height":27}}
};
image443.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj443Img\" src=\"images/Mcolor_ojos_2.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 17px; height: 17px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 341px; top: 376px; width: 17px; height: 17px; z-index: 106; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"443",
	htmlId:		"tobj443",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Mcolor_ojos_2",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ { VarmColor3.set('2');  triv$('.VarmColor3', getDisplayDocument()).html(VarmColor3.getValueForDisplay()); }
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og457.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og456.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[341,376,17,17]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":556,"y":613,"width":27,"height":27}}
};
image445.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj445Img\" src=\"images/Mcolor_ojos_3.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 17px; height: 17px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 385px; top: 376px; width: 17px; height: 17px; z-index: 107; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"445",
	htmlId:		"tobj445",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Mcolor_ojos_3",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ { VarmColor3.set('3');  triv$('.VarmColor3', getDisplayDocument()).html(VarmColor3.getValueForDisplay()); }
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og457.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og456.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[385,376,17,17]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":628,"y":613,"width":27,"height":27}}
};
og456.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og456",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
image439.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj439Img\" src=\"images/Mbarra_ojos.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 188px; height: 94px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 256px; top: 359px; width: 188px; height: 94px; z-index: 108; border-radius: 0px;",
	cssClasses:	"",
	id:		"439",
	htmlId:		"tobj439",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Mbarra_ojos"
	},
	objData:	{"a":[0,256,0,[256,359,188,94]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":417,"y":586,"width":306,"height":153}}
};
image447.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj447Img\" src=\"images/Mojos_1.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 26px; height: 17px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 293px; top: 381px; width: 26px; height: 17px; z-index: 109; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"447",
	htmlId:		"tobj447",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Mojos_1",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og886.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og887.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor3.equals('1'))image868.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor3.equals('2'))image870.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor3.equals('3'))image872.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[293,381,26,17]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":477,"y":621,"width":43,"height":27}}
};
image449.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj449Img\" src=\"images/Mojos_2.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 33px; height: 12px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 378px; top: 381px; width: 33px; height: 12px; z-index: 110; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"449",
	htmlId:		"tobj449",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Mojos_2",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og885.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og887.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor3.equals('1'))image874.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor3.equals('2'))image876.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor3.equals('3'))image878.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[378,381,33,12]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":617,"y":621,"width":54,"height":20}}
};
image451.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj451Img\" src=\"images/Mojos_3.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 33px; height: 10px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 332px; top: 382px; width: 33px; height: 10px; z-index: 111; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"451",
	htmlId:		"tobj451",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Mojos_3",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og885.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og886.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor3.equals('1'))image880.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor3.equals('2'))image882.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor3.equals('3'))image884.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[332,382,33,10]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":541,"y":623,"width":54,"height":16}}
};
og481.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og481",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
image476.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj476Img\" src=\"images/Mbarra_labios.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 188px; height: 94px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 317px; top: 359px; width: 188px; height: 94px; z-index: 112; border-radius: 0px;",
	cssClasses:	"",
	id:		"476",
	htmlId:		"tobj476",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Mbarra_labios"
	},
	objData:	{"a":[0,256,0,[317,359,188,94]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":517,"y":586,"width":306,"height":153}}
};
image461.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj461Img\" src=\"images/Mcolor_labios_1.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 17px; height: 17px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 350px; top: 377px; width: 17px; height: 17px; z-index: 113; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"461",
	htmlId:		"tobj461",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Mcolor_labios_1",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ { VarmColor4.set('1');  triv$('.VarmColor4', getDisplayDocument()).html(VarmColor4.getValueForDisplay()); }
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og481.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og480.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[350,377,17,17]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":570,"y":615,"width":27,"height":27}}
};
image463.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj463Img\" src=\"images/Mcolor_labios_2.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 17px; height: 17px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 386px; top: 377px; width: 17px; height: 17px; z-index: 114; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"463",
	htmlId:		"tobj463",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Mcolor_labios_2",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ { VarmColor4.set('2');  triv$('.VarmColor4', getDisplayDocument()).html(VarmColor4.getValueForDisplay()); }
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og481.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og480.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[386,377,17,17]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":630,"y":615,"width":27,"height":27}}
};
image465.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj465Img\" src=\"images/Mcolor_labios_3.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 17px; height: 17px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 418px; top: 377px; width: 17px; height: 17px; z-index: 115; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"465",
	htmlId:		"tobj465",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Mcolor_labios_3",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ { VarmColor4.set('3');  triv$('.VarmColor4', getDisplayDocument()).html(VarmColor4.getValueForDisplay()); }
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og481.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og480.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[418,377,17,17]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":682,"y":615,"width":27,"height":27}}
};
image467.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj467Img\" src=\"images/Mcolor_labios_4.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 17px; height: 17px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 454px; top: 377px; width: 17px; height: 17px; z-index: 116; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"467",
	htmlId:		"tobj467",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Mcolor_labios_4",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ { VarmColor4.set('4');  triv$('.VarmColor4', getDisplayDocument()).html(VarmColor4.getValueForDisplay()); }
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og481.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og480.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[454,377,17,17]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":741,"y":615,"width":27,"height":27}}
};
og480.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og480",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
image459.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj459Img\" src=\"images/Mbarra_labios.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 188px; height: 94px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 317px; top: 359px; width: 188px; height: 94px; z-index: 117; border-radius: 0px;",
	cssClasses:	"",
	id:		"459",
	htmlId:		"tobj459",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Mbarra_labios"
	},
	objData:	{"a":[0,256,0,[317,359,188,94]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":517,"y":586,"width":306,"height":153}}
};
image469.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj469Img\" src=\"images/Mlabios_1.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 22px; height: 10px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 347px; top: 381px; width: 22px; height: 10px; z-index: 118; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"469",
	htmlId:		"tobj469",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Mlabios_1",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og949.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og950.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og951.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor4.equals('1'))image917.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor4.equals('2'))image919.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor4.equals('3'))image921.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor4.equals('4'))image923.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[347,381,22,10]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":565,"y":621,"width":36,"height":16}}
};
image471.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj471Img\" src=\"images/Mlabios_2.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 22px; height: 9px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 380px; top: 381px; width: 22px; height: 9px; z-index: 119; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"471",
	htmlId:		"tobj471",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Mlabios_2",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og948.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og950.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og951.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor4.equals('1'))image925.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor4.equals('2'))image927.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor4.equals('3'))image929.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor4.equals('4'))image931.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[380,381,22,9]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":619,"y":622,"width":36,"height":15}}
};
image473.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj473Img\" src=\"images/Mlabios_3.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 22px; height: 9px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 416px; top: 382px; width: 22px; height: 9px; z-index: 120; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"473",
	htmlId:		"tobj473",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Mlabios_3",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og948.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og949.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og951.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor4.equals('1'))image933.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor4.equals('2'))image935.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor4.equals('3'))image937.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor4.equals('4'))image939.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[416,382,22,9]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":679,"y":623,"width":36,"height":14}}
};
image475.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj475Img\" src=\"images/Mlabios_4.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 22px; height: 6px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 449px; top: 383px; width: 22px; height: 6px; z-index: 121; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"475",
	htmlId:		"tobj475",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Mlabios_4",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og948.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og949.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og950.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor4.equals('1'))image941.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor4.equals('2'))image943.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor4.equals('3'))image945.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor4.equals('4'))image947.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[449,383,22,6]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":732,"y":625,"width":36,"height":10}}
};
og498.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og498",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
image483.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj483Img\" src=\"images/Mbarra_ropa.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 188px; height: 94px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 378px; top: 359px; width: 188px; height: 94px; z-index: 122; border-radius: 0px;",
	cssClasses:	"",
	id:		"483",
	htmlId:		"tobj483",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Mbarra_ropa"
	},
	objData:	{"a":[0,256,0,[378,359,188,94]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":617,"y":586,"width":306,"height":153}}
};
image489.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj489Img\" src=\"images/Mpantalon_2.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 15px; height: 42px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 411px; top: 370px; width: 15px; height: 42px; z-index: 123; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"489",
	htmlId:		"tobj489",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Mpantalon_1",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1034.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image1021.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ image1019.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[411,370,15,42]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":670,"y":604,"width":24,"height":68}}
};
image487.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj487Img\" src=\"images/Mpantalon_1.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 17px; height: 42px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 445px; top: 370px; width: 17px; height: 42px; z-index: 124; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"487",
	htmlId:		"tobj487",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Mpantalon_2",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1034.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image1019.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ image1021.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[445,370,17,42]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":726,"y":604,"width":27,"height":68}}
};
image495.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj495Img\" src=\"images/Mplayera_kanbal.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 22px; height: 19px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 476px; top: 361px; width: 22px; height: 19px; z-index: 125; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"495",
	htmlId:		"tobj495",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Mplayera_kanbal",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1034.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image1025.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image1027.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ image1023.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[476,361,22,19]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":776,"y":588,"width":36,"height":31}}
};
image493.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj493Img\" src=\"images/Mplayera_corona.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 22px; height: 19px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 476px; top: 383px; width: 22px; height: 19px; z-index: 126; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"493",
	htmlId:		"tobj493",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Mplayera_corona",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1034.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image1023.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image1027.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ image1025.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[476,383,22,19]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":776,"y":624,"width":36,"height":31}}
};
image491.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj491Img\" src=\"images/Mplayera_budlight.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 22px; height: 19px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 476px; top: 405px; width: 22px; height: 19px; z-index: 127; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"491",
	htmlId:		"tobj491",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Mplayera_budlight",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1034.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image1023.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image1025.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ image1027.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[476,405,22,19]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":776,"y":660,"width":36,"height":31}}
};
image485.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj485Img\" src=\"images/Mfalda.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 18px; height: 42px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 507px; top: 370px; width: 18px; height: 42px; z-index: 128; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"485",
	htmlId:		"tobj485",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Mfalda",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1032.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1033.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image1031.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ image1029.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[507,370,18,42]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":826,"y":604,"width":29,"height":68}}
};
image497.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj497Img\" src=\"images/Mvestido.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 22px; height: 42px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 527px; top: 370px; width: 22px; height: 42px; z-index: 129; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"497",
	htmlId:		"tobj497",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Mvestido",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1032.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1033.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image1029.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ image1031.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[527,370,22,42]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":860,"y":604,"width":36,"height":68}}
};
og513.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og513",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
image500.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj500Img\" src=\"images/Mbarra_accesorios.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 216px; height: 94px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 411px; top: 359px; width: 216px; height: 94px; z-index: 130; border-radius: 0px;",
	cssClasses:	"",
	id:		"500",
	htmlId:		"tobj500",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Mbarra_accesorios"
	},
	objData:	{"a":[0,256,0,[411,359,216,94]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":670,"y":586,"width":353,"height":153}}
};
image502.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj502Img\" src=\"images/Mbolsa.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 22px; height: 33px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 438px; top: 371px; width: 22px; height: 33px; z-index: 131; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"502",
	htmlId:		"tobj502",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Mbolsa",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ image1095.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ image2478.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image2477.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[438,371,22,33]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":714,"y":605,"width":36,"height":53}}
};
image504.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj504Img\" src=\"images/Mlentes_1.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 22px; height: 7px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 470px; top: 375px; width: 22px; height: 7px; z-index: 132; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"504",
	htmlId:		"tobj504",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Mlentes_1",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image1099.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ image1097.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ image2479.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image2480.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[470,375,22,7]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":766,"y":611,"width":36,"height":11}}
};
image506.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj506Img\" src=\"images/Mlentes_1_1.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 22px; height: 7px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 470px; top: 392px; width: 22px; height: 7px; z-index: 133; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"506",
	htmlId:		"tobj506",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Mlentes_1_1",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image1097.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ image1099.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ image2479.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image2480.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[470,392,22,7]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":767,"y":639,"width":36,"height":11}}
};
image508.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj508Img\" src=\"images/Msombrero_mujer.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 22px; height: 13px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 506px; top: 378px; width: 22px; height: 13px; z-index: 134; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"508",
	htmlId:		"tobj508",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Msombrero_mujer",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ image1101.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ image2494.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image2485.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[506,378,22,13]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":825,"y":616,"width":36,"height":22}}
};
image510.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj510Img\" src=\"images/Mvaso_1.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 22px; height: 33px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 542px; top: 372px; width: 22px; height: 33px; z-index: 135; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"510",
	htmlId:		"tobj510",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Mvaso_1",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarmColor1.equals('1'))image540.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarmColor1.equals('2'))image538.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarmColor1.equals('3'))image536.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarmColor1.equals('4'))image534.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarmColor1.equals('1'))image1103.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarmColor1.equals('2'))image1105.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarmColor1.equals('3'))image1107.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarmColor1.equals('4'))image1109.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor1.equals('1'))image1111.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor1.equals('2'))image1113.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor1.equals('3'))image1115.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor1.equals('4'))image1117.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ image2489.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image2490.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[542,372,22,33]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":883,"y":606,"width":36,"height":53}}
};
image512.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj512Img\" src=\"images/Mvaso_2.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 22px; height: 33px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 581px; top: 372px; width: 22px; height: 33px; z-index: 136; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"512",
	htmlId:		"tobj512",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Mvaso_2",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarmColor1.equals('1'))image540.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarmColor1.equals('2'))image538.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarmColor1.equals('3'))image536.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarmColor1.equals('4'))image534.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor1.equals('1'))image1103.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor1.equals('2'))image1105.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor1.equals('3'))image1107.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor1.equals('4'))image1109.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarmColor1.equals('1'))image1111.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarmColor1.equals('2'))image1113.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarmColor1.equals('3'))image1115.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarmColor1.equals('4'))image1117.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ image2484.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image2495.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[581,372,22,33]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":947,"y":607,"width":36,"height":53}}
};
image2477.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj2477Img\" src=\"images/check_1%402x-8.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 7px; height: 7px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 445px; top: 409px; width: 7px; height: 7px; z-index: 137; border-radius: 0px;",
	cssClasses:	"",
	id:		"2477",
	htmlId:		"tobj2477",
	bInsAnc:	0,
	cwObj:		{
		"name":	"item6_1"
	},
	objData:	{"a":[0,256,0,[445,409,7,7]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":726,"y":667,"width":12,"height":12}}
};
image2480.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj2480Img\" src=\"images/check_1%402x-8.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 7px; height: 7px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 477px; top: 409px; width: 7px; height: 7px; z-index: 138; border-radius: 0px;",
	cssClasses:	"",
	id:		"2480",
	htmlId:		"tobj2480",
	bInsAnc:	0,
	cwObj:		{
		"name":	"item6_2"
	},
	objData:	{"a":[0,256,0,[477,409,7,7]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":778,"y":667,"width":12,"height":12}}
};
image2485.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj2485Img\" src=\"images/check_1%402x-8.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 7px; height: 7px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 515px; top: 409px; width: 7px; height: 7px; z-index: 139; border-radius: 0px;",
	cssClasses:	"",
	id:		"2485",
	htmlId:		"tobj2485",
	bInsAnc:	0,
	cwObj:		{
		"name":	"item6_3"
	},
	objData:	{"a":[0,256,0,[515,409,7,7]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":840,"y":667,"width":12,"height":12}}
};
image2490.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj2490Img\" src=\"images/check_1%402x-8.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 7px; height: 7px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 550px; top: 409px; width: 7px; height: 7px; z-index: 140; border-radius: 0px;",
	cssClasses:	"",
	id:		"2490",
	htmlId:		"tobj2490",
	bInsAnc:	0,
	cwObj:		{
		"name":	"item6_4"
	},
	objData:	{"a":[0,256,0,[550,409,7,7]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":896,"y":667,"width":12,"height":12}}
};
image2495.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj2495Img\" src=\"images/check_1%402x-8.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 7px; height: 7px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 588px; top: 409px; width: 7px; height: 7px; z-index: 141; border-radius: 0px;",
	cssClasses:	"",
	id:		"2495",
	htmlId:		"tobj2495",
	bInsAnc:	0,
	cwObj:		{
		"name":	"item6_5"
	},
	objData:	{"a":[0,256,0,[588,409,7,7]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":959,"y":667,"width":12,"height":12}}
};
og524.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og524",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
image515.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj515Img\" src=\"images/Mbarra_zapatos.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 221px; height: 110px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 484px; top: 346px; width: 221px; height: 110px; z-index: 142; border-radius: 0px;",
	cssClasses:	"",
	id:		"515",
	htmlId:		"tobj515",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Mbarra_zapatos"
	},
	objData:	{"a":[0,256,0,[484,346,221,110]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":790,"y":564,"width":360,"height":180}}
};
image517.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj517Img\" src=\"images/Mzapatos_1.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 28px; height: 13px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 515px; top: 372px; width: 28px; height: 13px; z-index: 143; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"517",
	htmlId:		"tobj517",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Mzapatos_1",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ image1291.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image1295.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image1293.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image1296.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[515,372,28,13]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":839,"y":606,"width":45,"height":21}}
};
image519.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj519Img\" src=\"images/Mzapatos_2.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 28px; height: 23px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 561px; top: 362px; width: 28px; height: 23px; z-index: 144; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"519",
	htmlId:		"tobj519",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Mzapatos_2",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ image1295.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image1291.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image1293.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image1296.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[561,362,28,23]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":915,"y":590,"width":45,"height":37}}
};
image521.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj521Img\" src=\"images/Mzapatos_3.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 28px; height: 15px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 600px; top: 369px; width: 28px; height: 15px; z-index: 145; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"521",
	htmlId:		"tobj521",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Mzapatos_3",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ image1293.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image1295.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image1291.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image1296.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[600,369,28,15]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":978,"y":602,"width":45,"height":24}}
};
image523.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj523Img\" src=\"images/Mzapatos_4.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 28px; height: 11px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 644px; top: 372px; width: 28px; height: 11px; z-index: 146; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"523",
	htmlId:		"tobj523",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Mzapatos_4",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ image1296.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image1295.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image1293.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image1291.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[644,372,28,11]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1050,"y":606,"width":45,"height":18}}
};
og54.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og54",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
image43.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj43Img\" src=\"images/M-btn1_off.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 44px; height: 44px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 205px; top: 431px; width: 44px; height: 44px; z-index: 147; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"43",
	htmlId:		"tobj43",
	bInsAnc:	1,
	cwObj:		{
		"name":	"M-btn1_off",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og129.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ image58.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og401.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og457.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og481.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og498.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og513.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og524.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,288,0,[205,431,44,44]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":335,"y":702,"width":72,"height":72}}
};
image41.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj41Img\" src=\"images/M-btn2_off.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 44px; height: 44px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 267px; top: 431px; width: 44px; height: 44px; z-index: 148; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"41",
	htmlId:		"tobj41",
	bInsAnc:	1,
	cwObj:		{
		"name":	"M-btn2_off",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og401.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ image56.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og129.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og457.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og481.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og498.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og513.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og524.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,288,0,[267,431,44,44]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":435,"y":702,"width":72,"height":72}}
};
image49.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj49Img\" src=\"images/M-btn3_off.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 44px; height: 44px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 328px; top: 431px; width: 44px; height: 44px; z-index: 149; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"49",
	htmlId:		"tobj49",
	bInsAnc:	1,
	cwObj:		{
		"name":	"M-btn3_off",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og457.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ image64.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og129.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og401.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og481.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og498.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og513.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og524.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,288,0,[328,431,44,44]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":535,"y":702,"width":72,"height":72}}
};
image45.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj45Img\" src=\"images/M-btn4_off.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 44px; height: 44px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 389px; top: 431px; width: 44px; height: 44px; z-index: 150; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"45",
	htmlId:		"tobj45",
	bInsAnc:	1,
	cwObj:		{
		"name":	"M-btn4_off",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og481.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ image60.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og129.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og401.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og457.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og498.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og513.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og524.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,288,0,[389,431,44,44]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":635,"y":702,"width":72,"height":72}}
};
image51.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj51Img\" src=\"images/M-btn5_off.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 44px; height: 44px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 451px; top: 431px; width: 44px; height: 44px; z-index: 151; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"51",
	htmlId:		"tobj51",
	bInsAnc:	1,
	cwObj:		{
		"name":	"M-btn5_off",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og498.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ image66.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og129.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og401.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og457.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og481.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og513.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og524.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og2602.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,288,0,[451,431,44,44]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":735,"y":702,"width":72,"height":72}}
};
image47.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj47Img\" src=\"images/M-btn6_off.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 44px; height: 44px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 512px; top: 431px; width: 44px; height: 44px; z-index: 152; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"47",
	htmlId:		"tobj47",
	bInsAnc:	1,
	cwObj:		{
		"name":	"M-btn6_off",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og513.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ image62.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og129.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og401.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og457.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og481.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og498.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og524.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,288,0,[512,431,44,44]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":835,"y":702,"width":72,"height":72}}
};
image53.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj53Img\" src=\"images/M-btn7_off.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 44px; height: 44px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 573px; top: 431px; width: 44px; height: 44px; z-index: 153; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"53",
	htmlId:		"tobj53",
	bInsAnc:	1,
	cwObj:		{
		"name":	"M-btn7_off",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og524.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ image68.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og129.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og401.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og457.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og481.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og498.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og513.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og2602.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,288,0,[573,431,44,44]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":935,"y":702,"width":72,"height":72}}
};
og69.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og69",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
image58.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj58Img\" src=\"images/M-btn1_select.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 72px; height: 72px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 192px; top: 416px; width: 72px; height: 72px; z-index: 154; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"58",
	htmlId:		"tobj58",
	bInsAnc:	1,
	cwObj:		{
		"name":	"M-btn1_select",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image58.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og129.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[192,416,72,72]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":313,"y":679,"width":117,"height":117}}
};
image56.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj56Img\" src=\"images/M-btn2_select.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 72px; height: 72px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 253px; top: 416px; width: 72px; height: 72px; z-index: 155; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"56",
	htmlId:		"tobj56",
	bInsAnc:	1,
	cwObj:		{
		"name":	"M-btn2_select",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image56.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og401.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og390.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[253,416,72,72]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":413,"y":679,"width":117,"height":117}}
};
image64.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj64Img\" src=\"images/M-btn3_select.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 72px; height: 72px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 315px; top: 416px; width: 72px; height: 72px; z-index: 156; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"64",
	htmlId:		"tobj64",
	bInsAnc:	1,
	cwObj:		{
		"name":	"M-btn3_select",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image64.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og457.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og456.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[315,416,72,72]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":513,"y":679,"width":117,"height":117}}
};
image60.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj60Img\" src=\"images/M-btn4_select.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 72px; height: 72px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 376px; top: 416px; width: 72px; height: 72px; z-index: 157; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"60",
	htmlId:		"tobj60",
	bInsAnc:	1,
	cwObj:		{
		"name":	"M-btn4_select",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image60.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og481.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og480.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[376,416,72,72]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":613,"y":679,"width":117,"height":117}}
};
image66.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj66Img\" src=\"images/M-btn5_select.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 72px; height: 72px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 437px; top: 416px; width: 72px; height: 72px; z-index: 158; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"66",
	htmlId:		"tobj66",
	bInsAnc:	1,
	cwObj:		{
		"name":	"M-btn5_select",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image66.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og498.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[437,416,72,72]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":713,"y":679,"width":117,"height":117}}
};
image62.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj62Img\" src=\"images/M-btn6_select.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 72px; height: 72px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 499px; top: 416px; width: 72px; height: 72px; z-index: 159; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"62",
	htmlId:		"tobj62",
	bInsAnc:	1,
	cwObj:		{
		"name":	"M-btn6_select",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image62.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og513.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[499,416,72,72]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":813,"y":679,"width":117,"height":117}}
};
image68.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj68Img\" src=\"images/M-btn7_select.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 72px; height: 72px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 560px; top: 416px; width: 72px; height: 72px; z-index: 160; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"68",
	htmlId:		"tobj68",
	bInsAnc:	1,
	cwObj:		{
		"name":	"M-btn7_select",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image68.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og524.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[560,416,72,72]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":913,"y":679,"width":117,"height":117}}
};
og2602.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og2602",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
image2478.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj2478Img\" src=\"images/check_ok%402x-8.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 12px; height: 10px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 443px; top: 407px; width: 12px; height: 10px; z-index: 161; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"2478",
	htmlId:		"tobj2478",
	bInsAnc:	1,
	cwObj:		{
		"name":	"item6_1_ok",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image2478.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image1095.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ image2477.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[443,407,12,10]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":723,"y":664,"width":19,"height":16}}
};
image2479.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj2479Img\" src=\"images/check_ok%402x-8.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 12px; height: 10px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 475px; top: 407px; width: 12px; height: 10px; z-index: 162; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"2479",
	htmlId:		"tobj2479",
	bInsAnc:	1,
	cwObj:		{
		"name":	"item6_2_ok",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image2479.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image1097.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image1099.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ image2480.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[475,407,12,10]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":775,"y":664,"width":19,"height":16}}
};
image2494.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj2494Img\" src=\"images/check_ok%402x-8.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 12px; height: 10px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 513px; top: 407px; width: 12px; height: 10px; z-index: 163; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"2494",
	htmlId:		"tobj2494",
	bInsAnc:	1,
	cwObj:		{
		"name":	"item6_3_ok",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image2494.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image1101.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ image2485.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[513,407,12,10]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":837,"y":664,"width":19,"height":16}}
};
image2489.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj2489Img\" src=\"images/check_ok%402x-8.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 12px; height: 10px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 548px; top: 407px; width: 12px; height: 10px; z-index: 164; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"2489",
	htmlId:		"tobj2489",
	bInsAnc:	1,
	cwObj:		{
		"name":	"item6_4_ok",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image2489.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ image2490.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor1.equals('1'))image540.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor1.equals('2'))image538.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor1.equals('3'))image536.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor1.equals('4'))image534.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarmColor1.equals('1'))image1103.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarmColor1.equals('2'))image1105.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarmColor1.equals('3'))image1107.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarmColor1.equals('4'))image1109.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarmColor1.equals('1'))image1111.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarmColor1.equals('2'))image1113.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarmColor1.equals('3'))image1115.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarmColor1.equals('4'))image1117.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[548,407,12,10]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":893,"y":664,"width":19,"height":16}}
};
image2484.rcdData.att_PhoneLandscape = 
{
	innerHtml:	"<img id=\"tobj2484Img\" src=\"images/check_ok%402x-8.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 12px; height: 10px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 586px; top: 407px; width: 12px; height: 10px; z-index: 165; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"2484",
	htmlId:		"tobj2484",
	bInsAnc:	1,
	cwObj:		{
		"name":	"item6_5_ok",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image2484.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ image2495.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor1.equals('1'))image540.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor1.equals('2'))image538.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor1.equals('3'))image536.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor1.equals('4'))image534.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarmColor1.equals('1'))image1103.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarmColor1.equals('2'))image1105.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarmColor1.equals('3'))image1107.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarmColor1.equals('4'))image1109.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarmColor1.equals('1'))image1111.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarmColor1.equals('2'))image1113.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarmColor1.equals('3'))image1115.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarmColor1.equals('4'))image1117.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[586,407,12,10]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":956,"y":664,"width":19,"height":16}}
};
rcdObj.rcdData.att_PhoneLandscape = 
{
	font:	{"bold":0,"italic":0,"underline":0,"size":"12","color":null,"bgColor":null,"name":"'Arial',sans-serif","lineHeight":"1.15","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	4
};
rcdObj.pgWidth_PhoneLandscape = pgWidth_phoneLand;
rcdObj.preload_PhoneLandscape = ["images/cerrar%402x-8.png","images/cerrar_over%402x-8.png","images/check_over%402x-8.png","images/descargar_over%402x-8.png","images/descargar_pasivo%402x-8.png","images/escenario_festival%402x-8.png","images/fondo_casa%402x-8.png","images/footer%402x-8.png","images/reiniciar%402x-8.png","images/reiniciar_over%402x-8.png","images/titulo_2%402x-8.png","images/M-btn1_off.png","images/M-btn2_off.png","images/M-btn3_off.png","images/M-btn4_off.png","images/M-btn5_off.png","images/M-btn6_off.png","images/M-btn7_off.png","images/M-btn1_select.png","images/M-btn2_select.png","images/M-btn3_select.png","images/M-btn4_select.png","images/M-btn5_select.png","images/M-btn6_select.png","images/M-btn7_select.png","images/Mbarra_color_piel.png","images/Mpiel_1.png","images/Mpiel_2.png","images/Mpiel_3.png","images/Mpiel_4.png","images/Mbarra_cabello.png","images/Mcolor_cabello_1.png","images/Mcolor_cabello_2.png","images/Mcolor_cabello_3.png","images/Mcolor_cabello_4.png","images/Mcolor_cabello_5.png","images/Mcabello_1.png","images/Mcabello_2.png","images/Mcabello_3.png","images/Mcabello_4.png","images/Mcabello_5.png","images/Mbarra_ojos.png","images/Mcolor_ojos_1.png","images/Mcolor_ojos_2.png","images/Mcolor_ojos_3.png","images/Mojos_1.png","images/Mojos_2.png","images/Mojos_3.png","images/Mbarra_labios.png","images/Mcolor_labios_1.png","images/Mcolor_labios_2.png","images/Mcolor_labios_3.png","images/Mcolor_labios_4.png","images/Mlabios_1.png","images/Mlabios_2.png","images/Mlabios_3.png","images/Mlabios_4.png","images/Mbarra_ropa.png","images/Mfalda.png","images/Mpantalon_1.png","images/Mpantalon_2.png","images/Mplayera_budlight.png","images/Mplayera_corona.png","images/Mplayera_kanbal.png","images/Mvestido.png","images/Mbarra_accesorios.png","images/Mbolsa.png","images/Mlentes_1.png","images/Mlentes_1_1.png","images/Msombrero_mujer.png","images/Mvaso_1.png","images/Mvaso_2.png","images/Mbarra_zapatos.png","images/Mzapatos_1.png","images/Mzapatos_2.png","images/Mzapatos_3.png","images/Mzapatos_4.png","images/M1-tono_1.png","images/M1-tono_2.png","images/M1-tono_3.png","images/M1-tono_4.png","images/M1-brazo_1.png","images/M1-brazo_2.png","images/M1-brazo_3.png","images/M1-brazo_4.png","images/M2-cabello_1_color_1.png","images/M2-cabello_1_color_2.png","images/M2-cabello_1_color_3.png","images/M2-cabello_1_color_4.png","images/M2-cabello_1_color_5.png","images/M2-cabello_2_color_1.png","images/M2-cabello_2_color_2.png","images/M2-cabello_2_color_3.png","images/M2-cabello_2_color_4.png","images/M2-cabello_2_color_5.png","images/M2-cabello_3_color_1.png","images/M2-cabello_3_color_2.png","images/M2-cabello_3_color_3.png","images/M2-cabello_3_color_4.png","images/M2-cabello_3_color_5.png","images/M2-cabello_4_color_1.png","images/M2-cabello_4_color_2.png","images/M2-cabello_4_color_3.png","images/M2-cabello_4_color_4.png","images/M2-cabello_4_color_5.png","images/M2-cabello_5_color_1.png","images/M2-cabello_5_color_2.png","images/M2-cabello_5_color_3.png","images/M2-cabello_5_color_4.png","images/M2-cabello_5_color_5.png","images/M3-ojos_1_color_1.png","images/M3-ojos_1_color_2.png","images/M3-ojos_1_color_3.png","images/M3-ojos_2_color_1.png","images/M3-ojos_2_color_2.png","images/M3-ojos_2_color_3.png","images/M3-ojos_3_color_1.png","images/M3-ojos_3_color_2.png","images/M3-ojos_3_color_3.png","images/M4-labios_1_color_1.png","images/M4-labios_1_color_2.png","images/M4-labios_1_color_3.png","images/M4-labios_1_color_4.png","images/M4-labios_2_color_1.png","images/M4-labios_2_color_2.png","images/M4-labios_2_color_3.png","images/M4-labios_2_color_4.png","images/M4-labios_3_color_1.png","images/M4-labios_3_color_2.png","images/M4-labios_3_color_3.png","images/M4-labios_3_color_4.png","images/M4-labios_4_color_1.png","images/M4-labios_4_color_2.png","images/M4-labios_4_color_3.png","images/M4-labios_4_color_4.png","images/M5-jeans_1_1.png","images/M5-jeans_2.png","images/M5-playera_1_1.png","images/M5-playera_2_1.png","images/M5-playera_3_1.png","images/M5-vestido_1.png","images/M5-vestido_2.png","images/M6-bolsa.png","images/M6-lentes_armazon_1.png","images/M6-lentes_sol_1.png","images/M6-sombrero.png","images/M1-brazo_kaanbal_tono_1.png","images/M1-brazo_kaanbal_tono_2.png","images/M1-brazo_kaanbal_tono_3.png","images/M1-brazo_kaanbal_tono_4.png","images/M1-brazo_tono_1.png","images/M1-brazo_tono_2.png","images/M1-brazo_tono_3.png","images/M1-brazo_tono_4.png","images/M7-convers_1.png","images/M7-zapatos_1_1.png","images/M7-zapatos_2_1.png","images/check%402x-8%20copia.png","images/check_ok%402x-8.png","images/check_1%402x-8.png"];
rcdObj.pgStyle_PhoneLandscape = 'position: absolute; left: 0px; top: 0px; width: 785px; height: 514px; overflow: hidden; background-size: auto;'
rcdObj.backgrd_PhoneLandscape = ["#FFFFFF","",0,0,1];
