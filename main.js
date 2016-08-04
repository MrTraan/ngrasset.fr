'use strict'

let input = ''
let cursorIndex = 0
let prompt

const cursorSymbol = '?'

window.onload = () => {
	document.addEventListener('keydown', listenKeyboard)
	prompt = document.getElementById('prompt-field');
	printInput()
}

const listenKeyboard = (event) => {
	console.log(event)
	if (isKeyPrintable(event)) {
		input = input.slice(0, cursorIndex) + event.key + input.slice(cursorIndex, input.length)
		cursorIndex++
		printInput()
	}

	if (/backspace/i.test(event.key)) {
		if (cursorIndex == 0) {
			return
		}
		input = input.slice(0, cursorIndex - 1) + input.slice(cursorIndex, input.length)
		cursorIndex--
		printInput()
	}

	if (/arrowleft/i.test(event.key)) {
		cursorIndex = cursorIndex > 0 ? cursorIndex - 1 : 0
		printInput()
	}

	if (/arrowright/i.test(event.key)) {
		cursorIndex = cursorIndex < input.length ? cursorIndex + 1 : cursorIndex
		printInput()
	}
}

const isKeyPrintable = (key) => {
	if (!key || !key.key) {
		return false
	}

	if (key.key.length === 1) {
		const char = key.key.charCodeAt(0)
		if (char > 33 && char < 126) {
			return true
		}
	}
	return false
}

const printInput = () => {
	prompt.innerHTML = input.slice(0, cursorIndex) + cursorSymbol + input.slice(cursorIndex, input.length)
}

String.prototype.insertCharAt = (char, index) => {
	console.log(this)
	return 
}