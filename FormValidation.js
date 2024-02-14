function validateall(){
    let firstname = document.getElementById("Fname").value;
    let regex = /^[a-zA-Z\s]{1,30}$/;
    let is_first = false; 
    if(regex.test(firstname)) 
    {
        document.getElementById("FnameERR").style.visibility="hidden";
        is_first = true;       
    }
    else
    {
        document.getElementById("FnameERR").style.visibility="visible";   
        is_first = false;   
    }
        var lastname = document.getElementById("Lname").value;
        var regex2 = /^[a-zA-Z\s]{1,30}$/;
        let is_last = false;
    if(regex2.test(lastname))
    {
        document.getElementById("LnameERR").style.visibility="hidden";
        is_last = true;
    } 
    else
    { 
        document.getElementById("LnameERR").style.visibility="visible";
        is_last = false;                
    }
        var street=document.getElementById("Str").value;
        var regex3= /^[\w\s]{5,40}$/;
        let is_stree = false;
    if(regex3.test(street)) {
        document.getElementById("StrERR").style.visibility="hidden";
        is_stree = true;
    }
    else {
        document.getElementById("StrERR").style.visibility="visible";
        is_stree = false;
    }
        var apt=document.getElementById("Apt").value;
        var regex4= /^(#[0-9]|[0-9]){1,5}$/;
        let is_apt = false;
    if(regex4.test(apt)) {
        document.getElementById("AptERR").style.visibility="hidden";
        is_apt = true;
    }
    else {
        document.getElementById("AptERR").style.visibility="visible";
        is_apt = false;
    }
        var city=document.getElementById("Cit").value;
        var regex5= /^[a-zA-Z]{4,15}$/;
        let is_cit = false;
    if(regex5.test(city)) {
        document.getElementById("CitERR").style.visibility="hidden";
        is_cit = true;
    }
    else {
        document.getElementById("CitERR").style.visibility="visible";
        is_cit = false;
    }
        var state=document.getElementById("State").value;
        var regex6= /(^Alabama$)|(^AL$)|(^Alaska$)|(^AK$)|(^Arizona$)|(^AZ$)|(^Arkansas$)|(^AR$)|(^California$)|(^CA$)|(^Canal Zone$)|(^CZ$)|(^Colorado$)|(^CO$)|(^Connecticut$)|(^CT$)|(^Delaware$)|(^DE$)|(^District of Columbia$)|(^DC$)|(^Florida$)|(^FL$)|(^Georgia$)|(^GA$)|(^Guam$)|(^GU$)|(^Hawaii$)|(^HI$)|(^Idaho$)|(^ID$)|(^Illinois$)|(^IL$)|(^Indiana$)|(^IN$)|(^Iowa$)|(^IA$)|(^Kansas$)|(^KS$)|(^Kentucky$)|(^KY$)|(^Louisiana$)|(^LA$)|(^Maine$)|(^ME$)|(^Maryland$)|(^MD$)|(^Massachusetts$)|(^MA$)|(^Michigan$)|(^MI$)|(^Minnesota$)|(^MN$)|(^Mississippi$)|(^MS$)|(^Missouri$)|(^MO$)|(^Montana$)|(^MT$)|(^Nebraska$)|(^NE$)|(^Nevada$)|(^NV$)|(^New Hampshire$)|(^NH$)|(^New Jersey$)|(^NJ$)|(^New Mexico$)|(^NM$)|(^New York$)|(^NY$)|(^North Carolina$)|(^NC$)|(^North Dakota$)|(^ND$)|(^Ohio$)|(^OH$)|(^Oklahoma$)|(^OK$)|(^Oregon$)|(^OR$)|(^Pennsylvania$)|(^PA$)|(^Puerto Rico$)|(^PR$)|(^Rhode Island$)|(^RI$)|(^South Carolina$)|(^SC$)|(^South Dakota$)|(^SD$)|(^Tennessee$)|(^TN$)|(^Texas$)|(^TX$)|(^Utah$)|(^UT$)|(^Vermont$)|(^VT$)|(^Virgin Islands$)|(^VI$)|(^Virginia$)|(^VA$)|(^Washington$)|(^WA$)|(^West Virginia$)|(^WV$)|(^Wisconsin$)|(WI$)|(^Wyoming$)|(^WY$)$/i;
        let is_stat = false;
    if(regex6.test(state)) {
        document.getElementById("StateERR").style.visibility="hidden";
        is_stat = true;
    }
    else {
        document.getElementById("StateERR").style.visibility="visible";
        is_stat = false;
    }
        var zipcode = document.getElementById("Zip").value;
        var regex7= /^[1-9]\d{4}$/;
        let is_zip = false;
    if(regex7.test(zipcode)) {
        document.getElementById("ZipERR").style.visibility="hidden";
        is_zip = true;
    }
    else {
        document.getElementById("ZipERR").style.visibility="visible";
        is_zip = false;        
    }
        var Num=document.getElementById("phone").value;
        var regex8 =/^[2-9][0-9]{2}-[0-9]{3}-[0-9]{4}$/g;
        let is_num = false;
    if(regex8.test(Num)) {
        document.getElementById("phoneERR").style.visibility="hidden";
        is_num = true;
    }
    else {
        document.getElementById("phoneERR").style.visibility="visible";
        is_num = false;
    }
        var email= document.getElementById("Email").value;
        var regex9=/^([A-Za-z0-9!@#$%^&]{1,20})@\w+([\.-]?)*([com]*[org]*[us]*[gov]*[net]*[info]*[in]*){2,3}$/;
        let is_email = false;
     if(regex9.test(email)) {
         document.getElementById("EmailERR").style.visibility="hidden";
         is_email = true;
     }
     else
     {
        document.getElementById("EmailERR").style.visibility="visible";
        is_email = false;
     }

        var password= document.getElementById("Pass").value;
        let is_psd = false;
        var regex10= /^[A-Z](?=.*[!@#$%^&])([a-zA-Z0-9!@#$%^&*(){};',.;]){7,16}$/;
    if(regex10.test(password)) {
        document.getElementById("PassERR").style.visibility="hidden";
        is_psd = true;
    }
    else {
        document.getElementById("PassERR").style.visibility="visible";
        is_psd = false;
    }
        var date=document.getElementById("Date").value;
        var regex11 =/^(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])-[0-9]{4}$/g;
        let is_dat = false;
    if(regex11.test(date)) {
        document.getElementById("DateERR").style.visibility="hidden";
        is_dat = true;
    }
    else {
        document.getElementById("DateERR").style.visibility="visible";
        is_dat = false;
    }
        let is_rad = false;
        let is_rad2 = false;
    if(document.getElementById("Radio1").checked) {
        document.getElementById("RadioERR").style.visibility="hidden";
        is_rad = true;
    }else if(document.getElementById("Radio2").checked) {
        document.getElementById("RadioERR").style.visibility="hidden";
        is_rad2 = true;
    }
    else {
        document.getElementById("RadioERR").style.visibility="visible";
        is_rad = false;
    }   
    var numb= document.getElementById("textarea").value.length;
    document.getElementById("myText").innerHTML = numb;
  
       
    if(is_first && is_last && is_stree && is_apt && is_cit && is_stat && is_zip && is_num && is_email && is_psd && is_dat && is_rad || is_rad2) 
    {
        alert("Success!! Valid Submitting Registration form");
       document.getElementById("buttontxtERR").style.visibility="visible";
    }
    
    
 }
 
const paymentFieldset = document.getElementById('payment');
const modeSelect = document.getElementById('choose'); 

const payment =
{
    usa: ["Visa", "MasterCard", "American Express", "Discover"],
    canada: ["Google pay", "Phonepe", "Paypal","Bitcoin"]
}

paymentFieldset.addEventListener('click', e =>
{
 if(!e.target.matches('input[type="radio"][name="type"]')) return;

 const typeName = e.target.value;
 
 modeSelect.innerHTML = '';
 
 for(let stateName of payment[typeName])
 {
     const typeOption = document.createElement('option');
     typeOption.value = stateName;
     typeOption.innerText = stateName.at(0).toUpperCase() + stateName.substring(1);
     
     modeSelect.append(typeOption);
 }
 
});
const tx = document.getElementsByTagName("textarea");
for (let i = 0; i < tx.length; i++) {
  tx[i].setAttribute("style", "height:" + (tx[i].scrollHeight) + "px;overflow-y:hidden;");
  tx[i].addEventListener("input", OnInput, false);
}

function OnInput() {
  this.style.height = 0;
  this.style.height = (this.scrollHeight) + "px";
}

 