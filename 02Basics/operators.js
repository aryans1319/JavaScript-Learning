var sp=199;
var lp=799;

var discountPrice=((lp-sp)/lp)*100;

console.log("Discount price is: "+ discountPrice);

displayDiscountPercentage=Math.round(discountPrice);
console.log(displayDiscountPercentage+ "%off");