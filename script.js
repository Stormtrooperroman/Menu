var div = $("<div>")
        $("body").append(div);
        var img =[];
        for(var i = 0; i < 9; i++)
        {
            img[i] =$("<img>");
            $(img[i]).attr("src", "img/0" + (i+1) + ".png" );
            $(div).append(img[i]);
        }


        var timer = 100;
        $("img").click(function () {
            
            $("img").animate(
                {
                    "paddingLeft":"0px",
                    "paddingRight":"0px",
                    "width": "64px",
                },timer
            );

            $(this).animate(
                {
                    "paddingLeft":"64px",
                    "paddingRight":"64px",
                    "width": "+=200",
                },timer
            );
            timer = $("img").css("width");
            
        });

        $(".menu").children().slideUp(0);

        $(".menu").click(function () { 
            $(".menu").children().slideUp(300);
            $(this).children().slideToggle(300); 
        });