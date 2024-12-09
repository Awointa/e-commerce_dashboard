function Sidebar() {
	return (
		<div className=" bg-purple-700 p-4 flex flex-col items-star w-[300px] text-white rounded-lg gap-2">
			<div className="flex gap-2">
				{" "}
				<h3>Product viewed</h3>
				<span className="text-gray-700">2.9%</span>
			</div>
			<p className="font-bold">411.9K</p>
			<div className="flex justify-between">
				<p>vs. last month</p>
				<p>3.13.2k</p>
			</div>
		</div>
	);
}

export default Sidebar;
