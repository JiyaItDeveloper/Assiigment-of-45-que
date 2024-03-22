//Q:30
var userNames = ['Admin', 'Jiya', 'Komal', 'Hina', 'Erum'];
for (var i = 0; i < userNames.length; i++) {
    if (userNames[i] === 'Admin') {
        console.log('Hello admin, would you like to see the status report?');
    }
    else {
        console.log("Hello ".concat(userNames[i], ",Thank you for logging in again..."));
    }
}
;
