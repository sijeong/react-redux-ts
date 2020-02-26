import React, { useState, Dispatch } from 'react';
import { connect } from 'react-redux';
import * as MyTypes from 'MyTypes'
import { actionTypes } from '../actions';
import { TodoItem } from '../components/TodoItem';
interface TodoContainerState {
    todoInput: string
}

interface TodoContainerProps {
    count: number;
    todoList: string[];
    addToDo: (item: string) => void;
    deleteTodo: (index: number) => void;
}

const TodoContainer: React.FC<TodoContainerProps> = ({ count, todoList, addToDo, deleteTodo }) => {
    const [state, setState] = useState({
        todoInput: ''
    });

    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({
            todoInput: e.target.value
        })
    }

    const handleButtonClick = () => {
        addToDo(state.todoInput);
        setState({ todoInput: '' })
    }

    const handleDeleteButtonClick = (index: number) => {
        console.log('deleting', index);
        deleteTodo(index)
    }

    let todoJSX: JSX.Element[] | JSX.Element;
    if (!todoList.length) {
        todoJSX = <p>Not to do</p>
    } else {
        todoJSX = todoList.map((item, index) => {
            return (
                <TodoItem item={item} key={index} index={index} handleDelete={handleDeleteButtonClick} />
            )
        })
    }
    return (

        <>
            {todoJSX}

        </>
    )
}

const MapStateToProps = (store: MyTypes.ReducerState) => {
    return {
        count: store.todo.count as number,
        todoList: store.todo.list as string[]
    }
}

const MapDispatchToProps = (dispatch: Dispatch<MyTypes.RootAction>) => ({
    addToDo: (item: string) => dispatch({ type: actionTypes.ADD, payload: item }),
    deleteTodo: (index: number) => dispatch({ type: actionTypes.DELETE, payload: index })
})

export default connect(
    MapStateToProps,
    MapDispatchToProps
)(TodoContainer)