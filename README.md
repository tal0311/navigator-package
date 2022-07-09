# Navigator-suit

A package that provides a layer of abstraction for more convenient use of the native javaScript navigator Object.

## How to use

```
npm i navigator-suit
```

```bash
import myNavigator from './node_modules/navigator-suit/index.js'

```

To see all the All possible options use the myNavigator.getProperties().  
This will print to console all possible methods for this object.

- myNavigator.position() will return a promise with location
- myNavigator.battery() will return a promise with an object {charging and battery level}
- myNavigator.media([options],[attributes]) will take a options for media,  
  { audio: boolean, video: boolean } and attributes object  
   const videoAttributes = {  
   controls: false,  
   autoplay: true  
   };  
   for displaying the video you will need an HTML video element with #video
- myNavigator.captureImg() will able you to capture a media stream to canvas.  
  you will need a video HTML and a canvas HTML element with #canvas #video ids  
  you can activate myNavigator.capture() with a click event to capture the stream to your canvas.
