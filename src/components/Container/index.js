import styles from "./Container.module.css";

function Container({children}) {
return(
<selection className={styles.container}>
    {children}
</selection>

);

}

export default Container;

