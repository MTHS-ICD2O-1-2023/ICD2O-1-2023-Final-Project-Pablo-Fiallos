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
    document.getElementById("title-label").innerHTML =
      "You Win! Day: " + localStorage.day + ". To start over, delete site data."

    document.getElementById("money-label").innerHTML = ""
    document.getElementById("stocks-owned-label").innerHTML = ""
    document.getElementById("stock-price-label").innerHTML = ""
    document.getElementById("day-label").innerHTML = ""

    document.getElementById("form-label").innerHTML = ""
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
    update()
  } else {
    console.log("error")
  }
}
