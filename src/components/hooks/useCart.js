import { useState } from "react";

const useCart = () => {
    const [selectedItem, setSelectedItem] = useState([]);
    function addToCart(item) {
        const isHave = selectedItem.find((selected) => selected.key === item.key);

        if (isHave) {
            alert('Item has been selected');
        } else {
            const newSelection = [...selectedItem, item];
            setSelectedItem(newSelection);
        }
    }
    return { addToCart, selectedItem };
};

export default useCart;