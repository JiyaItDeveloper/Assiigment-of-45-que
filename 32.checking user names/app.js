//Q:32
var current_users = ['Junaid', 'niHa', 'jiYa', 'daniyA', 'kamRan'];
var new_users = ['Amnna', 'niHa', 'jiYa', 'Komal', 'kamRan'];
new_users.forEach(function (newUsername) {
    var lowerCase = newUsername.toLowerCase();
    if (current_users.map(function (curr_name) { return curr_name.toLowerCase(); }).includes(lowerCase)) {
        console.log("The username ".concat(newUsername, " is not avaiable.Please write different username "));
    }
    else {
        console.log("The username ".concat(newUsername, " is avaiable."));
    }
});
