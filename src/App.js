import Dice from "./Dice";
import Button from "./Button";

function App() {
    return (
        <div>
            <div>
                <Button>던지기</Button>
                <Button>처음부터</Button>
            </div>
            <Dice color="red" num={2}/>
        </div>
    );
}

// 다른데서 사용 가능하게 export
export default App;