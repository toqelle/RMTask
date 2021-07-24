import { useContext } from 'react';

import './AlbumsItem.module.css';

import AlbumsContext from '../../store/albums-context.js';

function AlbumsItem(props){

    const albumsCtx = useContext(AlbumsContext);
    const itemIsAdded = albumsCtx.itemIsAdded(props.id);

    function toggleFavoriteStatusHandler(){
        if(itemIsAdded){
            albumsCtx.removeItem(props.id);
        }else{
            albumsCtx.addItem({
                id: props.id,
                title: props.title,
            })
        }
    }

    return (
        <div className='list__item' onClick={toggleFavoriteStatusHandler}>
            {itemIsAdded ? props.title : props.id}
        </div>
    );
}
export default AlbumsItem;