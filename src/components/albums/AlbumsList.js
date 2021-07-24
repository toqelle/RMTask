import AlbumsItem from './AlbumsItem.js';
import styles from './AlbumsList.module.css';

function AlbumsList(props){

    function changeViewStyle(){
        if(document.querySelector('#changeViewStyleBtn').checked){
            document.querySelector('#list').classList.add('list--even');
            
        }
        else{
            document.querySelector('#list').classList.remove('list--even');
        }
    }

    return (
        <>
        <input id="changeViewStyleBtn" type="checkbox" onClick={changeViewStyle}></input>
        <ul id="list" className={styles.list}>
            {props.items.slice(0, 10).map((item) => (
                <AlbumsItem
                key={item.id}
                id={item.id}
                title={item.title}
                />
            ))}
        </ul>
        </>
    );
}

export default AlbumsList;