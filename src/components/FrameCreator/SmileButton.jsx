import postData from "./postData"
import smileyFace from "./smile.png"

let frame = []

const frameComposition = () => {
	const framers = document.getElementById("frame")
	for (let i = 0; i < framers.childElementCount; i++) {
		let avatar = {}
		let kindOfAvatar = framers.childNodes[i].childNodes[0].alt

		if (kindOfAvatar === "bride" || kindOfAvatar === "groom") {
			avatar.kind = framers.childNodes[i].childNodes[1].childNodes[0].innerHTML
			avatar.name = framers.childNodes[i].childNodes[1].childNodes[1].innerHTML
		} else {
			avatar.kind = framers.childNodes[i].childNodes[0].alt
			avatar.name = framers.childNodes[i].childNodes[1].childNodes[0].innerHTML
			avatar.relationship = framers.childNodes[i].childNodes[1].childNodes[1].innerHTML
			avatar.role = framers.childNodes[i].childNodes[1].childNodes[2].innerHTML
		}
		frame.push(avatar)
	}
	
	// postData happens here -- pass in frame as the array of objecg to be post it to db
	
}

function flashing() {
	let frame = document.getElementById("frame")
	if (frame.childElementCount > 0) {
		frame.style.backgroundColor = "black"

		setTimeout(() => {
			frame.style.display = "flex"
			frame.style.flexDirection = "column"
			frame.style.justifyContent = "center"
			frame.style.alignItems = "center"
			frame.style.textAlign = "center"
			frame.style.backgroundColor = "white"
			frame.style.fontSize = "40px"

			const img = document.createElement("img")
			img.src = `${smileyFace}`
			img.style.width = "400px"
			img.style.height = "400px"
			frame.innerHTML = "saving..."
			frame.appendChild(img)
			img.style.opacity = 0.7
			setTimeout(() => {
				img.style.display = "none"
				frame.innerHTML = " "
			}, 1000)
		}, 1000)
	}
}

function refreshAll() {
	setTimeout(() => {
		document.location.reload()
	}, 1600)
}

function Shutter() {
	frameComposition()
    postData(frame)
	 flashing()
	 refreshAll()
}

export default function SmileButton() {
	return (
		<button
			className="smileButton"
			onClick={Shutter}>
			Smile
		</button>
	)
}
