import React from "react";

const ContactMe = () => {
	return (
		<div className="flex flex-col items-center justify-center w-full py-8">
			<h2 className="text-3xl font-bold mb-4">Contact Me</h2>
			<form className="w-full max-w-lg">
				<div className="flex flex-wrap -mx-3 mb-4">
					<div className="w-full px-3">
						<label
							className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
							htmlFor="name"
						>
							Name
						</label>
						<input
							className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							id="name"
							type="text"
							placeholder="Your Name"
						/>
					</div>
				</div>
				<div className="flex flex-wrap -mx-3 mb-4">
					<div className="w-full px-3">
						<label
							className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
							htmlFor="email"
						>
							Email
						</label>
						<input
							className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							id="email"
							type="email"
							placeholder="you@example.com"
						/>
					</div>
				</div>
				<div className="flex flex-wrap -mx-3 mb-4">
					<div className="w-full px-3">
						<label
							className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
							htmlFor="message"
						>
							Message
						</label>
						<textarea
							className="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							id="message"
							placeholder="Enter your message here"
						></textarea>
						<p className="text-lg italic">
							You can also email:
							bytetechbosses@mail.com.
						</p>
					</div>
				</div>
				<div className="flex items-center justify-center">
					<button
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						type="button"
					>
						Send
					</button>
				</div>
			</form>
		</div>
	);
};

export default ContactMe;
