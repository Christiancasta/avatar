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
image1379.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<img id=\"tobj1379Img\" src=\"images/homeFondo.png\" style=\"border-radius: 0px; position: absolute; border-style: none; left: 0px; top: 0px; width: 1009px; height: 505px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 0px; top: 0px; width: 1009px; height: 505px; z-index: 2; border-radius: 0px;",
	cssClasses:	"",
	id:		"1379",
	htmlId:		"tobj1379",
	bInsAnc:	0,
	cwObj:		{
		"name":	"homeFondo"
	},
	objData:	{"a":[0,288,0,[0,0,1009,505]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":0,"width":1280,"height":640}}
};
textbutton1382.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div id=\"tobj1382inner\"><svg viewBox=\"0 0 284 76\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(142 38)\" style=\"\">\n	<path d=\"M 0 0 L 284 0 L 284 76 L 0 76 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-142, -38) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_1369_201\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"284\" height=\"76\" xlink:href=\"images/homeBtn2.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 284 0 L 284 76 L 0 76 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1369_201&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-142, -38) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(142 38)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 50px; top: 186px; width: 284px; height: 76px; z-index: 3; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"1382",
	htmlId:		"tobj1382",
	bInsAnc:	false,
	cwObj:		{
		"name":	"Button 2",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivExitPage('kaanbal_avatar_avatar_mujer.html',true,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33120,0,[50,186.00000000000003,284,76]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":63,"y":236,"width":360,"height":96},"bTriggerScreenRdrOnShow":false,"svgDataNormal":"<g transform=\"translate(142 38)\" style=\"\">\n\t<path d=\"M 0 0 L 284 0 L 284 76 L 0 76 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-142, -38) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_1369_201\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"284\" height=\"76\" xlink:href=\"images/homeBtn2.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 284 0 L 284 76 L 0 76 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1369_201&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-142, -38) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(142 38)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(142 38)\" style=\"\">\n\t<path d=\"M 0 0 L 284 0 L 284 76 L 0 76 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-142, -38) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_1369_203\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"284\" height=\"76\" xlink:href=\"images/homeBtn2Over.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 284 0 L 284 76 L 0 76 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1369_203&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-142, -38) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(142 38)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(142 38)\" style=\"\">\n\t<path d=\"M 0 0 L 284 0 L 284 76 L 0 76 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-142, -38) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_1369_205\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"284\" height=\"76\" xlink:href=\"images/homeBtn2.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 284 0 L 284 76 L 0 76 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1369_205&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-142, -38) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(142 38)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(142 38)\" style=\"\">\n\t<path d=\"M 0 0 L 284 0 L 284 76 L 0 76 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-142, -38) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_1369_207\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"284\" height=\"76\" xlink:href=\"images/homeBtn2.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 284 0 L 284 76 L 0 76 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1369_207&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-142, -38) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(142 38)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled"}
};
textbutton1380.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div id=\"tobj1380inner\"><svg viewBox=\"0 0 284 76\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(142 38)\" style=\"\">\n	<path d=\"M 0 0 L 284 0 L 284 76 L 0 76 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-142, -38) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_1369_209\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"284\" height=\"76\" xlink:href=\"images/homeBtn1.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 284 0 L 284 76 L 0 76 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1369_209&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-142, -38) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(142 38)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 688px; top: 186px; width: 284px; height: 76px; z-index: 4; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"1380",
	htmlId:		"tobj1380",
	bInsAnc:	false,
	cwObj:		{
		"name":	"Button 1",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivExitPage('kaanbal_avatar_avatar_hombre.html',true,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33120,0,[688,186.00000000000003,284,76]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":873,"y":236,"width":360,"height":96},"bTriggerScreenRdrOnShow":false,"svgDataNormal":"<g transform=\"translate(142 38)\" style=\"\">\n\t<path d=\"M 0 0 L 284 0 L 284 76 L 0 76 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-142, -38) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_1369_209\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"284\" height=\"76\" xlink:href=\"images/homeBtn1.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 284 0 L 284 76 L 0 76 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1369_209&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-142, -38) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(142 38)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(142 38)\" style=\"\">\n\t<path d=\"M 0 0 L 284 0 L 284 76 L 0 76 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-142, -38) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_1369_211\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"284\" height=\"76\" xlink:href=\"images/homeBtn1Over.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 284 0 L 284 76 L 0 76 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1369_211&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-142, -38) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(142 38)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(142 38)\" style=\"\">\n\t<path d=\"M 0 0 L 284 0 L 284 76 L 0 76 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-142, -38) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_1369_213\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"284\" height=\"76\" xlink:href=\"images/homeBtn1.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 284 0 L 284 76 L 0 76 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1369_213&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-142, -38) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(142 38)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(142 38)\" style=\"\">\n\t<path d=\"M 0 0 L 284 0 L 284 76 L 0 76 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-142, -38) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_1369_215\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"284\" height=\"76\" xlink:href=\"images/homeBtn1.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 284 0 L 284 76 L 0 76 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_1369_215&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-142, -38) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(142 38)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled"}
};
rcdObj.rcdData.att_TabletLandscape = 
{
	font:	{"bold":0,"italic":0,"underline":0,"size":"12","color":null,"bgColor":null,"name":"'Arial',sans-serif","lineHeight":"1.15","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	4
};
rcdObj.pgWidth_TabletLandscape = pgWidth_tabletLand;
rcdObj.preload_TabletLandscape = ["images/homeBtn1.png","images/homeBtn1Over.png","images/homeBtn2.png","images/homeBtn2Over.png","images/homeFondo.png"];
rcdObj.pgStyle_TabletLandscape = 'position: absolute; left: 0px; top: 0px; width: 1009px; height: 662px; overflow: hidden; background-size: auto;'
rcdObj.backgrd_TabletLandscape = ["#FFFFFF","",0,0,1];