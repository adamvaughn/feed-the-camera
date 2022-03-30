const fs = require("fs");
const path = require('path');
require('dotenv').config();
const AWS = require('aws-sdk');

/////////////////////////////////////////////////////////
// Purpose: writeS3.js creates and uploads an object to an 
// Amazon Simple Storage Solution (Amazon S3) bucket.

// Requires AWS SDK clients and commands for Node.js.
// Requires Node.js fs and path for handling file system
// and dotenv for handling environment parameters

// Inputs:
//   - BUCKET:  name of AWS S3 bucket
//   - KEY: The uuid of the object to create and upload.
//   - BODY: The picture to be uploaded.
/////////////////////////////////////////////////////////

function getFile (fileName) {

  const fileObj = {
    body: path.join(__dirname, fileName),
    // fileType: "image/" + fileName.base
    // TODO need to check file type and warn, or update parameter code to allow
  };
  
  console.log('this is the request ' + fileObj.body);
return fileObj;

} // end function getFile

function createUID () {
  // create four character unique id for object key
  let uniqueId = Math.floor((1 + Math.random()) * 0x10000)
  .toString(16).substring(1);

  return uniqueId;
} // end function createUID

///////////////////////
async function writeS3 (fileName, userID) {

  const REGION = "us-east-1";                       // AWS REGION
  const s3 = new AWS.S3({ region: REGION });
  const bucketName = "feedthecamera"; 

let uploadParams = {Bucket: bucketName, Key: '', Body: '',  };

  file = getFile (fileName);

  let fileStream = fs.createReadStream(file.body);
  fileStream.on('error', function(err) {
    console.log('File Error', err);
  });
  
  // build the parameter set
  uploadParams.Body = fileStream;
  uploadParams.Key = userID + "/" + createUID();  // user name is directory, get unique ID for file key
  uploadParams.ContentType = "image/*";

// Add a photo to a bucket
let response = await s3.upload (uploadParams, function (err, data) {
    if (err) {
      console.log("Upload failed to complete successfully.", err);      //TODO convert to alert msg.
      return "";
    } if (data) {
      console.log(data);                                   //TODO convert to alert msg.
    }
  });

return response;

}  // end function writeS3

module.exports = writeS3;