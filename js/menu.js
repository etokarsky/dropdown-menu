const isMobile = mobileAndTabletCheck()

isMobile ? doMobile() : document.body.classList.add('mouse')

function doMobile() {
	document.body.classList.add('touch')

	// добавляем margin только к пунктам с выпадающим списком
	const arrows = document.querySelectorAll('.arrow')
	for (const arrow of arrows) arrow.previousElementSibling.classList.add('parent')

	const menu = document.querySelector('.menu')

	menu.addEventListener('click', event => {
		const arrow = event.target.closest('.arrow')
		if (!arrow) return

		const subMenu = arrow.nextElementSibling

		subMenu.classList.toggle('open')
		arrow.classList.toggle('active')
	})
}