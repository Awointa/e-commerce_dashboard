/* eslint-disable react/prop-types */
import Upload from "../assets/upload.svg";

function Button({ type }) {
	if (type === "primary")
		return (
			<button className="bg-indigo-50 p-4 text-indigo-500 rounded-full ">
				Add platforms
			</button>
		);

	return (
		<button className="bg-black flex rounded-full items-center py-2 px-4 gap-2">
			<span className="text-white">Export</span>{" "}
			<img src={Upload} alt="export button icon" />
		</button>
	);
}

export default Button;
