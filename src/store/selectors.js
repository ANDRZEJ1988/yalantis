import {createSelector} from "reselect";

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
            });
            // return ([letter, letterAray])
            return ({letter, letterArray})
        })
    )
);
