// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define(["dojo/_base/declare","./mgrs","./labeling-utils","./LabelElement","esri/geometry/Point"],function(n,r,t,m,p){return n(null,{clippedPolygon:null,unclippedPolygon:null,map:null,xmin:0,ymin:0,xmax:0,ymax:0,minMaxType:"",utmZone:0,text:"",color:null,labelParameters:null,_centerLabelSet:!1,_centerLabel:null,_labelsSet:!1,_labels:[],_cornerLabels:[],_borderLabels:[],_interiorLabels:[],candidatePoint:null,constructor:function(a){this.unclippedPolygon=a.unclippedPolygon;this.clippedPolygon=a.clippedPolygon;
this.map=a.map;this.xmin=a.xmin;this.ymin=a.ymin;this.xmax=a.xmax;this.ymax=a.ymax;this.minMaxType=a.minMaxType;this.utmZone=Math.round(a.utmZone);this.text=a.text;this.labelParameters=a.labelParameters;this._cornerLabels=[];this._borderLabels=[];this._interiorLabels=[];this._centerLabel=null;this._labelsSet=this._centerLabelSet=!1},getLabels:function(a){a=a||!1;this._labelsSet||(this._cornerLabels=this.setLabels(a),this._labelsSet=!0);a=0<this._cornerLabels.length?this._cornerLabels:0<this._borderLabels.length?
this._borderLabels:this._interiorLabels;for(var b=0;b<a.length;b++)a[b]=a[b].getLabelGraphic();return a},getCenterLabel:function(a){this._centerLabelSet||(this.setCenterLabel(a),this._centerLabelSet=!0);return this._centerLabel.getLabelGraphic()},setCenterLabel:function(a){a=a?this.clippedPolygon:this.unclippedPolygon;var b={xOffset:0,yOffset:0,rotation:0,color:this.labelParameters.color,fontFamily:this.labelParameters.fontFamily,fontSize:this.labelParameters.fontSize};this._centerLabel=new m({map:this.map,
point:a.getCentroid(),labelParameters:b,text:this.text,verticalAlign:"middle",horizontalAlign:"middle"});b=new m({map:this._centerLabel.map,point:this._centerLabel.point,labelParameters:b,text:"utm"===this.minMaxType?"WW":"22W",verticalAlign:"middle",horizontalAlign:"middle"});b.shrinkToFit(a,12);this._centerLabel.font.setSize(b.font.size);this._centerLabel.setExtent()},setLabels:function(a){a=a||!1;for(var b=this.clippedPolygon.rings,e=t.getScreenSize(this.clippedPolygon.getExtent(),this.map),g=
{xmin:Math.round(1E3*this.xmin)/1E3,ymin:Math.round(1E3*this.ymin)/1E3,xmax:Math.round(1E3*this.xmax)/1E3,ymax:Math.round(1E3*this.ymax)/1E3,map_xmin:this.map.extent.xmin,map_ymin:this.map.extent.ymin,map_xmax:this.map.extent.xmax,map_ymax:this.map.extent.ymax},f,k,c={"lower-left":{label:null,priority:99,hidden:!1},"lower-right":{label:null,priority:99,hidden:!1},"upper-left":{label:null,priority:99,hidden:!1},"upper-right":{label:null,priority:99,hidden:!1}},d=0;d<b.length;d++){f=null;for(var l=
0;l<b[d].length-1;l++){this.candidatePoint=new p(b[d][l],this.clippedPolygon.spatialReference);k=new p(b[d][l+1],this.clippedPolygon.spatialReference);if(0===l){var h=new p(b[d][b[d].length-2],this.clippedPolygon.spatialReference);f=this._findAngle(h,this.candidatePoint)}k=this._findAngle(this.candidatePoint,k);if(k!==f&&(h="",0===k&&90===f?h="lower-right":270===k&&180===f?h="lower-right":0===k&&270===f?h="lower-left":90===k&&180===f?h="lower-left":90===k&&0===f?h="upper-left":180===k&&270===f?h=
"upper-left":180===k&&90===f?h="upper-right":270===k&&0===f&&(h="upper-right"),h)){f=this._findType(this.candidatePoint,g);var q=f.priority,n=new m({map:this.map,point:this.candidatePoint,labelParameters:this.labelParameters,text:this.text,verticalAlign:h.split("-")[0],horizontalAlign:h.split("-")[1]});c[h].priority>q&&(c[h].label=n,c[h].priority=q,c[h].xOffset=f.xOffset,c[h].yOffset=f.yOffset)}f=k}}b=c["lower-left"];g=c["upper-left"];d=c["lower-right"];c=c["upper-right"];300>e.width&&(b.priority>
d.priority&&(b.hidden=!0),d.priority>b.priority&&(d.hidden=!0),g.priority>c.priority&&(g.hidden=!0),c.priority>g.priority&&(c.hidden=!0));200>e.height&&(b.priority>g.priority&&(b.hidden=!0),d.priority>c.priority&&(d.hidden=!0),g.priority>b.priority&&(g.hidden=!0),c.priority>d.priority&&(c.hidden=!0));"utm"===this.minMaxType&&(b.xOffset&&(b.label.xOffset=70),g.xOffset&&(g.label.xOffset=70),c.xOffset&&(c.label.xOffset=70),d.xOffset&&(d.label.xOffset=70),b.yOffset&&(b.label.yOffset=40),g.yOffset&&(g.label.yOffset=
40),c.yOffset&&(c.label.yOffset=40),d.yOffset&&(d.label.yOffset=40));e=[];!b.hidden&&b.label&&e.push(b.label);!g.hidden&&g.label&&e.push(g.label);!c.hidden&&c.label&&e.push(c.label);!d.hidden&&d.label&&e.push(d.label);a=a?this.unclippedPolygon:this.clippedPolygon;for(c=0;c<e.length;c++)(new m({map:this.map,point:e[c].point,labelParameters:this.labelParameters,text:"utm"===this.minMaxType?"WW":"22W",verticalAlign:e[c].verticalAlign,horizontalAlign:e[c].horizontalAlign})).fitsInPolygon(a)||(e.splice(c,
1),c--);return e},_findXY:function(a){var b;b=a.getLongitude();a=a.getLatitude();"utm"===this.minMaxType?(a=r.LLtoUTM(a,b,this.utmZone),b=100*Math.round(a[0]/100),a=100*Math.round(a[1]/100),b%=1E6,a%=1E6):(b=Math.round(1E3*b)/1E3,a=Math.round(1E3*a)/1E3);return{x:b,y:a}},_findAngle:function(a,b){for(a=-(180*Math.atan2(b.y-a.y,b.x-a.x)/Math.PI)+90;0>a;)a+=360;for(;360<=a;)a-=360;15>a||345<a?a=0:105>a&&75<a?a=90:195>a&&165<a?a=180:285>a&&255<a&&(a=270);return a},_findType:function(a,b){var e=this._findXY(this.candidatePoint),
g=e.x,e=e.y,f=!1,k=!1,c=0;a.x===b.map_xmin||a.x===b.map_xmax?(f=!0,c+=2):g===b.xmin||g===b.xmax?console.warn():c+=1;a.y===b.map_ymin||a.y===b.map_ymax?(k=!0,c+=2):e===b.ymin||e===b.ymax?console.warn():c+=1;return{priority:c,xOffset:f,yOffset:k}}})});