"use server";

import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";

export async function saveUser(userData: { name: string; phone: string; }) {
  try {
    const docRef = await addDoc(collection(db, "users"), userData);
    console.log("Document written with ID: ", docRef.id);
    return { success: true, id: docRef.id };
  } catch (e) {
    console.error("Error adding document: ", e);
    return { success: false, error: (e as Error).message };
  }
}
