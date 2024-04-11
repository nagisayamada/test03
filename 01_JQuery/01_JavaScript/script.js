document.write("■■■ 問1 ■■■");
  document.write("<br>")

  for(var i= 0; i<= 4; i++){
    document.write("★");
  }

  document.write("<br>")
  document.write("■■■ 問2 ■■■");
  document.write("<br>")
  
  for(var i = 0; i<=1; i++){
    for(var a=0; a <= 2; a++){
      document.write("★");
  }
    document.write("<br>");
  }

  document.write("<br>")
  document.write("■■■ 問3 ■■■");
  document.write("<br>")
  
  for(var i= 0; i<= 1; i++){
    for(var a= 0; a<= 4; a++){
        document.write("☆");
  }
    document.write("<br>");
  }

  document.write("<br>")
  document.write("■■■ 問4 ■■■");
  document.write("<br>")
  
  for(var i= 0; i<= 3; i++){
    for(var a= 0; a<= 4; a++){
        document.write("★");
  }
    document.write("<br>");
  }

  document.write("<br>")
  document.write("■■■ 問5 ■■■");
  document.write("<br>")
  
  for(var i= 0; i<= 3; i++){
    for(var a= 0; a<= 2; a++){
        document.write("★");
  }
    document.write("<br>");
  }


  document.write("<br>")
  document.write("■■■ 問6 ■■■");
  document.write("<br>")
  
  for(var no1= 0;no1< 3; no1++){
    for(var no2= 0;no2<= 2; no2++){
        if(no2% 2== 0){
            document.write("★");
        }else{
            document.write("☆");
        }
    }
            document.write("<br>");
  }

  document.write("<br>")
  document.write("■■■ 問7 ■■■");
  document.write("<br>")
  
  for(var no1= 0;no1< 4; no1++){
    for(var no2= 0;no2<= 4; no2++){
        if(no2% 2== 0){
            document.write("★");
        }else{
            document.write("☆");
        }
    }
            document.write("<br>");
  }

  document.write("<br>")
  document.write("■■■ 問8 ■■■");
  document.write("<br>")
  
  for (var i=0; i<= 4; i++){
    for(var a=0; a<= i; a++){
        document.write("★");
    }
        document.write("<br>");
  }