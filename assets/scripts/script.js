
var bool = false;
var list = ["c", "c#", "python", "java", "html", "javascript", "git"]


function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }

  function listSkills(element) {
    if(bool){
    document.getElementById("skillList").style.width = "0";
    document.getElementById("skillList").style.height = "0";
    bool = false;
    }
    else{
    document.getElementById("skillList").style.width = "250";
    document.getElementById("skillList").style.height = "300";
    bool = true;
    }
  }

  function checkSkills(){
    let con = false;
    var element = document.getElementById("searchInput");
    var back = document.getElementById("skillSection");

    var value = element.value.toLowerCase();

    for(let i=0; i<list.length; i++){
        if(value == list[i])
            con = true;
    }
    if(con){
        back.style.backgroundColor = "rgba(47, 224, 82, 0.678)"
    }
    else{
        back.style.backgroundColor = "rgba(224, 47, 82, 0.678)"
    } 
  }