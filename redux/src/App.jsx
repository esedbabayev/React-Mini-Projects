import './App.css';

import Container from './Components/Container';
import Button from './Components/Button';
import Count from './Components/Count';
import Input from './Components/Input';


function App() {
  return (
      <Container>
        <div className='h-[100vh] flex justify-center gap-2 items-center'>
          <Button>Icon</Button>
          <Button>Increment</Button>
          <Count>0</Count>
          <Button>Decrement</Button>
          <Input></Input>
          <Button>Apply</Button>
        </div>
      </Container>
  );
}

export default App;
