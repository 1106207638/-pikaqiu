const string = `
.skin * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
 .skin *::before,
 .skin *::after {
    box-sizing: border-box;
  }

  .skin {
    background: #ffe600;
    min-height: 500vh;
    position: relative;
  }
  .nose {
    border: 10px solid red;
    border-color: black transparent transparent;
    border-bottom: none;
    width: 0px;
    height: 0px;
    position: relative;
    left: 50%;
    top: 145px;
    margin-left: -10px;
    z-index: 50;
  }
  @keyframes wave {
    0% {
      transform: rotate(0deg);
    }
    33% {
      transform: rotate(10deg);
    }
    66% {
      transform: rotate(-10deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  .nose:hover {
    transform-origin: 50% 100%;
    animation: wave 0.5s infinite linear;
  }
  .yuan {
    position: absolute;
    width: 20px;
    height: 6px;
    top: -16px;
    left: -10px;
    border-radius: 10px 10px 0 0;
    background: black;
  }
  .eye {
    border: 2px solid black;
    width: 64px;
    height: 64px;
    position: absolute;
    left: 50%;
    top: 100px;
    margin-left: -32px;
    background: #2e2e2e;
    border-radius: 50%;
  }
  .eye::before {
    content: "";
    border: 2px solid #000;
    width: 26px;
    height: 26px;
    display: block;
    background: #fff;
    border-radius: 50%;
    position: relative;
    left: 6px;
    top: 4px;
  }
  .eye.left {
    transform: translate(-100px);
  }
  .eye.right {
    transform: translate(100px);
  }
  .mouth {
    width: 200px;
    height: 200px;
    position: absolute;
    left: 50%;
    top: 170px;
    margin-left: -100px;
  }
  .up {
    position: relative;
    top: -10px;
    z-index: 1;
  }
  .lip {
    border: 4px solid black;
    height: 30px;
    width: 98px;
    border-top: transparent;
    position: absolute;
    background: #ffe600;
  }
  .lip.left {
    border-radius: 0 0 0 50px;
    border-right: transparent;
    transform: rotate(-14deg);
    left: 2px;
  }
  .lip.right {
    border-radius: 0 0 50px 0;
    border-left: transparent;
    transform: rotate(14deg);
    left: 100px;
  }
  .down {
    height: 180px;
    position: absolute;
    top: 00px;
    width: 100%;
    overflow: hidden;
  }
  .bigyuan {
    border: 3px solid black;
    width: 150px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -75px;
    height: 1000px;
    border-radius: 75px/300px;
    background: #9b000a;
    overflow: hidden;
  }
  .yuan2 {
    border: 1px solid green;
    background: #ff485f;
    width: 200px;
    height: 300px;
    position: absolute;
    bottom: -150px;
    left: 50%;
    margin-left: -100px;
    border-radius: 200px/300px;
  }
  .face {
    background: #ff0000;
    position: absolute;
    border: 3px solid black;
    left: 50%;
    width: 88px;
    height: 88px;
    margin-left: -44px;
    top: 214px;
    z-index: 4;
    border-radius: 50%;
  }
  .face > img {
    position: absolute;
    top: 50%;
    left: 50%;
  }
  .face.left {
    transform: translateX(-144px);
  }
  .face.left > img {
    transform: rotateY(180deg);
    transform-origin: 0 0;
  }
  .face.right {
    transform: translateX(+147px);
  }
`



const player = {
  id: undefined,
  time: 100,
  ui: {
    demo: document.querySelector('#demo'),
    demo2: document.querySelector('#demo2')
  },
  n: 1,
  init: () => {
    player.ui.demo.innerText = string.substr(0, player.n)
    player.ui.demo2.innerHTML = string.substr(0, player.n)
    player.bindEvents()
    player.play()
  },
  events: {
    '#btnPause': 'pause',
    '#btnPlay': 'play',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast'
  },
  bindEvents: () => {
    for (let key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        const value = player.events[key]
        document.querySelector(key).onclick = player[value]
      }
    }
  },
  run: () => {
    player.n += 1
    if (player.n > string.length) {
      window.clearInterval(player.id)
      return
    }
    player.ui.demo.innerText = string.substr(0, player.n)
    player.ui.demo2.innerHTML = string.substr(0, player.n)
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight
  },
  play: () => {
    player.id = setInterval(player.run, player.time)
  },
  pause: () => {
    window.clearInterval(player.id)
  },
  slow: () => {
    player.time = 300
    player.pause()
    player.play()
  },
  normal: () => {
    player.time = 100
    player.pause()
    player.play()
  },
  fast: () => {
    player.time = 0
    player.pause()
    player.play()
  }
}
player.init()
