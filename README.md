**WORK IN PROGRESS**

# Who Is Here

A simple application for calling the roll for testing Adonijs.

# Tech

The app is based on [Adonijs](https://adonisjs.com)

# Requirements 

* Node v14
* MySQL 15.1 / MariaDB 10.3.34

# Installation 

1. clone the repo
1. Go to the newly created diretory
1. `cp .env.example .env`
1. Edit the MYSQL database configuration with your informations
1. Create the database in MYQL
1. `npm install`
1. launch the app `npm run dev`

# My thoughts

This project was just meant to test adonijs.

I like the typescript cover and the ideas behind this framework overall BUT 
I really don't like Lucid ORM. 

Active record is really not a thing I like. Too much tight to the database
structure. 

I like to put the business model in the model. With Lucid's model it's clearly
not meant to do that. 
