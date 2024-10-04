import app from '.././firebaseConfig';
import { getDatabase, push, get, ref } from 'firebase/database';

// replace seet wiht push
export async function setData(destination, data){

    const db = getDatabase(app);
    const projectRef = ref(db,destination);
    push(projectRef, data)
    .then(() => {
        return true;
    })
    .catch(error => {
        console.warn('Failed to set data! :: ', error);
        return false;
    })
}

export async function getData(destination){
    const db = getDatabase(app);
    const projectRef = ref(db, destination);
    const projectsSnapshot = await get(projectRef);
    if(projectsSnapshot.exists()){
        const data = Array.from(Object.values(projectsSnapshot.val()));
        return data;
    } else {
        console.warn("Failed to get data!");
    }
}