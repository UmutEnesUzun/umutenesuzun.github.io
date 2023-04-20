
var bool = false;
var inter;
var fruits = [];

var id = 0;
function crt() {
       if(!bool){
       inter = setInterval(function() {
            var img = new Image(35,35);
            var rnd = Math.floor(Math.random() * 5 );
            var pos = Math.floor(Math.random() * 90 );
            pos +=5;
            rnd ++;
            if(rnd == 1)
                img.src = "../assets/images/fruit/1.png"
            else if(rnd == 2)
                img.src = "../assets/images/fruit/2.png"
            else if(rnd == 3)
                img.src = "../assets/images/fruit/3.png"
            else if(rnd == 4)
                img.src = "../assets/images/fruit/4.png"
            else if(rnd == 5)
                img.src = "../assets/images/fruit/5.png"
            img.style.width = "50px";
            img.style.height = "50px";
            img.style.right = pos+"%";
            img.id = id;
            var hg = 0;
            console.log(id);
            var getID = id;
            fruits[id] = setInterval(function(){
                var x = getID;
                console.log(getID);
                img.style.top = hg+"px";
                if(hg >= 650){
                    console.log("hg");
                    clearInterval(fruits[x]);
                }
                hg += 1;
            },10);    
            document.getElementById('fruit').appendChild(img);
            id += 1;  
        },1000); 
        bool = true;
        }
       else{
        console.log("clear");
        clearInterval(inter);
        bool = false;
       } 
    }


