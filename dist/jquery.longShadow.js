!function(){"use strict";!function(t){var o="longShadow",i={colorShadow:"#ccc",sizeShadow:50,directionShadow:""};function e(e,a){this.element=e,this.options=t.extend({},i,a),this._defaults=i,this._name=o,this._shadow="",this.init()}e.prototype={init:function(){for(var t="",o=this.options.colorShadow,i=0,e=this.options.sizeShadow;i<e;i++)switch(this.options.directionShadow){case"top":t+="0 -"+i+"px 0 "+o+",";break;case"right":t+=i+"px 0 0 "+o+",";break;case"bottom":t+="0 "+i+"px 0 "+o+",";break;case"left":t+="-"+i+"px 0 0 "+o+",";break;case"top-left":t+="-"+i+"px -"+i+"px 0 "+o+",";break;case"top-right":t+=i+"px -"+i+"px 0 "+o+",";break;case"bottom-left":t+="-"+i+"px "+i+"px 0 "+o+",";break;default:t+=i+"px "+i+"px 0 "+o+","}this._shadow=t.slice(0,-1),this.element.style.textShadow=this._shadow}},t.fn.longShadow=function(o){return this.each((function(){t.data(this,"plugin_longShadow")||t.data(this,"plugin_longShadow",new e(this,o))}))}}(jQuery)}();
//# sourceMappingURL=jquery.longShadow.js.map
