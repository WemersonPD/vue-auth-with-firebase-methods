<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <b-button type="button" variant="primary" @click="logoutFormAllSocialMedias()">Logout</b-button>
      </div>
      <div class="col-12 d-flex justify-content-center mt-5">
        <b-form @submit="onSubmit"  v-if="show">
          <b-form-group
            id="input-group-1"
            label="Email address:"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              v-model="form.email"
              type="email"
              placeholder="Enter email"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Your Password:" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.name"
              placeholder="Enter password"
              required
              type="password"
            ></b-form-input>
          </b-form-group>

          <div>
            <b-button class="mr-2" type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
          </div>

          <div class="mt-3">
            <b-button type="button" variant="primary" @click="signInWithGooglePopup()">Google Popup</b-button>
            <b-button 
              class="ml-2"
              type="button"
              variant="primary"
              @click="signInWithGoogleRedirect()"
            >
            Google Redirect
            </b-button>
          </div>

        </b-form>

      </div>
     
    </div>
  </div>
</template>

<script>
  // import * as firebase from '../plugins/firebase'
  import  { 
    getAuth, 
    
    GoogleAuthProvider,
    signInWithPopup,
    signInWithRedirect,
    /*getRedirectResult,*/
    
    FacebookAuthProvider,
    
    signOut,

  } from  'firebase/auth'

  export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          food: null,
          checked: []
        },
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        
      },
      firebaseConfigs() {
        // Google
        const provider = new GoogleAuthProvider()
        // Link from google scopes: https://developers.google.com/identity/protocols/oauth2/scopes
        // provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        const auth = getAuth();

        // Facebook
        const facebookProvider = new FacebookAuthProvider();
        // Link from facebook scopes: https://developers.facebook.com/docs/permissions/reference
        facebookProvider.addScope('user_birthday');
        
        return {
          provider,
          auth,
          facebookProvider
        }
      },
      // Should be async/await rather than .then/.catch()
      signInWithGooglePopup() {
        const { auth, provider } = this.firebaseConfigs();
        signInWithPopup(auth, provider).then(
          (success) => { console.log("success", success) },
          (error) => { console.log("Error", error) }
        )
      },
      // Example with async/await
      async signInWithGoogleRedirect() {
        const { auth, provider } = this.firebaseConfigs();
        try {
          await signInWithRedirect(auth, provider);
        } catch(error) {
          console.log("Error in sign-in with redirect");
        }

        // let result;
        // try {
        //   result = await getRedirectResult(auth);
        // } catch(error) {
        //   console.log("Error in get redirect result", error);
        // }
        // const credentials = GoogleAuthProvider.credentialFromResult(result);
      },
      logoutFormAllSocialMedias() {
        const { auth } = this.firebaseConfigs();
        signOut(auth)
          .then(() => console.log("Logout success!!"))
          .catch((error) => console.log("Error in logout", error))
      },
      siginInWithFacebook() {

      }

    }
  }
</script>
