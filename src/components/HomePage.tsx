import React from 'react';
import TodoList from './TodoList';
import AddTodo from './TodoAdd';

const HomePage = () => {
    return (
        <div>
            <AddTodo/>
            <TodoList/>
            
        </div>
    );
};

export default HomePage;