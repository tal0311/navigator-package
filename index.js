export default {
  getProperties() {
    const msg = `*position will return a promise with location \n
    *battery will return a promise with an object {charging and battery level} \n
    *media will take a options for media { audio: boolean, video: boolean } and attributes object \n
    const videoAttributes = {
      controls: false,
      autoplay: true
    };
     for displaying the video you will need a <video> with #video \n
     *captureImg will able you to capture a media stream to canvas. you will need a <video id="video"> element and a <canvas id="canvas"> element.\n
     you can activate myNavigator.capture() with a click event
    `
    console.log(msg)
  },
  battry() {
    return navigator.getBattery().then((res) => {
      return {
        isCharging: res.charging,
        BatteryLevel: res.level * 100 + '%',
      }
    })
  },

  position() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject)
    })
  },
  media(options, videoAttributes) {
    navigator.mediaDevices.getUserMedia(options).then((stream) => {
      const video = document.querySelector('#video')
      if (videoAttributes.controls) video.setAttribute('controls', 'true')
      if (videoAttributes.autoplay) video.setAttribute('autoplay', 'true')
      video.srcObject = stream
    })
  },
  captureImg() {
    const video = document.querySelector('#video')
    const canvas = document.querySelector('#canvas')
    const ctx = canvas.getContext('2d')
    ctx.drawImage(video, 0, 0, canvas.clientHeight, canvas.clientWidth)
  },
}
