// Получаем элементы смайлика и статусное сообщение
const smiley = document.getElementById('smiley')
const statusText = document.getElementById('status')

// Устанавливаем пороговые значения для тряски
let shakeThreshold = 15
let tiltThreshold = 20

// Слушаем события движения устройства
window.addEventListener('devicemotion', handleMotion)

function handleMotion(event) {
	let accX = event.accelerationIncludingGravity.x
	let accY = event.accelerationIncludingGravity.y
	let accZ = event.accelerationIncludingGravity.z

	// Проверяем направление тряски
	if (Math.abs(accY) > shakeThreshold && Math.abs(accX) < 5) {
		// Вверх-вниз: Смайлик улыбается
		smiley.className = 'smile happy'
		smiley.textContent = '😊'
		statusText.textContent = 'Ты меня развеселил!'
	} else if (Math.abs(accX) > shakeThreshold && Math.abs(accY) < 5) {
		// Влево-вправо: Смайлик недоволен
		smiley.className = 'smile sad'
		smiley.textContent = '😕'
		statusText.textContent = 'Мне это не нравится...'
	} else if (Math.abs(accZ) > tiltThreshold) {
		// Под наклоном: Смайлик начинает рвать
		smiley.className = 'smile angry'
		smiley.textContent = '🤢'
		statusText.textContent = 'Мне нехорошо...'
	}
}
