import {GET_EMPLOYEES} from "./actions-type";

export const getEmployeesAction=(employees)=>{
return (
    {
        type: GET_EMPLOYEES,
        payload: employees
    }
)
};