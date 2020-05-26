// Ripple Button Effect
const rippleBtn = document.querySelectorAll('.btn.ripple')

rippleBtn.forEach(btn => {
	btn.addEventListener('click', e => {
		const ripple = document.createElement('div')

		ripple.style.left = `${e.offsetX}px`
		ripple.style.top = `${e.offsetY}px`

		btn.appendChild(ripple)

		setTimeout(() => ripple.remove(), 500)
	})
})

// Autoformat
const searchForms = document.querySelectorAll('.search.autoformat .search-input')

searchForms.forEach(search => {
	autoformat(search.children[0], search.children[1])	
})

function autoformat(inputElement, itemsElement) {
	const items = [...itemsElement.children]
	let index = -1;

	inputElement.addEventListener('input', () => {
		if(inputElement.value.length === 0) return itemsElement.classList.remove('show')
		itemsElement.classList.add('show')
	})

	items.forEach(item => {
		item.addEventListener('click', () => {
			inputElement.value = item.dataset.value
			itemsElement.classList.remove('show')
		})
	})

	document.addEventListener('click', () => {
		itemsElement.classList.remove('show')
	})
}

