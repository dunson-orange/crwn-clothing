import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firestore = firebase.firestore();

firestore
  .collection("users")
  .doc("7YZgzmF9pJnihOTWzl1f")
  .collection("cartItems")
  .doc("n5u1crHe4qLRdz9wFPnm");
firestore.doc("/users/7YZgzmF9pJnihOTWzl1f/cartItems/n5u1crHe4qLRdz9wFPnm");
firestore.collection("/users/7YZgzmF9pJnihOTWzl1f/cartItems");
