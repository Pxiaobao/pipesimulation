// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/dataProviders/supportClasses/AnalysisAreaJsonUtil",["esri/graphic","esri/dijit/PopupTemplate"],function(f,g){return{areasToJson:function(e){function d(a){if(!a)return null;a.getLayer()&&a.getLayer().remove(a);return a.toJson()}return e.map(function(a){var b={},c;for(c in a)"string"===typeof a[c]&&(b[c]=a[c]);b.feature=d(a.feature);b.additionalFeatures=a.additionalFeatures&&a.additionalFeatures.map(d);b.geographies=a.geographies;return b})},areasFromJson:function(e){function d(a){if(!a)return null;
var b=a.infoTemplate&&new g(a.infoTemplate);delete a.infoTemplate;a=new f(a);b&&a.setInfoTemplate(b);return a}return e.map(function(a){var b={},c;for(c in a)"string"===typeof a[c]&&(b[c]=a[c]);b.feature=d(a.feature);b.additionalFeatures=a.additionalFeatures&&a.additionalFeatures.map(d);b.geographies=a.geographies;return b})}}});