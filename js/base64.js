
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
         var input = document.getElementById('base64');
         var output = document.getElementById('output');
         var textArea = input[0].value;
         var radio = input.elements.choose.value;
// ==> The statement:                 
                 output.innerHTML = (radio !== 'encode') ? decode(textArea): encode(textArea);

// ==> Old and tradicional toggle. Replaced by a more compact version:
         /*   if(radio !== 'encode') {
            	output.innerHTML = decode(textArea);
            } else {
            	output.innerHTML = encode(textArea);
            }*/
        }
