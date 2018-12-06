var account = {
  Title:"Mian Usman Saleem",
  Balance :"106675",
  Currency :"PKRS",
  IBAN :"PKN123765346"
};

 document.getElementById("title").innerHTML = account.Title;
 document.getElementById("balance").innerHTML = account.Balance;
 document.getElementById("currency").innerHTML = account.Currency;
 document.getElementById("IBAN").innerHTML = account.IBAN;


function deposit(e)
{
	var dep = document.getElementById("deposit").value;	
	if(e.keycode == '13')
	{ 
		
		if(isNaN(deposit))
 		 {
 		document.getElementById("deposit-msg").innerHTML = '<p>Enter Valid Amount</p>';	
 		 }
		
 	}
 }