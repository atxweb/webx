import webxLogo from '/webx.svg'
import './App.css'

function App() {
  return (
    <>
      <div className='logo'>
        <img src={webxLogo} alt="webx"/>
      </div>
      <h1 className="heading">WebX - Simplify Your Online Experience</h1>
      <div className="card">
        <p>WebX (Web Exploration) is a powerful web application designed to help internet users efficiently store and manage and access their favorite website links. With its user-friendly interface, WebX allows you to organize your web links efficiently, ensuring that you never lose track of important resources again. Whether you're a student, professional, or casual internet user, WebX caters to your needs by providing a centralized platform for all your web links.</p>
        <p>Simply add your favorite URLs, categorize them, and retrieve them with ease whenever you need. The app features robust search functionality, allowing you to find specific links quickly. You can also add notes and tags to each link for better organization. WebX is accessible from any device, making it easy to manage your links on the go. Enhance your productivity and keep your online resources at your fingertips with WebX.</p>
      </div>
    </>
  )
}

export default App
