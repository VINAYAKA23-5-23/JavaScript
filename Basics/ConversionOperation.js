let score="33"


console.log(typeof score);//String
let valInNumber=Number(score)
console.log(typeof valInNumber);
console.log(valInNumber);

//"33"=>33
//"33abc"=>NaN
//true=>1
//false=>0
//null=>0
//undifined=>NaN

let isLoggedIn=1;

let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)//true

//""=>false
//"abdd"=>true
//1=>true; 0=>false

let val=33
let stringval=String(val)
console.log(stringval)//33 but the type is String


//**********************Operations**************************/
let value=3
let negValue=-value
console.log(negValue);//-3

consol.log(2+2)//4
//-,*,/,**(pow),%(modulus)

let str1="hello"
let str2="word"

let str3=str1+str2
console.log(str3)//Hello word


console.log("1"+2);//12
console.log(1+"2");//12
console.log("1"+2+2);//122
console.log(1+2+"2");//32
