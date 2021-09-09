$(document).on("click","a",function(){
    $(this).addClass("Focus").siblings().removeClass("Focus")
  });
 
  $(document).ready(function(){
  
      $(window).ready(function()
      {
          $(".Navbar4").hide();
          $(".Grid").hide();
          $(".Grid1").hide();
          $(".MainContent").show();
          $(".CK").hide();
          $("#ckeditorbtn").hide();
      });
      $(".Active").click(function()
      {
          $(".Navbar4").hide();
          $(".Grid").hide();
          $(".Grid1").hide();
          $(".MainContent").show();
          $(".CK").hide();
          $("#ckeditorbtn").hide();
      });
      $(".Active2").click(function()
      {              
          $(".MainContent").hide();
          $(".Navbar4").show();
          $(".Grid").show();
          $(".Grid1").hide();
          $(".CK").hide();
          $("#ckeditorbtn").hide();
      });
      $(".Active3").click(function()
      {              
          $(".MainContent").hide();
          $(".Navbar4").show();
          $(".Grid").show();
          $(".Grid1").hide();
          $(".CK").hide();
          $("#ckeditorbtn").hide();
      });
      $(".Active4").click(function()
      {              
          $(".MainContent").hide();
          $(".Navbar4").show();
          $(".Grid").hide();
          $(".Grid1").show();
          $(".CK").hide();
          $("#ckeditorbtn").show();
      });
      $("#ckeditorbtn").click(function()
      {              
          $(".MainContent").hide();
          $(".Navbar4").show();
          $(".Grid").hide();
          $(".Grid1").hide();
          $(".CK").show();
      });
  }); 

  $(document).on("click","#button",function(){
      document.querySelector(".bg-model").style.display ="flex";
  });

  $(document).on("click",".Closes",function(){
      document.querySelector(".bg-model").style.display ="none";
  });  

  $(document).ready(function(){
  
  $(".btn").click(function()
      {
          var btn =document.querySelector(".btn");
          
          btn.onclick = function(){
              var div = document.createElement("div");
              div.innerHTML =generateit();
              document.getElementById("rm").appendChild(div);
          }
          function generateit() {
             return '<input type="text" placeholder="Enter name here" style="height:20px; width:446px"><button onclick="removeit(this)" style="background-color: red; color: white;border:none;height: 22px;">Remove</button><br><br>';
          }          
     
      });
 });

function removeit(btn)
{                
    document.getElementById("rm").removeChild(btn.parentNode);
}

function Star(){
    // if( $("#c6").val() == "1")
    // {
    //     return '<img src="Image/star.png" alt="">';
    // }
    // else if( $("#c6").val() == "2")
    // {
    //     return '<img src="Image/star.png" alt=""><img src="Image/star.png" alt="">';
    // }
    // else if( $("#c6").val() == "3")
    // {
    //     return '<img src="Image/star.png" alt=""><img src="Image/star.png" alt=""><img src="Image/star.png" alt="">';
    // }
    // else if( $("#c6").val() == "4")
    // {
    //     return '<img src="Image/star.png" alt=""><img src="Image/star.png" alt=""><img src="Image/star.png" alt=""><img src="Image/star.png" alt="">';
    // }
    // else if( $("#c6").val() == "5")
    // {
    //     return '<img src="Image/star.png" alt=""><img src="Image/star.png" alt=""><img src="Image/star.png" alt=""><img src="Image/star.png" alt=""><img src="Image/star.png" alt="">';
    // }
    // else if( $("#c6").val() == "")
    // {
    //     return '';
    // }
    // else if( $("#c6").val() >= "6")
    // {
    //     return '';
    // }
    if( $("#c6").val() == "0.5")
    {
        return '<img src="Image/starrr1.jpg" alt="" style="height:20px; width:100px">';
    }
    else if( $("#c6").val() == "1")
    {
        return '<img src="Image/1.jpg" alt="" style="height:20px; width:100px">';
    }
    else if( $("#c6").val() == "1.5")
    {
        return '<img src="Image/1.5.jpg" alt="" style="height:20px; width:100px">';
    }
    else if( $("#c6").val() == "2")
    {
        return '<img src="Image/2.jpg" alt="" style="height:20px; width:100px">';
    }
    else if( $("#c6").val() == "2.5")
    {
        return '<img src="Image/2.5.jpg" alt="" style="height:20px; width:100px">';
    }
    else if( $("#c6").val() == "3")
    {
        return '<img src="Image/3.jpg" alt="" style="height:20px; width:100px">';
    }
    else if( $("#c6").val() == "3.5")
    {
        return '<img src="Image/3.5.jpg" alt="" style="height:20px; width:100px">';
    }
    else if( $("#c6").val() == "4")
    {
        return '<img src="Image/4.jpg" alt="" style="height:20px; width:100px">';
    }
    else if( $("#c6").val() == "4.5")
    {
        return '<img src="Image/4.5.jpg" alt="" style="height:20px; width:100px">';
    }
    else if( $("#c6").val() == "5")
    {
        return '<img src="Image/5.jpg" alt="" style="height:20px; width:100px">';
    }
    else if( $("#c6").val() == "")
    {
        return '';
    }
    else if( $("#c6").val() >= "5.5")
    {
        return '';
    }
}

$(document).ready(function(){
 
    $("#Save").on('click',function(){     

       $("#mytable").append("<tr><td>"+$("#c1").val()+"</td><td>"+$("#c2").val()+"</td><td>"+$("#c3").val()+"</td><td>"+$("#c4").val()+"</td><td>"+$("#c5").val()+"</td><<td>"+Star()+"</td></tr>");
        
        $("#c1").val("");
        $("#c2").val("");
        $("#c3").val("");
        $("#c4").val("");
        $("#c5").val(""); 
        $("#c6").val("");         
      
    });
});

