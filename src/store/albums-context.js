import { createContext, useState } from "react";

const AlbumsContext = createContext({
    items: [],
    totalItems: 0,
    addItem: (addedItems) => {},
    removeItem: (itemId) => {},
    itemIsAdded: (itemId) => {}
});

export function AlbumsContextProvider(props){
    const [addedItems, setAddedItems] = useState([]);

    function addItemHandler(addedItems){
        setAddedItems((prevAddedItems)=> {
            return prevAddedItems.concat(addedItems);
        });
    }

    function removeItemHandler(itemId){
        setAddedItems(prevAddedItems=>{
            return prevAddedItems.filter(item => item.id !== itemId);
        });
    }

    function itemIsAddedHandler(itemId){
        return addedItems.some(item => item.id === itemId);
    }

    const context = {
        added: addedItems,
        totalItems: addedItems.length,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
        itemIsAdded: itemIsAddedHandler
    };

    return (
    <AlbumsContext.Provider value={context}>
        {props.children}
    </AlbumsContext.Provider>
    );
}

export default AlbumsContext;