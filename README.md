# Deckollab
Deckollab is a [WIP] Collaborative Editor for Magic the Gathering decks

## TODO:
* card importer from mtgjson
* filter syntax for selecting cards to add
	* initially just name search - DONE 
* add card to deck and send event - card adding done, need to send event still
* remove card from deck and send event
* websocket send to all in lobby - DONE
* unique IDs for decks - DONE - would like to make prettier IDs
* deck list front page
	* search option for this
* ability to delete decks (give creator a custom key?)
	* first person to create the deck (person who clicks new deck) should be given four passwords
	* Only one password should display on page initially (edit or view?)
	* Next to password, a select box with options
		* view, suggest, edit, admin, hidden
		* selecting an option displays the password that will grant that permission (or hidden for hide password). 
	* Also next to password, a checkbox for enabled/disabled, which will enable or disable all password protection
* ability to name decks
* create view four-oh-four.pug that tells someone they've 404'd
* add a select to bottom of page that allows you to change the sort(s)
* add support for secondary sorting, "none" should be an allowable option.
	* deep_alphabetize handles this already for tertiary sorting
	* secondary sorting should divide into columnar bins, visually
	* for a single sort, primary_sort_bin<x> should be an ordered array list of cards. 
	* sorted object should have the following format if it's got two sorts
	```
	sorted_cards: {
		primary_sort_bin1: {
			secondary_sort_sub_bin1: [
				{ /* card object */ },
				{ /* second card object in order */ },
			],
			secondary_sort_sub_bin2: [
				{ ... },
				{ ... },
			],
			...
		},
		primary_sort_bin2: {
			...
		},
		...
	}
	```
* Change ping/pong heartbeat functions to use opcode pings and pongs, to avoid clogging up "regular" messages.
* start breaking out this list into issues, which I should have done from the beginning
