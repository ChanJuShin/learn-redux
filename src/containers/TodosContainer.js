import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo } from '../modules/todos';
import Todos from '../components/Todos';

function TodosContainer({ todos, addTodo, toggleTodo }) {
  const onCreate = (text) => addTodo(text);
  const onToggle = useCallback((id) => toggleTodo(id), [toggleTodo]);

  return <Todos todos={todos} onCreate={onCreate} onToggle={onToggle} />;
}

export default connect((state) => ({ todos: state.todos }), {
  addTodo,
  toggleTodo
})(TodosContainer);
