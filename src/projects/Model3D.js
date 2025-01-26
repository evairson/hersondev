import { Pages } from "../constants";
import Header from "../header/Header";
import './Project.css';

function Model3D() {

    return (
        <div className="App projects">
        <Header activeIndex={Pages.PROJECTS}/> 
        
        <h1>3D Model</h1>

        <div className="container">

        <div className="sketchfab-embed-wrapper">
            <iframe 
                title="Wumpus" 
                frameBorder="0"
                allowFullScreen 
                src="https://sketchfab.com/models/ecb9df323b014e039bf6e32bc409fd68/embed?autostart=1&quality=hd">
            </iframe>
        </div>

        <div className="sketchfab-embed-wrapper">
            <iframe 
                title="Bob" 
                frameBorder="0"
                allowFullScreen 
                src="https://sketchfab.com/models/3e578ed2973149e585f509a769198b46/embed?autostart=1&quality=hd">
            </iframe>
        </div>

        <div className="sketchfab-embed-wrapper">
            <iframe 
                title="Mcgonagal" 
                frameBorder="0"
                allowFullScreen 
                src="https://sketchfab.com/models/4075bcda50044c2c9bf6648bb7935529/embed?autostart=1&quality=hd">
            </iframe>
        </div>

        </div>
            
        </div>
    )
    
}



export default Model3D;