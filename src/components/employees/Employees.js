import React, {useCallback, useEffect} from 'react';
import {Header} from "../header/Header";
import './Employees.scss';
import {useDispatch, useSelector} from "react-redux";
import {getBirthdayAction, getEmployeesAction} from "../../actions/actions";
import {birthdaySelector, letterArraySelector} from "../../store/selectors";


export const Employees = () => {
    const dispatch = useDispatch();
    const birthday = useSelector(birthdaySelector);

    const list = useSelector(letterArraySelector);

    const getEmployees = useCallback(async () => {
        try {
            const request = await fetch('https://yalantis-react-school-api.yalantis.com/api/task0/users');
            const answer = await request.json();
            dispatch(getEmployeesAction(answer));
        } catch (e) {
            console.log(e);
        }
    }, [dispatch]);

    const select = (event, employee) => {
        const copyBirthday = birthday.slice();
        // console.log(employee);
        // console.log(event.target.checked);
        // event.target.checked={true};
        if (event.target.checked === true) {
            copyBirthday.push(employee);
            dispatch(getBirthdayAction(copyBirthday));

        } else {
            const unchecked = copyBirthday.filter(value => value.id !== employee.id);
            // console.log(unchecked);
            dispatch(getBirthdayAction(unchecked));
        }
    };

    useEffect(() => {
        getEmployees();
    }, [getEmployees]);

    return (
        <div className='employees'>
            <Header title='Employees'/>
            <div>
                {list.map(value => {
                    return (<div key={value.letter}>{
                        <div>
                            <h3>{value.letter}</h3>
                            {value.letterArray.length === 0 ? <h2>-</h2> :
                                <div>{
                                    value.letterArray.map(employee => {
                                        return (
                                            <div key={employee.id}>
                                                <div>{`${employee.lastName}  ${employee.firstName}`}</div>
                                                <input type="checkbox" onInput={(event) => select(event, employee)}/>
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
