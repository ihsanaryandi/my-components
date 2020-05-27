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

// Icon with ripple effect
const icons = document.querySelectorAll('.icon')

icons.forEach(icon => {
	icon.addEventListener('click', () => {
		const ripple = document.createElement('div')
		icon.appendChild(ripple)
		setTimeout(() => ripple.remove(), 500)
	})
})


// Dropdown
const dropdowns = document.querySelectorAll('.dropdown')

document.addEventListener('click', e => {
	dropdowns.forEach(dropdown => {
		if(dropdown.children[0] !== e.target) {
			dropdown.children[0].classList.remove('open')
			dropdown.children[1].classList.remove('open')
		}
	})

	if(e.target.parentElement.classList.contains('dropdown')) {
		const dropdown = e.target

		dropdown.classList.toggle('open')
		return dropdown.nextElementSibling.classList.toggle('open')
	}
})

