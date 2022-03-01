import { Alert, Button, Form, Modal } from "react-bootstrap";

const StartModal = ({ count, handleChange, handlePlay, ...rest }) => {
	return (
		<Modal {...rest} size="md" centered className="text-center">
			<Alert className="m-0 border-0 bg-dark text-white">
				<Modal.Header className="border-0">
					<Modal.Title className="flex-grow-1">
						<h3>Number of People to Sort</h3>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form.Group>
						<Form.Control
							type="number"
							size="lg"
							min="10"
							max="50"
							name="count"
							className="rounded-0 border-0"
							placeholder={count}
							onChange={(e) => handleChange(e.target)}
						/>
						{(count < 10 || count > 50) && (
							<Form.Control.Feedback
								type="invalid"
								className="d-block text-start fw-600">
								Please choose a number between 10 and 50
							</Form.Control.Feedback>
						)}
					</Form.Group>
					<Form.Group className="d-flex align-items-center my-3">
						<Form.Label className="m-0 me-3">Order?</Form.Label>
						<Form.Check
							type="radio"
							name="order"
							label="Ascending"
							data-label="Ascending"
							id="asc"
							value="asc"
							checked
							onChange={(e) => handleChange(e.target)}
						/>
						<Form.Check
							type="radio"
							name="order"
							label="Descending"
							data-label="Descending"
							id="desc"
							value="desc"
							className="ms-3"
							onChange={(e) => handleChange(e.target)}
						/>
					</Form.Group>
					<Form.Group className="d-flex align-items-center my-3">
						<Form.Label className="m-0 me-3">Sort By?</Form.Label>
						<Form.Check
							type="radio"
							name="sortBy"
							label="Age"
							data-label="Age"
							id="age"
							value="age"
							checked
							onChange={(e) => handleChange(e.target)}
						/>
						<Form.Check
							type="radio"
							name="sortBy"
							label="First Name"
							data-label="First Name"
							id="firstname"
							value="firstname"
							className="mx-3"
							onChange={(e) => handleChange(e.target)}
						/>
						<Form.Check
							type="radio"
							name="sortBy"
							label="Last Name"
							data-label="Last Name"
							id="lastname"
							value="lastname"
							onChange={(e) => handleChange(e.target)}
						/>
					</Form.Group>
				</Modal.Body>
				<Modal.Footer className="justify-content-center border-0">
					<Button
						onClick={rest.onHide}
						className="btn primary-btn bg-danger">
						Cancel
					</Button>
					<Button onClick={handlePlay} className="btn primary-btn">
						Start
					</Button>
				</Modal.Footer>
			</Alert>
		</Modal>
	);
};

export default StartModal;
