<!--
function chkChrs(frm,fld,txt,searchfor,how){
 string = document.forms[frm].elements[fld].value;
 if(how){
   proof = searchfor.exec(string);
   stop = (proof != string);
 }
 else{
   stop = searchfor.test(string);
 }
 if(stop){
     alert(txt);
     document.forms[frm].elements[fld].focus();
     return
 }
}

function chkISODate(frm,fld,txt){
 string = document.forms[frm].elements[fld].value;
 if(string != ""){
   searchfor = /^\d\d\d\d-\d\d-\d\d$/;
   result = searchfor.test(string);
   if(result == false){
     alert(txt);
     document.forms[frm].elements[fld].focus();
     return
   }
   if(chkISODate.arguments.length == 4){
     x = "";
     i = -1;
     while(x != fld) {
          i++;
          x = document.forms[frm].elements[i].name;
     }
     i--;
     if(document.forms[frm].elements[i].value > document.forms[frm].elements[fld].value){
       txt = chkISODate.arguments[3];
       alert(txt);
       document.forms[frm].elements[i].focus();
       return
     }
   }
 }
}

function chkForm(frm) {
 for (var i=1; i<chkForm.arguments.length; i++){
   fld=chkForm.arguments[i];
   i++;
   txt=chkForm.arguments[i];
   if(document.forms[frm].elements[fld].value == ""){
     alert(txt);
     document.forms[frm].elements[fld].focus();
     return false;
   }
 }
}


//-->