# Deckollab
Deckollab is a [WIP] Collaborative Editor for Magic the Gathering decks

## TODO:
* card importer from mtgjson
* filter syntax for selecting cards to add
	* initially just name search - DONE 
* add card to deck and send event - card adding done, need to send event still
* remove card from deck and send event
* websocket send to all in lobby
* unique IDs for decks - DONE - would like to make prettier IDs
* deck list front page
	* search option for this
* ability to delete decks (give creator a custom key?)
* ability to name decks
* create view four-oh-four.pug that tells someone they've 404'd
* add a select to bottom of page that allows you to change the sort
* add support for secondary sorting
	* deep_alphabetize handles this already for tertiary sorting
	* secondary sorting should divide into columnar bins, visually
