import './App.css'
import CircularTimer from './CircularTimer'
import { useState } from 'react'
import { Button, Card, CardContent } from 'ui-neumorphism'
import 'ui-neumorphism/dist/index.css'
import useSound from 'use-sound';
import start from './assets/start.mp3';
import cone_yellow from './assets/cone_yellow.png'
import cone_red from './assets/cone_red.png'
import container_red from './assets/container_red.png'
import container_yellow from './assets/container_yellow.png'
import gear_pink from './assets/gear_pink.png'
import gear_purple from './assets/gear_purple.png'
import hammer from './assets/hammer.png'
import nut_blue from './assets/nut_blue.png'
import nut_orange from './assets/nut_orange.png'
import screw_blue from './assets/screw_blue.png'
import screw_limegreen from './assets/screw_limegreen.png'
import screw_white from './assets/screw_white.png'
import screwdriver from './assets/screwdriver.png'
import trashcan from './assets/trashcan.png'
import robot from './assets/robot.png'
import wrench from './assets/wrench.png'

function App() {
  // 画像の宛先をまとめる
  const imgSrc = [
    {
      src: cone_yellow,
      alt: 'cone_yellow',
    },
    {
      src: cone_red,
      alt: 'cone_red',
    },
    {
      src: container_red,
      alt: 'container_red',
    },
    {
      src: container_yellow,
      alt: 'container_yellow',
    },
    {
      src: gear_pink,
      alt: 'gear_pink',
    },
    {
      src: gear_purple,
      alt: 'gear_purple',
    },
    {
      src: hammer,
      alt: 'hammer',
    },
    {
      src: nut_blue,
      alt: 'nut_blue',
    },
    {
      src: nut_orange,
      alt: 'nut_orange',
    },
    {
      src: screw_blue,
      alt: 'screw_blue',
    },
    {
      src: screw_limegreen,
      alt: 'screw_limegreen',
    },
    {
      src: screw_white,
      alt: 'screw_white',
    },
    {
      src: screwdriver,
      alt: 'screwdriver',
    },
    {
      src: trashcan,
      alt: 'trashcan',
    },
    {
      src: robot,
      alt: 'robot',
    },
    {
      src: wrench,
      alt: 'wrench',
    },
  ];
  // hookを使って状態管理
  const [rand, setRand] = useState(imgSrc[Math.floor(Math.random() * imgSrc.length)]);
  const [isWaiting, setIsWaiting] = useState(false);
  const [play] = useSound(start, { preload: true });

  const handleChangeImage = () => {
    setIsWaiting(true);
    // 新しいランダムな画像を選ぶ
    const newImageSrc = imgSrc[Math.floor(Math.random() * imgSrc.length)];
    setRand(newImageSrc);

    // 新しい画像をプリロードする
    const img = new Image();
    img.src = newImageSrc.src;
    img.onload = () => {
      // 画像がロードされた後に音を鳴らして画像を表示
      setTimeout(() => {
        play();
        setIsWaiting(false);
      }, 3000);
    };
  };

  return (
    <>
      <div className="App">
        <Card className="card">
          <CardContent>
            {
              isWaiting ? (
                <CircularTimer duration={3} onComplete={() => setIsWaiting(false)} />
              ) : (
                <img src={rand.src} alt={rand.alt} className="question" />
              )
            }
          </CardContent>
        </Card>
      </div>
      <Button className='change' rounded disabled={isWaiting} size='large' onClick={handleChangeImage}>next</Button>
    </>
  )
}

export default App
