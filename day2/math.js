module.exports = {
  pow: function (a,n){
    var num = a;
    for (var i =1; i < n; i++){
      num *= a;
    }
    return num;
  },

 cude: function(a){
   return a * a * a;
 }

};
