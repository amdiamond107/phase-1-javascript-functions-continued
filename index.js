function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
};

function mondayWork(task = "go to the office") {
    return `This Monday, I will ${task}.`
};

function wrapAdjective (result = "*") {
    return function(box = "special") {
        return `You are ${result}${box}${result}!`
    }
};
// wrapAdjective("You are");

// return value = "You are *a hard worker*!"cd