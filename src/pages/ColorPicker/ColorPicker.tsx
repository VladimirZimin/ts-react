import React, { useState, memo } from "react";
import styles from "./ColorPicker.module.css";

type Option = {
  label: string;
  color: string;
};

interface Props {
  options: Option[];
  initialOptionPos?: number;
}

export default memo(function ColorPicker({
  options,
  initialOptionPos = 5,
}: Props) {
  const [activeOptionIdx, setActiveOptionIdx] = useState(initialOptionPos - 1);

  const makeOptionClassName = (index: number) => {
    return index === activeOptionIdx ? styles.activeOption : styles.option;
  };

  const { label } = options[activeOptionIdx];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Color Picker</h2>
      <p>Выбран цвет: {label}</p>
      <div>
        {options.map(({ label, color }, index) => (
          <button
            key={label}
            aria-label={label}
            className={makeOptionClassName(index)}
            style={{ backgroundColor: color }}
            onClick={() => setActiveOptionIdx(index)}
          ></button>
        ))}
      </div>
    </div>
  );
});

// class OldColorPicker extends PureComponent {
//   state = {
//     activeOptionIdx: 0,
//   };

//   setActiveIdx = index => {
//     this.setState({ activeOptionIdx: index });
//   };

//   makeOptionClassName = index => {
//     return index === this.state.activeOptionIdx
//       ? styles.activeOption
//       : styles.option;
//   };

//   render() {
//     const { activeOptionIdx } = this.state;
//     const { options } = this.props;
//     const { label } = options[activeOptionIdx];

//     return (
//       <div className={styles.container}>
//         <h2 className={styles.title}>Color Picker</h2>
//         <p>Выбран цвет: {label}</p>
//         <div>
//           {options.map(({ label, color }, index) => (
//             <button
//               key={label}
//               aria-label={label}
//               className={this.makeOptionClassName(index)}
//               style={{ backgroundColor: color }}
//               onClick={() => this.setActiveIdx(index)}
//             ></button>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }
