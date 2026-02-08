import { useSelector } from "react-redux";

export const TodoList = () => {
    const todoListData = useSelector(state => state.todos.todo);
    
    return (
        <>
            {
                todoListData && todoListData.map((el) => (
                    <div key={el.id}>
                        <p>{el.text}</p>
                        <p>{el.id}</p>
                        <div>
                            <button>Edit</button>
                            <button>Delete</button>
                        </div>
                    </div>
                ))
            }
        </>
    )
}