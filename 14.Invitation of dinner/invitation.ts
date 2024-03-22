//Q:14 Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.



let guest_list :string [] =["jiya","Komal","Asif","Ayan"];
for(let i=0;i<guest_list.length;i++){
    console.log('Respected Sir/Madam' +guest_list[i] +',\nWe invite you on Dinner tommorrow.\nThankYou!')
}
export {guest_list}


//Q15 Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

//• Print a second set of invitation messages, one for each person who is still in your list.

// let not_present : string='Komal';
// let new_guest : string='Fozia';
// guest_list[2]=new_guest
// // for(let i=0; i<guest_list.length; i++){
// //     console.log('Respected Sir/Madam' +guest_list[i] +',\nWe invite you on Dinner tommorrow.\nThankYou!\n')}
// //     console.log(`Miss.${not_present} Will not coming in tommorrow dinner.`)


// //Q16 More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

//• Add one new guest to the beginning of your array.

//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list

// guest_list.unshift('Jawad','Asma','Rehan');
// // for(let i=0; i<guest_list.length; i++){
// //     console.log('Respected Sir/Madam' +guest_list[i] +',\nWe invite you on Dinner tommorrow.We found a big table, so we deceided to invite 3 more guests for our party\nThankYou!\n')}

// //Q17: Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

//• Print a message to each of the two people still on your list, letting them know they’re still invited.

//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program
// console.log('\nunfortunately we can not arrange big table,we have to sorry for said that,we have to allow only 2 people.')
// while(guest_list.length>2){
//     let remove_guest = guest_list.pop();
//     console.log(`Sorry Sir/Madam ${remove_guest} You are not invited for dinner.`);}
//     for(let i=0; i<guest_list.length; i++){
//             console.log('Respected Sir/Madam' + guest_list[i] +',\nYes you are still invited for tommorrow Dinner\nThank you!\n')
//         }
            // guest_list.splice(0,2)
            // console.log(guest_list)




