import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { GoogleAuthProvider, signInWithPopup, 
onAuthStateChanged, signOut, signInAnonymously,
createUserWithEmailAndPassword, updateProfile,
signInWithEmailAndPassword, deleteUser  } 
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
            img : user.photoURL,
            name : user.displayName,
            isAnonymous: user.isAnonymous,  
            emailVerified: user.emailVerified, 
            creationTime : user.metadata.creationTime
          }

          console.log(this.user)
        } else {
          console.log('user sign out')
          this.clearUser()
        }
      });
    },

    registerNewUser (credentials) {
      createUserWithEmailAndPassword(auth, credentials.email, credentials.password)
      .then((userCredential) => {
        const user = userCredential.user;

        this.setNameImg(credentials.fullName)
      })
      .catch((err) => {
        alert('Already used email please sign in instead.')
      });
    },
   
    signInEmailUser (credentials) {
      signInWithEmailAndPassword(auth, credentials.email, credentials.password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        console.log(err.message)
      });
    },

    demoUser (){
      signInAnonymously(auth)
      .then(() => {
       this.setNameImg('Unknown')
      })
      .catch((err) => {
       alert(err.message)
      });
    },

    signInGoogle () {
      const provider = new GoogleAuthProvider();

      signInWithPopup(auth, provider)
        .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          const user = result.user;
        }).catch((err) => {
          console.log(err.message)
        });
    },

    signOutUser (){
     signOut(auth).then(() => {
     }).catch((error) => {
     });
    },

    DeactivateUser () {
      const user = auth.currentUser;

      deleteUser(user)
      .then(() => {
      }).catch((error) => {
        alert('unable to delete user!')
      });
    },

    // Updating user info 

    setNameImg (name) {
      const img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6xSz0eMW7GmpKukczOHvPWWGDqaBCqWA-Mw&usqp=CAU'

      updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: img 
      })

      this.user.name = name;
      this.user.img = img
    },

    clearUser () {
      this.user = {}
    }
  }
})
