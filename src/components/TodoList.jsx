import React, { Component } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa'; // Import the icons

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodo: '',
      editTodo: '',
    };
  }

  // Add Todo Method
  addTodo = () => {
    if (this.state.newTodo) {
      this.setState((prevState) => ({
        todos: [...prevState.todos, { text: this.state.newTodo, isEditing: false }],
        newTodo: '',
      }));
    }
  };

  // Delete Todo Method
  deleteTodo = (index) => {
    const updatedTodos = this.state.todos.filter((_, i) => i !== index);
    this.setState({ todos: updatedTodos });
  };

  // Start Editing Todo
  startEditing = (index) => {
    this.setState({ editTodo: this.state.todos[index].text });
    const updatedTodos = this.state.todos.map((todo, i) =>
      i === index ? { ...todo, isEditing: true } : todo
    );
    this.setState({ todos: updatedTodos });
  };

  // Save Edited Todo
  saveEdit = (index) => {
    const updatedTodos = this.state.todos.map((todo, i) =>
      i === index ? { text: this.state.editTodo, isEditing: false } : todo
    );
    this.setState({ todos: updatedTodos, editTodo: '' });
  };

  render() {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl text-center text-gray-700 font-bold mb-4">Todo List</h1>
          <p className="text-sm text-center text-gray-500 mb-4">
            Created By Aries Dmello TE IT A 21
          </p>

          {/* Add Todo Input */}
          <div className="flex mb-4">
            <input
              type="text"
              className="w-full p-2 border rounded-l-lg focus:outline-none"
              placeholder="Add todo..."
              value={this.state.newTodo}
              onChange={(e) => this.setState({ newTodo: e.target.value })}
            />
            <button
              onClick={this.addTodo}
              className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-r-lg"
            >
              +
            </button>
          </div>

          {/* Todo List */}
          <ul>
            {this.state.todos.map((todo, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-gray-100 p-2 mb-2 border rounded-lg"
              >
                {todo.isEditing ? (
                  <input
                    type="text"
                    value={this.state.editTodo}
                    onChange={(e) => this.setState({ editTodo: e.target.value })}
                    className="w-full p-2 rounded-lg"
                  />
                ) : (
                  <span>{todo.text}</span>
                )}

                <div className="flex space-x-2">
                  {todo.isEditing ? (
                    <button
                      onClick={() => this.saveEdit(index)}
                      className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg"
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      onClick={() => this.startEditing(index)}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white p-2 rounded-lg"
                    >
                      <FaEdit />
                    </button>
                  )}
                  <button
                    onClick={() => this.deleteTodo(index)}
                    className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg"
                  >
                    <FaTrash />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default TodoList;

