import React from 'react';
import {Header} from "../header/Header";
import './Birthday.scss';
import {useSelector} from "react-redux";
import {groupSelector} from "../../store/selectors";
import {string} from "../../constants/constants";

export const Birthday = () => {
    const group = useSelector(groupSelector);
    return (
        <div className='birthday'>
            <Header title='Employees birthday'/>
            <div>{
                group.map(value => {
                    return (
                        <div key={value.month}>
                            <h3>{value.month}</h3>
                            <div>{
                                value.group.map(employee => {
                                    const date = new Date(employee.dob).toLocaleString("en", string);
                                    const withoutComa = date.replace(',', '');
                                    const array = withoutComa.split(' ');
                                    const [month, day, year] = array;
                                    return (
                                        <div key={employee.id}>
                                            <li>{`${employee.lastName} ${employee.firstName} - ${day} ${month}, ${year} year`}</li>
                                        </div>
                                    )
                                })
                            }</div>
                        </div>
                    )
                })
            }</div>
        </div>
    );
}
