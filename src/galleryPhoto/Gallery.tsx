import {photo} from "./types"

import Navigation from "./Navigation"
import PreviewGallery from "./PreviewGallery"
import TransitionPhoto from "./TransitionPhoto"

interface GalleryImageProps {
    photos: photo[];
}

export const Gallery: React.FC<GalleryImageProps> = ({}) => {
  return (
    <div className="gallery">
    <div className="container">
        <h1>All Gallery</h1>
        <Navigation/>
        <PreviewGallery/>
        <TransitionPhoto/>
    </div>
    </div>
  )
}

export default Gallery