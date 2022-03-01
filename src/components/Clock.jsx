import { useEffect, useState } from "react";
import soundURL from "../sound.mp3";
import soundIcon from "../sound.svg";
import muteIcon from "../mute.svg";

const Clock = ({ setDuration }) => {
	const initialCountUp = {
		seconds: 0,
		minutes: 0,
		hours: 0
	};
	const [icon, setIcon] = useState(soundIcon);
	const [countUp, setCountUp] = useState(initialCountUp);
	const [sound] = useState(new Audio(soundURL));

	const startTimer = () => {
		return setInterval(() => {
			setCountUp((prev) => ({ ...prev, seconds: prev.seconds + 1 }));
		}, 1000);
	};

	useEffect(() => {
		icon === soundIcon ? sound.play() : sound.pause();

		if (countUp.seconds > 59) {
			setCountUp((prev) => ({
				...prev,
				minutes: prev.minutes + 1,
				seconds: 0
			}));
		}
		if (countUp.minutes > 59) {
			setCountUp((prev) => ({
				...prev,
				minutes: 0,
				hours: prev.hours + 1
			}));
		}
		setDuration(countUp);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [countUp.seconds]);

	useEffect(() => {
		// let isCancelled = false;
		// let interval;

		// if (!isCancelled) {
		let interval = startTimer();

		// }
		return () => {
			// isCancelled = true;
			sound.pause();
			sound.currentTime = 0;
			clearInterval(interval);
		};
	}, []);

	return (
		<div className="d-flex align-items-center">
			<span
				className="cursor-pointer"
				onClick={() =>
					setIcon((prev) =>
						prev === soundIcon ? muteIcon : soundIcon
					)
				}>
				<img src={icon} alt="Icon" width="25px" />
			</span>
			<h3 className="mb-0 ms-3 primary-color fw-500">
				<span className="mx-tiny">
					{countUp.hours < 10 ? "0" + countUp.hours : countUp.hours}
				</span>
				:
				<span className="mx-tiny">
					{countUp.minutes < 10
						? "0" + countUp.minutes
						: countUp.minutes}
				</span>
				:
				<span className="mx-tiny">
					{countUp.seconds < 10
						? "0" + countUp.seconds
						: countUp.seconds}
				</span>
			</h3>
		</div>
	);
};

export default Clock;
