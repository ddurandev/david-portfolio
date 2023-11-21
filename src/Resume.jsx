// Resume.jsx
const Resume = () => {
    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Resume</h2>
        <div>
          <a href="https://docs.google.com/document/d/1HEkX0zLCMmdVhWgtFGJsVpLCNjtcWSf1T3sexX9nZPg/edit" className="text-blue-500 hover:underline">
            Download Resume
          </a>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Proficiencies:</h3>
          <ul className="list-disc list-inside">
            <li>Tailwnd CSS</li>
            <li>CSS</li>
            
          </ul>
        </div>
      </div>
    );
  };
  
  export default Resume;