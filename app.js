var img_main = document.getElementById("img_main");
        var img_1 = document.getElementById("img_1");
        var img_2 = document.getElementById("img_2");
        var img_3 = document.getElementById("img_3");
    
        img_1.addEventListener('mouseover', function (){
            img_main.src = this.src;
            this.style.border = "2px solid blue"; // Adding border to the hovered image
            img_2.style.border = "none"; // Removing border from other images
            img_3.style.border = "none"; // Removing border from other images
        });
    
        img_2.addEventListener('mouseover', function (){
            img_main.src = this.src;
            this.style.border = "2px solid blue"; // Adding border to the hovered image
            img_1.style.border = "none"; // Removing border from other images
            img_3.style.border = "none"; // Removing border from other images
        });
    
        img_3.addEventListener('mouseover', function (){
            img_main.src = this.src;
            this.style.border = "2px solid blue"; // Adding border to the hovered image
            img_1.style.border = "none"; // Removing border from other images
            img_2.style.border = "none"; // Removing border from other images
        });

        img_1.addEventListener('mouseout', function (){
            img_main.src = this.src
        })