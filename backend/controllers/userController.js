
const express = require('express');
const bodyParser = require('body-parser');
const app = express();    
   
const userModel = require('../models/User')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"))
app.use(express.json());

function getUser(req, res) {
        res.status(200).json({
        email: req.user.email,
        name: req.user.name,
        favs: req.user.shouldWear,
  	});
  };

async function addPhoto (req, res) {
    try {
        let userId = req.user._id;
        let addPhoto = req.params.photo;
     
        let checkPhoto = await userModel.findOne({ _id: userId, shouldWear: {$in: addPhoto}}) 
        if(!checkPhoto) {
            
            await userModel.updateOne({_id: userId}, { $push: { shouldWear: addPhoto }})
             
            return res.status(200).json({
                photo: req.params.photo 
              });
        } else {
            return res.status(200).json({
                message: `Photo ${addPhoto} is already added`,
              });
        }
            
            
        } catch (err) {
            console.log(err)
            }
}


async function removePhoto (req, res) {
    try {
        let userId = req.user._id;
        let removePhoto = req.params.photo;
        await userModel.updateOne({_id: userId}, { $pull: { shouldWear: removePhoto }})
        return res.status(200).json({
           photo: removePhoto,
          });
        } catch (err) {
            console.log(err)
            }
}

async function getUserPhotos (req, res) {
    try {
        let userID = req.user.id;
        const favPhotos = await userModel.findOne({_id: userID}, {shouldWear: 1});
        const favPhotosArr = favPhotos.shouldWear
        console.log(favPhotos.shouldWear);
        
            return res.json(favPhotosArr);
    
    
    } catch (err) {
        console.log(err)
        }
}

module.exports = { getUser, getUserPhotos, addPhoto, removePhoto }