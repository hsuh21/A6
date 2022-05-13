var imagesArray = ["a.jpg", "b.jpg", "c.jpg", "d.jpg", "e.jpg", "f.jpg"];

    $(document).on("mouseenter", "#img", function(){
        var num = Math.floor(Math.random() * (imagesArray.length));
        var imgSrc= "'"+imagesArray[num]+"'";
        $(".cloud").attr("src", imgSrc);
    });