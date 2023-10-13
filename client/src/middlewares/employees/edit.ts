import { doc, setDoc } from "firebase/firestore"; 
import { db } from "../../config/firebase";
import { Employee } from "./add";

export const setEmployee = async (employee: any) => {
    await setDoc(doc(db, "employees", employee.id), {
...employee
      });
}