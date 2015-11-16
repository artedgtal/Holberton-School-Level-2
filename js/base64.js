
// ==> Function to show a fancy error message;
         function errorMessage(o){
         	return o.toString().split(':')[2].slice(1)+'\nPlease, verify it and try again ;-)';
        }
// ==> The two basic functions, Decode/Encode      
        function decode(s) {
        	try {
            return atob(s);
        	} catch(e){
        		alert(errorMessage(e)); // ==> Using the function above
        	};
        }
        function encode(s) {
        	try {
            return btoa(s);
        	} catch(e) {
        		alert(errorMessage(e));
        	};
     
         
// ==> Defining the Main Function, which is called by the "Submit" button through Global Event Handler "onClick()" :

        }
        function convert64() {
// ==> Assigning the HTML5 Form DOM Objects to variables:
         var form = document.getElementById('form');
         var output = document.getElementById('output');
         var input = document.getElementById('input').value;
         var radio = form.elements.choose.value;
         
// ==> The main statement:                 
                 output.innerHTML = (radio !== 'encode') ? decode(input): encode(input);

// ==> Old and tradicional toggle. Replaced by a more compact version:
         /*   if(radio !== 'encode') {
            	output.innerHTML = decode(input);
            } else {
            	output.innerHTML = encode(input);
            }*/
        }
