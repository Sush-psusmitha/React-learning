import './Header.css'
import styles from './Header.module.css';
function Header(){
    const h1 = {
        color: 'red', 
        padding: '10px', 
        margin: '10px', 
        backgroundColor:'lightblue',
    }
   return ( 
       <>
        <h1 style={h1}>Hello Stylings How are You?</h1>
        <h2 className={styles.bigBlue}>Using Header.module.css stylings</h2>
        <p>Add a little stylings here</p>
       </>
  )
}

export default Header