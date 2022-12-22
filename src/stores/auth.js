import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { GoogleAuthProvider, signInWithPopup, 
onAuthStateChanged, signOut, signInAnonymously,
createUserWithEmailAndPassword, 
signInWithEmailAndPassword } 
from "firebase/auth";
import { auth } from '@/js/firebase'

export const useAuthStore = defineStore('authStore', {
  state: () => ({
    user: {} 
  }),

  actions: {

    init(){
      onAuthStateChanged(auth, (user) => {
        if (user) {

          this.user = {
            id : user.uid,
            email : user.email,
            photo : user.photoURL,
            name : user.displayName,
            creationTime : user.metadata.creationTime
          }
        } else {
          console.log('sign out')
        }
      });
    },

    registerNewUser (credentials) {
      createUserWithEmailAndPassword(auth, credentials.email, credentials.password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((err) => {
        console.log(err.message)
      });
    },
   
    signInEmailUser (credetials) {
      signInWithEmailAndPassword(auth, credentials.email, credentials.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
      })
      .catch((error) => {
        console.log(err.message)
      });
    },

    signOutUser (){
     signOut(auth).then(() => {
     }).catch((error) => {
     });
    },

    demo (){
      signInAnonymously(auth)
      .then(() => {
      })
      .catch((err) => {
       console.log(err.message)
      });
    },

    signInGoogle (){
      const provider = new GoogleAuthProvider();

      signInWithPopup(auth, provider)
        .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          const user = result.user;
          console.log(user)
        }).catch((err) => {
          console.log(err.message)
        });
    }
  }
})
