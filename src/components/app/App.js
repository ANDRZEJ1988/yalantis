
import './App.css';
import {Employees} from "../employees/Employees";
import {Birthday} from "../birthday/Birthday";

export const App = () => {
    return (
        <div className='app'>
            <Employees/>
            <Birthday/>
        </div>

    );
}

