// ==UserScript==
// @name         KlixCommentRemove
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Make browsing Klix less painful
// @author       Kyoku37
// @license 	 MIT
// @match        https://www.klix.ba/*
// @grant        none
// @run-at document-body
// ==/UserScript==

(function() {
    'use strict';


    var hostName = window.location.href;

if (hostName === "https://www.klix.ba/"){

var comments = document.querySelectorAll('.comments');
comments.forEach( comments => comments.parentElement.removeChild(comments))

}

else{

var element = document.querySelector('.block.komentari');
element.parentElement.removeChild(element);

var element2 = document.querySelector('#komentari');
element2.parentElement.removeChild(element2);

var element3 = document.querySelector('.povezane');
element3.parentElement.removeChild(element3);

var element4= document.querySelector('.clanakCont');
var element4row = element4.querySelector('.row')
element4row.parentElement.removeChild(element4row);


var element5 = document.querySelector('.clanakTopCont')
var element5row = element5.querySelector('.row')
var element5numbers = element5row.querySelector('.brojKomentara')
element5numbers.parentElement.removeChild(element5numbers)

}





})();
