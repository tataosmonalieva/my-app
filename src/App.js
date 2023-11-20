import Card from "./components/Card";
import Text from "./components/Text"
import Price from "./components/Price";


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

                </div>
            </div>
        </div>

    )

}
export default App;