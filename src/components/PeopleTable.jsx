import { Table } from "react-bootstrap";
import { MultiDrag, Sortable } from "sortablejs";
import { ReactSortable } from "react-sortablejs";
import peopleIcon from "../people.svg";

Sortable.mount(new MultiDrag());

const PeopleTable = ({ data, setPeople, isSorted }) => {
	return (
		<Table
			size="lg"
			striped
			bordered
			hover
			responsive
			className="align-middle people-table bg-light fw-500 text-success">
			<thead className="primary-bg text-white">
				<tr>
					<th className="py-3 align-middle text-center">
						<img src={peopleIcon} alt="Icon" width="25px" />
					</th>
					<th className="py-3 align-middle">First Name</th>
					<th className="py-3 align-middle">Last Name</th>
					<th className="py-3 align-middle">Age</th>
					<th className="py-3 align-middle">Gender</th>
				</tr>
			</thead>
			<ReactSortable
				tag="tbody"
				list={data}
				setList={setPeople}
				animation={150}
				multiDrag={true}
				selectedClass="bg-crimson"
				chosenClass="primary-bg"
				fallbackTolerance={3}
				ghostClass="secondary-bg"
				// onChange={(order, sortable, evt) => console.log()}
				onEnd={(e) => isSorted(e)}>
				{data.map((item, i) => (
					<tr key={item.id} className="cursor-pointer">
						<td className="py-3 text-center">{++i}</td>
						<td className="py-3">{item.firstname}</td>
						<td className="py-3">{item.lastname}</td>
						<td className="py-3">{item.age}</td>
						<td className="py-3">{item.gender}</td>
					</tr>
				))}
			</ReactSortable>
		</Table>
	);
};

export default PeopleTable;
