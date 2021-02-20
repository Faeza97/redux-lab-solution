import React from 'react';
import CommentForm from './components/CommentForm';
import CommentList from './components/CommentsList'
function App() {
  return (
    <div className="App">
      <CommentForm />
      <CommentList />
    </div>
  );
}

export default App;
