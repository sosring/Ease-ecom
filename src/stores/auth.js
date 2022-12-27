import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { GoogleAuthProvider, signInWithPopup, 
onAuthStateChanged, signOut, signInAnonymously,
createUserWithEmailAndPassword, updateProfile,
signInWithEmailAndPassword, deleteUser, 
sendEmailVerification, sendPasswordResetEmail } 
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
        } else {
          this.clearUser()
        }
      });
    },


    registerNewUser (credentials) {

      createUserWithEmailAndPassword(auth, credentials.email, credentials.password)
      .then((userCredential) => {

         const user = userCredential.user;

         this.setName(credentials.firstname, credentials.lastname)
       })
       .catch((err) => {
         console.log(err)
      });
    },
   
    signInEmailUser (credentials) {

      signInWithEmailAndPassword(auth, credentials.email, credentials.password)
      .then((userCredential) => {
      })
      .catch((err) => {
      });
    },

    demoUser (){

      signInAnonymously(auth)
      .then(() => {
       this.setName()
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
      })
       .catch((err) => {
         alert(err.message)
      });
    },

    signOutUser (){

     signOut(auth).then(() => {
      console.log('user sign out')
     }).catch((err) => {
       console.log(err.meassage)
     });
    },

    deactivateUser () {

      deleteUser(auth.currentUser)
      .then(() => {
      })
      .catch((err) => {
        alert(err.message)
      });
    },

    // Updating user info 

    setName (firstname = 'Unknown', lastname = '') {
      const img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6xSz0eMW7GmpKukczOHvPWWGDqaBCqWA-Mw&usqp=CAU'
      const firstName = firstname.split(' ').join('')
      const lastName = lastname.split(' ').join('')

      updateProfile(auth.currentUser, {
        displayName: `${firstName} ${lastName}`,
        photoURL: img 
      })

      this.user.name = `${firstName} ${lastName}`;
      this.user.img = img
    },

    clearUser () {
      this.user = {}
    },

    updateUserProfile (credentials) {

      const { firstname, lastname, email, confirmation } = credentials 

      updateProfile(auth.currentUser, {
        displayName: `${firstname} ${lastname}`,
        email: email
      })

      this.user.name = `${firstname} ${lastname}`
      this.user.email = email
    },

}})
