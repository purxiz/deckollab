const fs = require( 'fs' );
const all_cards = JSON.parse( fs.readFileSync( 'AtomicCards.json', 'utf8' ) );

module.exports = all_cards;
