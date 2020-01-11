const multer = require('multer');
const fs = require('fs');
let path = require('path');
let logger = require('../config/winston')
let imge = "";
var imageArray = [];
//let type = "company_logo_";
const uploadDir = 'uploads/';
let flag = false;
const AWS = require('aws-sdk');
const async = require('async');

//--------------------Config for profile image upload-----------------------------

//------config for Image upload------
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        if (file.mimetype !== "application/octet-stream") {
            flag = true;
            imge = type + Date.now() + '.png';
            cb(null, imge);
        }
        else {
            flag = false;
            cb(null, file.originalname + "1");
        }
    }
});
var upload = multer({ storage: storage }).single('file');

exports.upload = (req, res, user, callback) => {
    try {
        //console.log(type);
        type = user;
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir);
        }
        upload(req, res, (imageUploadErr) => {
            if (imageUploadErr) {
                callback(true, imageUploadErr);
                logger.error(imageUploadErr);
            }
            else {
                let doc = req.body;
                if (flag && (type === "user_")) {
                    if (imge !== '') {
                        doc.image = imge;
                    }
                }
                else {
                    if (imge !== '') {
                        doc.logo = imge;
                    }
                }
                imge = '';
                flag = false;
                callback(false, doc);
            }
        });
    }
    catch (err) {
        callback(true, '');
    }
};








//------config for Product Image upload------
var storageMultipleFile = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        if (file.mimetype !== "application/octet-stream") {
            let fileName = file.originalname.split(".");
            imge = "product" + '_' + Date.now() +"_"+fileName[0]+ '.' + fileName[1];
            imageArray.push(imge);
            cb(null, imge);
        }
        else {
            c.push(file.originalname);
            cb(null, file.originalname + "1");
        }
    }
});
var uploadMultipleFile = multer({ storage: storageMultipleFile }).array('files');//For multiple file

exports.MultiplyUploadImg = (req, res, callback) => {
    try {
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir);
        }
        uploadMultipleFile(req, res, (imageUploadErr) => {
            if (imageUploadErr) {
                callback(true, imageUploadErr, '');
                logger.error(imageUploadErr);
            }
            else {
                // var fnlDoc = [];
                for (var i = 0; i < imageArray.length; i++) {
                    var imageJson = {};
                    imageJson['id'] = i;
                    // imageJson['documentName'] = docName[i];
                    imageJson['fileName'] = imageArray[i];
                }
                // imageArray = [];
                callback(false, imageArray);
            }
        });
    }
    catch (err) {
        callback(true, '', '');
    }
};

exports.getFileRead = (req, res, next) => {
    fs.stat('./uploads/' + req.query.filename, function (err, stats) {
        if (stats) {
            res.sendFile(path.resolve('./uploads/' + req.query.filename));
        }
        else {
            res.sendStatus(404);
        }
    });
}


//----------------- Start Save All Files For Feed Module---------------------------------------------
// var feedArray = [];
// var fileVideosArray = [];
// var fileImagesArray = [];

// var storageMultiplePostFile = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'uploads/');
//     },
//     filename: function (req, file, cb) {
//         if (file.mimetype !== "application/octet-stream") {
//             let fileSize = file.size;
//             let fileName = file.originalname.split(".");
//             let finalImage = fileName[0].replace(" ", "_");
//             if (fileName[1] == "mp4" || fileName[1] == "webm" || fileName[1] == "ogg") {
//                 imge = finalImage + '_' + Date.now() + '.' + fileName[1];
//                 fileVideosArray.push({ videoName: imge });
//                 cb(null, imge);
//             }
//             var fileTypeName = fileName[1].toLowerCase();
//             if (fileTypeName == "gif" || fileTypeName == "jpg" || fileTypeName == "jpeg" || fileTypeName == "png" || fileTypeName == "bmp" || fileTypeName == "jfif") {
//                 imge = fileName[0] + '_' + Date.now() + '.' + fileName[1];
//                 fileImagesArray.push({ imageName: imge });
//                 cb(null, imge);
//             }
//         }
//         else {
//             feedArray.push(file.originalname);
//             cb(null, file.originalname + "1");
//         }
//     }
// });

// var uploadFeed = multer({ storage: storageMultiplePostFile }).array('files');


// exports.uploadFeedPost = (req, res, id, callback) => {
//     try {
//         if (!fs.existsSync(uploadDir)) {
//             fs.mkdirSync(uploadDir);
//         }
//         uploadFeed(req, res, (imageUploadErr) => {
//             if (imageUploadErr) {
//                 callback(true, imageUploadErr, '');
//                 logger.error(imageUploadErr);
//             }
//             else {
//                 var fnlDoc = {};
//                 fnlDoc.body = req.body;
//                 fnlDoc.images = fileImagesArray;
//                 fnlDoc.videos = fileVideosArray;
//                 let fnlArray = fileImagesArray.concat(fileVideosArray)
//                 fileImagesArray = [];
//                 fileVideosArray = [];
//                 if (fnlArray.length > 0) {
//                     async.forEach(fnlArray, function (imgeFile, cbSync) {
//                         let fileIs = imgeFile.videoName ? imgeFile.videoName : imgeFile.imageName;
//                         fs.readFile('./uploads/' + fileIs, function read(err, data) {
//                             let params = {};
//                             params = {
//                                 Bucket: 'eziplaybucket/eps', // pass your bucket name
//                                 Key: fileIs, // file will be saved as testBucket/contacts.csv
//                                 Body: data
//                             };
//                             s3.upload(params, function (s3Err, bucketFile) {
//                                 if (s3Err) {
//                                     next(err, req, res);
//                                 } else {
//                                     console.log(bucketFile);
//                                     cbSync();
//                                 }
//                             });
//                         });
//                     }, function (err) {
//                         if (err) {
//                             next(err, req, res);
//                         }
//                         else {
//                             callback(false, fnlDoc);
//                         }

//                     });
//                 }
//                 else {
//                     callback(false, fnlDoc);
//                 }
//             }



//         });
//     }
//     catch (err) {
//         callback(true, '', '');
//     }
// };
//------ --------- End Save All Files For Feed Module----------------
