import React, {useCallback, useEffect} from 'react';
import {Header} from "../header/Header";
import './Employees.scss';
import {useDispatch, useSelector} from "react-redux";
import {getEmployeesAction} from "../../actions/actions";
import {alphabetSelector, employeesSelector, letterArraySelector} from "../../store/selectors";


export const Employees = () => {
    const dispatch = useDispatch();
    // const employees = useSelector(employeesSelector);
    const alphabet = useSelector(alphabetSelector);
    const list = useSelector(letterArraySelector);
    // console.log(list);
    const getEmployees = useCallback(async () => {
        try {
            const request = await fetch('https://yalantis-react-school-api.yalantis.com/api/task0/users');
            const answer = await request.json();
            dispatch(getEmployeesAction(answer));
        } catch (e) {
            console.log(e);
        }
    }, [dispatch]);
    useEffect(() => {
        getEmployees();
    }, [getEmployees]);

    return (
        <div className='employees'>
            <Header title='Employees'/>
            <div>
                {list.map((value, index) => {
                    return (<div key={index}>{
                        <div>
                            <h3>{value.letter}</h3>
                            {value.letterArray.length === 0 ? <h2>-</h2> :
                                <div>{
                                    value.letterArray.map((employee, i) => {
                                        return (
                                            <div key={i + 100}>
                                                <div>{`${employee.lastName}  ${employee.firstName}`}</div>
                                                <input type="checkbox"/>
                                            </div>
                                        )
                                    })
                                }</div>
                            }
                        </div>

                    }</div>)
                })}
            </div>
        </div>
    );
}
