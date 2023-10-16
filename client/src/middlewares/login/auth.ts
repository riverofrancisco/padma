import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const isAuth = async (email: string, password: string) => {
    const auth = getAuth();

    try{
        await signInWithEmailAndPassword(auth, email, password)
    } catch(error){
        console.log({Error: error})
    }
}

