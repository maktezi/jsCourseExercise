// string methods = allow you to manipulate and work with text (strings)

// charAt(index)
// charCodeAt(index)
// concat(string1, string2, ...)
// indexOf(substring, start)
// lastIndexOf(substring, start)
// slice(start, end)
// substring(start, end)
// substr(start, length)
// toUpperCase()
// toLowerCase()
// trim()


// let userName = "Mak Teziz   ";

// console.log(userName.charAt(0));
// console.log(userName.indexOf("z"));
// console.log(userName.lastIndexOf("z"));
// console.log(userName.length);


let phoneNumber = "123-456-7890";

//phoneNumber = phoneNumber.replaceAll("-", "");
phoneNumber = phoneNumber.padEnd(15, "0");

console.log(phoneNumber);