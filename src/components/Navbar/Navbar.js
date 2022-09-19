import styles from './Navbar.module.css'

import ChatLogoImg from '../../assets/chat-logo.png'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
function Navbar(){
    return(
        <div>
            <div className={styles.container}>
                 <div className={styles.innerContainer} >
  
                    <div className={styles.left} >
                        <img src={ChatLogoImg}  className={styles.logo} ></img>
                        <div  className={styles.header} >ChatBOT</div>
                    </div>
                    <div className={styles.right} >
                       <div   className={styles.icon} ><SearchIcon   /></div>
                      <div className={styles.icon} > <NotificationsNoneIcon  />
                      </div>
                     
                    </div>
                 </div>
            </div>

        </div>
    )
}

export default Navbar;