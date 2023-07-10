/*
 * LongShadow jQuery Plugin
 * Copyright (c) 2023 Dang Van Thanh
 * Version: 1.0.4
 * Source: git://github.com/dangvanthanh/jquery.longShadow.git
 * Licensed under MIT
 */
(function ($) {
  "use strict";

  // Name long shadow query plugin and parameters
  const pluginName = "longShadow";
  const defaults = {
    colorShadow: "#ccc",
    sizeShadow: 50,
    directionShadow: "", // Default bottom-right
  };

  // Long Shadow Plugin
  class Plugin {
    constructor(element, options) {
      this.element = element;

      this.options = $.extend({}, defaults, options);

      this._defaults = defaults;
      this._name = pluginName;

      this._shadow = "";

      this.init();
    }
    init() {
      let textshadow = "";
      const color = this.options.colorShadow;

      for (let i = 0, len = this.options.sizeShadow; i < len; i++) {
        switch (this.options.directionShadow) {
          case "top":
            textshadow += `0 -${i}px 0 ${color},`;
            break;
          case "right":
            textshadow += `${i}px 0 0 ${color},`;
            break;
          case "bottom":
            textshadow += `0 ${i}px 0 ${color},`;
            break;
          case "left":
            textshadow += `-${i}px 0 0 ${color},`;
            break;
          case "top-left":
            textshadow += `-${i}px -${i}px 0 ${color},`;
            break;
          case "top-right":
            textshadow += `${i}px -${i}px 0 ${color},`;
            break;
          case "bottom-left":
            textshadow += `-${i}px ${i}px 0 ${color},`;
            break;
          case "bottom-right":
            textshadow += `${i}px ${i}px 0 ${color},`;
            break;
          default:
            textshadow += `${i}px ${i}px 0 ${color},`;
            break;
        }
      }

      this._shadow = textshadow.slice(0, -1);

      this.element.style.textShadow = this._shadow;
    }
  }

  $.fn[pluginName] = function (options) {
    return this.each(function () {
      if (!$.data(this, "plugin_" + pluginName)) {
        $.data(this, "plugin_" + pluginName, new Plugin(this, options));
      }
    });
  };
})(jQuery);
