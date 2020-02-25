import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as MyTypes from 'MyTypes'
interface TodoContainerState {
    todoInput: string
}

interface TodoContainerProps {
    count: number;
    todoList: string[];
    addToDo: (item: string) => object;
    deleteTodo: (index: number) => object;
}

const TodoContainer: React.FC = () => {
    const [state, setState] = useState({
        todoInput: ''
    });

    const handleTextChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setState({
            todoInput: e.target.value
        })
    }

    const handleButtonClick = () => {

    }

    const handleDeleteButtonClick = () => {

    }

    return (
        <>
            <h1>React Redux Typescript</h1>

        </>
    )
}

const MapStateToProps = (store: MyTypes.ReducerState) => {
    return {
        count: store.todo.count,
        todoList: store.todo.list
    }
}

const MapDispatchToProps = () => {

}

export default connect(
    MapStateToProps,
    MapDispatchToProps
)(TodoContainer)