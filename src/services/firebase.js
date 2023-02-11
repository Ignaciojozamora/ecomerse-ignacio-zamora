
import { initializeApp } from "firebase/app";
import { doc, getDoc, getFirestore, collection, getDocs, where, query, addDoc} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAdP7nJ8OFQoH3xR1JgRMZ76ytvV3WZHIw",
  authDomain: "ignaciozamoramyecomersech.firebaseapp.com",
  projectId: "ignaciozamoramyecomersech",
  storageBucket: "ignaciozamoramyecomersech.appspot.com",
  messagingSenderId: "441003812928",
  appId: "1:441003812928:web:eea1c610cb0fdc8f0957a5"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app) 


/* obtener un solo producto para ItemDetail */
export async function getSingleItem(itemid){
    const docRef = doc(db, "productos", itemid);
    const snapshot = await getDoc(docRef);
    return  {...snapshot.data(), id: snapshot.id};
}

/* obtener los productos para ItemList */
export async function getItems(){
    const productsCollectionRef = collection(db, "productos" );
    const querySnapshot = await getDocs(productsCollectionRef)
    const dataDocs = querySnapshot.docs.map((doc) =>({ 
        ...doc.data(), 
        id:doc.id,
        
    }));
    return dataDocs;
}
/* obtener los productos por categoria */
export async function getItemsByCategory(categoryid){
    const productsCollectionRef = collection(db, "productos" );
    const q = query(productsCollectionRef, where("category", "==", categoryid))
    const querySnapshot = await getDocs(q);
    const dataDocs = querySnapshot.docs.map((doc) =>({ 
        ...doc.data(), 
        id:doc.id,
        
    }));
    return dataDocs;
}


export async function createBuyOrder(order) {
    const ordersCollection = collection(db, "orders");
  
    const orderDoc = await addDoc(ordersCollection, order);
    return orderDoc.id;
    
    
  }
  