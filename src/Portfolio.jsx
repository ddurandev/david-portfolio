

import Musik from './assets/Musik.png';
import Workout from './assets/Workout.png';

const Portfolio = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Portfolio</h2>
      <div className="grid grid-cols-2 gap-4">
        {/* First project */}
        <div className="text-center">
          <a href="https://arcane-refuge-32686-92d3868f1b08.herokuapp.com/">
            <img src={Musik} alt="App 1" className="h-48 w-full object-contain mb-2" />
            <p className="text-blue-500 hover:underline">Musik App</p>
          </a>
          <a href="https://github.com/HunterMuratore/Musik">
            <p className="text-gray-500 hover:underline">GitHub Repo</p>
          </a>
        </div>
        {/* Second project */}
        <div className="text-center">
          <a href="https://apohl53.github.io/Workout_Planner_Project/">
            <img src={Workout} alt="App 2" className="h-48 w-full object-contain mb-2" />
            <p className="text-blue-500 hover:underline">Work Out Planner</p>
          </a>
          <a href="https://github.com/apohl53/Workout_Planner_Project">
            <p className="text-gray-500 hover:underline">GitHub Repo</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
