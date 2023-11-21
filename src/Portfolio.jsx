

import Musik from './assets/Musik.png';
import Workout from './assets/Workout.png';

const Portfolio = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Portfolio</h2>
      <div className="grid grid-cols-2 gap-4">
        {/* First project */}
        <div className="text-center">
          <a href="https://example.com/app1">
            <img src={Musik} alt="App 1" className="h-48 w-full object-contain mb-2" />
            <p className="text-blue-500 hover:underline">App 1</p>
          </a>
          <a href="https://github.com/username/repo1">
            <p className="text-gray-500 hover:underline">GitHub Repo</p>
          </a>
        </div>
        {/* Second project */}
        <div className="text-center">
          <a href="https://example.com/app2">
            <img src={Workout} alt="App 2" className="h-48 w-full object-contain mb-2" />
            <p className="text-blue-500 hover:underline">App 2</p>
          </a>
          <a href="https://github.com/username/repo2">
            <p className="text-gray-500 hover:underline">GitHub Repo</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
