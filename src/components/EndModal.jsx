import { Alert, Button, Modal } from "react-bootstrap";

const StartModal = ({ data, setStartModal, ...rest }) => {
	const renderTime = () => {
		let text = "";
		const { hours, minutes, seconds } = data;
		text += hours ? `${hours} ${hours > 1 ? "hours" : "hour"}` : "";
		text += minutes
			? `${minutes} ${minutes > 1 ? "minutes" : "minute"}`
			: "";

		return `${text} ${seconds} seconds`;
	};
	return (
		<Modal {...rest} size="md" centered className="text-center">
			<Alert className="m-0 border-0 bg-crimson text-white">
				<Modal.Header className="border-0" closeButton>
					<Modal.Title className="flex-grow-1">
						<h3 className="m-0">Congratulations!</h3>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<h5 className="fw-400 m-0">
						You finish the job in {data && renderTime()}
					</h5>
				</Modal.Body>
				<Modal.Footer className="justify-content-center border-0">
					<Button
						onClick={() => {
							rest.onHide();
							setStartModal(true);
						}}
						className="btn secondary-btn">
						Restart
					</Button>
				</Modal.Footer>
			</Alert>
		</Modal>
	);
};

export default StartModal;
