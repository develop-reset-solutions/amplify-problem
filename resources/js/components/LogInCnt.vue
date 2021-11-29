<template>
  <div class="cha">
    <a id="fb-login"
       v-on:click='signInFacebook()'
       > LOGIN WITH FACEBOOK
    </a>
    <br>
    <a id="gl-login"
       v-on:click='signInGoogle()'
       > LOGIN WITH GOOGLE
    </a>
  </div>
</template>

<script>
import Amplify, { Auth, Hub } from 'aws-amplify';
import awsconfig from '../assets/aws-exports';
import _ from 'lodash'

Amplify.configure( awsconfig );

export default {
  mounted(){

  },
  methods:{
    async signInGoogle(){

      const user = await Auth.federatedSignIn({ provider: 'Google' }).
      then( cred => {
        let user = Auth.currentAuthenticatedUser();

        console.log( user );
        // hay que poder conseguir este usuario
      });

      localStorage.setItem('user',JSON.stringify(user));
    },

    signInFacebook() {
      Auth.federatedSignIn({ provider: 'Facebook' });
    },

  }
}
</script>
