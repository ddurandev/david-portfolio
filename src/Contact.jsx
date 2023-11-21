// Contact.jsx
const Contact = () => {
    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 p-2 rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 p-2 rounded"
          />
          <textarea
            placeholder="Your Message"
            className="border border-gray-300 p-2 rounded"
            rows="4"
          ></textarea>
          {/* Add form validation and submit functionality as needed */}
        </form>
      </div>
    );
  };
  
  export default Contact;