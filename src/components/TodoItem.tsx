import React from 'react'

interface TodoItemProps {
    item: string;
    index: number;
    handleDelete: (index: number) => void
}

export const TodoItem: React.FC<TodoItemProps> = props => {
    return (
        <span>
            {props.item}
            <button onClick={() => props.handleDelete(props.index)}>X</button>
        </span>
    )
}