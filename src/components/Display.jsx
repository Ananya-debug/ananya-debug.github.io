import styles from "./Display.module.css";

const Display = ({dval}) => {
     return <input className = {styles.display} type="text" value={dval} readOnly/>
}

export default Display;