import React, {Component} from 'react';

import GetImageButton from './GetImageButton';
import ImageDisplay from './ImageDisplay';

const API_KEY = "z9nZeZ47GPzY280h0YvUEVahNvev8qedeagCvqja";



export default class GetImageForm extends Component {
  constructor(props) {
    super(props);

  this.fetchRoverImage = this.fetchRoverImage.bind(this);
  this.handleRover = this.handleRover.bind(this);
  this.handleCamera = this.handleCamera.bind(this);
  this.handleSol = this.handleSol.bind(this);



   this.state = {
   rover: "Curiosity",
   camera: "FHAZ",
   images: [],
   sol: ""
 }

}

fetchRoverImage = (event) => {
this.setState({
camera: this.state.camera,
rover: this.state.rover,
images: [], sol: this.state.sol
});

 let cam = this.state.camera;
 let rove = this.state.rover;
 let num = this.state.sol;


 let imageUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rove}/photos?sol=${num}&camera=${cam}&api_key=${API_KEY}`;

 fetch(imageUrl)
     .then((response) => response.json())
     .then((data) => {
       console.log(data.photos);
       this.setState({
         rover: "Curiosity",
         camera: "FHAZ",
         sol: 0,
         images: data.photos
       });
     })
}

handleRover(event) {
  event.preventDefault()
  this.setState({rover: event.target.value})
}

handleCamera(event) {
  event.preventDefault()
  this.setState({camera: event.target.value})
}

handleSol(event) {
  event.preventDefault()
  this.setState({sol: event.target.value})
}

  render() {

  return (
  <div className = "container">
   <form>
  <label htmlFor="rover">Rover </label>

  <select onChange={this.handleRover} id="rover" value={this.state.value}>
    <option value="Curiosity">Curiosity</option>
    <option value="Opportunity">Opportunity</option>
    <option value="Spirit">Spirt</option>
  </select>

  <label htmlFor="camera"> Camera Type </label>
  <select onChange={this.handleCamera} id="rover" value={this.state.value}>
    <option value="fhaz">FHAZ (Front Hazard)</option>
    <option value="rhaz">RHAZ (Rear Hazard)</option>
    <option value="navcam">NAVCAM (Navigation Cam)</option>
  </select>

  <label htmlFor="sol"> Martian Sol: 1000-2000   </label>
  <input type="number" onChange={this.handleSol} max="2000" min="1000" value={this.state.value}/>
   </form>

    <GetImageButton onClick={this.fetchRoverImage}/>
    <ImageDisplay images={this.state.images}/>

</div>

    )
  }
}
