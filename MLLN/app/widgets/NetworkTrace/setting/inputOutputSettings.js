// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

require({cache:{"url:widgets/NetworkTrace/setting/inputOutputSettings.html":'\x3cdiv\x3e\r\n    \x3cdiv\x3e\r\n        \x3cfieldset class\x3d"esriCTFieldset"\x3e\r\n            \x3clegend class\x3d"esriCTLegendTitle"\x3e${nls.inputOutputTab.inputSettingsLabel}\x3c/legend\x3e\r\n            \x3cdiv data-dojo-attach-point\x3d"inputTableNode"\x3e\r\n            \x3c/div\x3e\r\n        \x3c/fieldset\x3e\r\n    \x3c/div\x3e\r\n\r\n    \x3cdiv class\x3d"esriCTOutPutSettingsParent"\x3e\r\n        \x3cfieldset class\x3d"esriCTFieldset"\x3e\r\n            \x3clegend class\x3d"esriCTLegendTitle"\x3e${nls.inputOutputTab.outputSettingsLabel}\x3c/legend\x3e\r\n            \x3cdiv data-dojo-attach-point\x3d"outputTableNode"\x3e\r\n            \x3c/div\x3e\r\n        \x3c/fieldset\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/query dijit/registry dojo/dom-construct dojo/dom-style dojo/on ./SymbolChooserPopup jimu/symbolUtils esri/symbols/jsonUtils jimu/dijit/Popup dojo/sniff dojo/_base/html jimu/dijit/SimpleTable dojo/text!./inputOutputSettings.html dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/form/ValidationTextBox jimu/utils dijit/Editor esri/dijit/VisibleScaleRangeSlider ./FieldSelector jimu/dijit/Message dijit/form/Select dojo/dom-attr dijit/_editor/plugins/LinkDialog dijit/_editor/plugins/ViewSource dijit/_editor/plugins/FontChoice dojox/editor/plugins/Preview dijit/_editor/plugins/TextColor dojox/editor/plugins/ToolbarLineBreak dojox/editor/plugins/FindReplace dojox/editor/plugins/PasteFromWord dojox/editor/plugins/InsertAnchor dojox/editor/plugins/Blockquote dojox/editor/plugins/UploadImage jimu/dijit/EditorChooseImage jimu/dijit/EditorTextColor jimu/dijit/EditorBackgroundColor".split(" "),
function(y,h,l,g,t,e,m,r,z,A,q,B,C,D,u,E,F,G,H,v,n,I,w,J,K,x,L){return y([F,G,H],{templateString:E,baseClass:"jimu-widget-NetworkTrace-setting",_loadedPluginCSS:!1,_hasSkipLocationsInput:!1,startup:function(){this.inherited(arguments)},postCreate:function(){this._hasSkipLocationsInput=this._loadedPluginCSS=!1;this._createInputTable();this._createOutputTable()},onProjectSettingsChanged:function(a){l.forEach(this._outputTable.getRows(),h.hitch(this,function(b){var c=!0;a&&a.polygonLayerId&&a.pointLayerId&&
a.outputParamName&&(c=!1,b.config.paramName===a.outputParamName&&(c=!0));b&&b.layerSelector.set("disabled",c)}))},_createInputTable:function(){this._inputTable=new u({fields:[{name:"displayName",title:this.nls.common.name,type:"text",width:"15%"},{name:"type",title:this.nls.inputOutputTab.typeText,type:"empty",width:"25%"},{name:"toolTip",title:this.nls.inputOutputTab.inputTooltip,editable:!0,type:"text",width:"40%"},{name:"symbol",title:this.nls.inputOutputTab.symbol,type:"empty",width:"10%"}],selectable:!1});
this._inputTable.placeAt(this.inputTableNode);this._inputTable.startup();this.setInputSettings()},getInputSettings:function(){var a,b;a=[];l.forEach(this._inputTable.getRows(),h.hitch(this,function(c){var d={};c&&(d=this._inputTable.getRowData(c),b=this._getInputType(c.inputTypeDropdownObj),d={paramName:c.config.paramName,displayName:c.config.displayName,toolTip:d.toolTip,type:b,symbol:c.symbol},a.push(d))}));return a},setInputSettings:function(){this._inputTable.clear();this.inputConfig&&0<this.inputConfig.length&&
l.forEach(this.inputConfig,h.hitch(this,function(a){var b,c;c=this._inputTable.addRow(a);c.tr.config=a;a.type&&this.inputDataTypes.skip_locations===a.type&&(this._hasSkipLocationsInput=!0);if(b=g(".simple-table-cell",c.tr))this._addInputTypesDropDown(b[1],c.tr,a),this._addSymbolPicker(b[3],c.tr,a)}))},_createOutputTable:function(){this._outputTable=new u({fields:[{name:"visibility",title:this.nls.inputOutputTab.visibilityText,type:"checkbox",width:"10%"},{name:"displayName",title:this.nls.inputOutputTab.outputParametersText,
type:"text",width:"20%"},{name:"saveToLayer",title:"",type:"empty",width:"26%"},{name:"skipable",title:this.nls.inputOutputTab.skipText,type:"checkbox",width:"12%"},{name:"exportToCSV",title:this.nls.inputOutputTab.exportToCsvText,type:"checkbox",width:"12%"},{name:"symbol",title:this.nls.inputOutputTab.symbol,type:"empty",width:"10%"},{name:"settings",title:this.nls.inputOutputTab.settitngstext,type:"empty",width:"10%"}],selectable:!1});this._outputTable.placeAt(this.outputTableNode);this._outputTable.startup();
this._addSaveToLayerMainDiv();this._addHelpIconToHeader();this.setOutputSettings();this.onProjectSettingsChanged(this.projectSettings)},_addSaveToLayerMainDiv:function(){var a;if(a=g(".simple-table-thead tr",this.domNode)[1])if(a=a.children[2])a=e.create("div",{"class":"esriCTSaveToLayerMainDiv"},a),e.create("div",{"class":"esriCTSaveToLayerLabelDiv",innerHTML:this.nls.inputOutputTab.saveToLayerText,title:this.nls.inputOutputTab.saveToLayerText},a)},_getSaveToLayerInfo:function(a){var b={saveToLayerId:"",
guidField:"",parameterNameField:""};a&&a.get("value")&&(a=a._getSelectedOptionsAttr(),b.saveToLayerId=a.layerId,b.guidField=a.guidField,b.parameterNameField=a.parameterNameField);return b},getOutputSettings:function(){var a=[];l.forEach(this._outputTable.getRows(),h.hitch(this,function(b){var c={},d;b&&(d=this._outputTable.getRowData(b),c=this._getSaveToLayerInfo(b.layerSelector),c={visibility:d.visibility,paramName:b.config.paramName,type:"Result",panelText:b.config.panelText,toolTip:b.config.toolTip,
displayName:d.displayName,displayText:b.config.displayText,MinScale:b.config.MinScale,MaxScale:b.config.MaxScale,exportToCSV:d.exportToCSV,saveToLayer:c.saveToLayerId,guidField:c.guidField,parameternameField:c.parameterNameField,symbol:b.symbol},c.bypassDetails={skipable:d.skipable},a.push(c))}));return a},setOutputSettings:function(){this.outputConfig&&0<this.outputConfig.length&&l.forEach(this.outputConfig,h.hitch(this,function(a){var b,c,d;c=this._outputTable.addRow(a);b=g(".simple-table-cell",
c.tr);c.tr.config=a;"esriGeometryPoint"===a.data.defaultValue.geometryType&&this._hasSkipLocationsInput||(d=g(".skipable",c.tr),l.forEach(d,function(b){b=t.getEnclosingWidget(b.childNodes[0]);b.setValue(!1);b.setStatus(!1)}));b&&(this._addSaveToLayerDropDown(b[2],c.tr),this._addSymbolPicker(b[5],c.tr,a),this._addSettingsIcon(b[6],c.tr))}))},_validateLayerCapabilities:function(a){return a&&a.getEditCapabilities&&(a=a.getEditCapabilities(),a.canCreate&&a.canUpdate&&a.canDelete)?!0:!1},_validateLayerFields:function(a){var b,
c,d;d={projectidField:null,parameterNameField:null};c=b=!1;l.some(a,function(a){"esriFieldTypeGUID"===a.type&&a.editable&&"projectid"===a.name.toLowerCase()&&(d.projectidField=a.name,c=!0);"esriFieldTypeString"===a.type&&a.editable&&"parametername"===a.name.toLowerCase()&&(d.parameterNameField=a.name,b=!0);if(b&&c)return!0});b&&c||(d=null);return d},_createSaveToLayerOptions:function(a){var b,c,d=[];d.push({value:"",label:this.nls.projectSetting.selectLabel});if(this.map&&this.map.itemInfo&&this.map.itemInfo.itemData&&
this.map.itemInfo.itemData.operationalLayers)for(c=this.map.itemInfo.itemData.operationalLayers,b=0;b<c.length;b++){var e;c[b]&&c[b].layerObject&&c[b].layerType&&"ArcGISFeatureLayer"===c[b].layerType&&c[b].layerObject.fields&&a===c[b].layerObject.geometryType&&this._validateLayerCapabilities(c[b].layerObject)&&(e=this._validateLayerFields(c[b].layerObject.fields))&&(e={value:c[b].id,layerId:c[b].id,guidField:e.projectidField,parameterNameField:e.parameterNameField,label:c[b].title},d.push(e))}return d},
_addSaveToLayerDropDown:function(a,b){var c;a=e.create("div",{"class":"esriCTDropDownContainer"},a);c=this._createSaveToLayerOptions(b.config.data.defaultValue.geometryType);c=new x({options:c,"class":"esriCTLayerFieldSelector"});c.placeAt(a);c.startup();b.layerSelector=c;b.config&&b.config.saveToLayer&&c.set("value",b.config.saveToLayer)},_addSettingsIcon:function(a,b){a=e.create("div",{},a);a=e.create("div",{"class":"esriCTToleranceSettingsIcon",title:this.nls.inputOutputTab.settitngstext},e.create("div",
{},a));this.own(r(a,"click",h.hitch(this,function(){this._createOutputPanel(b)})))},_initEditorPluginsCSS:function(){var a,b;a=document.getElementsByTagName("head")[0];b=window.apiUrl+"dojox/editor/plugins/resources/css/TextColor.css";g('link[href\x3d"'+b+'"]',a)[0]||n.loadStyleLink("editor_plugins_resources_TextColor",b);b=window.apiUrl+"dojox/editor/plugins/resources/editorPlugins.css";g('link[href\x3d"'+b+'"]',a)[0]||n.loadStyleLink("editor_plugins_resources_editorPlugins",b);b=window.apiUrl+"dojox/editor/plugins/resources/css/PasteFromWord.css";
g('link[href\x3d"'+b+'"]',a)[0]||n.loadStyleLink("editor_plugins_resources_PasteFromWord",b)},_initEditor:function(){this._loadedPluginCSS||(this._loadedPluginCSS=!0,this._initEditorPluginsCSS());this._editorObj=new I({plugins:["bold","italic","underline",n.getEditorTextColor("networkTrace"),n.getEditorBackgroundColor("networkTrace"),"|","justifyLeft","justifyCenter","justifyRight","justifyFull","|","insertOrderedList","insertUnorderedList","indent","outdent"],extraPlugins:["|","createLink","unlink",
"pastefromword","|","undo","redo","|","toolbarlinebreak",{name:"dijit._editor.plugins.FontChoice",command:"fontName",custom:"Arial;Comic Sans MS;Courier New;Garamond;Tahoma;Times New Roman;Verdana".split(";")},"fontSize","formatBlock"],style:"font-family:Verdana;"},this.editorDescription);m.set(this._editorObj.domNode,{width:"100%",height:"100%"});this._editorObj.startup();if(8!==C("ie"))this._editorObj.resize({w:"100%",h:"100%"});else{var a=D.getMarginBox(this.editorDescription);this._editorObj.resize({w:a.w,
h:a.h})}},_createSlider:function(a,b,c){c&&c.saveToLayerId&&0===b.MinScale&&0===b.MaxScale?(b=this.map.getLayer(c.saveToLayerId),this._visibleScaleRangeSlider=new w({map:this.map,layer:b},e.create("div",{},a))):(this._visibleScaleRangeSlider=new w({map:this.map},e.create("div",{},a)),this._visibleScaleRangeSlider.set("minScale",b.MinScale),this._visibleScaleRangeSlider.set("maxScale",b.MaxScale));this._visibleScaleRangeSlider.startup()},_createFieldSelector:function(a,b,c){(new J({fields:c,showOnlyNumericFields:!1,
skipObjectIdField:!0,hideOnSelect:!0},e.create("div",{},a))).onSelect=h.hitch(this,function(a){a=b.get("value")+"{"+a.name+"}";b.set&&b.set("value",a)})},_createOutputPanel:function(a){var b,c="",c=a.config.displayName;b=e.create("div");var d=e.create("div",{"class":"ParameterDiv esriCTtaskDataContainer",style:{"max-height":"395px"}},b),d=e.create("div",{"class":"section common-property"},d),f=e.create("div",{"class":"field esriCTOutputOutageField",title:this.nls.inputOutputTab.inputLabel},d);e.create("label",
{innerHTML:this.nls.inputOutputTab.inputLabel,title:this.nls.inputOutputTab.inputLabel},f);this.labelTextbox=new v({required:!0,"class":"common-input esriCTLabelClass"},e.create("div",{},f));this.labelTextbox.set("value",a.config.panelText);e.create("div",{"class":"esriCTHintField",innerHTML:this.nls.hintText.labelTextHint},f);f=e.create("div",{"class":"field esriCTOutputOutageField",title:this.nls.inputOutputTab.inputTooltip},d);e.create("label",{innerHTML:this.nls.inputOutputTab.inputTooltip,title:this.nls.inputOutputTab.inputTooltip},
f);this.tooltipTextbox=new v({"class":"common-input esriCTTooltipDataClass"},e.create("div",{},f));this.tooltipTextbox.set("value",a.config.toolTip);f=e.create("div",{"class":"field esriCTOutputOutageField",title:this.nls.inputOutputTab.outputDisplay},d);e.create("label",{innerHTML:this.nls.inputOutputTab.outputDisplay,title:this.nls.inputOutputTab.outputDisplay},f);var p=e.create("div",{"class":"edit-description-box"},f),g=e.create("div",{"class":"esriCTAddFieldContainer",title:this.nls.inputOutputTab.addFieldTitle},
p);this.editorDescription=e.create("div",{},p);e.create("div",{"class":"esriCTHintField",innerHTML:this.nls.hintText.displayTextHint},f);this._initEditor();this._createFieldSelector(g,this._editorObj,a.config.data.defaultValue.fields);this._editorObj.set("value",a.config.displayText);f=e.create("div",{"class":"field esriCTOutputOutageField",title:this.nls.inputOutputTab.setScale},d);e.create("label",{innerHTML:this.nls.inputOutputTab.setScale,title:this.nls.inputOutputTab.setScale},f);d=this._getSaveToLayerInfo(a.layerSelector);
f=new e.create("div",{"class":"esriCTSliderContainer"},f);this._createSlider(f,a.config,d);var k=new B({titleLabel:c,width:875,maxHeight:800,autoHeight:!0,content:b,"class":this.baseClass,buttons:[{label:this.nls.common.ok,onClick:h.hitch(this,function(){this.labelTextbox.isValid()?(a.config.panelText=this.labelTextbox.get("value"),a.config.toolTip=this.tooltipTextbox.get("value"),a.config.displayText=this._editorObj.get("value"),a.config.MinScale=this._visibleScaleRangeSlider.minScale,a.config.MaxScale=
this._visibleScaleRangeSlider.maxScale,this._destroyEditorWidget(),k.close()):this.labelTextbox.focus()})},{label:this.nls.common.cancel,classNames:["jimu-btn-vacation"],onClick:h.hitch(this,function(){this._destroyEditorWidget();k.close()})}],onClose:h.hitch(this,function(){this._destroyEditorWidget()})})},_getFallbackSymbol:function(a){var b;a||(a="esriGeometryPoint");switch(a){case "esriGeometryPoint":b={color:[0,0,128,128],outline:{color:[0,0,128,255],width:.75,type:"esriSLS",style:"esriSLSSolid"},
size:18,type:"esriSMS",style:"esriSMSCircle"};break;case "esriGeometryPolygon":b={color:[155,187,89,129],outline:{color:[115,140,61,255],width:1.5,type:"esriSLS",style:"esriSLSSolid"},type:"esriSFS",style:"esriSFSSolid"};break;case "esriGeometryPolyline":b={color:[155,187,89,255],type:"esriSLS",style:"esriSLSSolid",width:2.25}}return b},_addSymbolPicker:function(a,b,c){var d={},f,p="";f=c&&c.data&&c.data.defaultValue&&c.data.defaultValue.geometryType?c.data.defaultValue.geometryType:"esriGeometryPoint";
c.displayName&&(p=c.displayName);d.symbol=b.symbol?q.fromJson(b.symbol):c&&c.symbol?q.fromJson(c.symbol):q.fromJson(this._getFallbackSymbol(f));var g={symbolChooserTitle:p,symbolParams:d,nls:this.nls,symbolType:"graphicLocationSymbol"},k=e.create("div",{style:"height: 27px; overflow: hidden;"},a);this._showSelectedSymbol(k,d.symbol,b,f);this.own(r(k,"click",h.hitch(this,function(){g.symbolParams.symbol=q.fromJson(b.symbol);this._initSymbolChooserPopup(g,k,b,f)})))},_initSymbolChooserPopup:function(a,
b,c,d){var e=new z(a);e.onOkClick=h.hitch(this,function(){var a=e.symbolChooser.getSymbol();this._showSelectedSymbol(b,a,c,d);e.popup.close()})},_showSelectedSymbol:function(a,b,c,d){e.empty(a);var f,g,l;if(b){26<b.height&&(f=h.clone(b.height),b.height=26);26<b.width&&(g=h.clone(b.width),b.width=26);20<b.size&&(l=h.clone(b.size),b.size=20);var k=A.createSymbolNode(b);k||(k=e.create("div"));e.place(k,a);f&&(b.height=f);g&&(b.width=g);l&&(b.size=l);switch(d){case "esriGeometryPoint":m.set(a,"margin",
"0 24px");break;case "esriGeometryPolyline":m.set(k,"width","27px"),m.set(k,"overflow","hidden"),m.set(k,"margin","0 24px")}c.symbol=b.toJson()}},_addHelpIconToHeader:function(){var a,b,c;if(a=g(".simple-table-thead tr",this.domNode)[1])b=a.children[2],b=b.childNodes[0],a.children[4]&&(c=a.children[4]);c&&c.childNodes&&c.childNodes[0]&&c.childNodes[0].hasAttribute("id")&&(a=t.byId(c.childNodes[0].id))&&(a.setLabel(this.nls.inputOutputTab.exportToCsvDisplayText),a.domNode&&a.domNode.children&&a.domNode.children[1]&&
L.set(a.domNode.children[1],"title",this.nls.inputOutputTab.exportToCsvText));b=e.create("div",{"class":"esriCTSaveTolayerHelpIcon"},b);r(b,"click",h.hitch(this,function(){new K({message:this.nls.inputOutputTab.saveToLayerHelp})}))},_destroyEditorWidget:function(){this._editorObj&&(this._editorObj.destroy(),this._editorObj=null)},_addInputTypesDropDown:function(a,b,c){var d;a=e.create("div",{"class":"esriCTDropDownContainer"},a);d=new x({options:[{label:"Flag",value:this.inputDataTypes.flags},{label:"Barrier",
value:this.inputDataTypes.barriers},{label:"Skip",value:this.inputDataTypes.skip_locations}],"class":"esriCTLayerFieldSelector"});d.placeAt(a);d.startup();c.paramName.toLowerCase()===Object.keys(this.inputDataTypes)[0].toLowerCase()&&d.set("value",this.inputDataTypes.flags);c.paramName.toLowerCase()===Object.keys(this.inputDataTypes)[1].toLowerCase()&&d.set("value",this.inputDataTypes.barriers);c.paramName.toLowerCase()===Object.keys(this.inputDataTypes)[2].toLowerCase()&&d.set("value",this.inputDataTypes.skip_locations);
b.inputTypeDropdownObj=d;b.config&&b.config.type&&d.set("value",b.config.type)},_getInputType:function(a){var b;""!==a&&null!==a&&void 0!==a&&(b=a.get("value"));return b}})});