const writeS3 = require('../../../writeS3.js');


let user = "grimms";            // TODO when login is done, use the user id variable instead
let fileName = './images/chicken.jpg';                  // TODO when editor is done, use fileName
console.log(writeS3(fileName, user));

 // end function editor