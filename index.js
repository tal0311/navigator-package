const myNavigator = {
  getProperties() {
    const msg = `* position: Returns a promise with the current location.\n
      * battery: Returns a promise with an object containing {isCharging and BatteryLevel}.\n
      * media: Takes options for media {audio: boolean, video: boolean} and a videoAttributes object.\n
        Example:
        const videoAttributes = {
          controls: false,
          autoplay: true
        };
        Requires a <video id="video"> element.\n
      * captureImg: Captures a media stream to a canvas element. Requires a <video id="video"> and a <canvas id="canvas"> element.\n
        You can activate myNavigator.captureImg() with a click event.\n
      * deviceInfo: Returns an object with device-related information such as userAgent, platform, and language.\n
      * checkConnectivity: Returns a promise that resolves to a boolean indicating if the user is online.\n
    `;
    console.log(msg);
  },
  battery() {
    return navigator.getBattery().then((res) => {
      return {
        isCharging: res.charging,
        BatteryLevel: (res.level * 100) + '%',
      };
    });
  },
  position() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  },
  media(options, videoAttributes) {
    return navigator.mediaDevices.getUserMedia(options).then((stream) => {
      const video = document.querySelector('#video');
      if (videoAttributes.controls) video.setAttribute('controls', 'true');
      if (videoAttributes.autoplay) video.setAttribute('autoplay', 'true');
      video.srcObject = stream;
    });
  },
  captureImg() {
    const video = document.querySelector('#video');
    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
  },
  deviceInfo() {
    return {
      userAgent: navigator.userAgent,
      platform: navigator.platform,
      language: navigator.language,
    };
  },
  checkConnectivity() {
    return new Promise((resolve) => {
      resolve(navigator.onLine);
    });
  },
};

export default myNavigator;
