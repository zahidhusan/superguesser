 var count ;
		   var score ;
		   var person;
							function fun(e)
											{
												count++;
											var y = document.getElementById("myAudio2");  
										    y.play();
										    alert("Turn number : "+count+ " You guessed :  "+e.value);
											var  a = Math.floor(Math.random() * 10) + 1;
											 alert("Our Number Is:  "+a) ; 
											if(e.value == a){
											score++;
											var x = document.getElementById("myAudio");  
											  x.play();
											 var j = document.getElementById("myAudio5");  
											  j.play(); 
											alert(" WoW: You guessed it right");
															} 
											   
				   
				   
				    if(count == 10){
					             var t = document.getElementById("myAudio6");  
							           t.play();
				              alert("Attempts Finished:  ") ;
						       alert ( "Hey "+ person +" your score is : "+ score );
                     				   
                           if(score==5|| score>5){
					        alert(person + "  You are a real Super Guesser");
					                              }	
                               else{
					               alert(person + "  Try hard and become a Super Guesser next time ");
							         }								 
				                  
								   if (confirm("Restart Game")) {
											  hey();	
											                   } 
											    else {
											   close();
											        }
								         }
				
  
					
			}

			function hey()
			{
                        //var z = document.getElementById("myAudio7");  
			               //z.play();
						      //z.loop = true;
								
							          
			 count = 0;
			 score = 0;
		   person = prompt("Please enter your name", "KH");
		  if (person != null) {
		   alert("Hello " + person + "! Let's have some fun!");
    
			}
			}

				function fun2(){
			  alert("This game checks your guessing power .Guess a number by clicking on any button.We will generate a number on  every click.You get 10 attempts. Lets see how many guesses are correct.If u score five guesses right u are a super guesser  ");
			  var k = document.getElementById("myAudio4");  
			     k.play();

								}