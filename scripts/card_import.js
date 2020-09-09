const fs = require('fs');
const http = require('http');

const all_printings = http.get("http://mtgjson.com/api/v5/AllPrintings.json");

const atomic_cards = http.get("http://mtgjson.com/api/v5/AtomicCards.json");

console.log(Object.keys(all_printings));
