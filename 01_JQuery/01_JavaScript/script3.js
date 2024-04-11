  document.write("■■■ 問1 ■■■");
  document.write("<br>")

function Menseki(hankei){
    return "半径"+hankei+"cmの円の面積は"+ hankei* hankei* 3.14+"cm²です。<br>";
 } 

  document.write(Menseki(5));
  document.write(Menseki(7));
  document.write(Menseki(10));

  document.write("■■■ 問2 ■■■");
  document.write("<br>")

  function ryoukin(adult,kids,group){
    return group+"グループの合計金額は"(adult*500)+(kids*200)+"円です。<br>";
  }
   document.write(ryoukin(2,4,"A"));
   document.write("<br>");
   document.write("Bグループの合計金額は"+ryoukin(1,5)+"円です。");
   document.write("<br>");
   document.write("Cグループの合計金額は"+ryoukin(3,7)+"円です。");
   document.write("<br>");