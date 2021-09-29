import { Page } from './Page'
import { TodoBox } from './TodoBox';
import { SingleTodo } from './SingleTodo'

const todo = {
  title: 'Убраться', id: 0, isChecked: false
}

function App() {
  return (
    <div className="App">
      <Page>
        <TodoBox />
        <SingleTodo 
          params={todo}
        />
        <SingleTodo 
          params={todo}
        />
        <SingleTodo 
          params={todo}
        />
        <SingleTodo 
          params={todo}
        />
      </Page>
    </div>
  );
}

export default App;
