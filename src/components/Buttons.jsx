import styles from "./Buttons.module.css";

function Buttons(props){
     return <div className={styles.container}>
          {props.btn_name.map((item)=>(
               <button className={styles.btn} onClick={()=>props.onBtnClick(item)}>{item}</button>
          ))}
     
     </div>
}

export default Buttons;

