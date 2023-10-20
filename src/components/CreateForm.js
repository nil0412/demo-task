import {useState} from "react";
import { Navigate } from "react-router-dom/dist";

function CreateForm(props) {

    const[name, setName] = useState("");
    const[dueDate, setDueDate] = useState("");
    const[status, setStatus] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.handleSetTask([...props.tasks, {name, dueDate, status}]);
    }

    return (
    <div className="CreateForm">
       <form onSubmit={(e) => handleSubmit(e)}>
        <label forHtml="name">Name: </label>
        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}></input>
        <label forHtml="dueDate">Due date : </label>
        <input type="date" name="dueDate" value={dueDate} onChange={(e) => setDueDate(e.target.value)}></input>
        <label forHtml="status">Completion Status : </label>
        <select name="status" value={status} onChange={(e) => setStatus(e.target.value)}>
            <option>Completed</option>
            <option>InCompleted</option>
        </select>
        <button>Submit</button>
       </form>
    </div>
  );
}

export default CreateForm;
