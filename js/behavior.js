document.addEventListener("DOMContentLoaded", function(event) {
    var thumbnailElement = document.getElementById("smart_thumbnail");
    thumbnailElement.addEventListener("click", function() {
        this.className = (this.className == '') ? 'small' : '' ;

});

});
