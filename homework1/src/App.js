import './App.css';
import {WelcomeFunction, WelcomeClass} from './components/Task1';
import {Buttons} from './components/Task2'
import {Days} from "./components/Task3";
function App() {
  const user = {
    firstName: 'Kate',
    lastName: 'Vovk',
  }

  const colors =['red', 'orange', 'yellow', 'green', 'blue']

  // const tasksForEveryDay = [
  //   {1:'task1', 2:'task2', 3:'task3', 4:'task4', 5:'task5', 6:'task6', 7:'task7', 8:'task8', 9:'task9', 10:'task10', },
  //   {1:'task1', 2:'task2', 3:'task3', 4:'task4', 5:'task5', 6:'task6', 7:'task7', 8:'task8', 9:'task9', 10:'task10', },
  //   {1:'task1', 2:'task2', 3:'task3', 4:'task4', 5:'task5', 6:'task6', 7:'task7', 8:'task8', 9:'task9', 10:'task10', }
  // ];
  const tasksForEveryDay = [
    {1:{name:'task1', isDone: true}, 2:{name:'task2', isDone: true}, 3:{name:'task3', isDone: true}, 4:{name:'task4', isDone: true}, 5:{name:'task5', isDone: false}, 6:{name:'task6', isDone: false}, 7:{name:'task7', isDone: false}, 8:{name:'task8', isDone: false}, 9:{name:'task9', isDone: false}, 10:{name:'task10', isDone: true}, },
    {1:{name:'task1', isDone: false}, 2:{name:'task2', isDone: false}, 3:{name:'task3', isDone: false}, 4:{name:'task4', isDone: true}, 5:{name:'task5', isDone: false}, 6:{name:'task6', isDone: false}, 7:{name:'task7', isDone: true}, 8:{name:'task8', isDone: true}, 9:{name:'task9', isDone: true}, 10:{name:'task10', isDone: true},},
    {1:{name:'task1', isDone: true}, 2:{name:'task2', isDone: false}, 3:{name:'task3', isDone: true}, 4:{name:'task4', isDone: true}, 5:{name:'task5', isDone: false}, 6:{name:'task6', isDone: true}, 7:{name:'task7', isDone: false}, 8:{name:'task8', isDone: true}, 9:{name:'task9', isDone: true}, 10:{name:'task10', isDone: false},}
  ];
  const imagesforThreeDays = ['image_3_1.png', 'image_3_2.png', 'image_3_3.png']
  return (
    <div className="App">
      <WelcomeFunction firstName={user.firstName} lastName={user.lastName} />
      <WelcomeClass firstName={user.firstName} lastName={user.lastName} />

      <Buttons colors={colors}/>

      <Days days={tasksForEveryDay} images = {imagesforThreeDays} />
    </div>
  );
}

export default App;
