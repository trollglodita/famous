define(function(require, exports, module) {
    var View          = require('famous/core/View');
    var Surface       = require('famous/core/Surface');
    var Transform     = require('famous/core/Transform');
    var StateModifier = require('famous/modifiers/StateModifier');

    var StripView = require('views/StripView');

    function MenuView() {
        View.apply(this, arguments);

         _createStripViews.call(this);
    }

    MenuView.prototype = Object.create(View.prototype);
    MenuView.prototype.constructor = MenuView;

    MenuView.DEFAULT_OPTIONS = {
        stripData: {},
        topOffset: 37,
        stripOffset: 58
    };

    function _createStripViews() {
        this.stripModifiers = [];
        var yOffset = this.options.topOffset;

        for (var i = 0; i < this.options.stripData.length; i++) {
            var stripView = new StripView({
                iconUrl: this.options.stripData[i].iconUrl,
                title: this.options.stripData[i].title
            });

            var stripModifier = new StateModifier({
                transform: Transform.translate(0, yOffset, 0)
            });

            this.stripModifiers.push(stripModifier);
            this.add(stripModifier).add(stripView);

            yOffset += this.options.stripOffset;
        }
    }

    module.exports = MenuView;
});