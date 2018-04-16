// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/vectorTiles/LineBucket","require exports ../../core/tsSupport/extendsHelper ../../core/tsSupport/decorateHelper ./Bucket ../2d/engine/webgl/LineTess ./style/StyleLayer".split(" "),function(t,u,p,v,q,k,r){var h=new k.Tessellator({distanceAlongCorrection:!0});return function(n){function f(a,d,c,b){var e=n.call(this,a,d)||this;e.extrudeVectorsDoubleBuffer=[k.allocExtrudeVectors(),k.allocExtrudeVectors()];e.firstExtrudeVectors=k.allocExtrudeVectors();e.recycledTriangleBridge=
k.allocTriangles(20);e.recycledTrianglePie=k.allocTriangles(20);e.lineVertexBuffer=c;e.lineIndexBuffer=b;a=a.getPaintValue("line-pattern",d);e.hasPattern=void 0!==a;return e}p(f,n);Object.defineProperty(f.prototype,"triangleIndexStart",{get:function(){return this.triangleElementsStart},enumerable:!0,configurable:!0});Object.defineProperty(f.prototype,"triangleIndexCount",{get:function(){return this.triangleElementsCount},enumerable:!0,configurable:!0});Object.defineProperty(f.prototype,"connectorStart",
{get:function(){return 0},enumerable:!0,configurable:!0});Object.defineProperty(f.prototype,"connectorCount",{get:function(){return 0},enumerable:!0,configurable:!0});f.prototype.assignBufferInfo=function(a){a.triangleElementsStart=this.triangleElementsStart;a.triangleElementsCount=this.triangleElementsCount};f.prototype.processFeatures=function(a,d){this.triangleElementsStart=this.lineIndexBuffer.index;this.triangleElementsCount=0;a&&a.setExtent(this.layerExtent);for(var c=new r.LineLayout(this.layer,
this.zoom),b=0,e=this._features;b<e.length;b++){var l=e[b].getGeometry(a);this._processFeature(c,l)}};f.prototype._processFeature=function(a,d){if(d){var c=d.length,b;for(b=0;b<c;b++)this._processGeometry(d[b],a)}};f.prototype._processGeometry=function(a,d){if(!(2>a.length)){for(var c=a[0],b=a[a.length-1],e=b.x-c.x,b=b.y-c.y,c=1E-6>e*e+b*b,l=a[0],g=1;g<a.length;)e=a[g].x-l.x,b=a[g].y-l.y,1E-6>e*e+b*b?a.splice(g,1):(l=a[g],++g);if(!(2>a.length)){this.vertices=a;this.verticesLen=a.length;this.isClosed=
c;this.cap=d.cap;this.join=d.join;this.almostParallelRads=.05;this.veryShallowRads=.1;this.miterSafeRads=k.MITER_SAFE_RADS;this.miterLimitMag=Math.min(d.miterLimit,k.SYSTEM_MAG_LIMIT);this.roundLimitRads=Math.min(d.roundLimit,.5);this.newRoundJoinsSafeRads=2.3;for(var e=this.lineIndexBuffer.index,b=0,f=void 0,l=this.verticesLen,g=0;g<l;++g){var h=a[g],m=f===this.extrudeVectorsDoubleBuffer[g%2]?this.extrudeVectorsDoubleBuffer[(g+1)%2]:this.extrudeVectorsDoubleBuffer[g%2];g<l-1||!c||this.hasPattern?
(this._computeExtrudeVectors(m,g),this._writeGPUVertices(h.x,h.y,b,m),!m.capCenter||c&&g===l-1||this._writeGPUPieElements(m),c&&0===g&&!this.hasPattern&&k.copyExtrudeVectors(this.firstExtrudeVectors,m)):k.copyExtrudeVectors(m,this.firstExtrudeVectors);f&&this._writeGPUBridgeElements(f,m);g<l-1&&(f=a[g+1],h=k.length([f.x-h.x,f.y-h.y]),b+=h);f=m}this.triangleElementsCount+=3*(this.lineIndexBuffer.index-e)}}};f.prototype._computeExtrudeVectors=function(a,d){var c=this.vertices,b=this.verticesLen,e=this.isClosed,
l=c[d],g=[void 0,void 0],f=[void 0,void 0];if(0<d&&d<b-1){var h=c[(d+b-1)%b],m=c[(d+1)%b];k.normalize(g,[l.x-h.x,l.y-h.y]);k.normalize(f,[m.x-l.x,m.y-l.y])}else if(0===d)m=c[(d+1)%b],k.normalize(f,[m.x-l.x,m.y-l.y]),e?(c=c[b-2],k.normalize(g,[l.x-c.x,l.y-c.y])):g=f;else if(d===b-1)h=c[(d+b-1)%b],k.normalize(g,[l.x-h.x,l.y-h.y]),e?(c=c[1],k.normalize(f,[c.x-l.x,c.y-l.y])):f=g;else{console.error("Vertex index 'i' out of range.");return}e||0!==d?e||d!==b-1?this._computeJoinExtrudeVectors(a,g,f):this._computeCapExtrudeVectors(a,
g,f,k.CapPosition.END):this._computeCapExtrudeVectors(a,g,f,k.CapPosition.START)};f.prototype._computeCapExtrudeVectors=function(a,d,c,b){0===this.cap?h.buttCap(a,d,c):1===this.cap?h.roundCap(a,d,c,b,k.getNumberOfSlices(Math.PI),b===k.CapPosition.START?-1:1):2===this.cap?h.squareCap(a,d,c,b):(h.buttCap(a,d,c),console.error("Unknown cap type!"))};f.prototype._computeJoinExtrudeVectors=function(a,d,c){var b=k.getRads(d,c);if(b>Math.PI-this.almostParallelRads)h.rectJoin(a,d,c);else if(2===this.join||
b<this.veryShallowRads)b<this.almostParallelRads?h.fastMiterJoin(a,d,c):b<this.miterSafeRads?h.miterJoin(a,d,c):h.bevelJoin(a,d,c,this.miterLimitMag);else if(0===this.join)h.bevelJoin(a,d,c,1);else if(1===this.join){var e=k.getNumberOfSlices(b);b<this.newRoundJoinsSafeRads?2>e||b<this.roundLimitRads?h.bevelJoin(a,d,c,1):h.roundJoin(a,d,c,e):h.unitRoundJoin(a,d,c,e)}};f.prototype._writeGPUVertices=function(a,d,c,b){var e;for(e=0;e<b.vectors.count;++e){var f=this.lineVertexBuffer.add(a,d,b.vectors.items[e].vector[0],
b.vectors.items[e].vector[1],b.vectors.items[e].texCoords[0],b.vectors.items[e].texCoords[1],c);b.vectors.items[e].base=f}};f.prototype._writeGPUBridgeElements=function(a,d){h.bridge(this.recycledTriangleBridge,a,d);var c;for(c=0;c<this.recycledTriangleBridge.count;++c){var b=this.recycledTriangleBridge.items[c];this.lineIndexBuffer.add(b.v1.base,b.v2.base,b.v3.base)}};f.prototype._writeGPUPieElements=function(a){h.pie(this.recycledTrianglePie,a);for(a=0;a<this.recycledTrianglePie.count;++a){var d=
this.recycledTrianglePie.items[a];this.lineIndexBuffer.add(d.v1.base,d.v2.base,d.v3.base)}};return f}(q)});