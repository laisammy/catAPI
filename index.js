let currentCatUrl = null

document.addEventListener('DOMContentLoaded', () => {
	setRandomCatImage()
	document.getElementById('refresh').addEventListener('click', setRandomCatImage)
	document.getElementById('download').addEventListener('click', downloadCat)
})

async function setRandomCatImage() {
	try {
		const catapi_call = await fetch('https://api.thecatapi.com/v1/images/search')
		if (!catapi_call.ok) throw new Error('Failed to fetch cat image')
		const catapi_json = await catapi_call.json()
		const img_url = catapi_json[0].url
		const image_elem = document.getElementById('cat-img')
		image_elem.src = img_url
		currentCatUrl = img_url
	} catch (error) {
		console.error('Error loading cat:', error)
		alert('Failed to load cat image. Try again!')
	}
}

function downloadCat() {
	if (!currentCatUrl) {
		alert('No cat image loaded yet!')
		return
	}

	const link = document.createElement('a')
	link.href = currentCatUrl
	link.download = `cat-${Date.now()}.jpg`
	document.body.appendChild(link)
	link.click()
	document.body.removeChild(link)
}
