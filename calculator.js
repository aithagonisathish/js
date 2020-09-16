var add=function(){
    var array= arguments;
    var result=0;
    for( var i=0;i<array.length;i++){

        result +=array[i];
       
    }
    return result;
}
var sub=function(){
    var array= arguments;
    var result=array[0];
    for( var i=1;i<array.length;i++){

        result +=array[i];
       
    }
    return result;
}