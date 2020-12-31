import worklet from 'raw-loader!../../dist/packages/css-houdini-ripple/worklet';
import * as React from 'react';

import styles from './app.module.scss';

export const App = () => {
  React.useEffect(() => {
    const workletBlob = URL.createObjectURL(
      new Blob([worklet], { type: 'application/javascript' })
    );

    window.CSS.paintWorklet.addModule(workletBlob);
  }, []);

  const handleClick = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      const element = event.currentTarget;
      const [x, y] = [event.nativeEvent.offsetX, event.nativeEvent.offsetY];
      element.style.setProperty('--houdini-ripple-x', String(x));
      element.style.setProperty('--houdini-ripple-y', String(y));
      const maxTick = parseFloat(
        getComputedStyle(element).getPropertyValue('--houdini-ripple-tick-max')
      );

      const start = performance.now();

      const ripple = (now: number) => {
        const count = Math.floor(now - start);
        element.style.setProperty('--houdini-ripple-tick', String(count));

        if (maxTick < count) {
          element.style.setProperty('--houdini-ripple-tick', String(0));
          return;
        }

        requestAnimationFrame(ripple);
      };
      requestAnimationFrame(ripple);
    },
    []
  );
  return (
    <>
      <h1>Hello!! CSS Houdini from React!!</h1>

      <button
        onClick={handleClick}
        type="button"
        id="ripple-button"
        className={`${styles['button']} ${styles['button--ripple']}`}
      >
        Button
      </button>
    </>
  );
};