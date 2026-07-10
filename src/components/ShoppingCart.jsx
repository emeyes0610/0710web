import { useState } from 'react'; //useStateを使うためにインポート
import "./ShoppingCart.css";

const ShoppingCart = () => {
    const [count, setCount] = useState(0);
    const handleClick__minus = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };
    const handleClick__cart = () => {
        alert(count+"個の商品をカートに入れました");
    };
    return(
        <div id = "shopping">
            <h1>ショッピングカート</h1>
            <div id = "inside">
                <div id ="choose">
                    <p>選択個数：</p>
                    <h2>{count}</h2>
                </div>
                <div id = "button">
                    <button id = "plus" onClick={() => setCount(count + 1)}>個数を増やす</button>
                    <button onClick={handleClick__minus}>個数を減らす</button>
                </div>
                <button id = "cart" onClick={handleClick__cart}>カートに入れる</button>
            </div>
        </div>
    )
};

export default ShoppingCart;
