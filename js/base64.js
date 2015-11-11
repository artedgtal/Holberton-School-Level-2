

         function errorMessage(o){
         	return o.toString().split(':')[2].slice(1)+'\nPlease, verify it and try again ;-)';
        }
      
        function decode(s) {
        	try {
            return atob(s);
        	} catch(e){
        		alert(errorMessage(e));
        	};
        }
        function encode(s) {
        	try {
            return btoa(s);
        	} catch(e) {
        		alert(errorMessage(e));
        	};
        }
        function convert64() {

            var input = document.getElementById('base64');
            var output = document.getElementById('output');
            var textArea = input[0].value;
            var radio = input.elements.choose.value;
            if(radio !== 'encode') {
            	output.innerHTML = decode(textArea);
            } else {
            	output.innerHTML = encode(textArea);
            }
        }
