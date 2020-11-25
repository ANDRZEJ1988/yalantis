import {createSelector} from "reselect";
import {string} from "../constants/constants";

export const employeesSelector = state => state.employees;
export const alphabetSelector = state => state.alphabet;
export const sortedEmployeesSelector = createSelector(
    employeesSelector,
    (employees) => (employees.sort((a, b) => a.lastName > b.lastName ? 1 : -1))
);
export const letterArraySelector = createSelector(
    alphabetSelector,
    sortedEmployeesSelector,
    (letters, employees) => (
        letters.map(letter => {
            const letterArray = [];
            employees.map(value => {
                if (value.lastName.startsWith(letter)) {
                    letterArray.push(value);
                }
                return letterArray
            });
            return ({letter, letterArray})
        })
    )
);
export const birthdaySelector = state => state.birthday;
export const keyMonthSelector = createSelector(
    birthdaySelector,
    (list) => (
        list.map(value => {
            const date = new Date(value.dob).toLocaleString("en", string);
            const str = date.split(' ');
            const [month] = str;
            return ({...value, month: month})
        })
    )
);
export const groupSelector = createSelector(
    keyMonthSelector,
    (employees) => (
        employees.reduce((previous, current) => {
                const finded = previous.find(value => value.month === current.month);
                if (finded) {
                    finded.group.push({...current});
                    return previous
                } else {
                    previous.push({
                        month: current.month,
                        group: [{...current}]
                    });
                    return previous
                }
            }, []
        )
    )
);
