 var count ;
		   var score ;
		   var person;
							function fun(e)
											{
												  count=count+1;
							                      document.getElementById("attempt").style.visibility="visible";
												
												document.getElementById("attempt").innerHTML=" Guesses Attempted : "+ count;
												 
											var y = document.getElementById("myAudio2");  
										    y.play();
											 
												 
										    
											var  a = Math.floor(Math.random() * 10) + 1;
											 document.getElementById("img").style.visibility="visible";
											 //alert("Our Number Is:  "+a) ;
									if (a==1)
									{
									document.getElementById('img').src='1.png';	
									}
									if(a==2){
											document.getElementById('img').src='2.jpeg';	
									}
									if(a==3){
											document.getElementById('img').src='3.jpeg';	
									}
									if(a==4){
											document.getElementById('img').src='4.jpeg';	
									}
									if(a==5){
											document.getElementById('img').src='5.jpeg';	
									}
									if(a==6){
											document.getElementById('img').src='6.png';	
									}
									if(a==7){
											document.getElementById('img').src='7.jpg';	
									}
									if(a==8){
											document.getElementById('img').src='8.jpg';	
									}
									if(a==9){
											document.getElementById('img').src='9.jpg';	
									}
									if(a==10){
											document.getElementById('img').src='10.jpg';	
									}
											    if(e.value == a){
											          score++;
											var x = document.getElementById("myAudio");  
											  x.play();
											 var j = document.getElementById("myAudio5");  
											  j.play(); 
											//alert(" WoW: You guessed it right");
															} 
											// document.getElementById("sc").style.visibility="visible";   
				                           // document.getElementById("sc").innerHTML= person +"your "+ "Score is  : "+ score;
				                               
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
					 document.getElementById("attempt").style.visibility="hidden";			
						  document.getElementById("img").style.visibility="hidden";	
                        //document.getElementById("sc").style.visibility="hidden";						  
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