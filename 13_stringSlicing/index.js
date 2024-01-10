// string slicing = creating a substring
//                  from a portion of another string

//                  string.slice(start, end)


// const fullName = "Mak Tezi"; // 8 characters

// let firstName = fullName.slice(0, 3);
// let lastName = fullName.slice(4,8);

// console.log(lastName);


const email = "mlcnierras@gmail.com";

let username = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1); // + 1 to remove the @

console.log(username);
console.log(extension);