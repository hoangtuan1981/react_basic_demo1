import { act } from "@testing-library/react";
import { strictEqual } from "assert";

const innitState = {
    students :  [
        {id: 1, name: "tuan" },
        {id: 2, name: "Bo" }
    ]
}

/* implement to get data from api. */
const rootReducer = (state = innitState, action) => {

    switch(action.type) {
        case "DELETE_STUDENT":
            //students = students.map()
            console.log("call mapDispatchToProps");
            let students = state.students;
            students = students.filter(item => item.id != action.payload.id);
            return {
                ...state, students
            };
          break;
        // case y:
        //   // code block
        //   break;
        default:
            return state;
      } 
}

export default rootReducer;