import Card from "./components/Card";
import Text from "./components/Text"
import Price from "./components/Price";
import Bag from "./components/Assets/cart-icon.webp"


const App = ()=>{
    return (
        <div className={'container'}>
            <div className="row">
                <div className="col-6">
                    <div className="box">
                        <Card/>

                    </div>
                </div>
                <div className="col-6 innerbox">
                    <Text/>
                    <Price/>
                    <div class="BagIcon">
                        <img src={Bag} alt=""/>
                    </div>


                </div>
            </div>
        </div>

    )

}
export default App;