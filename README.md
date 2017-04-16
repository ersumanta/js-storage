# js-storage
A Temp storage pattern for Javascript

## Installation

npm install simple-js-storage --save

## Usage

### Initialisation
// ES 5
var jsStorage = require("simple-js-storage");

// or ES 6
import jsStorage from "simple-js-storage";

### Set an Item to storage
jsStorage.set("id", "A Value in String or JS Object");

### Get an Item from storage
jsStorage.get("id");


