import {GET_BIRTHDAY, GET_EMPLOYEES} from "./actions-type";

export const getEmployeesAction=(employees)=>{
return (
    {
        type: GET_EMPLOYEES,
        payload: employees
    }
)
};
export const getBirthdayAction=(list)=>{
    return(
        {
            type: GET_BIRTHDAY,
            payload: list
        }
    )
};