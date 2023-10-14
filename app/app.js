// import from model.js
import { changePageContent } from "../model/model.js";

// declared variables
var navAnchors = "header .header-wrapper .navContainer nav a";
var logoAnchor = "header .header-wrapper .navContainer .logo a";
var galleryAnchors = ".gallery .galleryGrid a";
var blogAnchors = ".blog .blogGrid a";


// funtion to listen to nav anchor clicks
function initListeners(){
    $(navAnchors).on("click", function(e) {
        let btnID = e.currentTarget.id;
        changePageContent(btnID);
    });
}

// function to listen to logo anchor click
$(document).on("click", logoAnchor, function(e) {
    let btnID = e.currentTarget.id;
    changePageContent(btnID);
})

// function to listen to gallery anchor click
$(document).on("click", galleryAnchors, function(e) {
    let btnID = e.currentTarget.id;
    changePageContent(btnID);
})

// function to listen to blog anchor click
$(document).on("click", blogAnchors, function(e) {
    let btnID = e.currentTarget.id;
    changePageContent(btnID);
})

// call js-jq functions
$(document).ready(function(){
    initListeners();
    changePageContent("home");
})

// service worker for PWA
if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
        navigator.serviceWorker
            .register("/~jbutlerj/final-project/serviceWorker.js")
            .then(res => console.log("service worker registered"))
            .catch(err => console.log("service worker not registered", err))
    })
}