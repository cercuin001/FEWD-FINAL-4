(function titleScroller(text) {
    document.title = text;
    setTimeout(function () {
        titleScroller(text.substr(1) + text.substr(0, 1));
    }, 250);
}(" Shop | COVERCORPS© Buying/DeliveryPage "));