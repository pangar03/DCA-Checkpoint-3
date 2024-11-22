import firebaseConfig from "../firebaseConfig";
import { appState } from "../store";

let db: any;
let auth: any;
let storage: any;

export const getFirebaseInstance = async () => {
    if(!db){
        const { getFirestore } = await import("firebase/firestore");
        const { initializeApp } = await import('firebase/app');
		const { getAuth } = await import('firebase/auth');
		const { getStorage } = await import('firebase/storage');

        const app = initializeApp(firebaseConfig);
        db = getFirestore(app);
        auth = getAuth(app);
		storage = getStorage();
    }

    return { db, auth, storage };
};

export const addPost = async (event: any) => {
	try {
		const { db } = await getFirebaseInstance();
		const { collection, addDoc } = await import('firebase/firestore');

		const where = collection(db, 'events', event.uid);

		await addDoc(where, event);
		console.log('Se añadió con exito');
	} catch (error) {
		console.error('Error adding document', error);
	}
};

export const getEvents = async () => {
    try {
		const { db } = await getFirebaseInstance();
		const { collection, getDocs } = await import('firebase/firestore');

		const where = collection(db, 'events');
		const querySnapshot = await getDocs(where);
		const data: any[] = [];

		querySnapshot.forEach((doc: any) => {
			data.push(doc.data());
		});

		return data;
	} catch (error) {
		console.error('Error getting documents', error);
	}
};

export const addAttendee = async (uid: string, value: number) => {
    try {
		const { db } = await getFirebaseInstance();
		const { updateDoc, doc } = await import('firebase/firestore');

		const where = doc(db, 'posts', uid);

		await updateDoc(where, {
			attendees: value,
		});
		
		console.log('Se añadió con exito');
	} catch (error) {
		console.error('Error adding document', error);
	}
}