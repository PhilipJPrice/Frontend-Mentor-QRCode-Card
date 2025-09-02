import React from 'react'
import './index.css'
import qrcode from './images/image-qr-code.png'

export function App() {
	return (
		<div className="h-screen flex flex-col justify-center items-center">
			<div className="attribution">
				Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
				Coded by <a href="#">Philip Price</a>.
			</div>
			<div className="flex flex-col mx-auto bg-white justify-center rounded-xl shadow-lg w-72 h-auto p-3 text-center">
				<img className="rounded-xl mb-2" src={qrcode} alt="QR Code" />
				<h1 className="text-xl m-2 font-medium">Improve your front-end skills by building projects</h1>
				<p className="text-base text-slate-500 font-light mb-4">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level.</p>
			</div>
		</div>
	)
}
