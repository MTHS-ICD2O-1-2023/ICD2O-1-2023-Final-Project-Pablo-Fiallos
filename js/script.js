// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Pablo Fiallos
// Created on: June 2024
// This file contains the JS functions for index.html

"use strict"

function firstLoad() {
  if (!localStorage.money) {
    localStorage.money = 1000
    localStorage.stocksOwned = 0
    localStorage.stockPrice = 10
    localStorage.day = 0
  }
  update()
}

function update() {
  if (Number(localStorage.money) < 1000000) {
    document.getElementById("money-label").innerHTML =
      "Money: $" + localStorage.money
    document.getElementById("stocks-owned-label").innerHTML =
      "Stocks owned: " + localStorage.stocksOwned
    document.getElementById("stock-price-label").innerHTML =
      "Stock price: $" + localStorage.stockPrice
    document.getElementById("day-label").innerHTML = "Day: " + localStorage.day
  } else {

    document.getElementById("money-label").innerHTML = ""
    document.getElementById("stocks-owned-label").innerHTML = ""
    document.getElementById("stock-price-label").innerHTML = ""
    document.getElementById("day-label").innerHTML = ""

    document.getElementById("form-label").innerHTML = ""
    let score = "error"
    if (Number(localStorage.day) <= 1000) {
      score = "A+"
    } else if (Number(localStorage.day) <= 2000) {
      score = "A"
    } else if (Number(localStorage.day) <= 3000) {
      score = "A-"
    } else if (Number(localStorage.day) <= 4000) {
      score = "B+"
    } else if (Number(localStorage.day) <= 5000) {
      score = "B"
    } else if (Number(localStorage.day) <= 6000) {
      score = "B-"
    } else if (Number(localStorage.day) <= 7000) {
      score = "C+"
    } else if (Number(localStorage.day) <= 8000) {
      score = "C"
    } else {
      score = "C-"
    }
    document.getElementById("message-label").innerHTML = "You Win! Day: " + localStorage.day + ". Your score is: "+score+". Thank you so much for playing. Click the reset button to reset."
    document.getElementById("reset-button-label").innerHTML ="<button class=\"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent\" onclick=\"resetClicked()\">Reset</button>"
  }
}

function enterClicked() {
  let stocksSoldOrBought = parseInt(
    document.getElementById("stocks-sold-or-bought").value
  )
  let moneyDifference = stocksSoldOrBought * Number(localStorage.stockPrice)
  if (
    moneyDifference <= Number(localStorage.money) &&
    stocksSoldOrBought >= -1 * Number(localStorage.stocksOwned)
  ) {
    document.getElementById("message-label").innerHTML = ""
    localStorage.money = (Number(localStorage.money) - moneyDifference).toFixed(
      2
    )
    localStorage.stocksOwned =
      Number(localStorage.stocksOwned) + stocksSoldOrBought
    localStorage.stockPrice = (
      Number(localStorage.stockPrice) +
      Math.random() * 2 -
      1
    ).toFixed(2)
    if (Number(localStorage.stockPrice) < 5) {
      localStorage.stockPrice = (5 + Math.random()).toFixed(2)
    } else if (Number(localStorage.stockPrice) > 15) {
      localStorage.stockPrice = (15 - Math.random()).toFixed(2)
    }
    localStorage.day = Number(localStorage.day) + 1
    sendMessage()
    update()
  } else {
    document.getElementById("message-label").innerHTML =
      "Impossible transaction. Try again."
  }
}

function resetClicked() {
  localStorage.money = 1000
  localStorage.stocksOwned = 0
  localStorage.stockPrice = 10
  localStorage.day = 0
  location.reload()
}

function sendMessage() {
  if (Number(localStorage.day) >= 100 && Number(localStorage.day) <= 130) {
    document.getElementById("message-label").innerHTML =
      "good luck, it's gonna be a while..."
  } else if (
    Number(localStorage.day) >= 200 &&
    Number(localStorage.day) <= 230
  ) {
    document.getElementById("message-label").innerHTML =
      "you better make it to the end. it will be worth it. it will be fun."
  } else if (
    Number(localStorage.day) >= 300 &&
    Number(localStorage.day) <= 330
  ) {
    document.getElementById("message-label").innerHTML =
      "yes, in order to win you must multiply your money by one thousand."
  } else if (
    Number(localStorage.day) >= 400 &&
    Number(localStorage.day) <= 430
  ) {
    document.getElementById("message-label").innerHTML =
      "tip: you can put 0 into the thing and skip days. hopefully you've already discovered this..."
  } else if (
    Number(localStorage.day) >= 500 &&
    Number(localStorage.day) <= 530
  ) {
    document.getElementById("message-label").innerHTML =
      "patience is key. in this game and in real life."
  } else if (
    Number(localStorage.day) >= 600 &&
    Number(localStorage.day) <= 630
  ) {
    document.getElementById("message-label").innerHTML =
      "is there any point to winning this game? yes there is. you will be proud of yourself. and i will be proud of you."
  } else if (
    Number(localStorage.day) >= 700 &&
    Number(localStorage.day) <= 730
  ) {
    document.getElementById("message-label").innerHTML =
      "the more you struggle, the stronger you become. the stronger you become, the less you must struggle."
  } else if (
    Number(localStorage.day) >= 800 &&
    Number(localStorage.day) <= 830
  ) {
    document.getElementById("message-label").innerHTML =
      "and this game is but a constant struggle, so it will make you happier in the long-term."
  } else if (
    Number(localStorage.day) >= 900 &&
    Number(localStorage.day) <= 930
  ) {
    document.getElementById("message-label").innerHTML =
      "most games give gratification; so, they make you sadder in the long-term, for gratification is the enemy of struggle."
  } else if (
    Number(localStorage.day) >= 1000 &&
    Number(localStorage.day) <= 1030
  ) {
    document.getElementById("message-label").innerHTML =
      "the sadder you are, the more desperately you seek gratification."
  } else if (
    Number(localStorage.day) >= 1100 &&
    Number(localStorage.day) <= 1130
  ) {
    document.getElementById("message-label").innerHTML =
      "thus, you enter the cycle of addiction— this is exactly what the video game companies want!"
  } else if (
    Number(localStorage.day) >= 1200 &&
    Number(localStorage.day) <= 1230
  ) {
    document.getElementById("message-label").innerHTML =
      "hence why they say video games rot your brain..."
  } else if (
    Number(localStorage.day) >= 1300 &&
    Number(localStorage.day) <= 1330
  ) {
    document.getElementById("message-label").innerHTML =
      "but this game isn't addictive, thus it won't \"rot your brain.\""
  } else if (
    Number(localStorage.day) >= 1400 &&
    Number(localStorage.day) <= 1430
  ) {
    document.getElementById("message-label").innerHTML =
      "if you at it that way, perhaps this is one of the best games you've ever played?"
  } else if (
    Number(localStorage.day) >= 1500 &&
    Number(localStorage.day) <= 1530
  ) {
    document.getElementById("message-label").innerHTML =
      "just a shower thought..."
  }
}
