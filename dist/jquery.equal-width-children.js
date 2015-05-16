/**
 * jquery-equal-width-children - Given a container, makes its children equal widths.
 * @version v1.0.0
 * @link https://github.com/athill/jquery-equal-width-children
 * @license MIT
 */

;(function ( $, window, document, undefined ) {

	"use strict";
		// Create the defaults once
		var pluginName = "equalWidthChildren",
			defaults = {
				fudge: 0
			};

		// The actual plugin constructor
		function Plugin ( element, options ) {
				this.element = element;
				this.settings = $.extend( {}, defaults, options );
				this._defaults = defaults;
				this._name = pluginName;
				this.init();
		}

		// Avoid Plugin.prototype conflicts
		$.extend(Plugin.prototype, {
				init: function () {
						var $element = $(this.element);
						console.log($element.width());
						var $children = $element.children();
						var width = Math.floor($element.width()/$children.length) - this.settings.fudge;
						$children.css('width', width);
				}
		});

		// A really lightweight plugin wrapper around the constructor,
		// preventing against multiple instantiations
		$.fn[ pluginName ] = function ( options ) {
				return this.each(function() {
						if ( !$.data( this, "plugin_" + pluginName ) ) {
								$.data( this, "plugin_" + pluginName, new Plugin( this, options ) );
						}
				});
		};

})( jQuery, window, document );