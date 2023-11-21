// Footer.jsx
const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white p-4">
        <div className="flex justify-center space-x-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            LinkedIn
          </a>
          <a
            href="https://stackoverflow.com/users/yourid"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            Stack Overflow
          </a>
          {/* Add other social platform links as needed */}
        </div>
      </footer>
    );
  };
  
  export default Footer;