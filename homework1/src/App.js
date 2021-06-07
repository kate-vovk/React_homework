import './App.css';
import {WelcomeFunction, WelcomeClass} from './Task1';
import {Buttons} from './Task2'
import {Days} from "./Task3";
function App() {
  const user = {
    firstName: 'Kate',
    lastName: 'Vovk',
  }

  const colors =['red', 'orange', 'yellow', 'green', 'blue']

  const tasksForEveryDay = [
    {1:'task1', 2:'task2', 3:'task3', 4:'task4', 5:'task5', 6:'task6', 7:'task7', 8:'task8', 9:'task9', 10:'task10', },
    {1:'task1', 2:'task2', 3:'task3', 4:'task4', 5:'task5', 6:'task6', 7:'task7', 8:'task8', 9:'task9', 10:'task10', },
    {1:'task1', 2:'task2', 3:'task3', 4:'task4', 5:'task5', 6:'task6', 7:'task7', 8:'task8', 9:'task9', 10:'task10', }
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
