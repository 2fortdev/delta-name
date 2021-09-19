$(function() {
    console.log("document is ready!");

    var userName, nameLength, nameMsg, nameReverse, nameRemove = ""; 

    $('#btnName').click(function() {
        userName = $('#userName').val(); 

        nameLength = getStringLength(userName);
        nameMsg = "The Length of your name is: ";
        $('#nameOutput').append(nameMsg + nameLength + "<br/>"); 

        nameReverse = reverseString(userName);
        nameMsg = "Your Name reversed letters is: ";
        $('#nameOutput').append(nameMsg + nameReverse + "<br/>"); 

        nameRemove = removeVowel(userName);
        nameMsg = "Your Name without any vowels is: ";
        $('#nameOutput').append(nameMsg + nameRemove + "<br/>"); 

        console.log(removeVowel(userName));
        console.log(thirdLetter(userName)); 

        stringArrayPosition(userName); 

        });

        $('#btnClear').click(function(){
            clearElement("#nameOutput", "html");
            clearElement("#userName", "input");
      })

    function getStringLength(stringVal){
        var stringLength = stringVal.length; 
       return stringLength; 
    }

    function reverseString(stringVal){
        var revString = stringVal.split("").reverse().join("");
       return revString; 
    }

    function thirdLetter(stringVal){
        
       return thirdString; var thirdString = stringVal[2]; 
    }

    function clearElement(elementId, elementType){
        if(elementType == "html"){
            $(elementId).html(""); 
        }
        else if(elementType=="input"){
            $(elementId).val(" "); 
        }
      
        
    } 

    function stringArrayPosition(stringVal){

        for(i=0; i<stringVal.length; i++){
            console.log(i + " " + stringVal[i]);
        }


    }
    // Function to remove vowels from the given string 
    function removeVowel(stringVal){
        var remString = stringVal.replace(/a/g,""); //If we did stringVal.replace("a","") it would only replace the first instance, so the /a/g is needed, g being a global tag
        remString = remString.replace(/e/g,"");
        remString = remString.replace(/i/g,"");
        remString = remString.replace(/o/g,"");
        remString = remString.replace(/u/g,"");
        return remString;

    }

});