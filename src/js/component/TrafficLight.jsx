import React, { useState } from "react";

const TrafficLight = () => {
	const [redLight, setRedLight] = useState("");
	const [yellowLight, setYellowLight] = useState("");
	const [greenLight, setGreenLight] = useState("");

	const turnOnRedLight = () => {
		setRedLight("border");
		setYellowLight("");
		setGreenLight("");
	};

	const turnOnYellowLight = () => {
		setRedLight("");
		setYellowLight("border");
		setGreenLight("");
	};

	const turnOnGreenLight = () => {
		setRedLight("");
		setYellowLight("");
		setGreenLight("border");
	};

	return (
		<div className="text-center mt-5">
			<div>
				<i
					onClick={turnOnRedLight}
					className={`text-danger fs-1 fa fa-circle ${redLight}`}></i>
			</div>

			<div className="text-warning fs-1">
				<i
					onClick={turnOnYellowLight}
					className={`text-warning fs-1 fa fa-circle ${yellowLight}`}></i>
			</div>

			<div className="text-success fs-1">
				<i
					onClick={turnOnGreenLight}
					className={`text-success fs-1 fa fa-circle ${greenLight}`}></i>
			</div>
		</div>
	);
};

export default TrafficLight;
