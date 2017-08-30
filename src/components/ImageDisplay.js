import React from 'react';

const ImageDisplay = (props) => {

  const images = props.images.map((image) => {
    return(
      <img className = "pics" src ={image.img_src} key = {image.id} alt =""/>
    )
  });
   return(
     <div>
     {images}
     </div>
 )
}

  export default ImageDisplay;
