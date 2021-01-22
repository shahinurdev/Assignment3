// kilometerToMeter start
function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000
    return meter;
}
// kilometerToMeter end

// budgetCalculator start
function budgetCalculator(watch, phone, laptop) {
    var watchAmount = watch * 50;
    var phoneAmount = phone * 100;
    var laptoAmount = laptop * 500;
    var sum = watchAmount + phoneAmount + laptoAmount;
    return sum;
}
  // budgetCalculator end

// hotelCost
function hotelCost(days) {
    var amount = 0;
    if (days <= 10) {
        amount = days * 100;
    } else if (days <= 20) {
        var days10 = 10 * 100;
        var daysHave = days - 10;
        var daysCost = daysHave * 80;
        amount = days10 + daysCost;
    } else {
        var days10 = 10 * 100;
        var days20 = 10 * 80;
        var daysHave = days - 20;
        var daysCost = daysHave * 50;
        amount = days10 + days20 + daysCost
    }
    return amount;
}
    // hotelCost end

    // megafriend start
    function megafriend(array) {
        var megaName = "";
        array.forEach(function(word) {
          if(word.length > megaName.length) {
            megaName = word;
          }
        });
        return megaName;
      }
      var word = megafriend([ 'Md.Shoron Khan','Md.rahat','Md.Shojib Hossain','Md.Kabir','Md.Jodhu','Md.Karim','Md.Shahinur Khan']);
  // megafriend end