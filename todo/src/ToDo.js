const ToDo = (props) => {
    let {task, tasks} = props;

    const handleDelete = () => {
        console.log(tasks);
        for(let i = 0; i < tasks.length; ++i) {
            if(tasks[i] == task) {
                tasks.splice(i, 1);
                console.log("deleted");
            }
        }
        console.log(tasks);
        return
    }

    return <div class="todo">
        <li>
            {task}
        </li>
            <button class="delete" onClick={handleDelete}>
            Delete
        </button>
        <button class="edit">
            Edit
        </button>
    </div>
}
export default ToDo