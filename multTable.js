//This function is supposed to look at the validation of the users input
function makeTable() {

$(document).ready(function() {
    
    $("#multTable").validate({
        errorContainer: "#error",
        errorLabelContainer: "#error",
        wrapper:"ol",
        rules: {
            minCol: {
                number: true,
                min: -50,
                max: 50,
                required: true
            },
            maxCol: {
                number: true,
                min: -50,
                max: 50,
                required: true
            },
            minRow: {
                number: true,
                min: -50,
                max: 50,
                required: true
            },
            maxRow: {
                number: true,
                min: -50,
                max: 50,
                required: true
            }   
        },
        messages:{
            minCol: {
                required: 'ENTER A NUMBER',
                min: 'NUMBER LESS THAN -50',
                max: 'NUMBER IS GREATER THAN 50'
            },
            maxCol: {
                required: 'ENTER A NUMBER',
                min: 'NUMBER LESS THAN -50',
                max: 'NUMBER IS GREATER THAN 50'
            },
            minRow: {
                required: 'ENTER A NUMBER',
                min: 'NUMBER LESS THAN -50',
                max: 'NUMBER IS GREATER THAN 50'
            },
            maxRow:{
                required: 'ENTER A NUMBER',
                min: 'NUMBER LESS THAN -50',
                max: 'NUMBER IS GREATER THAN 50'
            }
        },
        
    });

});
 
if ( !($("#multTable").valid)) {
    return false;
}
else{
    usrTable();
}


}


 function usrTable(){

//Getting user information on the min and max of row and column and putting them into variables
var minCol = document.getElementById("minC").value;
var maxCol = document.getElementById("maxC").value;
var minRow = document.getElementById("minR").value;
var maxRow = document.getElementById("maxR").value;
var table = '';
var i = +minRow;
var j = +minCol;
var temp = +minCol;
//Creating the first row for the dynamic table 
table += '<table>';

table += '<tr>';
table+='<td>'+"X"+'</td>';

for(temp; temp <= +maxCol; temp++){
 table += '<td>'+temp+'</td>';
}
table += '</tr>';

//Dynamically creating the table by multiplying the row and column, storing the results in their own <td>

for(i; i <= +maxRow; i++){

table += '<tr>';
table += '<td>'+i+'</td>';
j = +minCol;
    for(j; j <= +maxCol; j++){

        table += '<td>'+(i*j)+'</td>';

    }

 table += '</tr>';

 }

 table+='</table>';
 console.log(table);
 document.getElementById("myTable").innerHTML = table;
 return false;
 }
