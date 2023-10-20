// import logo from './logo.svg';
// import './App.css';
import { useState } from "react";
import CreateForm from "./CreateForm";

function Home() {
	const [tasks, setTasks] = useState([]);

	const [name, setName] = useState("");
	const [dueDate, setDueDate] = useState("");
	const [status, setStatus] = useState("InComplete");

	const handleSubmit = (e) => {
		e.preventDefault();
		setTasks([...tasks, { name, dueDate, status }]);
		// console.log(tasks);
	};

	const handleDeleteTask = (e, id) => {
		const temp = [...tasks];
		temp.splice(id, 1);
		setTasks([...temp]);
	};

	const handleStatusChange = (e, id) => {
		const isChecked = e.target.checked;
		let newStatus = "";
		if (isChecked) {
			newStatus = "Completed";
		} else {
			newStatus = "InComplete";
		}
		const temp = [...tasks];
		console.log("temp: ", temp, " id: ", id);
		temp[id].status = newStatus;
		setTasks([...temp]);
	};

	// console.log(tasks);

	return (
		<div className="Home">
			<form onSubmit={(e) => handleSubmit(e)}>
				<h1>Create Task</h1>
				<label forHtml="name">Name: </label>
				<input
					type="text"
					name="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
					required></input>
				<label forHtml="dueDate">Due date : </label>
				<input
					type="date"
					name="dueDate"
					value={dueDate}
					onChange={(e) => {
						setDueDate(e.target.value);
					}}
					required></input>
				<label forHtml="status">Completion Status : </label>
				<select
					name="status"
					value={status}
					onChange={(e) => setStatus(e.target.value)}>
					<option value="Completed">Completed</option>
					<option value="InComplete">InComplete</option>
				</select>
				<button>Submit</button>
			</form>

			<h1>Task List</h1>

			<h5>Task Name --- Due date ---- Complettion Status</h5>
			<ul>
				{tasks && tasks.length !== 0 ? (
					tasks.map((task, index) => (
						<li key={`task-${index}`}>
							<input
								type="checkbox"
								onChange={(e, id) => handleStatusChange(e, index)} checked={task.status=="Completed"}></input>
							{task.name} --- {task.dueDate}--- {task.status} ---{" "}
							<button onClick={(e, id) => handleDeleteTask(e, index)}>
								Delete Task
							</button>
						</li>
					))
				) : (
					<>
						<p>No records present</p>
						{/* <CreateForm tasks={tasks} handleSetTask={setTasks}/> */}
					</>
				)}
			</ul>
		</div>
	);
}

export default Home;
