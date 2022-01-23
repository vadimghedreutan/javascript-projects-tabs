const tabs = document.querySelectorAll('.tabs .tab')

console.log(tabs)

tabs.forEach((tab) => {
	tab.addEventListener('click', (event) => {
		// remove highlight from previous active tab
		document.querySelector('.tab.active').classList.remove('active')
		// highlight current tab
		event.currentTarget.classList.add('active')

		// hide the previously visible tab content
		document.querySelector('.show').classList.remove('show')

		// get the selector from data-content
		const selector = event.currentTarget.dataset.content
		// find the related content and show it
		document.querySelector(selector).classList.add('show')
	})
})
