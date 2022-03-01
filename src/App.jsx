import "./App.css";
import { useState } from "react";
import { faker } from "@faker-js/faker";
import { Button, Col, Container, Row } from "react-bootstrap";
import StartModal from "./components/StartModal";
import EndModal from "./components/EndModal";
import PeopleTable from "./components/PeopleTable";
import Clock from "./components/Clock";

function App() {
	const [duration, setDuration] = useState({});
	const [startModal, setStartModal] = useState(false);
	const [endModal, setEndModal] = useState(false);
	const [playStart, setPlayStart] = useState(false);
	const [count, setCount] = useState(10);
	const [people, setPeople] = useState([]);
	const [sorted, setSorted] = useState(false);

	const [sortData, setSortData] = useState({
		order: { label: "Ascending", value: "asc" },
		sortBy: { label: "Age", value: "age" }
	});

	const generatePeople = () => {
		const _people = [];
		for (let i = 0; i < count; i++) {
			_people.push({
				id: i,
				firstname: faker.name.firstName(),
				lastname: faker.name.lastName(),
				age: +faker.datatype.number().toString().slice(0, 2),
				gender: faker.name.gender()
			});
		}
		setPeople(_people);
	};

	const handlePlay = () => {
		if (count < 10 || count > 50) return;

		generatePeople();
		setPlayStart(true);
		setStartModal(false);
	};

	const isSorted = () => {
		const sliced = people.slice(1);

		const { order, sortBy } = sortData;

		const _sorted = sliced.every((item, i) => {
			if (order.value === "desc") {
				return item[sortBy.value] <= people[i][sortBy.value];
			}

			return item[sortBy.value] >= people[i][sortBy.value];
		});

		if (_sorted) {
			setPlayStart(false);
			setSorted(true);
			setEndModal(true);

			return;
		}
		// return false;
	};

	const handleChange = (input) => {
		const { name, value } = input;
		// console.log(input.getAttribute("data-label"));

		const label = input.getAttribute("data-label") || value;

		if (name === "count") setCount(value);
		else {
			setSortData((prev) => ({
				...prev,
				[name]: { label, value }
			}));
		}
	};

	return (
		<div className="App py-5">
			<StartModal
				show={startModal}
				count={count}
				handlePlay={handlePlay}
				handleChange={handleChange}
				onHide={() => setStartModal(false)}
			/>
			<EndModal
				show={endModal}
				data={duration}
				setStartModal={setStartModal}
				onHide={() => setEndModal(false)}
			/>
			<Container>
				<Row className="justify-content-center">
					<Col lg={10}>
						<div className="d-flex mb-5 justify-content-between align-center ">
							<h2 className="m-0">People Sorting</h2>
							{playStart ? (
								<Clock setDuration={setDuration} />
							) : (
								<Button
									variant="primary"
									size="lg"
									className="primary-btn"
									onClick={() => setStartModal(true)}>
									Start Playing
								</Button>
							)}
						</div>
						{playStart && (
							<div className="d-flex align-items-center justify-content-around my-3">
								<p className="">
									Order:
									<span className="ms-1 fw-500 primary-color">
										{sortData.order.label}
									</span>
								</p>
								<p>
									Sort by:
									<span className="fw-500 primary-color">
										{sortData.sortBy.label}
									</span>
								</p>
							</div>
						)}
						<PeopleTable
							data={people}
							setPeople={setPeople}
							isSorted={isSorted}
						/>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default App;
