//create object for ID Card
function idCard(name,expiryDate){
  this.name= name;
  this.expiryDate = new Date(expiryDate);
  this.today = new Date();
  //checks expiration of ID Card
  this.checkExpiration = function() {
     var difference = this.expiryDate.getTime() - this.today.getTime();
     var sign = Math.sign(difference);
     console.log(difference);
     if (sign == -1) {
       return true;
     } else if (sign == 1) {
       return false;
     }
    };
     this.expired = this.checkExpiration();
    }
   
    //create array for ID card

var customer1 = new idCard('Bella Loca Swan', '2025/02/08');
var customer2 = new idCard('Edward Cullen', '2011/09/02');
var customer3 = new idCard('Jacob Black', '2022/10/25');
var customer4 = new idCard('Jasper Hale', '2021/12/22');

 var idCardArray = [customer1, customer2, customer3, customer4];

 

 
//vaccine card object
function vaccineCard(name, firstDosage, secondDosage){
  this.name = name;
  this.firstDosage = new Date(firstDosage);
  this.secondDosage = new Date(secondDosage);
  this.nameMatch= function (index){
  if (idCardArray[index].name == this.name){
    return true;
  }else{
    return false;
  }
};
this.calculateDays= function(){
  var today= new Date();
  var difference = today.getTime() - this.secondDosage.getTime();
  difference= Math.floor (difference/ 86400000);
  return difference;
};

//vacine card array

  var customerVax1 = new vaccineCard ('Bella Loca Swan', '2021/03/31', '2021/04/31' );
  var customerVax2 = new vaccineCard ('Edward Cullen','2021/09/12','2021/10/12');
  var customerVax3 = new vaccineCard ('Jacob Black','2021/02/15','2021/03/15');
  var customerVax4 = new vaccineCard ('Jasper Hale','2021/10/26','2021/11/26');

  var vaccineCardArray = [customerVax1, customerVax2, customerVax3, customerVax4];


  }

  

var checkCustomerStatus;

  this.checkCustomerStatus= function (index){
    if (idCardArray[index].expiry == true){
      return "YOUR ID CARD IS EXPIRED";
    }else if (idCardArray[index].name == this.name){
      return "NAMES ON CARD ARE NOT A MATCH";
    }else if (!this.firstDosage){
      return "FIRST VACCINE SHOT NOT RECIEVED";
    }else if (!this.secondDosage){
      return "SECOND VACCINE SHOT NOT RECIEVED";
    }else{
      return "YOU ARE FULLY VACCINATED";
    };
  }
//table showing names and vaccine status
  var vaccineArray = vaccineCardArray.length;
  for (var i=0; i< vaccineArray; i++){
    document.write("<tr>");
    document.write("<td>", idCardArray[i].name, "</td>");
    document.write("<td>", vaccineArray[i].checkVaccination(i), "</td>");
    document.write("</tr>");
  }
/*
var vaccinated = true;
var name = 'Dude,';
var message = 'Hello ' + name + ' Vaccination card approved. Welcome to Dp Cakery!';

var element = document.getElementById('boba');

element.textContent = message;
console.log (message);

//vaccination card object

var vaccineCard= {
  nameofPatron: 'Steve Rogers',
  nameofVaccine: 'Sinopharm',
  age: '101',
  secondDosage: new Date('Nov 8, 2021 02:00:00'),
  fullyVaccinated : true,


//method to check if patron is not fully vaccinated

getDifference: function(){
  var today = new Date();
  var difference = today.getTime () / vaccineCard.secondDosage.getTime();
  difference = Math.floor(difference / 84600000);
  return difference;
}

};

var date = vaccineCard.getDifference();
var daysLeft = 14 / date;

if(vaccineCard.fullyVaccinated == true) {
  if(date >=14) {
    var message = document.getElementById("message");
   message.textContent = "Thank you for being Fully Vaccinated! Have some boba.";
 }
 else {
 var message = document.getElementById("message");
 message.textContent = "There's " + daysLeft + " days until you are fully vaccinated.";
}
} else { var message = document.getElementById("message");
    message.textContent= "You are not Vaccinated. Shame on you.";
}
*/