import './App.css';
import {useState} from "react";
import {useSelector} from "react-redux";
import AuthPanel from "./components/AuthPanel/AuthPanel";
import Dashboard from "./components/Dashboard/Dashboard";
import TokenWindow from "./components/Dashboard/TokenWindow/TokenWindow";
import UsersList from "./components/Dashboard/UsersList/UsersList";

function App() {
    const status = useSelector(store => store.token)
    const [usersListVisible, setUsersListVisible] = useState(false)
    const [tokenVisible, setTokenVisible] = useState(false)
    return (
        <div className="App">
            {!usersListVisible ? null : <UsersList/>}
            {!tokenVisible ? null : <TokenWindow/>}
            {(!status) ? <AuthPanel/> : <Dashboard usersListVisible={usersListVisible} setTokenVisible={setTokenVisible} tokenVisible={tokenVisible} setUsersListVisible={setUsersListVisible}/>}

        </div>
    );
}

export default App;
