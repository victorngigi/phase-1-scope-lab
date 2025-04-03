// Write your solution in this file!
var customerName = `bob`;
upperCaseCustomerName = () => {
    customerName = customerName.toUpperCase();    
}
setBestCustomer = () => {
    bestCustomer = `not bob`;
    return bestCustomer;
}
overwriteBestCustomer = () => {
    bestCustomer = `maybe bob`;
    return bestCustomer;
}

const leastFavoriteCustomer = `not bob`;
changeLeastFavoriteCustomer = () => {
    leastFavoriteCustomer = `bob`;
    return leastFavoriteCustomer;
}