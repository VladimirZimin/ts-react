import { useState, useEffect } from "react";
import styles from "./Counter.module.css";

// interface Props {
//   initialValue: number;
//   step: number;
// }

export default function Counter() {
  const [counterA, setCounterA] = useState<number>(0);
  const [counterB, setCounterB] = useState<number>(0);

  const handleCounterAIncrement = () => {
    setCounterA((prevState) => prevState + 1);
  };

  const handleCounterBIncrement = () => {
    setCounterB((prevState) => prevState + 1);
  };

  useEffect(() => {
    const totalClicks = counterA + counterB;
    document.title = `Всего кликнули ${totalClicks} раз`;
  }, [counterA, counterB]);

  return (
    <>
      <button
        className={styles.btn}
        type="button"
        onClick={handleCounterAIncrement}
      >
        Кликнули counterA {counterA} раз
      </button>

      <button
        className={styles.btn}
        type="button"
        onClick={handleCounterBIncrement}
      >
        Кликнули counterB {counterB} раз
      </button>
    </>
  );
}

// **************************************************************************

// interface State {
//   counterA: number;
//   counterB: number;
// }

// export default class Counter extends Component<{}, State> {
//   state = {
//     counterA: 0,
//     counterB: 0,
//   };

//   handleCounterAIncrement = () => {
//     this.setState(({ counterA }) => ({ counterA: counterA + 1 }));
//   };

//   handleCounterBIncrement = () => {
//     this.setState(({ counterB }) => ({ counterB: counterB + 1 }));
//   };

//   componentDidMount() {
//     const { counterA, counterB } = this.state;
//     const totalClicks = counterA + counterB;

//     document.title = `Всего кликнули ${totalClicks} раз`;
//   }

//   componentDidUpdate(prevProps: State, prevState: State) {
//     const { counterA, counterB } = this.state;

//     if (prevState.counterA !== counterA || prevState.counterB !== counterB) {
//       const totalClicks = counterA + counterB;

//       document.title = `Всего кликнули ${totalClicks} раз`;
//     }
//   }

//   render() {
//     return (
//       <>
//         <button
//           className={styles.btn}
//           type="button"
//           onClick={this.handleCounterAIncrement}
//         >
//           Кликнули counterA {this.state.counterA} раз
//         </button>

//         <button
//           className={styles.btn}
//           type="button"
//           onClick={this.handleCounterBIncrement}
//         >
//           Кликнули counterB {this.state.counterB} раз
//         </button>
//       </>
//     );
//   }
// }
