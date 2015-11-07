document.addEventListener("DOMContentLoaded", function(event) {
    var thumbnailElement = document.getElementById("smart_thumbnail");
    thumbnailElement.addEventListener("click", function() {
        if(this.className == ''){
            this.className = 'small';
        } else {this.className = '';}
});

});
