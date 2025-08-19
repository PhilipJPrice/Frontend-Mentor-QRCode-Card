import React from 'react'
import './index.css'
import qrcode from './images/image-qr-code.png'

export function App() {
	return (
		<div class="h-screen flex flex-col justify-center items-center">
			<div class="attribution">
				Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
				Coded by <a href="#">Philip Price</a>.
			</div>
			<div class="flex flex-col mx-auto bg-white justify-center rounded-xl shadow-lg w-72 h-auto p-4 text-center">
				<img class="rounded-xl" src={qrcode} alt="QR Code" />
				<h1 class="text-xl m-2">Improve your front-end skills by building projects</h1>
				<p class="text-base text-slate-500">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level.</p>
			</div>
		</div>
	)
}
