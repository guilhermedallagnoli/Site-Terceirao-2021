(function () {

    if (!window.StyleFix) return;
    if (hasxmldatauri()) return;

    function hasxmldatauri() {
        var img = new Image();
        datauri = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0,0 1,1" fill="#000"></svg>';
        img.src = datauri;
        return (img.width == 1 && img.height == 1);
    }

    StyleFix.register(function (css) {

        return css.replace(RegExp(/url\(\'data:image\/svg\+xml,(.*)\'\)/gi), function ($0, svg) {
            return "url('data:image/svg+xml," + escape(svg) + "')";
        });

    });

})();

StyleFix.register(function (css, raw) {
    if (PrefixFree.functions.indexOf('radial-gradient') > -1) {
        css = css.replace(/radial-gradient\(([a-z-\s]+\s+)?at ([^,]+)(?=,)/g, function ($0, shape, center) {
            return 'radial-gradient(' + center + (shape ? ', ' + shape : '');
        });
    }

    return css;
});