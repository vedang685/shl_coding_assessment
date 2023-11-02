import React, { useRef, useEffect } from 'react';
import { useSpring, animated, to } from '@react-spring/web';
import { useGesture } from 'react-use-gesture' ;

import styles from './styles.module.css';

const calcX = (y, ly) => -(y - ly - window.innerHeight / 2) / 20;
const calcY = (x, lx) => (x - lx - window.innerWidth / 2) / 20;

export default function Card({data}) {

  const projectTitle = data.Project.Title;
  const technologies = data.Project.Technologies;
  const frontendSkill = data.Technical_Skillset.Frontend;
  const backendSkill = data.Technical_Skillset.Backend;
  const databaseSkill = data.Technical_Skillset.Databases;
  const infrastructure = data.Technical_Skillset.Infrastructre;

  useEffect(() => {
    const preventDefault = (e) => e.preventDefault();
    document.addEventListener('gesturestart', preventDefault);
    document.addEventListener('gesturechange', preventDefault);

    return () => {
      document.removeEventListener('gesturestart', preventDefault);
      document.removeEventListener('gesturechange', preventDefault);
    };
  }, []);

  const domTarget = useRef(null);
  const [{ x, y, rotateX, rotateY, rotateZ, zoom, scale }, api] = useSpring(
    () => ({
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      scale: 1,
      zoom: 0,
      x: 0,
      y: 0,
      config: { mass: 5, tension: 350, friction: 40 },
    })
  );

  useGesture(
    {
      onDrag: ({ active, offset: [x, y] }) =>
        api({ x, y, rotateX: 0, rotateY: 0, scale: active ? 1 : 1.1 }),
      onPinch: ({ offset: [d, a] }) => api({ zoom: d / 200, rotateZ: a }),
      onMove: ({ xy: [px, py], dragging }) =>
        !dragging &&
        api({
          rotateX: calcX(py, y.get()),
          rotateY: calcY(px, x.get()),
          scale: 1.1,
        }),
      onHover: ({ hovering }) =>
        !hovering && api({ rotateX: 0, rotateY: 0, scale: 1 }),
      
    },
    { domTarget, eventOptions: { passive: false } }
  );

  return (
    <div className={styles.container}>
      <animated.div
        ref={domTarget}
        className={styles.card}
        style={{
          transform: 'perspective(600px)',
          x,
          y,
          scale: to([scale, zoom], (s, z) => s + z),
          rotateX,
          rotateY,
          rotateZ,
        }}>
        <p className='text-sm text-gray-500 mb-2'>Title</p>
        <p className='text-lg mb-1 mt-1'>Project {projectTitle}</p>
        <p className='text-sm text-gray-500 mb-1 mt-1'>Project Technologies</p>
        <p>Technologies: {technologies}</p>
        <p className='text-sm text-gray-500 mb-1 mt-1'>Technical Skillset Frontend</p>
        <p>{frontendSkill}</p>
        <p className='text-sm text-gray-500 mb-1 mt-1'>Technical Skillset Backend</p>
        <p>{backendSkill}</p>
        <p className='text-sm text-gray-500 mb-1 mt-1'>Technical Skillset Databases</p>
        {typeof databaseSkill === 'undefined'?( <p>-</p>):(<p className='mb-1 mt-1'>{databaseSkill}</p>)}
        <p className='text-sm text-gray-500'>Technical Skillset Infrastructure</p>
        {typeof infrastructure === 'undefined'?( <p>-</p>):(<p className='mb-1 mt-1'>{infrastructure}</p>)}
      </animated.div>
    </div>
  );
}
