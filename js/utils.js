const body = document.body

const iron_bars = document.querySelector('.fa-bars')


const arrowScroll = () => {
	const bt_scroll = document.querySelector('.arrow-scroll')

	if (
		body.scrollTop > 200 ||
		document.documentElement.scrollTop > 200
	) {
		bt_scroll.style.display = 'block'
	} else {
		bt_scroll.style.display = 'none'
	}
}

document.addEventListener('scroll', arrowScroll)

const selection_device = () => {
	const navigation = document.querySelector('.nav-list')

	if (iron_bars.classList.contains('fa-bars')) {
		iron_bars.classList.remove('fa-bars')
		iron_bars.classList.add('fa-times')
		navigation.classList.add('display-nav-list')
	} else {
		iron_bars.classList.remove('fa-times')
		iron_bars.classList.add('fa-bars')
		navigation.classList.remove('display-nav-list')
	}
}

iron_bars.addEventListener('click', selection_device)