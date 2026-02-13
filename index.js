document.addEventListener('DOMContentLoaded', setRandomCatImage)
async function setRandomCatImage() {
	const catapi_call = await fetch('https://api.thecatapi.com/v1/images/search')
	const catapi_json = await catapi_call.json()
	const img_url = catapi_json[0].url
	const img_width = catapi_json[0].width
	const img_height = catapi_json[0].height
	const image_elem = document.getElementById('cat-img')
	image_elem.src = img_url
}