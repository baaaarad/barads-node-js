import React from "react";
const TodoForm = () =>{
    const todo = [
        {name:"task1", priority:"1" , time:"2AM"},
        {name:"task2", priority:"2" , time:"6AM"}
    ]
    return (
        <div
        style={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            padding: "5rem",
            border:"2px dashed gray"
        }}
        >
            <h3>
                my todo app
            </h3>
            {todo.map((element) => (
                
                <div
                    key={element.name}
                    style={{
                        border:"2px solid black",
                        display:"block",
                        marginBottom: "10px"
                    }}
                >
                    {element.name} {element.priority}
                </div>
            ))}
            <input
                type="text"
                placeholder="Add new task"
                style={{
                    border:"2px solid black",
                    display:"block"
                }}
            />
        </div>
        );
}
export default TodoForm;
