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

        // If success, you will get the AWS credentials
        localStorage.setItem('cred', JSON.stringify( cred ) );

        let user = Auth.currentAuthenticatedUser();

        console.log( user );
      });

      localStorage.setItem('user',JSON.stringify(user));
    },

    signInFacebook() {
      Auth.federatedSignIn({ provider: 'Facebook' });
    },

  }
}
</script>
