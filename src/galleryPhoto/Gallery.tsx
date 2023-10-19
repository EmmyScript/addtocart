import {photo} from "./types"

import Navigation from "./Navigation"

import TransitionPhoto from "./TransitionPhoto"

interface GalleryImageProps {
    photos: photo[];
}

export const Gallery: React.FC<GalleryImageProps> = ({}) => {
  return (
    <div className="gallery">
    <div className="container">
      
        <Navigation/>
        
        <TransitionPhoto/>
    </div>
    </div>
  )
}

export default Gallery