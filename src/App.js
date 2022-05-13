import {Route, Redirect, Switch} from "react-router-dom";
import LoginPage from "./components/LoginPage/LoginPage";
import GamePage from "./components/GamePage/GamePage";
import {useEffect, useState} from "react";
import ResultPage from "./components/ResultPage/ResultPage";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
    const [result, setResult] = useState(null);
    const [nickName, setNickName] = useState(null)

    useEffect(()=>{

        const name = localStorage.getItem('nickname');
        setNickName(name);
    },[])



    const calculateResult = (correct, wrong, unMarked) =>{
        const score = (correct*2)-(wrong+unMarked);
        setResult(score);
    }


    return (
        <div className="App">
            <Switch>

                <Route path='/login' render={(props) =>
                    <LoginPage {...props} setNickName={setNickName} />}/>

                <ProtectedRoute
                    path='/play'
                    component={GamePage}
                    nickName={nickName}
                    calculateResult={calculateResult}
                    auth={localStorage.getItem('nickname')}
                    redirect='/login'
                />
                <ProtectedRoute
                    path='/results'
                    component={ResultPage}
                    nickName={nickName}
                    result ={result}
                    auth={result}
                    redirect='/play'
                />
                <Redirect from='/' exact to='/login'/>
            </Switch>
        </div>
    );
}

export default App;
