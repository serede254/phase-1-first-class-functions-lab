const drivers=['Antonia','Nuru','Amari','Mo']
const returnFirstTwoDrivers = function (drivers){
return drivers.slice(0,2);
}
const returnLastTwoDrivers =function(drivers){
    return drivers.slice(-2);
}
const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers];
const createFareMultiplier = function(mult){
    return function(fare){
        return mult*fare;
    }
}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers,func){
    return func(drivers);
}