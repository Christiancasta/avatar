if (window.VarCurrentView) VarCurrentView.set('TabletLandscape');
function init_TabletLandscape() {
	if ( rcdObj.view != 'TabletLandscape' ) return;
	if (!isOPAPub() || isLOPopup()) window.init_page();
	preload(rcdObj['preload_'+rcdObj.view]);
}
function defineFuncs_TabletLandscape() {
	if ( rcdObj.view != 'TabletLandscape' ) return;
	try{
		if (window.initGEV)
		{
		 initGEV(0,swipeLeft,swipeRight);

		}
		} catch(e) { if (window.console) window.console.log(e); }	pageClick = n;
	pageRClick = n;
	pageKey = n;
}
image1385.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1385Img\" src=\"images/fondo_casa%402x-8.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 1009px; height: 568px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 0px; top: 0px; width: 1009px; height: 568px; z-index: 2; border-radius: 0px;",
	cssClasses:	"",
	id:		"1385",
	htmlId:		"tobj1385",
	bInsAnc:	0,
	cwObj:		{
		"name":	"fondo"
	},
	objData:	{"a":[0,32,0,[0,0,1009,568]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":0,"width":1280,"height":720}}
};
image1386.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1386Img\" src=\"images/titulo_2%402x-8.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 240px; height: 186px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 649px; top: 108px; width: 240px; height: 186px; z-index: 3; border-radius: 0px;",
	cssClasses:	"",
	id:		"1386",
	htmlId:		"tobj1386",
	bInsAnc:	0,
	cwObj:		{
		"name":	"titulo_2"
	},
	objData:	{"a":[0,32,0,[649,108,240,186]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":823,"y":137,"width":304,"height":236}}
};
image1387.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1387Img\" src=\"images/footer%402x-8.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 1009px; height: 117px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 0px; top: 537px; width: 1009px; height: 117px; z-index: 4; border-radius: 0px;",
	cssClasses:	"",
	id:		"1387",
	htmlId:		"tobj1387",
	bInsAnc:	0,
	cwObj:		{
		"name":	"footer"
	},
	objData:	{"a":[0,288,0,[0,537,1009,117]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":681,"width":1280,"height":148}}
};
textbutton1388.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div id=\"tobj1388inner\"><svg viewBox=\"0 0 71 76\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(35.5 38)\" style=\"\">\n	<path d=\"M 0 0 L 71 0 L 71 76 L 0 76 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-35.5, -38) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_1384_249\" x=\"0.22499999999999998\" y=\"0.22499999999999998\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"39\" height=\"41\" xlink:href=\"images/cerrar%402x-8.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 71 0 L 71 76 L 0 76 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1384_249&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-35.5, -38) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(35.5 38)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 938px; top: 47px; width: 71px; height: 76px; z-index: 192; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"1388",
	htmlId:		"tobj1388",
	bInsAnc:	false,
	cwObj:		{
		"name":	"btnClose",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkExitClose',actItem:function(){ {cleanupTitle('kaanbal_avatar.html'); trivExitPage('ObjLayerActionExit()',false);} 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33120,0,[938,47.00000000000001,71,76]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1190,"y":59,"width":90,"height":97},"bTriggerScreenRdrOnShow":false,"svgDataNormal":"<g transform=\"translate(35.5 38)\" style=\"\">\n\t<path d=\"M 0 0 L 71 0 L 71 76 L 0 76 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-35.5, -38) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_1384_249\" x=\"0.22499999999999998\" y=\"0.22499999999999998\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"39\" height=\"41\" xlink:href=\"images/cerrar%402x-8.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 71 0 L 71 76 L 0 76 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1384_249&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-35.5, -38) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(35.5 38)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(35.5 38)\" style=\"\">\n\t<path d=\"M 0 0 L 71 0 L 71 76 L 0 76 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-35.5, -38) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_1384_251\" x=\"-0.07499999999999996\" y=\"-0.07499999999999996\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"81\" height=\"87\" xlink:href=\"images/cerrar_over%402x-8.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 71 0 L 71 76 L 0 76 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1384_251&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-35.5, -38) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(35.5 38)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(35.5 38)\" style=\"\">\n\t<path d=\"M 0 0 L 71 0 L 71 76 L 0 76 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-35.5, -38) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_1384_253\" x=\"0.22499999999999998\" y=\"0.22499999999999998\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"39\" height=\"41\" xlink:href=\"images/cerrar%402x-8.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 71 0 L 71 76 L 0 76 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1384_253&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-35.5, -38) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(35.5 38)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(35.5 38)\" style=\"\">\n\t<path d=\"M 0 0 L 71 0 L 71 76 L 0 76 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-35.5, -38) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_1384_255\" x=\"0.22499999999999998\" y=\"0.22499999999999998\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"39\" height=\"41\" xlink:href=\"images/cerrar%402x-8.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 71 0 L 71 76 L 0 76 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1384_255&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-35.5, -38) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(35.5 38)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled"}
};
textbutton1390.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div id=\"tobj1390inner\"><svg viewBox=\"0 0 84 86\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(42 43)\" style=\"\">\n	<path d=\"M 0 0 L 84 0 L 84 86 L 0 86 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-42, -43) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_1384_257\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"84\" height=\"86\" xlink:href=\"images/check%402x-8%20copia.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 84 0 L 84 86 L 0 86 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1384_257&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-42, -43) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(42 43)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 933px; top: 153px; width: 84px; height: 86px; z-index: 193; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"1390",
	htmlId:		"tobj1390",
	bInsAnc:	false,
	cwObj:		{
		"name":	"btnOk",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og2047.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ textbutton1390.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ textbutton1388.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ textbutton1392.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1866.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1802.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1521.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1547.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1655.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1621.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1707.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og2160.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1742.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1780.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1569.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1673.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1635.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og2126.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og2607.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33120,0,[933,153,84,86]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1184,"y":194,"width":107,"height":109},"bTriggerScreenRdrOnShow":false,"svgDataNormal":"<g transform=\"translate(42 43)\" style=\"\">\n\t<path d=\"M 0 0 L 84 0 L 84 86 L 0 86 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-42, -43) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_1384_257\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"84\" height=\"86\" xlink:href=\"images/check%402x-8%20copia.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 84 0 L 84 86 L 0 86 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1384_257&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-42, -43) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(42 43)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(42 43)\" style=\"\">\n\t<path d=\"M 0 0 L 84 0 L 84 86 L 0 86 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-42, -43) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_1384_259\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"84\" height=\"86\" xlink:href=\"images/check_over%402x-8.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 84 0 L 84 86 L 0 86 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1384_259&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-42, -43) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(42 43)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(42 43)\" style=\"\">\n\t<path d=\"M 0 0 L 84 0 L 84 86 L 0 86 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-42, -43) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_1384_261\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"84\" height=\"86\" xlink:href=\"images/check%402x-8%20copia.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 84 0 L 84 86 L 0 86 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1384_261&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-42, -43) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(42 43)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(42 43)\" style=\"\">\n\t<path d=\"M 0 0 L 84 0 L 84 86 L 0 86 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-42, -43) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_1384_263\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"84\" height=\"86\" xlink:href=\"images/check%402x-8%20copia.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 84 0 L 84 86 L 0 86 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1384_263&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-42, -43) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(42 43)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled"}
};
textbutton1392.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div id=\"tobj1392inner\"><svg viewBox=\"0 0 65 71\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(32.5 35.5)\" style=\"\">\n	<path d=\"M 0 0 L 65 0 L 65 71 L 0 71 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-32.5, -35.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_1384_265\" x=\"0.22499999999999998\" y=\"0.22499999999999998\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"35\" height=\"39\" xlink:href=\"images/reiniciar%402x-8.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 65 0 L 65 71 L 0 71 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1384_265&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-32.5, -35.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(32.5 35.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 940px; top: 103px; width: 65px; height: 71px; z-index: 194; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"1392",
	htmlId:		"tobj1392",
	bInsAnc:	false,
	cwObj:		{
		"name":	"btnReload",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkResetVars',actItem:function(){ ResetVars(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1417.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1420.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1423.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1426.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1466.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1472.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1478.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1484.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1439.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1443.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1447.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1496.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1501.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1506.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1511.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1451.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1454.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1458.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og2226.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og2227.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og2228.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og2229.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1461.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1429.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1434.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1516.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33120,0,[940,103,65,71]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1193,"y":131,"width":82,"height":90},"bTriggerScreenRdrOnShow":false,"svgDataNormal":"<g transform=\"translate(32.5 35.5)\" style=\"\">\n\t<path d=\"M 0 0 L 65 0 L 65 71 L 0 71 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-32.5, -35.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_1384_265\" x=\"0.22499999999999998\" y=\"0.22499999999999998\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"35\" height=\"39\" xlink:href=\"images/reiniciar%402x-8.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 65 0 L 65 71 L 0 71 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1384_265&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-32.5, -35.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(32.5 35.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(32.5 35.5)\" style=\"\">\n\t<path d=\"M 0 0 L 65 0 L 65 71 L 0 71 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-32.5, -35.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_1384_267\" x=\"-0.07499999999999996\" y=\"-0.07499999999999996\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"74\" height=\"81\" xlink:href=\"images/reiniciar_over%402x-8.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 65 0 L 65 71 L 0 71 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1384_267&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-32.5, -35.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(32.5 35.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(32.5 35.5)\" style=\"\">\n\t<path d=\"M 0 0 L 65 0 L 65 71 L 0 71 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-32.5, -35.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_1384_269\" x=\"0.22499999999999998\" y=\"0.22499999999999998\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"35\" height=\"39\" xlink:href=\"images/reiniciar%402x-8.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 65 0 L 65 71 L 0 71 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1384_269&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-32.5, -35.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(32.5 35.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(32.5 35.5)\" style=\"\">\n\t<path d=\"M 0 0 L 65 0 L 65 71 L 0 71 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-32.5, -35.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_1384_271\" x=\"0.22499999999999998\" y=\"0.22499999999999998\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"35\" height=\"39\" xlink:href=\"images/reiniciar%402x-8.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 65 0 L 65 71 L 0 71 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1384_271&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-32.5, -35.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(32.5 35.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled"}
};
og2047.rcdData.att_TabletLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og2047",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
textbutton2041.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div id=\"tobj2041inner\"><svg viewBox=\"0 0 71 76\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(35.5 38)\" style=\"\">\n	<path d=\"M 0 0 L 71 0 L 71 76 L 0 76 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-35.5, -38) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_1384_273\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"71\" height=\"76\" xlink:href=\"images/descargar_pasivo%402x-8.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 71 0 L 71 76 L 0 76 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1384_273&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-35.5, -38) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(35.5 38)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: hidden; position: absolute; left: 914px; top: 110px; width: 71px; height: 76px; z-index: 195; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"2041",
	htmlId:		"tobj2041",
	bInsAnc:	false,
	cwObj:		{
		"name":	"btnDescargar",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ textbutton2041.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1802.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1866.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:300,name:'OnMClkRunJS',actItem:function(){ runJS2042();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33088,0,[914,110,71,76]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1160,"y":139,"width":90,"height":97},"bTriggerScreenRdrOnShow":false,"svgDataNormal":"<g transform=\"translate(35.5 38)\" style=\"\">\n\t<path d=\"M 0 0 L 71 0 L 71 76 L 0 76 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-35.5, -38) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_1384_273\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"71\" height=\"76\" xlink:href=\"images/descargar_pasivo%402x-8.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 71 0 L 71 76 L 0 76 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1384_273&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-35.5, -38) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(35.5 38)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(35.5 38)\" style=\"\">\n\t<path d=\"M 0 0 L 71 0 L 71 76 L 0 76 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-35.5, -38) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_1384_275\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"71\" height=\"76\" xlink:href=\"images/descargar_over%402x-8.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 71 0 L 71 76 L 0 76 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1384_275&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-35.5, -38) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(35.5 38)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(35.5 38)\" style=\"\">\n\t<path d=\"M 0 0 L 71 0 L 71 76 L 0 76 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-35.5, -38) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_1384_277\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"71\" height=\"76\" xlink:href=\"images/descargar_pasivo%402x-8.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 71 0 L 71 76 L 0 76 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1384_277&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-35.5, -38) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(35.5 38)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(35.5 38)\" style=\"\">\n\t<path d=\"M 0 0 L 71 0 L 71 76 L 0 76 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-35.5, -38) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_1384_279\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"71\" height=\"76\" xlink:href=\"images/descargar_pasivo%402x-8.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 71 0 L 71 76 L 0 76 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1384_279&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-35.5, -38) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(35.5 38)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled"}
};
image2043.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj2043Img\" src=\"images/escenario_festival%402x-8.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 1009px; height: 568px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 0px; top: 0px; width: 1009px; height: 568px; z-index: 5; border-radius: 0px;",
	cssClasses:	"",
	id:		"2043",
	htmlId:		"tobj2043",
	bInsAnc:	0,
	cwObj:		{
		"name":	"escenario_festival@2x-8"
	},
	objData:	{"a":[0,0,0,[0,0,1009,568]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":0,"width":1280,"height":720}}
};
og1417.rcdData.att_TabletLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og1417",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
image1418.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1418Img\" src=\"images/H1-tono_piel_1.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 106px; height: 367px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 487px; top: 155px; width: 106px; height: 367px; z-index: 6; border-radius: 0px;",
	cssClasses:	"",
	id:		"1418",
	htmlId:		"tobj1418",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H1-tono_piel_1"
	},
	objData:	{"a":[0,256,0,[487,155,106,367]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":618,"y":197,"width":134,"height":466}}
};
image1419.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1419Img\" src=\"images/H1-brazo_2_tono_1.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 40px; height: 142px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 462px; top: 224px; width: 40px; height: 142px; z-index: 7; border-radius: 0px;",
	cssClasses:	"",
	id:		"1419",
	htmlId:		"tobj1419",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H1-brazo_2_tono_1"
	},
	objData:	{"a":[0,256,0,[462,224,40,142]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":586,"y":284,"width":51,"height":180}}
};
og1420.rcdData.att_TabletLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og1420",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
image1421.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1421Img\" src=\"images/H1-tono_piel_2.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 106px; height: 367px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 487px; top: 155px; width: 106px; height: 367px; z-index: 8; border-radius: 0px;",
	cssClasses:	"",
	id:		"1421",
	htmlId:		"tobj1421",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H1-tono_piel_2"
	},
	objData:	{"a":[0,256,0,[487,155,106,367]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":618,"y":197,"width":134,"height":466}}
};
image1422.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1422Img\" src=\"images/H1-brazo_2_tono_2.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 40px; height: 142px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 461px; top: 224px; width: 40px; height: 142px; z-index: 9; border-radius: 0px;",
	cssClasses:	"",
	id:		"1422",
	htmlId:		"tobj1422",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H1-brazo_2_tono_2"
	},
	objData:	{"a":[0,256,0,[461,224,40,142]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":585,"y":284,"width":51,"height":180}}
};
og1423.rcdData.att_TabletLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og1423",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
image1424.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1424Img\" src=\"images/H1-tono_piel_3.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 106px; height: 367px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 487px; top: 155px; width: 106px; height: 367px; z-index: 10; border-radius: 0px;",
	cssClasses:	"",
	id:		"1424",
	htmlId:		"tobj1424",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H1-tono_piel_3"
	},
	objData:	{"a":[0,256,0,[487,155,106,367]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":618,"y":197,"width":134,"height":466}}
};
image1425.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1425Img\" src=\"images/H1-brazo_2_tono_3.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 40px; height: 142px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 462px; top: 224px; width: 40px; height: 142px; z-index: 11; border-radius: 0px;",
	cssClasses:	"",
	id:		"1425",
	htmlId:		"tobj1425",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H1-brazo_2_tono_3"
	},
	objData:	{"a":[0,256,0,[462,224,40,142]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":586,"y":284,"width":51,"height":180}}
};
og1426.rcdData.att_TabletLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og1426",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
image1427.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1427Img\" src=\"images/H1-tono_piel_4.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 106px; height: 367px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 487px; top: 155px; width: 106px; height: 367px; z-index: 12; border-radius: 0px;",
	cssClasses:	"",
	id:		"1427",
	htmlId:		"tobj1427",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H1-tono_piel_4"
	},
	objData:	{"a":[0,256,0,[487,155,106,367]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":618,"y":197,"width":134,"height":466}}
};
image1428.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1428Img\" src=\"images/H1-brazo_2_tono_4.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 40px; height: 142px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 462px; top: 224px; width: 40px; height: 142px; z-index: 13; border-radius: 0px;",
	cssClasses:	"",
	id:		"1428",
	htmlId:		"tobj1428",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H1-brazo_2_tono_4"
	},
	objData:	{"a":[0,256,0,[462,224,40,142]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":586,"y":284,"width":51,"height":180}}
};
og1429.rcdData.att_TabletLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og1429",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
image1430.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1430Img\" src=\"images/H1-brazo_hombre_vaso_1-1.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 82px; height: 73px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 422px; top: 222px; width: 82px; height: 73px; z-index: 14; border-radius: 0px;",
	cssClasses:	"",
	id:		"1430",
	htmlId:		"tobj1430",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H1-brazo_hombre_vaso_1-1"
	},
	objData:	{"a":[0,256,0,[422,222,82,73]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":535,"y":281,"width":104,"height":93}}
};
image1431.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1431Img\" src=\"images/H1-brazo_hombre_vaso_1-2.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 82px; height: 74px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 422px; top: 222px; width: 82px; height: 74px; z-index: 15; border-radius: 0px;",
	cssClasses:	"",
	id:		"1431",
	htmlId:		"tobj1431",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H1-brazo_hombre_vaso_1-2"
	},
	objData:	{"a":[0,256,0,[422,222,82,74]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":535,"y":281,"width":104,"height":94}}
};
image1432.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1432Img\" src=\"images/H1-brazo_hombre_vaso_1-3.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 82px; height: 74px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 422px; top: 222px; width: 82px; height: 74px; z-index: 16; border-radius: 0px;",
	cssClasses:	"",
	id:		"1432",
	htmlId:		"tobj1432",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H1-brazo_hombre_vaso_1-3"
	},
	objData:	{"a":[0,256,0,[422,222,82,74]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":535,"y":281,"width":104,"height":94}}
};
image1433.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1433Img\" src=\"images/H1-brazo_hombre_vaso_1-4.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 82px; height: 74px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 422px; top: 222px; width: 82px; height: 74px; z-index: 17; border-radius: 0px;",
	cssClasses:	"",
	id:		"1433",
	htmlId:		"tobj1433",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H1-brazo_hombre_vaso_1-4"
	},
	objData:	{"a":[0,256,0,[422,222,82,74]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":535,"y":281,"width":104,"height":94}}
};
image2347.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj2347Img\" src=\"images/H1-brazo_hombre_vaso_Outfit2-1.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 90px; height: 86px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 418px; top: 214px; width: 90px; height: 86px; z-index: 18; border-radius: 0px;",
	cssClasses:	"",
	id:		"2347",
	htmlId:		"tobj2347",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H1-brazo_hombre_vaso_Outfit2-1"
	},
	objData:	{"a":[0,256,0,[418,214,90,86]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":530,"y":272,"width":114,"height":109}}
};
image2349.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj2349Img\" src=\"images/H1-brazo_hombre_vaso_Outfit2-2.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 90px; height: 85px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 418px; top: 214px; width: 90px; height: 85px; z-index: 19; border-radius: 0px;",
	cssClasses:	"",
	id:		"2349",
	htmlId:		"tobj2349",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H1-brazo_hombre_vaso_Outfit2-2"
	},
	objData:	{"a":[0,256,0,[418,214,90,85]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":530,"y":272,"width":114,"height":108}}
};
image2351.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj2351Img\" src=\"images/H1-brazo_hombre_vaso_Outfit2-3.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 90px; height: 85px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 418px; top: 214px; width: 90px; height: 85px; z-index: 20; border-radius: 0px;",
	cssClasses:	"",
	id:		"2351",
	htmlId:		"tobj2351",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H1-brazo_hombre_vaso_Outfit2-3"
	},
	objData:	{"a":[0,256,0,[418,214,90,85]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":530,"y":272,"width":114,"height":108}}
};
image2353.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj2353Img\" src=\"images/H1-brazo_hombre_vaso_Outfit2-4.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 90px; height: 85px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 418px; top: 214px; width: 90px; height: 85px; z-index: 21; border-radius: 0px;",
	cssClasses:	"",
	id:		"2353",
	htmlId:		"tobj2353",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H1-brazo_hombre_vaso_Outfit2-4"
	},
	objData:	{"a":[0,256,0,[418,214,90,85]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":530,"y":272,"width":114,"height":108}}
};
image2339.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj2339Img\" src=\"images/H1-brazo_hombre_vaso_Outfit1-1.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 83px; height: 79px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 423px; top: 218px; width: 83px; height: 79px; z-index: 22; border-radius: 0px;",
	cssClasses:	"",
	id:		"2339",
	htmlId:		"tobj2339",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H1-brazo_hombre_vaso_Outfit1-1"
	},
	objData:	{"a":[0,256,0,[423,218,83,79]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":537,"y":276,"width":105,"height":100}}
};
image2341.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj2341Img\" src=\"images/H1-brazo_hombre_vaso_Outfit1-2.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 83px; height: 79px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 423px; top: 218px; width: 83px; height: 79px; z-index: 23; border-radius: 0px;",
	cssClasses:	"",
	id:		"2341",
	htmlId:		"tobj2341",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H1-brazo_hombre_vaso_Outfit1-2"
	},
	objData:	{"a":[0,256,0,[423,218,83,79]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":537,"y":276,"width":105,"height":100}}
};
image2343.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj2343Img\" src=\"images/H1-brazo_hombre_vaso_Outfit1-3.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 83px; height: 79px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 423px; top: 218px; width: 83px; height: 79px; z-index: 24; border-radius: 0px;",
	cssClasses:	"",
	id:		"2343",
	htmlId:		"tobj2343",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H1-brazo_hombre_vaso_Outfit1-3"
	},
	objData:	{"a":[0,256,0,[423,218,83,79]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":537,"y":276,"width":105,"height":100}}
};
image2345.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj2345Img\" src=\"images/H1-brazo_hombre_vaso_Outfit1-4.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 83px; height: 79px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 423px; top: 218px; width: 83px; height: 79px; z-index: 25; border-radius: 0px;",
	cssClasses:	"",
	id:		"2345",
	htmlId:		"tobj2345",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H1-brazo_hombre_vaso_Outfit1-4"
	},
	objData:	{"a":[0,256,0,[423,218,83,79]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":537,"y":276,"width":105,"height":100}}
};
og1434.rcdData.att_TabletLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og1434",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
image1435.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1435Img\" src=\"images/H1-brazo_hombre_vaso_2-1.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 82px; height: 74px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 422px; top: 221px; width: 82px; height: 74px; z-index: 26; border-radius: 0px;",
	cssClasses:	"",
	id:		"1435",
	htmlId:		"tobj1435",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H1-brazo_hombre_vaso_2-1"
	},
	objData:	{"a":[0,256,0,[422,221,82,74]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":535,"y":280,"width":104,"height":94}}
};
image1436.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1436Img\" src=\"images/H1-brazo_hombre_vaso_2-2.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 82px; height: 74px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 422px; top: 221px; width: 82px; height: 74px; z-index: 27; border-radius: 0px;",
	cssClasses:	"",
	id:		"1436",
	htmlId:		"tobj1436",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H1-brazo_hombre_vaso_2-2"
	},
	objData:	{"a":[0,256,0,[422,221,82,74]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":535,"y":280,"width":104,"height":94}}
};
image1437.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1437Img\" src=\"images/H1-brazo_hombre_vaso_2-3.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 82px; height: 74px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 422px; top: 221px; width: 82px; height: 74px; z-index: 28; border-radius: 0px;",
	cssClasses:	"",
	id:		"1437",
	htmlId:		"tobj1437",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H1-brazo_hombre_vaso_2-3"
	},
	objData:	{"a":[0,256,0,[422,221,82,74]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":535,"y":280,"width":104,"height":94}}
};
image1438.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1438Img\" src=\"images/H1-brazo_hombre_vaso_2-4.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 82px; height: 74px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 422px; top: 221px; width: 82px; height: 74px; z-index: 29; border-radius: 0px;",
	cssClasses:	"",
	id:		"1438",
	htmlId:		"tobj1438",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H1-brazo_hombre_vaso_2-4"
	},
	objData:	{"a":[0,256,0,[422,221,82,74]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":535,"y":280,"width":104,"height":94}}
};
og1439.rcdData.att_TabletLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og1439",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
image1440.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1440Img\" src=\"images/H4-ojos_1_color1.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 23px; height: 10px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 515px; top: 170px; width: 23px; height: 10px; z-index: 30; border-radius: 0px;",
	cssClasses:	"",
	id:		"1440",
	htmlId:		"tobj1440",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H4-ojos_1_color1"
	},
	objData:	{"a":[0,256,0,[515,170,23,10]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":653,"y":216,"width":29,"height":13}}
};
image1441.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1441Img\" src=\"images/H4-ojos_1_color2.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 23px; height: 11px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 515px; top: 170px; width: 23px; height: 11px; z-index: 31; border-radius: 0px;",
	cssClasses:	"",
	id:		"1441",
	htmlId:		"tobj1441",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H4-ojos_1_color2"
	},
	objData:	{"a":[0,256,0,[515,170,23,11]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":653,"y":216,"width":29,"height":14}}
};
image1442.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1442Img\" src=\"images/H4-ojos_1_color3.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 23px; height: 11px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 515px; top: 170px; width: 23px; height: 11px; z-index: 32; border-radius: 0px;",
	cssClasses:	"",
	id:		"1442",
	htmlId:		"tobj1442",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H4-ojos_1_color3"
	},
	objData:	{"a":[0,256,0,[515,170,23,11]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":653,"y":216,"width":29,"height":14}}
};
og1443.rcdData.att_TabletLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og1443",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
image1444.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1444Img\" src=\"images/H4-ojos_2_color1.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 23px; height: 9px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 515px; top: 172px; width: 23px; height: 9px; z-index: 33; border-radius: 0px;",
	cssClasses:	"",
	id:		"1444",
	htmlId:		"tobj1444",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H4-ojos_2_color1"
	},
	objData:	{"a":[0,256,0,[515,172,23,9]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":653,"y":218,"width":29,"height":12}}
};
image1445.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1445Img\" src=\"images/H4-ojos_2_color2.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 23px; height: 9px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 515px; top: 172px; width: 23px; height: 9px; z-index: 34; border-radius: 0px;",
	cssClasses:	"",
	id:		"1445",
	htmlId:		"tobj1445",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H4-ojos_2_color2"
	},
	objData:	{"a":[0,256,0,[515,172,23,9]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":653,"y":218,"width":29,"height":12}}
};
image1446.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1446Img\" src=\"images/H4-ojos_2_color3.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 23px; height: 9px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 515px; top: 172px; width: 23px; height: 9px; z-index: 35; border-radius: 0px;",
	cssClasses:	"",
	id:		"1446",
	htmlId:		"tobj1446",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H4-ojos_2_color3"
	},
	objData:	{"a":[0,256,0,[515,172,23,9]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":653,"y":218,"width":29,"height":12}}
};
og1447.rcdData.att_TabletLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og1447",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
image1448.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1448Img\" src=\"images/H4-ojos_3_color1.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 21px; height: 12px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 516px; top: 169px; width: 21px; height: 12px; z-index: 36; border-radius: 0px;",
	cssClasses:	"",
	id:		"1448",
	htmlId:		"tobj1448",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H4-ojos_3_color1"
	},
	objData:	{"a":[0,256,0,[516,169,21,12]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":654,"y":214,"width":27,"height":15}}
};
image1449.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1449Img\" src=\"images/H4-ojos_3_color2.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 21px; height: 12px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 516px; top: 169px; width: 21px; height: 12px; z-index: 37; border-radius: 0px;",
	cssClasses:	"",
	id:		"1449",
	htmlId:		"tobj1449",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H4-ojos_3_color2"
	},
	objData:	{"a":[0,256,0,[516,169,21,12]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":654,"y":214,"width":27,"height":15}}
};
image1450.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1450Img\" src=\"images/H4-ojos_3_color3.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 21px; height: 12px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 516px; top: 169px; width: 21px; height: 12px; z-index: 38; border-radius: 0px;",
	cssClasses:	"",
	id:		"1450",
	htmlId:		"tobj1450",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H4-ojos_3_color3"
	},
	objData:	{"a":[0,256,0,[516,169,21,12]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":654,"y":214,"width":27,"height":15}}
};
og1451.rcdData.att_TabletLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og1451",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
image1452.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1452Img\" src=\"images/H6-jeans.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 67px; height: 182px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 497px; top: 305px; width: 67px; height: 182px; z-index: 39; border-radius: 0px;",
	cssClasses:	"",
	id:		"1452",
	htmlId:		"tobj1452",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H6-jeans"
	},
	objData:	{"a":[0,256,0,[497,305,67,182]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":630,"y":387,"width":85,"height":231}}
};
image1453.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1453Img\" src=\"images/H6-oufit_6.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 67px; height: 89px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 496px; top: 306px; width: 67px; height: 89px; z-index: 40; border-radius: 0px;",
	cssClasses:	"",
	id:		"1453",
	htmlId:		"tobj1453",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H6-oufit_6"
	},
	objData:	{"a":[0,256,0,[496,306,67,89]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":629,"y":388,"width":85,"height":113}}
};
og1454.rcdData.att_TabletLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og1454",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
image1455.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1455Img\" src=\"images/H6-playera_1_2.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 101px; height: 103px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 478px; top: 214px; width: 101px; height: 103px; z-index: 41; border-radius: 0px;",
	cssClasses:	"",
	id:		"1455",
	htmlId:		"tobj1455",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H6-playera_1_2"
	},
	objData:	{"a":[0,256,0,[478,214,101,103]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":606,"y":272,"width":128,"height":131}}
};
image1456.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1456Img\" src=\"images/H6-playera_2_2.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 101px; height: 103px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 478px; top: 214px; width: 101px; height: 103px; z-index: 42; border-radius: 0px;",
	cssClasses:	"",
	id:		"1456",
	htmlId:		"tobj1456",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H6-playera_2_2"
	},
	objData:	{"a":[0,256,0,[478,214,101,103]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":606,"y":272,"width":128,"height":131}}
};
image1457.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1457Img\" src=\"images/H6-playera_3_2.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 101px; height: 104px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 478px; top: 214px; width: 101px; height: 104px; z-index: 43; border-radius: 0px;",
	cssClasses:	"",
	id:		"1457",
	htmlId:		"tobj1457",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H6-playera_3_2"
	},
	objData:	{"a":[0,256,0,[478,214,101,104]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":606,"y":272,"width":128,"height":132}}
};
og1458.rcdData.att_TabletLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og1458",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
image2355.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj2355Img\" src=\"images/H6-brazo_oufit_4.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 35px; height: 115px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 468px; top: 220px; width: 35px; height: 115px; z-index: 44; transform: rotate(2deg); border-radius: 0px;; behavior:url(-ms-transform.htc); -moz-transform:rotate(2deg) ; -webkit-transform:rotate(2deg) ; -o-transform:rotate(2deg) ; -ms-transform:rotate(2deg) ; filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.9993908270190958, M12=-0.03489949670250097, M21=0.03489949670250097, M22=0.9993908270190958) ; -ms-filter: progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=0.9993908270190958, M12=-0.03489949670250097, M21=0.03489949670250097, M22=0.9993908270190958) ",
	cssClasses:	"",
	id:		"2355",
	htmlId:		"tobj2355",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H6-brazo_oufit_4"
	},
	objData:	{"a":[0,0,0,[468,220,35,115]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":2,"anchorX":50,"anchorY":50},"desktopRect":{"x":594,"y":279,"width":45,"height":146}}
};
image2357.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj2357Img\" src=\"images/H6-brazo_oufit_5.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 33px; height: 77px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 473px; top: 220px; width: 33px; height: 77px; z-index: 45; border-radius: 0px;",
	cssClasses:	"",
	id:		"2357",
	htmlId:		"tobj2357",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H6-brazo_oufit_5"
	},
	objData:	{"a":[0,256,0,[473,220,33,77]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":600,"y":279,"width":42,"height":98}}
};
image1459.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1459Img\" src=\"images/H6-oufit_4.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 107px; height: 363px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 483px; top: 207px; width: 107px; height: 363px; z-index: 46; border-radius: 0px;",
	cssClasses:	"",
	id:		"1459",
	htmlId:		"tobj1459",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H6-oufit_4"
	},
	objData:	{"a":[0,0,0,[483,207,107,363]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":613,"y":263,"width":136,"height":461}}
};
image1460.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1460Img\" src=\"images/H6-oufit_5.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 89px; height: 277px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 493px; top: 212px; width: 89px; height: 277px; z-index: 47; border-radius: 0px;",
	cssClasses:	"",
	id:		"1460",
	htmlId:		"tobj1460",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H6-oufit_5"
	},
	objData:	{"a":[0,0,0,[493,212,89,277]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":626,"y":269,"width":113,"height":352}}
};
og1461.rcdData.att_TabletLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og1461",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
image1462.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1462Img\" src=\"images/H7-mochila_hombre.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 65px; height: 65px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 495px; top: 212px; width: 65px; height: 65px; z-index: 48; border-radius: 0px;",
	cssClasses:	"",
	id:		"1462",
	htmlId:		"tobj1462",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H7-mochila_hombre"
	},
	objData:	{"a":[0,256,0,[495,212,65,65]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":628,"y":269,"width":83,"height":82}}
};
image1463.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1463Img\" src=\"images/M6-lentes_armazon_1.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 35px; height: 10px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 509px; top: 175px; width: 35px; height: 10px; z-index: 49; border-radius: 0px;",
	cssClasses:	"",
	id:		"1463",
	htmlId:		"tobj1463",
	bInsAnc:	0,
	cwObj:		{
		"name":	"M6-lentes_1"
	},
	objData:	{"a":[0,256,0,[509,175,35,10]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":646,"y":222,"width":45,"height":13}}
};
image1464.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1464Img\" src=\"images/M6-lentes_sol_1.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 35px; height: 10px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 509px; top: 173px; width: 35px; height: 10px; z-index: 50; border-radius: 0px;",
	cssClasses:	"",
	id:		"1464",
	htmlId:		"tobj1464",
	bInsAnc:	0,
	cwObj:		{
		"name":	"M6-lentes_2"
	},
	objData:	{"a":[0,256,0,[509,173,35,10]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":646,"y":220,"width":44,"height":13}}
};
image1465.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1465Img\" src=\"images/H7-sombrero_1.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 68px; height: 25px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 491px; top: 142px; width: 68px; height: 25px; z-index: 196; border-radius: 0px;",
	cssClasses:	"",
	id:		"1465",
	htmlId:		"tobj1465",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H7-sombrero_1"
	},
	objData:	{"a":[0,320,0,[491,142,68,25]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":623,"y":180,"width":86,"height":32}}
};
og1466.rcdData.att_TabletLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og1466",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
image1467.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1467Img\" src=\"images/H2-cabello_1_color_1_1.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 36px; height: 34px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 508px; top: 148px; width: 36px; height: 34px; z-index: 51; border-radius: 0px;",
	cssClasses:	"",
	id:		"1467",
	htmlId:		"tobj1467",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H2-cabello_1_color_1_1"
	},
	objData:	{"a":[0,256,0,[508,148,36,34]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":644,"y":188,"width":46,"height":43}}
};
image1468.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1468Img\" src=\"images/H2-cabello_1_color_2_1.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 36px; height: 34px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 508px; top: 148px; width: 36px; height: 34px; z-index: 52; border-radius: 0px;",
	cssClasses:	"",
	id:		"1468",
	htmlId:		"tobj1468",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H2-cabello_1_color_2_1"
	},
	objData:	{"a":[0,256,0,[508,148,36,34]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":644,"y":188,"width":46,"height":43}}
};
image1469.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1469Img\" src=\"images/H2-cabello_1_color_3.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 36px; height: 34px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 508px; top: 148px; width: 36px; height: 34px; z-index: 53; border-radius: 0px;",
	cssClasses:	"",
	id:		"1469",
	htmlId:		"tobj1469",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H2-cabello_1_color_3"
	},
	objData:	{"a":[0,256,0,[508,148,36,34]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":644,"y":188,"width":46,"height":43}}
};
image1470.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1470Img\" src=\"images/H2-cabello_1_color_4.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 36px; height: 34px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 508px; top: 148px; width: 36px; height: 34px; z-index: 54; border-radius: 0px;",
	cssClasses:	"",
	id:		"1470",
	htmlId:		"tobj1470",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H2-cabello_1_color_4"
	},
	objData:	{"a":[0,256,0,[508,148,36,34]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":644,"y":188,"width":46,"height":43}}
};
og1472.rcdData.att_TabletLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og1472",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
image1473.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1473Img\" src=\"images/H2-cabello_2_color_1_1.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 35px; height: 29px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 508px; top: 150px; width: 35px; height: 29px; z-index: 55; border-radius: 0px;",
	cssClasses:	"",
	id:		"1473",
	htmlId:		"tobj1473",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H2-cabello_2_color_1_1"
	},
	objData:	{"a":[0,256,0,[508,150,35,29]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":645,"y":190,"width":45,"height":37}}
};
image1474.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1474Img\" src=\"images/H2-cabello_2_color_2_1.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 35px; height: 30px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 508px; top: 150px; width: 35px; height: 30px; z-index: 56; border-radius: 0px;",
	cssClasses:	"",
	id:		"1474",
	htmlId:		"tobj1474",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H2-cabello_2_color_2_1"
	},
	objData:	{"a":[0,256,0,[508,150,35,30]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":645,"y":190,"width":45,"height":38}}
};
image1475.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1475Img\" src=\"images/H2-cabello_2_color_3.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 35px; height: 30px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 508px; top: 150px; width: 35px; height: 30px; z-index: 57; border-radius: 0px;",
	cssClasses:	"",
	id:		"1475",
	htmlId:		"tobj1475",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H2-cabello_2_color_3"
	},
	objData:	{"a":[0,256,0,[508,150,35,30]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":645,"y":190,"width":45,"height":38}}
};
image1476.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1476Img\" src=\"images/H2-cabello_2_color_4.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 35px; height: 30px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 508px; top: 150px; width: 35px; height: 30px; z-index: 58; border-radius: 0px;",
	cssClasses:	"",
	id:		"1476",
	htmlId:		"tobj1476",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H2-cabello_2_color_4"
	},
	objData:	{"a":[0,256,0,[508,150,35,30]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":645,"y":190,"width":45,"height":38}}
};
og1478.rcdData.att_TabletLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og1478",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
image1479.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1479Img\" src=\"images/H2-cabello_3_color_1_1.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 52px; height: 65px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 501px; top: 142px; width: 52px; height: 65px; z-index: 59; border-radius: 0px;",
	cssClasses:	"",
	id:		"1479",
	htmlId:		"tobj1479",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H2-cabello_3_color_1_1"
	},
	objData:	{"a":[0,256,0,[501,142,52,65]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":635,"y":180,"width":66,"height":83}}
};
image1480.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1480Img\" src=\"images/H2-cabello_3_color_2_1.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 52px; height: 65px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 501px; top: 142px; width: 52px; height: 65px; z-index: 60; border-radius: 0px;",
	cssClasses:	"",
	id:		"1480",
	htmlId:		"tobj1480",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H2-cabello_3_color_2_1"
	},
	objData:	{"a":[0,256,0,[501,142,52,65]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":635,"y":180,"width":66,"height":83}}
};
image1481.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1481Img\" src=\"images/H2-cabello_3_color_3.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 52px; height: 65px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 501px; top: 142px; width: 52px; height: 65px; z-index: 61; border-radius: 0px;",
	cssClasses:	"",
	id:		"1481",
	htmlId:		"tobj1481",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H2-cabello_3_color_3"
	},
	objData:	{"a":[0,256,0,[501,142,52,65]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":635,"y":180,"width":66,"height":83}}
};
image1482.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1482Img\" src=\"images/H2-cabello_3_color_4.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 52px; height: 65px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 501px; top: 142px; width: 52px; height: 65px; z-index: 62; border-radius: 0px;",
	cssClasses:	"",
	id:		"1482",
	htmlId:		"tobj1482",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H2-cabello_3_color_4"
	},
	objData:	{"a":[0,256,0,[501,142,52,65]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":635,"y":180,"width":66,"height":82}}
};
og1484.rcdData.att_TabletLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og1484",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
image1485.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1485Img\" src=\"images/H2-cabello_4_color_1_1.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 35px; height: 39px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 509px; top: 143px; width: 35px; height: 39px; z-index: 63; border-radius: 0px;",
	cssClasses:	"",
	id:		"1485",
	htmlId:		"tobj1485",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H2-cabello_4_color_1_1"
	},
	objData:	{"a":[0,256,0,[509,143,35,39]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":646,"y":182,"width":45,"height":50}}
};
image1486.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1486Img\" src=\"images/H2-cabello_4_color_2_1.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 35px; height: 39px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 509px; top: 143px; width: 35px; height: 39px; z-index: 64; border-radius: 0px;",
	cssClasses:	"",
	id:		"1486",
	htmlId:		"tobj1486",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H2-cabello_4_color_2_1"
	},
	objData:	{"a":[0,0,0,[509,143,35,39]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":646,"y":182,"width":45,"height":50}}
};
image1487.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1487Img\" src=\"images/H2-cabello_4_color_3.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 35px; height: 39px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 509px; top: 143px; width: 35px; height: 39px; z-index: 65; border-radius: 0px;",
	cssClasses:	"",
	id:		"1487",
	htmlId:		"tobj1487",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H2-cabello_4_color_3"
	},
	objData:	{"a":[0,0,0,[509,143,35,39]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":646,"y":182,"width":45,"height":50}}
};
image1488.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1488Img\" src=\"images/H2-cabello_4_color_4.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 35px; height: 39px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 509px; top: 143px; width: 35px; height: 39px; z-index: 66; border-radius: 0px;",
	cssClasses:	"",
	id:		"1488",
	htmlId:		"tobj1488",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H2-cabello_4_color_4"
	},
	objData:	{"a":[0,0,0,[509,143,35,39]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":646,"y":182,"width":45,"height":50}}
};
og2226.rcdData.att_TabletLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og2226",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
image2195.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj2195Img\" src=\"images/H5-labios_1_color_1.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 11px; height: 5px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 521px; top: 193px; width: 11px; height: 5px; z-index: 67; border-radius: 0px;",
	cssClasses:	"",
	id:		"2195",
	htmlId:		"tobj2195",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H5-labios_1_color_1"
	},
	objData:	{"a":[0,256,0,[521,193,11,5]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":661,"y":245,"width":14,"height":6}}
};
image2197.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj2197Img\" src=\"images/H5-labios_1_color_2.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 11px; height: 5px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 521px; top: 193px; width: 11px; height: 5px; z-index: 68; border-radius: 0px;",
	cssClasses:	"",
	id:		"2197",
	htmlId:		"tobj2197",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H5-labios_1_color_2"
	},
	objData:	{"a":[0,256,0,[521,193,11,5]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":661,"y":245,"width":14,"height":6}}
};
image2199.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj2199Img\" src=\"images/H5-labios_1_color_3.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 11px; height: 5px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 521px; top: 193px; width: 11px; height: 5px; z-index: 69; border-radius: 0px;",
	cssClasses:	"",
	id:		"2199",
	htmlId:		"tobj2199",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H5-labios_1_color_3"
	},
	objData:	{"a":[0,256,0,[521,193,11,5]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":661,"y":245,"width":14,"height":6}}
};
image2201.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj2201Img\" src=\"images/H5-labios_1_color_4.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 11px; height: 5px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 521px; top: 193px; width: 11px; height: 5px; z-index: 70; border-radius: 0px;",
	cssClasses:	"",
	id:		"2201",
	htmlId:		"tobj2201",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H5-labios_1_color_4"
	},
	objData:	{"a":[0,256,0,[521,193,11,5]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":661,"y":245,"width":14,"height":6}}
};
og2227.rcdData.att_TabletLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og2227",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
image2203.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj2203Img\" src=\"images/H5-labios_2_color_1.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 11px; height: 5px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 521px; top: 193px; width: 11px; height: 5px; z-index: 71; border-radius: 0px;",
	cssClasses:	"",
	id:		"2203",
	htmlId:		"tobj2203",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H5-labios_2_color_1"
	},
	objData:	{"a":[0,256,0,[521,193,11,5]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":661,"y":245,"width":14,"height":6}}
};
image2205.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj2205Img\" src=\"images/H5-labios_2_color_2.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 11px; height: 5px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 521px; top: 193px; width: 11px; height: 5px; z-index: 72; border-radius: 0px;",
	cssClasses:	"",
	id:		"2205",
	htmlId:		"tobj2205",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H5-labios_2_color_2"
	},
	objData:	{"a":[0,256,0,[521,193,11,5]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":661,"y":245,"width":14,"height":6}}
};
image2207.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj2207Img\" src=\"images/H5-labios_2_color_3.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 11px; height: 5px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 521px; top: 193px; width: 11px; height: 5px; z-index: 73; border-radius: 0px;",
	cssClasses:	"",
	id:		"2207",
	htmlId:		"tobj2207",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H5-labios_2_color_3"
	},
	objData:	{"a":[0,256,0,[521,193,11,5]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":661,"y":245,"width":14,"height":6}}
};
image2209.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj2209Img\" src=\"images/H5-labios_2_color_4.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 11px; height: 5px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 521px; top: 193px; width: 11px; height: 5px; z-index: 74; border-radius: 0px;",
	cssClasses:	"",
	id:		"2209",
	htmlId:		"tobj2209",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H5-labios_2_color_4"
	},
	objData:	{"a":[0,256,0,[521,193,11,5]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":661,"y":245,"width":14,"height":6}}
};
og2228.rcdData.att_TabletLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og2228",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
image2211.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj2211Img\" src=\"images/H5-labios_3_color_1.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 11px; height: 4px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 521px; top: 193px; width: 11px; height: 4px; z-index: 75; border-radius: 0px;",
	cssClasses:	"",
	id:		"2211",
	htmlId:		"tobj2211",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H5-labios_3_color_1"
	},
	objData:	{"a":[0,256,0,[521,193,11,4]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":661,"y":245,"width":14,"height":5}}
};
image2213.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj2213Img\" src=\"images/H5-labios_3_color_2.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 11px; height: 4px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 521px; top: 193px; width: 11px; height: 4px; z-index: 76; border-radius: 0px;",
	cssClasses:	"",
	id:		"2213",
	htmlId:		"tobj2213",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H5-labios_3_color_2"
	},
	objData:	{"a":[0,256,0,[521,193,11,4]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":661,"y":245,"width":14,"height":5}}
};
image2215.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj2215Img\" src=\"images/H5-labios_3_color_3.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 11px; height: 4px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 521px; top: 193px; width: 11px; height: 4px; z-index: 77; border-radius: 0px;",
	cssClasses:	"",
	id:		"2215",
	htmlId:		"tobj2215",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H5-labios_3_color_3"
	},
	objData:	{"a":[0,256,0,[521,193,11,4]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":661,"y":245,"width":14,"height":5}}
};
image2217.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj2217Img\" src=\"images/H5-labios_3_color_4.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 11px; height: 4px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 521px; top: 193px; width: 11px; height: 4px; z-index: 78; border-radius: 0px;",
	cssClasses:	"",
	id:		"2217",
	htmlId:		"tobj2217",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H5-labios_3_color_4"
	},
	objData:	{"a":[0,256,0,[521,193,11,4]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":661,"y":245,"width":14,"height":5}}
};
og2229.rcdData.att_TabletLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og2229",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
image2219.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj2219Img\" src=\"images/H5-labios_4_color_1.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 11px; height: 3px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 521px; top: 193px; width: 11px; height: 3px; z-index: 79; border-radius: 0px;",
	cssClasses:	"",
	id:		"2219",
	htmlId:		"tobj2219",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H5-labios_4_color_1"
	},
	objData:	{"a":[0,256,0,[521,193,11,3]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":661,"y":245,"width":14,"height":4}}
};
image2221.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj2221Img\" src=\"images/H5-labios_4_color_2.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 11px; height: 3px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 521px; top: 193px; width: 11px; height: 3px; z-index: 80; border-radius: 0px;",
	cssClasses:	"",
	id:		"2221",
	htmlId:		"tobj2221",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H5-labios_4_color_2"
	},
	objData:	{"a":[0,256,0,[521,193,11,3]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":661,"y":245,"width":14,"height":4}}
};
image2223.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj2223Img\" src=\"images/H5-labios_4_color_3.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 11px; height: 3px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 521px; top: 193px; width: 11px; height: 3px; z-index: 81; border-radius: 0px;",
	cssClasses:	"",
	id:		"2223",
	htmlId:		"tobj2223",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H5-labios_4_color_3"
	},
	objData:	{"a":[0,256,0,[521,193,11,3]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":661,"y":245,"width":14,"height":4}}
};
image2225.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj2225Img\" src=\"images/H5-labios_4_color_4.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 11px; height: 3px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 521px; top: 193px; width: 11px; height: 3px; z-index: 82; border-radius: 0px;",
	cssClasses:	"",
	id:		"2225",
	htmlId:		"tobj2225",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H5-labios_4_color_4"
	},
	objData:	{"a":[0,256,0,[521,193,11,3]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":661,"y":245,"width":14,"height":4}}
};
og1496.rcdData.att_TabletLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og1496",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
image1497.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1497Img\" src=\"images/H3-barba_1_color1.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 33px; height: 33px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 510px; top: 184px; width: 33px; height: 33px; z-index: 83; border-radius: 0px;",
	cssClasses:	"",
	id:		"1497",
	htmlId:		"tobj1497",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H3-barba_1_color1"
	},
	objData:	{"a":[0,256,0,[510,184,33,33]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":647,"y":233,"width":42,"height":42}}
};
image1498.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1498Img\" src=\"images/H3-barba_1_color2.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 33px; height: 33px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 510px; top: 184px; width: 33px; height: 33px; z-index: 84; border-radius: 0px;",
	cssClasses:	"",
	id:		"1498",
	htmlId:		"tobj1498",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H3-barba_1_color2"
	},
	objData:	{"a":[0,256,0,[510,184,33,33]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":647,"y":233,"width":42,"height":42}}
};
image1499.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1499Img\" src=\"images/H3-barba_1_color3.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 33px; height: 33px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 510px; top: 184px; width: 33px; height: 33px; z-index: 85; border-radius: 0px;",
	cssClasses:	"",
	id:		"1499",
	htmlId:		"tobj1499",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H3-barba_1_color3"
	},
	objData:	{"a":[0,256,0,[510,184,33,33]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":647,"y":233,"width":42,"height":42}}
};
image1500.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1500Img\" src=\"images/H3-barba_1_color4.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 33px; height: 33px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 510px; top: 184px; width: 33px; height: 33px; z-index: 86; border-radius: 0px;",
	cssClasses:	"",
	id:		"1500",
	htmlId:		"tobj1500",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H3-barba_1_color4"
	},
	objData:	{"a":[0,256,0,[510,184,33,33]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":647,"y":233,"width":42,"height":42}}
};
og1501.rcdData.att_TabletLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og1501",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
image1502.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1502Img\" src=\"images/H3-barba_2_color1.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 33px; height: 21px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 510px; top: 185px; width: 33px; height: 21px; z-index: 87; border-radius: 0px;",
	cssClasses:	"",
	id:		"1502",
	htmlId:		"tobj1502",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H3-barba_2_color1"
	},
	objData:	{"a":[0,256,0,[510,185,33,21]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":647,"y":235,"width":42,"height":27}}
};
image1503.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1503Img\" src=\"images/H3-barba_2_color2.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 33px; height: 21px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 510px; top: 185px; width: 33px; height: 21px; z-index: 88; border-radius: 0px;",
	cssClasses:	"",
	id:		"1503",
	htmlId:		"tobj1503",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H3-barba_2_color2"
	},
	objData:	{"a":[0,256,0,[510,185,33,21]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":647,"y":235,"width":42,"height":27}}
};
image1504.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1504Img\" src=\"images/H3-barba_2_color3.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 33px; height: 21px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 510px; top: 185px; width: 33px; height: 21px; z-index: 89; border-radius: 0px;",
	cssClasses:	"",
	id:		"1504",
	htmlId:		"tobj1504",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H3-barba_2_color3"
	},
	objData:	{"a":[0,256,0,[510,185,33,21]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":647,"y":235,"width":42,"height":27}}
};
image1505.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1505Img\" src=\"images/H3-barba_2_color4.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 33px; height: 21px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 510px; top: 185px; width: 33px; height: 21px; z-index: 90; border-radius: 0px;",
	cssClasses:	"",
	id:		"1505",
	htmlId:		"tobj1505",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H3-barba_2_color4"
	},
	objData:	{"a":[0,256,0,[510,185,33,21]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":647,"y":235,"width":42,"height":27}}
};
og1506.rcdData.att_TabletLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og1506",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
image1507.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1507Img\" src=\"images/H3-barba_3_color1.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 28px; height: 18px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 512px; top: 188px; width: 28px; height: 18px; z-index: 91; border-radius: 0px;",
	cssClasses:	"",
	id:		"1507",
	htmlId:		"tobj1507",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H3-barba_3_color1"
	},
	objData:	{"a":[0,256,0,[512,188,28,18]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":650,"y":239,"width":35,"height":23}}
};
image1508.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1508Img\" src=\"images/H3-barba_3_color2.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 28px; height: 18px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 512px; top: 188px; width: 28px; height: 18px; z-index: 92; border-radius: 0px;",
	cssClasses:	"",
	id:		"1508",
	htmlId:		"tobj1508",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H3-barba_3_color2"
	},
	objData:	{"a":[0,256,0,[512,188,28,18]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":650,"y":239,"width":35,"height":23}}
};
image1509.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1509Img\" src=\"images/H3-barba_3_color3.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 28px; height: 18px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 512px; top: 188px; width: 28px; height: 18px; z-index: 93; border-radius: 0px;",
	cssClasses:	"",
	id:		"1509",
	htmlId:		"tobj1509",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H3-barba_3_color3"
	},
	objData:	{"a":[0,256,0,[512,188,28,18]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":650,"y":239,"width":35,"height":23}}
};
image1510.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1510Img\" src=\"images/H3-barba_3_color4.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 28px; height: 18px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 512px; top: 188px; width: 28px; height: 18px; z-index: 94; border-radius: 0px;",
	cssClasses:	"",
	id:		"1510",
	htmlId:		"tobj1510",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H3-barba_3_color4"
	},
	objData:	{"a":[0,256,0,[512,188,28,18]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":650,"y":239,"width":35,"height":23}}
};
og1511.rcdData.att_TabletLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og1511",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
image1512.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1512Img\" src=\"images/H3-bigote_color1.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 17px; height: 5px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 518px; top: 192px; width: 17px; height: 5px; z-index: 95; border-radius: 0px;",
	cssClasses:	"",
	id:		"1512",
	htmlId:		"tobj1512",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H3-bigote_color1"
	},
	objData:	{"a":[0,256,0,[518,192,17,5]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":657,"y":243,"width":21,"height":6}}
};
image1513.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1513Img\" src=\"images/H3-bigote_color2.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 17px; height: 6px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 518px; top: 192px; width: 17px; height: 6px; z-index: 96; border-radius: 0px;",
	cssClasses:	"",
	id:		"1513",
	htmlId:		"tobj1513",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H3-bigote_color2"
	},
	objData:	{"a":[0,256,0,[518,192,17,6]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":657,"y":243,"width":21,"height":7}}
};
image1514.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1514Img\" src=\"images/H3-bigote_color3.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 17px; height: 6px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 518px; top: 192px; width: 17px; height: 6px; z-index: 97; border-radius: 0px;",
	cssClasses:	"",
	id:		"1514",
	htmlId:		"tobj1514",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H3-bigote_color3"
	},
	objData:	{"a":[0,256,0,[518,192,17,6]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":657,"y":243,"width":21,"height":7}}
};
image1515.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1515Img\" src=\"images/H3-bigote_color4.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 17px; height: 6px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 518px; top: 192px; width: 17px; height: 6px; z-index: 98; border-radius: 0px;",
	cssClasses:	"",
	id:		"1515",
	htmlId:		"tobj1515",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H3-bigote_color4"
	},
	objData:	{"a":[0,256,0,[518,192,17,6]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":657,"y":243,"width":21,"height":7}}
};
og1516.rcdData.att_TabletLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og1516",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
image1517.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1517Img\" src=\"images/H8-zapatos_1.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 50px; height: 39px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 508px; top: 490px; width: 50px; height: 39px; z-index: 99; border-radius: 0px;",
	cssClasses:	"",
	id:		"1517",
	htmlId:		"tobj1517",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H8-zapatos_1"
	},
	objData:	{"a":[0,256,0,[508,490,50,39]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":644,"y":622,"width":63,"height":49}}
};
image1518.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1518Img\" src=\"images/H8-zapatos_2.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 49px; height: 35px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 508px; top: 490px; width: 49px; height: 35px; z-index: 100; border-radius: 0px;",
	cssClasses:	"",
	id:		"1518",
	htmlId:		"tobj1518",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H8-zapatos_2"
	},
	objData:	{"a":[0,256,0,[508,490,49,35]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":644,"y":622,"width":62,"height":45}}
};
image1519.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1519Img\" src=\"images/H8-zapatos_3.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 56px; height: 55px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 505px; top: 474px; width: 56px; height: 55px; z-index: 101; border-radius: 0px;",
	cssClasses:	"",
	id:		"1519",
	htmlId:		"tobj1519",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H8-zapatos_3"
	},
	objData:	{"a":[0,256,0,[505,474,56,55]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":640,"y":601,"width":71,"height":70}}
};
image1520.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1520Img\" src=\"images/H8-zapatos_4.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 55px; height: 40px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 505px; top: 490px; width: 55px; height: 40px; z-index: 102; border-radius: 0px;",
	cssClasses:	"",
	id:		"1520",
	htmlId:		"tobj1520",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H8-zapatos_4"
	},
	objData:	{"a":[0,256,0,[505,490,55,40]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":641,"y":622,"width":70,"height":51}}
};
og1521.rcdData.att_TabletLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og1521",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
image1522.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1522Img\" src=\"images/Mbarra_color_piel.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 241px; height: 121px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 155px; top: 461px; width: 241px; height: 121px; z-index: 103; border-radius: 0px;",
	cssClasses:	"",
	id:		"1522",
	htmlId:		"tobj1522",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Mbarra_color_piel"
	},
	objData:	{"a":[0,256,0,[155,461,241,121]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":196,"y":585,"width":306,"height":153}}
};
image1523.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1523Img\" src=\"images/Mpiel_1.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 19px; height: 28px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 204px; top: 482px; width: 19px; height: 28px; z-index: 104; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"1523",
	htmlId:		"tobj1523",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Mpiel_1",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ { VarmColor1.set('1');  triv$('.VarmColor1', getDisplayDocument()).html(VarmColor1.getValueForDisplay()); }
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og1417.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1420.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1423.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1426.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[204,482,19,28]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":259,"y":612,"width":24,"height":36}}
};
image1529.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1529Img\" src=\"images/Mpiel_2.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 19px; height: 28px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 247px; top: 482px; width: 19px; height: 28px; z-index: 105; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"1529",
	htmlId:		"tobj1529",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Mpiel_2",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ { VarmColor1.set('2');  triv$('.VarmColor1', getDisplayDocument()).html(VarmColor1.getValueForDisplay()); }
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og1420.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1417.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1423.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1426.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[247,482,19,28]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":313,"y":612,"width":24,"height":36}}
};
image1535.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1535Img\" src=\"images/Mpiel_3.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 19px; height: 28px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 287px; top: 482px; width: 19px; height: 28px; z-index: 106; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"1535",
	htmlId:		"tobj1535",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Mpiel_3",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ { VarmColor1.set('3');  triv$('.VarmColor1', getDisplayDocument()).html(VarmColor1.getValueForDisplay()); }
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og1423.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1417.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1420.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1426.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[287,482,19,28]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":364,"y":612,"width":24,"height":36}}
};
image1541.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1541Img\" src=\"images/Mpiel_4.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 19px; height: 28px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 332px; top: 482px; width: 19px; height: 28px; z-index: 107; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"1541",
	htmlId:		"tobj1541",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Mpiel_4",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ { VarmColor1.set('4');  triv$('.VarmColor1', getDisplayDocument()).html(VarmColor1.getValueForDisplay()); }
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og1426.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1417.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1420.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1423.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[332,482,19,28]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":421,"y":612,"width":24,"height":36}}
};
og1547.rcdData.att_TabletLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og1547",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
image1548.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1548Img\" src=\"images/H-barra_2.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 241px; height: 121px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 226px; top: 462px; width: 241px; height: 121px; z-index: 108; border-radius: 0px;",
	cssClasses:	"",
	id:		"1548",
	htmlId:		"tobj1548",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H-barra_2"
	},
	objData:	{"a":[0,256,0,[226,462,241,121]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":287,"y":586,"width":306,"height":153}}
};
image1549.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1549Img\" src=\"images/H-color_1.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 21px; height: 21px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 268px; top: 490px; width: 21px; height: 21px; z-index: 109; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"1549",
	htmlId:		"tobj1549",
	bInsAnc:	1,
	cwObj:		{
		"name":	"H-color_1",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ { VarmColor2.set('1');  triv$('.VarmColor2', getDisplayDocument()).html(VarmColor2.getValueForDisplay()); }
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1547.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og1569.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[268,490,21,21]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":340,"y":621,"width":27,"height":27}}
};
image1553.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1553Img\" src=\"images/H-color_2.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 21px; height: 21px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 315px; top: 490px; width: 21px; height: 21px; z-index: 110; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"1553",
	htmlId:		"tobj1553",
	bInsAnc:	1,
	cwObj:		{
		"name":	"H-color_2",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ { VarmColor2.set('2');  triv$('.VarmColor2', getDisplayDocument()).html(VarmColor2.getValueForDisplay()); }
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1547.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og1569.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[315,490,21,21]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":400,"y":621,"width":27,"height":27}}
};
image1557.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1557Img\" src=\"images/H-color_3.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 21px; height: 21px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 358px; top: 490px; width: 21px; height: 21px; z-index: 111; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"1557",
	htmlId:		"tobj1557",
	bInsAnc:	1,
	cwObj:		{
		"name":	"H-color_3",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ { VarmColor2.set('3');  triv$('.VarmColor2', getDisplayDocument()).html(VarmColor2.getValueForDisplay()); }
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1547.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og1569.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[358,490,21,21]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":454,"y":621,"width":27,"height":27}}
};
image1561.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1561Img\" src=\"images/H-color_4.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 21px; height: 21px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 404px; top: 490px; width: 21px; height: 21px; z-index: 112; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"1561",
	htmlId:		"tobj1561",
	bInsAnc:	1,
	cwObj:		{
		"name":	"H-color_4",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ { VarmColor2.set('4');  triv$('.VarmColor2', getDisplayDocument()).html(VarmColor2.getValueForDisplay()); }
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1547.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og1569.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[404,490,21,21]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":513,"y":621,"width":27,"height":27}}
};
og1569.rcdData.att_TabletLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og1569",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
image1934.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1934Img\" src=\"images/H-barra_2.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 241px; height: 121px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 226px; top: 462px; width: 241px; height: 121px; z-index: 113; border-radius: 0px;",
	cssClasses:	"",
	id:		"1934",
	htmlId:		"tobj1934",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H-barra_2"
	},
	objData:	{"a":[0,256,0,[226,462,241,121]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":287,"y":586,"width":306,"height":153}}
};
image1571.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1571Img\" src=\"images/H-cabello_1.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 20px; height: 35px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 270px; top: 475px; width: 20px; height: 35px; z-index: 114; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"1571",
	htmlId:		"tobj1571",
	bInsAnc:	1,
	cwObj:		{
		"name":	"H-cabello_1",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1472.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1478.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1484.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor2.equals('1'))image1467.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor2.equals('2'))image1468.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor2.equals('3'))image1469.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor2.equals('4'))image1470.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[270,475,20,35]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":343,"y":603,"width":25,"height":45}}
};
image1581.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1581Img\" src=\"images/H-cabello_2.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 23px; height: 35px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 315px; top: 475px; width: 23px; height: 35px; z-index: 115; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"1581",
	htmlId:		"tobj1581",
	bInsAnc:	1,
	cwObj:		{
		"name":	"H-cabello_2",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1466.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1478.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1484.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor2.equals('1'))image1473.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor2.equals('2'))image1474.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor2.equals('3'))image1475.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor2.equals('4'))image1476.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[315,475,23,35]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":399,"y":603,"width":29,"height":45}}
};
image1591.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1591Img\" src=\"images/H-cabello_3.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 25px; height: 35px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 356px; top: 475px; width: 25px; height: 35px; z-index: 116; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"1591",
	htmlId:		"tobj1591",
	bInsAnc:	1,
	cwObj:		{
		"name":	"H-cabello_3",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1466.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1472.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1484.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor2.equals('1'))image1479.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor2.equals('2'))image1480.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor2.equals('3'))image1481.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor2.equals('4'))image1482.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[356,475,25,35]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":451,"y":603,"width":32,"height":45}}
};
image1601.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1601Img\" src=\"images/H-cabello_4.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 19px; height: 35px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 404px; top: 475px; width: 19px; height: 35px; z-index: 117; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"1601",
	htmlId:		"tobj1601",
	bInsAnc:	1,
	cwObj:		{
		"name":	"H-cabello_4",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1466.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1472.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1478.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor2.equals('1'))image1485.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor2.equals('2'))image1486.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor2.equals('3'))image1487.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor2.equals('4'))image1488.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[404,475,19,35]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":512,"y":603,"width":24,"height":45}}
};
og1655.rcdData.att_TabletLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og1655",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
image1656.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1656Img\" src=\"images/Mbarra_labios.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 241px; height: 121px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 298px; top: 462px; width: 241px; height: 121px; z-index: 118; border-radius: 0px;",
	cssClasses:	"",
	id:		"1656",
	htmlId:		"tobj1656",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Mbarra_labios"
	},
	objData:	{"a":[0,256,0,[298,462,241,121]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":378,"y":586,"width":306,"height":153}}
};
image1657.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1657Img\" src=\"images/H-color_1.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 21px; height: 21px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 340px; top: 485px; width: 21px; height: 21px; z-index: 119; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"1657",
	htmlId:		"tobj1657",
	bInsAnc:	1,
	cwObj:		{
		"name":	"H-color_1",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ { VarmColor4.set('1');  triv$('.VarmColor4', getDisplayDocument()).html(VarmColor4.getValueForDisplay()); }
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1655.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og1673.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[340,485,21,21]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":431,"y":615,"width":27,"height":27}}
};
image1661.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1661Img\" src=\"images/H-color_2.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 21px; height: 21px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 387px; top: 485px; width: 21px; height: 21px; z-index: 120; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"1661",
	htmlId:		"tobj1661",
	bInsAnc:	1,
	cwObj:		{
		"name":	"H-color_2",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ { VarmColor4.set('2');  triv$('.VarmColor4', getDisplayDocument()).html(VarmColor4.getValueForDisplay()); }
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1655.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og1673.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[387,485,21,21]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":491,"y":615,"width":27,"height":27}}
};
image1665.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1665Img\" src=\"images/H-color_3.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 21px; height: 21px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 428px; top: 485px; width: 21px; height: 21px; z-index: 121; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"1665",
	htmlId:		"tobj1665",
	bInsAnc:	1,
	cwObj:		{
		"name":	"H-color_3",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ { VarmColor4.set('3');  triv$('.VarmColor4', getDisplayDocument()).html(VarmColor4.getValueForDisplay()); }
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1655.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og1673.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[428,485,21,21]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":543,"y":615,"width":27,"height":27}}
};
image1669.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1669Img\" src=\"images/H-color_4.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 21px; height: 21px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 475px; top: 485px; width: 21px; height: 21px; z-index: 122; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"1669",
	htmlId:		"tobj1669",
	bInsAnc:	1,
	cwObj:		{
		"name":	"H-color_4",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ { VarmColor4.set('4');  triv$('.VarmColor4', getDisplayDocument()).html(VarmColor4.getValueForDisplay()); }
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1655.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og1673.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[475,485,21,21]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":602,"y":615,"width":27,"height":27}}
};
og1673.rcdData.att_TabletLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og1673",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
image1674.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1674Img\" src=\"images/Mbarra_labios.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 241px; height: 121px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 298px; top: 462px; width: 241px; height: 121px; z-index: 123; border-radius: 0px;",
	cssClasses:	"",
	id:		"1674",
	htmlId:		"tobj1674",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Mbarra_labios"
	},
	objData:	{"a":[0,256,0,[298,462,241,121]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":378,"y":586,"width":306,"height":153}}
};
image1675.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1675Img\" src=\"images/H-barba_1.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 35px; height: 35px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 336px; top: 479px; width: 35px; height: 35px; z-index: 124; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"1675",
	htmlId:		"tobj1675",
	bInsAnc:	1,
	cwObj:		{
		"name":	"H-barba_1",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1501.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1506.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1511.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor4.equals('1'))image1497.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor4.equals('2'))image1498.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor4.equals('3'))image1499.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor4.equals('4'))image1500.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[336,479,35,35]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":426,"y":608,"width":45,"height":45}}
};
image1683.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1683Img\" src=\"images/H-barba_2.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 35px; height: 23px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 378px; top: 482px; width: 35px; height: 23px; z-index: 125; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"1683",
	htmlId:		"tobj1683",
	bInsAnc:	1,
	cwObj:		{
		"name":	"H-barba_2",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1496.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1506.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1511.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor4.equals('1'))image1502.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor4.equals('2'))image1503.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor4.equals('3'))image1504.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor4.equals('4'))image1505.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[378,482,35,23]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":480,"y":612,"width":45,"height":29}}
};
image1691.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1691Img\" src=\"images/H-barba_3.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 35px; height: 23px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 422px; top: 482px; width: 35px; height: 23px; z-index: 126; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"1691",
	htmlId:		"tobj1691",
	bInsAnc:	1,
	cwObj:		{
		"name":	"H-barba_3",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1496.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1501.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1511.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor4.equals('1'))image1507.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor4.equals('2'))image1508.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor4.equals('3'))image1509.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor4.equals('4'))image1510.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[422,482,35,23]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":535,"y":612,"width":45,"height":29}}
};
image1699.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1699Img\" src=\"images/H-barba_4.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 35px; height: 7px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 467px; top: 493px; width: 35px; height: 7px; z-index: 127; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"1699",
	htmlId:		"tobj1699",
	bInsAnc:	1,
	cwObj:		{
		"name":	"H-barba_4",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1496.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1501.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1506.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor4.equals('1'))image1512.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor4.equals('2'))image1513.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor4.equals('3'))image1514.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor4.equals('4'))image1515.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[467,493,35,7]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":593,"y":625,"width":45,"height":9}}
};
og1621.rcdData.att_TabletLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og1621",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
image1622.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1622Img\" src=\"images/Mbarra_ojos.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 241px; height: 121px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 367px; top: 462px; width: 241px; height: 121px; z-index: 128; border-radius: 0px;",
	cssClasses:	"",
	id:		"1622",
	htmlId:		"tobj1622",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Mbarra_ojos"
	},
	objData:	{"a":[0,256,0,[367,462,241,121]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":466,"y":586,"width":306,"height":153}}
};
image1623.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1623Img\" src=\"images/Mcolor_ojos_1.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 21px; height: 21px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 419px; top: 483px; width: 21px; height: 21px; z-index: 129; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"1623",
	htmlId:		"tobj1623",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Mcolor_ojos_1",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ { VarmColor3.set('1');  triv$('.VarmColor3', getDisplayDocument()).html(VarmColor3.getValueForDisplay()); }
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1621.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og1635.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[419,483,21,21]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":532,"y":613,"width":27,"height":27}}
};
image1627.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1627Img\" src=\"images/Mcolor_ojos_2.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 21px; height: 21px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 477px; top: 483px; width: 21px; height: 21px; z-index: 130; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"1627",
	htmlId:		"tobj1627",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Mcolor_ojos_2",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ { VarmColor3.set('2');  triv$('.VarmColor3', getDisplayDocument()).html(VarmColor3.getValueForDisplay()); }
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1621.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og1635.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[477,483,21,21]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":605,"y":613,"width":27,"height":27}}
};
image1631.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1631Img\" src=\"images/Mcolor_ojos_3.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 21px; height: 21px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 534px; top: 483px; width: 21px; height: 21px; z-index: 131; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"1631",
	htmlId:		"tobj1631",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Mcolor_ojos_3",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ { VarmColor3.set('3');  triv$('.VarmColor3', getDisplayDocument()).html(VarmColor3.getValueForDisplay()); }
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1621.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og1635.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[534,483,21,21]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":677,"y":613,"width":27,"height":27}}
};
og1635.rcdData.att_TabletLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og1635",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
image1636.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1636Img\" src=\"images/Mbarra_ojos.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 241px; height: 121px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 367px; top: 462px; width: 241px; height: 121px; z-index: 132; border-radius: 0px;",
	cssClasses:	"",
	id:		"1636",
	htmlId:		"tobj1636",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Mbarra_ojos"
	},
	objData:	{"a":[0,256,0,[367,462,241,121]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":466,"y":586,"width":306,"height":153}}
};
image1637.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1637Img\" src=\"images/H-ojos_1.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 40px; height: 20px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 411px; top: 485px; width: 40px; height: 20px; z-index: 133; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"1637",
	htmlId:		"tobj1637",
	bInsAnc:	1,
	cwObj:		{
		"name":	"H-ojos_1",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1443.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1447.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor3.equals('1'))image1440.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor3.equals('2'))image1441.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor3.equals('3'))image1442.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[411,485,40,20]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":521,"y":615,"width":51,"height":25}}
};
image1643.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1643Img\" src=\"images/H-ojos_2.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 40px; height: 17px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 525px; top: 485px; width: 40px; height: 17px; z-index: 134; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"1643",
	htmlId:		"tobj1643",
	bInsAnc:	1,
	cwObj:		{
		"name":	"H-ojos_2",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1439.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1447.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor3.equals('1'))image1444.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor3.equals('2'))image1445.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor3.equals('3'))image1446.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[525,485,40,17]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":666,"y":615,"width":51,"height":22}}
};
image1649.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1649Img\" src=\"images/H-ojos_3.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 35px; height: 20px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 468px; top: 485px; width: 35px; height: 20px; z-index: 135; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"1649",
	htmlId:		"tobj1649",
	bInsAnc:	1,
	cwObj:		{
		"name":	"H-ojos_3",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1439.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1443.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor3.equals('1'))image1448.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor3.equals('2'))image1449.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor3.equals('3'))image1450.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[468,485,35,20]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":594,"y":615,"width":45,"height":25}}
};
og2160.rcdData.att_TabletLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og2160",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
image2161.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj2161Img\" src=\"images/Mbarra_labios.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 241px; height: 121px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 439px; top: 462px; width: 241px; height: 121px; z-index: 136; border-radius: 0px;",
	cssClasses:	"",
	id:		"2161",
	htmlId:		"tobj2161",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Mbarra_labios"
	},
	objData:	{"a":[0,256,0,[439,462,241,121]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":557,"y":586,"width":306,"height":153}}
};
image2162.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj2162Img\" src=\"images/H-color_labios_1.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 30px; height: 30px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 475px; top: 482px; width: 30px; height: 30px; z-index: 137; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"2162",
	htmlId:		"tobj2162",
	bInsAnc:	1,
	cwObj:		{
		"name":	"H-color_labios_1",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ { VarhColor5.set('1');  triv$('.VarhColor5', getDisplayDocument()).html(VarhColor5.getValueForDisplay()); }
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og2160.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og2126.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[475,482,30,30]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":603,"y":612,"width":38,"height":38}}
};
image2166.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj2166Img\" src=\"images/H-color_labios_2.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 30px; height: 30px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 523px; top: 482px; width: 30px; height: 30px; z-index: 138; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"2166",
	htmlId:		"tobj2166",
	bInsAnc:	1,
	cwObj:		{
		"name":	"H-color_labios_2",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ { VarhColor5.set('2');  triv$('.VarhColor5', getDisplayDocument()).html(VarhColor5.getValueForDisplay()); }
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og2160.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og2126.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[523,482,30,30]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":663,"y":612,"width":38,"height":38}}
};
image2170.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj2170Img\" src=\"images/H-color_labios_3.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 30px; height: 30px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 565px; top: 482px; width: 30px; height: 30px; z-index: 139; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"2170",
	htmlId:		"tobj2170",
	bInsAnc:	1,
	cwObj:		{
		"name":	"H-color_labios_3",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ { VarhColor5.set('3');  triv$('.VarhColor5', getDisplayDocument()).html(VarhColor5.getValueForDisplay()); }
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og2160.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og2126.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[565,482,30,30]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":717,"y":612,"width":38,"height":38}}
};
image2174.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj2174Img\" src=\"images/H-color_labios_4.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 30px; height: 30px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 613px; top: 482px; width: 30px; height: 30px; z-index: 140; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"2174",
	htmlId:		"tobj2174",
	bInsAnc:	1,
	cwObj:		{
		"name":	"H-color_labios_4",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ { VarhColor5.set('4');  triv$('.VarhColor5', getDisplayDocument()).html(VarhColor5.getValueForDisplay()); }
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og2160.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og2126.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[613,482,30,30]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":778,"y":612,"width":38,"height":38}}
};
og2126.rcdData.att_TabletLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og2126",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
image2127.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj2127Img\" src=\"images/Mbarra_labios.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 241px; height: 121px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 439px; top: 462px; width: 241px; height: 121px; z-index: 141; border-radius: 0px;",
	cssClasses:	"",
	id:		"2127",
	htmlId:		"tobj2127",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Mbarra_labios"
	},
	objData:	{"a":[0,256,0,[439,462,241,121]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":557,"y":586,"width":306,"height":153}}
};
image2128.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj2128Img\" src=\"images/H-labios_1.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 31px; height: 14px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 477px; top: 487px; width: 31px; height: 14px; z-index: 142; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"2128",
	htmlId:		"tobj2128",
	bInsAnc:	1,
	cwObj:		{
		"name":	"H-labios_1",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og2227.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og2228.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og2229.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarhColor5.equals('1'))image2195.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarhColor5.equals('2'))image2197.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarhColor5.equals('3'))image2199.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarhColor5.equals('4'))image2201.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[477,487,31,14]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":605,"y":618,"width":39,"height":18}}
};
image2136.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj2136Img\" src=\"images/H-labios_2.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 32px; height: 14px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 519px; top: 487px; width: 32px; height: 14px; z-index: 143; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"2136",
	htmlId:		"tobj2136",
	bInsAnc:	1,
	cwObj:		{
		"name":	"H-labios_2",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og2226.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og2228.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og2229.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarhColor5.equals('1'))image2203.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarhColor5.equals('2'))image2205.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarhColor5.equals('3'))image2207.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarhColor5.equals('4'))image2209.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[519,487,32,14]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":659,"y":618,"width":40,"height":18}}
};
image2144.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj2144Img\" src=\"images/H-labios_3.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 35px; height: 14px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 563px; top: 487px; width: 35px; height: 14px; z-index: 144; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"2144",
	htmlId:		"tobj2144",
	bInsAnc:	1,
	cwObj:		{
		"name":	"H-labios_3",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og2226.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og2227.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og2229.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarhColor5.equals('1'))image2211.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarhColor5.equals('2'))image2213.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarhColor5.equals('3'))image2215.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarhColor5.equals('4'))image2217.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[563,487,35,14]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":714,"y":618,"width":44,"height":18}}
};
image2152.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj2152Img\" src=\"images/H-labios_4.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 42px; height: 13px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 609px; top: 487px; width: 42px; height: 13px; z-index: 145; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"2152",
	htmlId:		"tobj2152",
	bInsAnc:	1,
	cwObj:		{
		"name":	"H-labios_4",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og2226.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og2227.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og2228.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarhColor5.equals('1'))image2219.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarhColor5.equals('2'))image2221.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarhColor5.equals('3'))image2223.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarhColor5.equals('4'))image2225.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[609,487,42,13]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":772,"y":618,"width":53,"height":16}}
};
og1707.rcdData.att_TabletLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og1707",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
image1708.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1708Img\" src=\"images/Mbarra_ropa.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 241px; height: 121px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 511px; top: 462px; width: 241px; height: 121px; z-index: 146; border-radius: 0px;",
	cssClasses:	"",
	id:		"1708",
	htmlId:		"tobj1708",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Mbarra_ropa"
	},
	objData:	{"a":[0,256,0,[511,462,241,121]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":648,"y":586,"width":306,"height":153}}
};
image1709.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1709Img\" src=\"images/H-jeans_1.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 21px; height: 54px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 553px; top: 476px; width: 21px; height: 54px; z-index: 147; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"1709",
	htmlId:		"tobj1709",
	bInsAnc:	1,
	cwObj:		{
		"name":	"H-jeans_1",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1458.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image1453.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ image1452.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[553,476,21,54]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":701,"y":604,"width":27,"height":69}}
};
image1713.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1713Img\" src=\"images/H-short_hombre.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 21px; height: 28px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 597px; top: 478px; width: 21px; height: 28px; z-index: 148; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"1713",
	htmlId:		"tobj1713",
	bInsAnc:	1,
	cwObj:		{
		"name":	"H-short_hombre",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1458.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image1452.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ image1453.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[597,478,21,28]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":757,"y":606,"width":27,"height":35}}
};
image1717.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1717Img\" src=\"images/H-playera_1.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 21px; height: 21px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 642px; top: 466px; width: 21px; height: 21px; z-index: 149; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"1717",
	htmlId:		"tobj1717",
	bInsAnc:	1,
	cwObj:		{
		"name":	"H-playera_1",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1458.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image1455.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image1457.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ image1456.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[642,466,21,21]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":814,"y":591,"width":27,"height":27}}
};
image1722.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1722Img\" src=\"images/H-playera_2.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 21px; height: 21px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 642px; top: 492px; width: 21px; height: 21px; z-index: 150; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"1722",
	htmlId:		"tobj1722",
	bInsAnc:	1,
	cwObj:		{
		"name":	"H-playera_2",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1458.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image1455.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image1456.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ image1457.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[642,492,21,21]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":814,"y":624,"width":27,"height":27}}
};
image1727.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1727Img\" src=\"images/H-playera_3.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 21px; height: 21px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 642px; top: 518px; width: 21px; height: 21px; z-index: 151; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"1727",
	htmlId:		"tobj1727",
	bInsAnc:	1,
	cwObj:		{
		"name":	"H-playera_3",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1458.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image1456.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image1457.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ image1455.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[642,518,21,21]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":814,"y":657,"width":27,"height":27}}
};
image1732.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1732Img\" src=\"images/H-oufit_2.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 21px; height: 47px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 676px; top: 476px; width: 21px; height: 47px; z-index: 152; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"1732",
	htmlId:		"tobj1732",
	bInsAnc:	1,
	cwObj:		{
		"name":	"H-oufit_2",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ { VarBrazoOutfit.set('1');  triv$('.VarBrazoOutfit', getDisplayDocument()).html(VarBrazoOutfit.getValueForDisplay()); }
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1451.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1454.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image1460.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image2357.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ image1459.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ image2355.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[676,476,21,47]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":857,"y":604,"width":27,"height":60}}
};
image1737.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1737Img\" src=\"images/H-oufit_3.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 17px; height: 49px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 702px; top: 476px; width: 17px; height: 49px; z-index: 153; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"1737",
	htmlId:		"tobj1737",
	bInsAnc:	1,
	cwObj:		{
		"name":	"H-oufit_3",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ { VarBrazoOutfit.set('2');  triv$('.VarBrazoOutfit', getDisplayDocument()).html(VarBrazoOutfit.getValueForDisplay()); }
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1451.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1454.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image1459.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image2355.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ image1460.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ image2357.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[702,476,17,49]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":891,"y":604,"width":22,"height":62}}
};
og1742.rcdData.att_TabletLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og1742",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
image1743.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1743Img\" src=\"images/Mbarra_accesorios.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 278px; height: 121px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 544px; top: 462px; width: 278px; height: 121px; z-index: 154; border-radius: 0px;",
	cssClasses:	"",
	id:		"1743",
	htmlId:		"tobj1743",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Mbarra_accesorios"
	},
	objData:	{"a":[0,256,0,[544,462,278,121]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":690,"y":586,"width":353,"height":153}}
};
image1744.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1744Img\" src=\"images/H-mochila.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 28px; height: 39px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 579px; top: 477px; width: 28px; height: 39px; z-index: 155; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"1744",
	htmlId:		"tobj1744",
	bInsAnc:	1,
	cwObj:		{
		"name":	"H-mochila",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ image1462.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image2658.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ image2608.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[579,477,28,39]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":734,"y":605,"width":36,"height":50}}
};
image1746.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1746Img\" src=\"images/H-lentes_armazon.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 28px; height: 9px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 620px; top: 482px; width: 28px; height: 9px; z-index: 156; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"1746",
	htmlId:		"tobj1746",
	bInsAnc:	1,
	cwObj:		{
		"name":	"H-lentes_armazon",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image1464.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ image1463.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image2657.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ image2612.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[620,482,28,9]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":786,"y":611,"width":36,"height":11}}
};
image1749.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1749Img\" src=\"images/H-lentes_sol.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 28px; height: 9px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 620px; top: 504px; width: 28px; height: 9px; z-index: 157; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"1749",
	htmlId:		"tobj1749",
	bInsAnc:	1,
	cwObj:		{
		"name":	"H-lentes_sol",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image1463.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ image1464.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image2657.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ image2612.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[620,504,28,9]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":787,"y":639,"width":36,"height":11}}
};
image1752.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1752Img\" src=\"images/H-sombrero.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 28px; height: 10px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 666px; top: 486px; width: 28px; height: 10px; z-index: 158; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"1752",
	htmlId:		"tobj1752",
	bInsAnc:	1,
	cwObj:		{
		"name":	"H-sombrero",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ image1465.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image2656.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ image2617.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[666,486,28,10]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":845,"y":616,"width":36,"height":13}}
};
image1754.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1754Img\" src=\"images/Mvaso_1.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 28px; height: 42px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 712px; top: 478px; width: 28px; height: 42px; z-index: 159; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"1754",
	htmlId:		"tobj1754",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Mvaso_1",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image2655.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ image2621.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarmColor1.equals('1'))image1419.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarmColor1.equals('2'))image1422.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarmColor1.equals('3'))image1425.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarmColor1.equals('4'))image1428.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarmColor1.equals('1'))image1430.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarmColor1.equals('2'))image1431.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarmColor1.equals('3'))image1432.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarmColor1.equals('4'))image1433.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor1.equals('1'))image1435.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor1.equals('2'))image1436.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor1.equals('3'))image1437.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor1.equals('4'))image1438.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[712,478,28,42]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":903,"y":606,"width":36,"height":53}}
};
image1767.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1767Img\" src=\"images/Mvaso_2.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 28px; height: 42px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 762px; top: 478px; width: 28px; height: 42px; z-index: 160; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"1767",
	htmlId:		"tobj1767",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Mvaso_2",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image2654.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ image2636.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarmColor1.equals('1'))image1419.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarmColor1.equals('2'))image1422.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarmColor1.equals('3'))image1425.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarmColor1.equals('4'))image1428.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor1.equals('1')&&VarBrazoOutfit.equals('0'))image1430.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor1.equals('2')&&VarBrazoOutfit.equals('0'))image1431.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor1.equals('3')&&VarBrazoOutfit.equals('0'))image1432.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor1.equals('4')&&VarBrazoOutfit.equals('0'))image1433.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarmColor1.equals('1'))image1435.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarmColor1.equals('2'))image1436.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarmColor1.equals('3'))image1437.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarmColor1.equals('4'))image1438.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor1.equals('1')&&VarBrazoOutfit.equals('1'))image2347.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor1.equals('2')&&VarBrazoOutfit.equals('1'))image2349.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor1.equals('3')&&VarBrazoOutfit.equals('1'))image2351.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor1.equals('4')&&VarBrazoOutfit.equals('1'))image2353.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarBrazoOutfit.equals('1'))image2355.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarmColor1.equals('1')&&VarBrazoOutfit.equals('1'))image2339.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarmColor1.equals('2')&&VarBrazoOutfit.equals('1'))image2341.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarmColor1.equals('3')&&VarBrazoOutfit.equals('1'))image2343.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarmColor1.equals('4')&&VarBrazoOutfit.equals('1'))image2345.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor1.equals('1')&&VarBrazoOutfit.equals('2'))image2339.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor1.equals('2')&&VarBrazoOutfit.equals('2'))image2341.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor1.equals('3')&&VarBrazoOutfit.equals('2'))image2343.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor1.equals('4')&&VarBrazoOutfit.equals('2'))image2345.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarBrazoOutfit.equals('2'))image2357.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarmColor1.equals('1')&&VarBrazoOutfit.equals('2'))image2347.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarmColor1.equals('2')&&VarBrazoOutfit.equals('2'))image2349.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarmColor1.equals('3')&&VarBrazoOutfit.equals('2'))image2351.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarmColor1.equals('4')&&VarBrazoOutfit.equals('2'))image2353.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[762,478,28,42]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":967,"y":607,"width":36,"height":53}}
};
image2658.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj2658Img\" src=\"images/check_1%402x-8.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 9px; height: 9px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 588px; top: 526px; width: 9px; height: 9px; z-index: 161; border-radius: 0px;",
	cssClasses:	"",
	id:		"2658",
	htmlId:		"tobj2658",
	bInsAnc:	0,
	cwObj:		{
		"name":	"item6_1"
	},
	objData:	{"a":[0,256,0,[588,526,9,9]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":746,"y":667,"width":12,"height":12}}
};
image2657.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj2657Img\" src=\"images/check_1%402x-8.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 9px; height: 9px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 630px; top: 526px; width: 9px; height: 9px; z-index: 162; border-radius: 0px;",
	cssClasses:	"",
	id:		"2657",
	htmlId:		"tobj2657",
	bInsAnc:	0,
	cwObj:		{
		"name":	"item6_2"
	},
	objData:	{"a":[0,256,0,[630,526,9,9]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":799,"y":667,"width":12,"height":12}}
};
image2656.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj2656Img\" src=\"images/check_1%402x-8.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 9px; height: 9px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 678px; top: 526px; width: 9px; height: 9px; z-index: 163; border-radius: 0px;",
	cssClasses:	"",
	id:		"2656",
	htmlId:		"tobj2656",
	bInsAnc:	0,
	cwObj:		{
		"name":	"item6_3"
	},
	objData:	{"a":[0,256,0,[678,526,9,9]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":860,"y":667,"width":12,"height":12}}
};
image2655.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj2655Img\" src=\"images/check_1%402x-8.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 9px; height: 9px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 722px; top: 526px; width: 9px; height: 9px; z-index: 164; border-radius: 0px;",
	cssClasses:	"",
	id:		"2655",
	htmlId:		"tobj2655",
	bInsAnc:	0,
	cwObj:		{
		"name":	"item6_4"
	},
	objData:	{"a":[0,256,0,[722,526,9,9]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":916,"y":667,"width":12,"height":12}}
};
image2654.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj2654Img\" src=\"images/check_1%402x-8.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 9px; height: 9px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 772px; top: 526px; width: 9px; height: 9px; z-index: 165; border-radius: 0px;",
	cssClasses:	"",
	id:		"2654",
	htmlId:		"tobj2654",
	bInsAnc:	0,
	cwObj:		{
		"name":	"item6_5"
	},
	objData:	{"a":[0,256,0,[772,526,9,9]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":979,"y":667,"width":12,"height":12}}
};
og1780.rcdData.att_TabletLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og1780",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
image1781.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1781Img\" src=\"images/Mbarra_zapatos.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 284px; height: 142px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 631px; top: 445px; width: 284px; height: 142px; z-index: 166; border-radius: 0px;",
	cssClasses:	"",
	id:		"1781",
	htmlId:		"tobj1781",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Mbarra_zapatos"
	},
	objData:	{"a":[0,256,0,[631,445,284,142]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":801,"y":564,"width":360,"height":180}}
};
image1782.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1782Img\" src=\"images/H-zapato-1.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 43px; height: 22px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 670px; top: 471px; width: 43px; height: 22px; z-index: 167; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"1782",
	htmlId:		"tobj1782",
	bInsAnc:	1,
	cwObj:		{
		"name":	"H-zapato-1",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ image1517.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image1518.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image1519.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image1520.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[670,471,43,22]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":850,"y":597,"width":54,"height":28}}
};
image1787.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1787Img\" src=\"images/H-zapato-2.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 41px; height: 26px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 727px; top: 468px; width: 41px; height: 26px; z-index: 168; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"1787",
	htmlId:		"tobj1787",
	bInsAnc:	1,
	cwObj:		{
		"name":	"H-zapato-2",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ image1518.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image1517.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image1519.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image1520.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[727,468,41,26]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":922,"y":594,"width":52,"height":33}}
};
image1792.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1792Img\" src=\"images/H-zapato-3.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 35px; height: 27px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 780px; top: 469px; width: 35px; height: 27px; z-index: 169; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"1792",
	htmlId:		"tobj1792",
	bInsAnc:	1,
	cwObj:		{
		"name":	"H-zapato-3",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ image1519.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image1518.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image1517.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image1520.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[780,469,35,27]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":989,"y":595,"width":45,"height":34}}
};
image1797.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1797Img\" src=\"images/H-zapato-4.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 43px; height: 20px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 832px; top: 472px; width: 43px; height: 20px; z-index: 170; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"1797",
	htmlId:		"tobj1797",
	bInsAnc:	1,
	cwObj:		{
		"name":	"H-zapato-4",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ image1520.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image1518.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image1519.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image1517.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[832,472,43,20]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1056,"y":599,"width":54,"height":26}}
};
og1802.rcdData.att_TabletLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og1802",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
image1803.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1803Img\" src=\"images/M-btn1_off.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 57px; height: 57px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 248px; top: 553px; width: 57px; height: 57px; z-index: 171; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"1803",
	htmlId:		"tobj1803",
	bInsAnc:	1,
	cwObj:		{
		"name":	"M-btn1_off",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og1521.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ image1867.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1547.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1621.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1655.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1707.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1742.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1780.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,288,0,[248,553,57,57]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":315,"y":702,"width":72,"height":72}}
};
image1812.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1812Img\" src=\"images/H-btn2_apg.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 57px; height: 57px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 319px; top: 553px; width: 57px; height: 57px; z-index: 172; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"1812",
	htmlId:		"tobj1812",
	bInsAnc:	1,
	cwObj:		{
		"name":	"H-btn2_apg",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og1547.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ image1870.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1521.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1621.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1655.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1707.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1742.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1780.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,288,0,[319,553,57,57]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":405,"y":702,"width":72,"height":72}}
};
image1830.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1830Img\" src=\"images/H-btn3_apg.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 57px; height: 57px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 390px; top: 553px; width: 57px; height: 57px; z-index: 173; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"1830",
	htmlId:		"tobj1830",
	bInsAnc:	1,
	cwObj:		{
		"name":	"H-btn3_apg",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og1655.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ image1878.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1521.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1547.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1621.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1707.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1742.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1780.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,288,0,[390,553,57,57]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":495,"y":702,"width":72,"height":72}}
};
image1821.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1821Img\" src=\"images/M-btn3_off.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 57px; height: 57px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 461px; top: 553px; width: 57px; height: 57px; z-index: 174; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"1821",
	htmlId:		"tobj1821",
	bInsAnc:	1,
	cwObj:		{
		"name":	"M-btn4_off",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og1621.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ image1874.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1521.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1547.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1655.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1707.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1742.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1780.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,288,0,[461,553,57,57]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":585,"y":702,"width":72,"height":72}}
};
image2103.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj2103Img\" src=\"images/H-btn5_apg.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 57px; height: 57px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 532px; top: 553px; width: 57px; height: 57px; z-index: 175; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"2103",
	htmlId:		"tobj2103",
	bInsAnc:	1,
	cwObj:		{
		"name":	"H-btn5_apg",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og2160.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ image2115.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1521.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1547.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1655.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1621.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1707.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1742.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1780.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og2607.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,288,0,[532,553,57,57]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":675,"y":702,"width":72,"height":72}}
};
image1839.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1839Img\" src=\"images/H-btn6_apg.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 57px; height: 57px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 603px; top: 553px; width: 57px; height: 57px; z-index: 176; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"1839",
	htmlId:		"tobj1839",
	bInsAnc:	1,
	cwObj:		{
		"name":	"H-btn6_apg",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og1707.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ image1882.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1521.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1547.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1621.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1655.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1742.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1780.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og2607.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,288,0,[603,553,57,57]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":765,"y":702,"width":72,"height":72}}
};
image1848.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1848Img\" src=\"images/H-btn7_apg.png\" style=\"opacity:0.79;filter:alpha(opacity=79); border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 57px; height: 57px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 674px; top: 553px; width: 57px; height: 57px; z-index: 177; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"1848",
	htmlId:		"tobj1848",
	bInsAnc:	1,
	cwObj:		{
		"name":	"H-btn7_apg",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og1742.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ image1885.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1521.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1547.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1621.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1655.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1707.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1780.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,288,0,[674,553,57,57]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":855,"y":702,"width":72,"height":72}}
};
image1857.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1857Img\" src=\"images/H-btn8_apg.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 57px; height: 57px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 745px; top: 553px; width: 57px; height: 57px; z-index: 178; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"1857",
	htmlId:		"tobj1857",
	bInsAnc:	1,
	cwObj:		{
		"name":	"H-btn8_apg",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og1780.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ image1888.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1521.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1547.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1655.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1621.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og2160.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1707.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1742.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og2607.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,288,0,[745,553,57,57]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":945,"y":702,"width":72,"height":72}}
};
og1866.rcdData.att_TabletLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og1866",
	bInsAnc:	undefined,
	objData:	{"a":[0,0,0,[]],"bReadLast":false}
};
image1867.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1867Img\" src=\"images/M-btn1_select.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 92px; height: 92px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 231px; top: 535px; width: 92px; height: 92px; z-index: 179; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"1867",
	htmlId:		"tobj1867",
	bInsAnc:	1,
	cwObj:		{
		"name":	"M-btn1_select",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image1867.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1521.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[231,535,92,92]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":293,"y":679,"width":117,"height":117}}
};
image1870.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1870Img\" src=\"images/H-btn2_act.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 92px; height: 92px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 302px; top: 535px; width: 92px; height: 92px; z-index: 180; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"1870",
	htmlId:		"tobj1870",
	bInsAnc:	1,
	cwObj:		{
		"name":	"H-btn2_act",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image1870.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1547.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1569.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[302,535,92,92]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":383,"y":679,"width":117,"height":117}}
};
image1878.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1878Img\" src=\"images/H-btn3_act.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 92px; height: 92px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 373px; top: 535px; width: 92px; height: 92px; z-index: 181; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"1878",
	htmlId:		"tobj1878",
	bInsAnc:	1,
	cwObj:		{
		"name":	"H-btn3_act",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image1878.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1655.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1673.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[373,535,92,92]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":473,"y":679,"width":117,"height":117}}
};
image1874.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1874Img\" src=\"images/M-btn3_select.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 92px; height: 92px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 444px; top: 535px; width: 92px; height: 92px; z-index: 182; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"1874",
	htmlId:		"tobj1874",
	bInsAnc:	1,
	cwObj:		{
		"name":	"M-btn4_select",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image1874.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1621.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1635.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[444,535,92,92]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":563,"y":679,"width":117,"height":117}}
};
image2115.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj2115Img\" src=\"images/H-btn5_act.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 92px; height: 92px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 515px; top: 535px; width: 92px; height: 92px; z-index: 183; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"2115",
	htmlId:		"tobj2115",
	bInsAnc:	1,
	cwObj:		{
		"name":	"H-btn5_act",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image2115.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og2160.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og2126.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[515,535,92,92]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":653,"y":679,"width":117,"height":117}}
};
image1882.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1882Img\" src=\"images/H-btn6_act.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 92px; height: 92px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 586px; top: 535px; width: 92px; height: 92px; z-index: 184; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"1882",
	htmlId:		"tobj1882",
	bInsAnc:	1,
	cwObj:		{
		"name":	"H-btn6_act",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image1882.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1707.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[586,535,92,92]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":743,"y":679,"width":117,"height":117}}
};
image1885.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1885Img\" src=\"images/H-btn7_act.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 92px; height: 92px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 657px; top: 535px; width: 92px; height: 92px; z-index: 185; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"1885",
	htmlId:		"tobj1885",
	bInsAnc:	1,
	cwObj:		{
		"name":	"H-btn7_act",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image1885.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1742.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[657,535,92,92]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":833,"y":679,"width":117,"height":117}}
};
image1888.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1888Img\" src=\"images/H-btn8_act.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 92px; height: 92px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 728px; top: 535px; width: 92px; height: 92px; z-index: 186; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"1888",
	htmlId:		"tobj1888",
	bInsAnc:	1,
	cwObj:		{
		"name":	"H-btn8_act",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image1888.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1780.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[728,535,92,92]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":923,"y":679,"width":117,"height":117}}
};
og2607.rcdData.att_TabletLandscape = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	id:		"null",
	htmlId:		"og2607",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
image2608.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj2608Img\" src=\"images/check_ok%402x-8.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 15px; height: 13px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 586px; top: 523px; width: 15px; height: 13px; z-index: 187; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"2608",
	htmlId:		"tobj2608",
	bInsAnc:	1,
	cwObj:		{
		"name":	"item6_1_ok",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image2608.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image1462.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ image2658.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[586,523,15,13]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":743,"y":664,"width":19,"height":16}}
};
image2612.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj2612Img\" src=\"images/check_ok%402x-8.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 15px; height: 13px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 627px; top: 523px; width: 15px; height: 13px; z-index: 188; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"2612",
	htmlId:		"tobj2612",
	bInsAnc:	1,
	cwObj:		{
		"name":	"item6_2_ok",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image2612.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image1463.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image1464.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ image2657.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[627,523,15,13]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":795,"y":664,"width":19,"height":16}}
};
image2617.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj2617Img\" src=\"images/check_ok%402x-8.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 15px; height: 13px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 676px; top: 523px; width: 15px; height: 13px; z-index: 189; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"2617",
	htmlId:		"tobj2617",
	bInsAnc:	1,
	cwObj:		{
		"name":	"item6_3_ok",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image2617.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image1465.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ image2656.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[676,523,15,13]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":857,"y":664,"width":19,"height":16}}
};
image2621.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj2621Img\" src=\"images/check_ok%402x-8.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 15px; height: 13px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 720px; top: 523px; width: 15px; height: 13px; z-index: 190; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"2621",
	htmlId:		"tobj2621",
	bInsAnc:	1,
	cwObj:		{
		"name":	"item6_4_ok",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image2621.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ image2655.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor1.equals('1'))image1419.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor1.equals('2'))image1422.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor1.equals('3'))image1425.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor1.equals('4'))image1428.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarmColor1.equals('1'))image1430.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarmColor1.equals('2'))image1431.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarmColor1.equals('3'))image1432.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarmColor1.equals('4'))image1433.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarmColor1.equals('1'))image1435.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarmColor1.equals('2'))image1436.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarmColor1.equals('3'))image1437.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarmColor1.equals('4'))image1438.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[720,523,15,13]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":913,"y":664,"width":19,"height":16}}
};
image2636.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj2636Img\" src=\"images/check_ok%402x-8.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 15px; height: 13px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 769px; top: 523px; width: 15px; height: 13px; z-index: 191; cursor: pointer; border-radius: 0px;",
	cssClasses:	"",
	id:		"2636",
	htmlId:		"tobj2636",
	bInsAnc:	1,
	cwObj:		{
		"name":	"item6_5_ok",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ image2636.hide(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ image2654.show(); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor1.equals('1'))image1419.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor1.equals('2'))image1422.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor1.equals('3'))image1425.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ if(VarmColor1.equals('4'))image1428.show(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarmColor1.equals('1')&&VarBrazoOutfit.equals('0'))image1430.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarmColor1.equals('2')&&VarBrazoOutfit.equals('0'))image1431.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarmColor1.equals('3')&&VarBrazoOutfit.equals('0'))image1432.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarmColor1.equals('4')&&VarBrazoOutfit.equals('0'))image1433.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarmColor1.equals('1'))image1435.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarmColor1.equals('2'))image1436.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarmColor1.equals('3'))image1437.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarmColor1.equals('4'))image1438.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarmColor1.equals('1')&&VarBrazoOutfit.equals('1'))image2347.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarmColor1.equals('2')&&VarBrazoOutfit.equals('1'))image2349.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarmColor1.equals('3')&&VarBrazoOutfit.equals('1'))image2351.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarmColor1.equals('4')&&VarBrazoOutfit.equals('1'))image2353.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarBrazoOutfit.equals('1'))image2355.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarmColor1.equals('1')&&VarBrazoOutfit.equals('1'))image2339.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarmColor1.equals('2')&&VarBrazoOutfit.equals('1'))image2341.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarmColor1.equals('3')&&VarBrazoOutfit.equals('1'))image2343.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarmColor1.equals('4')&&VarBrazoOutfit.equals('1'))image2345.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarmColor1.equals('1')&&VarBrazoOutfit.equals('2'))image2339.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarmColor1.equals('2')&&VarBrazoOutfit.equals('2'))image2341.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarmColor1.equals('3')&&VarBrazoOutfit.equals('2'))image2343.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarmColor1.equals('4')&&VarBrazoOutfit.equals('2'))image2345.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarBrazoOutfit.equals('2'))image2357.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarmColor1.equals('1')&&VarBrazoOutfit.equals('2'))image2347.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarmColor1.equals('2')&&VarBrazoOutfit.equals('2'))image2349.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarmColor1.equals('3')&&VarBrazoOutfit.equals('2'))image2351.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ if(VarmColor1.equals('4')&&VarBrazoOutfit.equals('2'))image2353.hide(); else if(typeof pF == 'function') pF();
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[769,523,15,13]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":976,"y":664,"width":19,"height":16}}
};
rcdObj.rcdData.att_TabletLandscape = 
{
	font:	{"bold":0,"italic":0,"underline":0,"size":"12","color":null,"bgColor":null,"name":"'Arial',sans-serif","lineHeight":"1.15","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	4
};
rcdObj.pgWidth_TabletLandscape = pgWidth_tabletLand;
rcdObj.preload_TabletLandscape = ["images/cerrar%402x-8.png","images/cerrar_over%402x-8.png","images/check_over%402x-8.png","images/descargar_over%402x-8.png","images/descargar_pasivo%402x-8.png","images/escenario_festival%402x-8.png","images/fondo_casa%402x-8.png","images/footer%402x-8.png","images/reiniciar%402x-8.png","images/reiniciar_over%402x-8.png","images/titulo_2%402x-8.png","images/M-btn1_off.png","images/M-btn3_off.png","images/M-btn1_select.png","images/M-btn3_select.png","images/Mbarra_color_piel.png","images/Mpiel_1.png","images/Mpiel_2.png","images/Mpiel_3.png","images/Mpiel_4.png","images/Mbarra_ojos.png","images/Mcolor_ojos_1.png","images/Mcolor_ojos_2.png","images/Mcolor_ojos_3.png","images/Mbarra_labios.png","images/Mbarra_ropa.png","images/Mbarra_accesorios.png","images/Mvaso_1.png","images/Mvaso_2.png","images/Mbarra_zapatos.png","images/M6-lentes_armazon_1.png","images/M6-lentes_sol_1.png","images/H-btn2_apg.png","images/H-btn6_apg.png","images/H-btn7_apg.png","images/H-btn8_apg.png","images/H-btn2_act.png","images/H-btn6_act.png","images/H-btn7_act.png","images/H-btn8_act.png","images/H1-tono_piel_1.png","images/H1-brazo_2_tono_1.png","images/H1-tono_piel_2.png","images/H1-brazo_2_tono_2.png","images/H1-brazo_2_tono_3.png","images/H1-tono_piel_3.png","images/H1-tono_piel_4.png","images/H1-brazo_2_tono_4.png","images/H-barra_2.png","images/H-cabello_1.png","images/H-cabello_2.png","images/H-cabello_3.png","images/H-cabello_4.png","images/H2-cabello_1_color_1_1.png","images/H2-cabello_1_color_2_1.png","images/H2-cabello_2_color_1_1.png","images/H2-cabello_2_color_2_1.png","images/H2-cabello_3_color_1_1.png","images/H2-cabello_3_color_2_1.png","images/H2-cabello_4_color_1_1.png","images/H2-cabello_4_color_2_1.png","images/H-color_1.png","images/H-color_2.png","images/H-color_3.png","images/H-color_4.png","images/H2-cabello_1_color_3.png","images/H2-cabello_1_color_4.png","images/H2-cabello_2_color_3.png","images/H2-cabello_2_color_4.png","images/H2-cabello_3_color_3.png","images/H2-cabello_3_color_4.png","images/H2-cabello_4_color_3.png","images/H2-cabello_4_color_4.png","images/H-ojos_1.png","images/H-ojos_2.png","images/H-ojos_3.png","images/H4-ojos_1_color1.png","images/H4-ojos_1_color2.png","images/H4-ojos_1_color3.png","images/H4-ojos_2_color1.png","images/H4-ojos_2_color2.png","images/H4-ojos_2_color3.png","images/H4-ojos_3_color1.png","images/H4-ojos_3_color2.png","images/H4-ojos_3_color3.png","images/H-barba_1.png","images/H-barba_2.png","images/H-barba_3.png","images/H-barba_4.png","images/H3-barba_1_color1.png","images/H3-barba_1_color2.png","images/H3-barba_1_color3.png","images/H3-barba_1_color4.png","images/H3-barba_2_color1.png","images/H3-barba_2_color2.png","images/H3-barba_2_color3.png","images/H3-barba_2_color4.png","images/H3-barba_3_color1.png","images/H3-barba_3_color2.png","images/H3-barba_3_color3.png","images/H3-barba_3_color4.png","images/H3-bigote_color1.png","images/H3-bigote_color2.png","images/H3-bigote_color3.png","images/H3-bigote_color4.png","images/H6-jeans.png","images/H6-oufit_6.png","images/H6-playera_1_2.png","images/H6-playera_2_2.png","images/H6-playera_3_2.png","images/H6-oufit_4.png","images/H6-oufit_5.png","images/H-jeans_1.png","images/H-short_hombre.png","images/H-playera_1.png","images/H-playera_2.png","images/H-playera_3.png","images/H-oufit_2.png","images/H-oufit_3.png","images/H-mochila.png","images/H-lentes_armazon.png","images/H-lentes_sol.png","images/H-sombrero.png","images/H7-sombrero_1.png","images/H7-mochila_hombre.png","images/H1-brazo_hombre_vaso_1-1.png","images/H1-brazo_hombre_vaso_1-2.png","images/H1-brazo_hombre_vaso_1-3.png","images/H1-brazo_hombre_vaso_1-4.png","images/H1-brazo_hombre_vaso_2-1.png","images/H1-brazo_hombre_vaso_2-2.png","images/H1-brazo_hombre_vaso_2-3.png","images/H1-brazo_hombre_vaso_2-4.png","images/H8-zapatos_1.png","images/H8-zapatos_2.png","images/H8-zapatos_3.png","images/H8-zapatos_4.png","images/H-zapato-1.png","images/H-zapato-2.png","images/H-zapato-3.png","images/H-zapato-4.png","images/H-btn5_apg.png","images/H-btn5_act.png","images/H-btn3_act.png","images/H-btn3_apg.png","images/H-color_labios_1.png","images/H-color_labios_2.png","images/H-color_labios_3.png","images/H-color_labios_4.png","images/H-labios_1.png","images/H-labios_2.png","images/H-labios_3.png","images/H-labios_4.png","images/H5-labios_1_color_1.png","images/H5-labios_1_color_2.png","images/H5-labios_1_color_3.png","images/H5-labios_1_color_4.png","images/H5-labios_2_color_1.png","images/H5-labios_2_color_2.png","images/H5-labios_2_color_3.png","images/H5-labios_2_color_4.png","images/H5-labios_3_color_1.png","images/H5-labios_3_color_2.png","images/H5-labios_3_color_3.png","images/H5-labios_3_color_4.png","images/H5-labios_4_color_1.png","images/H5-labios_4_color_2.png","images/H5-labios_4_color_3.png","images/H5-labios_4_color_4.png","images/check%402x-8%20copia.png","images/H1-brazo_hombre_vaso_Outfit1-1.png","images/H1-brazo_hombre_vaso_Outfit1-2.png","images/H1-brazo_hombre_vaso_Outfit1-3.png","images/H1-brazo_hombre_vaso_Outfit1-4.png","images/H1-brazo_hombre_vaso_Outfit2-1.png","images/H1-brazo_hombre_vaso_Outfit2-2.png","images/H1-brazo_hombre_vaso_Outfit2-3.png","images/H1-brazo_hombre_vaso_Outfit2-4.png","images/H6-brazo_oufit_4.png","images/H6-brazo_oufit_5.png","images/check_ok%402x-8.png","images/check_1%402x-8.png"];
rcdObj.pgStyle_TabletLandscape = 'position: absolute; left: 0px; top: 0px; width: 1009px; height: 662px; overflow: hidden; background-size: auto;'
rcdObj.backgrd_TabletLandscape = ["#FFFFFF","",0,0,1];
