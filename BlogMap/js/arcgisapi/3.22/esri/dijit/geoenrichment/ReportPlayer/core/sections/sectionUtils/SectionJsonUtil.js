// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/sections/sectionUtils/SectionJsonUtil",[],function(){return{tableJsonHasInfographic:function(a){return a.data.data.some(function(b){if(b.fieldInfos)for(var a in b.fieldInfos){var c=b.fieldInfos[a];if(c&&c.isInfographic)return!0}})},tableJsonHasChart:function(a){return a.data.data.some(function(b){if(b.fieldInfos)for(var a in b.fieldInfos){var c=b.fieldInfos[a];if(c&&c.isChart)return!0}})}}});