import styles from './Layout.module.css';

function Layout(props){
    return(
        <main className={styles.main}>
                {props.children}
        </main>
    );
}

export default Layout;