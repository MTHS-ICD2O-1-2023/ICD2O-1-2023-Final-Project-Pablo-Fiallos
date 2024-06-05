// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Pablo Fiallos
// Created on: June 2024
// This file contains the JS functions for index.html

"use strict"

function updateCookieCount () {

  if (localStorage.cookies) {
    document.getElementById("user-info").innerHTML = "Cookies: " + localStorage.cookies
  } else {
    document.getElementById("user-info").innerHTML = "Cookies: 0"
  }
}

function cookieClicked() {
  if (localStorage.cookies) {
    localStorage.cookies = Number(localStorage.cookies) + 1 
  } else {
    localStorage.cookies = 1
  }
  document.getElementById("user-info").innerHTML = "Cookies: " + localStorage.cookies
}