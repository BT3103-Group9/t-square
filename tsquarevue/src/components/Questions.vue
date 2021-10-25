<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      
    </p>
    <h3>[Account Security] How do I delete my T Square account?</h3>
    <ul>
      Account deletion is permanent and irreversible. After successful deletion, you will not be able to login and view your account history. Please be informed that T Square reserves the right to reject future account creation requests from you.
      <br><br>
      You can proceed to delete your T Square account by following these steps:
      <br><br>
      1. Go to Profile Settings.
      <br><br>
      2. Tap on Request Account Deletion and Proceed.
      <br><br>
      3. Key in the verification code and tap Continue.
      <br><br>
      4. Enter your reason for account deletion, tick the Terms and Conditions checkbox, and tap on Submit. 
      <br><br>
      5. Tap on Confirm.
    </ul>

    <h3>[Account Security] How do I change/update my email account?</h3>
    <ul>
      You can change your email account by following these steps:
      <br><br>
      1. Go to Settings.
      <br><br>
      2. Click Profile.
      <br><br>
      3. Click "Change email".
      <br><br>
      4. Enter your password for verification.
      <br><br>
      5. Enter your new email account.
      <br><br>
      6. Tap on Continue to complete the process
    </ul>

    <h3>[My Account] Why did I not receive my verification email?</h3>
    <ul>
      If you do not receive the email, please check your spam and junk mail. In the event that no email can be found, you can request another verification email from your profile page setting or drop us an email at help@TSquare.com
    </ul>

    <h3>How do I contact the Support Team</h3>
    <ul>
      Solving problems is a Core Value here at T Square! We want all our users to get the help they need quickly and efficiently. Do drop us an email at help@TSquare.com and our customer service will get back to as soon as possible
    </ul>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    position: relative;
    top: 150px;
    text-align: center;
    color: white;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    background-color: grey;
    width: 100%;
    height: 200px;
}
ul {
  list-style-type: none;
  padding: 0;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  margin: auto;
  font-size: 14px;
  font-weight: bold;
  width: 50%;
  border: 3px solid black;
  padding: 20px;
  color: black;

}

</style>