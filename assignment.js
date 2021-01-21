function kilometerToMeter(number) {
    if (number > 0) {
        var meter = number * 1000;
        return meter;
    } else {
        return 'Please enter a valid number';
    }
}

kilometerToMeter(12);

function budgetCalculator(watch, phone, laptop) {
    if (watch > 0 && phone > 0 && laptop > 0) {
        var totalCost = watch * 50 + phone * 100 + laptop * 500;
        return totalCost;
    } else {
        return 'Please enter Positive number';
    }
}

budgetCalculator(1, 10, 10);

function hotelCost(days) {
    if (days >= 1 && days <= 10) {
        var cost = days * 100;
        return cost;
    } else if (days >= 11 && days <= 20) {
        var cost = 10 * 100 + (days - 10) * 80;
        return cost;
    } else if (days >= 21) {
        var cost = 10 * 100 + 10 * 80 + (days - 20) * 50;
        return cost;
    } else {
        return 'Please enter valid number';
    }
}

hotelCost(21);

function megaFriend(array) {
    if (array.length == 0) {
        return 'Please enter value of array'
    }
    var max = array[0].length;
    var index = 0;
    for (var i = 0; i < array.length; i++) {
        if (max < array[i].length) {
            max = array[i].length;
            index = i;
        }
    }
    return array[index];
}

megaFriend(friends = ['Arafat', 'Rifat', 'Jawad', 'Shahadat']);
