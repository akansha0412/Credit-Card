function cardnumber(inputtxt)
{
  var cardno =/^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/;
  if(inputtxt.match(cardno))
        {
      return true;
        }
      else
        {
        return false;
        }
}
function cvv(inputtxt)
{
  var cardno =/^[0-9]{3,4}$/
  if(inputtxt.match(cardno))
        {
      return true;
        }
      else
        {
        return false;
        }
}


function cardValidation(){
 var cardNum = document.getElementById('cardNumber').value;
 var cVv = document.getElementById('cvv').value;
 var name = document.getElementById('owner').value;
 
if(name.length < 5){
        alert("Wrong owner name");
    } else if (!cardnumber(cardNum)) {
        alert("Wrong card number");
    } else if (! cvv(cVv)) {
        alert("Wrong CVV");
    } else {
        // Everything is correct. Add your form submission code here.
        alert("Everything is correct");
    }
}
