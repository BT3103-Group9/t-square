<template>
<div class="hello">
    <h1>Frequently Asked Questions</h1>
</div>

<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        [Account Security] How do I delete my T Square account?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
          Account deletion is permanent and irreversible. After successful deletion, you will not be able to login and view your account history. Please be informed that T Square reserves the right to reject future account creation requests from you.<br><br>
           You can proceed to delete your T Square account by following these steps:<br><br>
           1. Go to Profile Settings.<br><br>
           2. Tap on Request Account Deletion and Proceed.<br><br>
           3. Key in the verification code and tap Continue.<br><br>
           4. Enter your reason for account deletion, tick the Terms and Conditions checkbox, and tap on Submit. <br><br>
           5. Tap on Confirm.<br>
      </div>
    </div>
  </div>
  
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        [Account Security] How do I change/update my email account?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
          You can change your email account by following these steps:<br><br>
                1. Go to Settings.<br><br>
                2. Click Profile.<br><br>
                3. Click "Change email".<br><br>
                4. Enter your password for verification.<br><br>
                5. Enter your new email account.<br><br>
                6. Tap on Continue to complete the process<br>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        [My Account] Why did I not receive my verification email?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
          If you do not receive the email, please check your spam and junk mail. <br><br>
          In the event that no email can be found, you can request another verification email from your profile page setting or drop us an email at <b>help@TSquare.com</b>
      </div>
    </div>
  </div>

    <div class="accordion-item">
    <h2 class="accordion-header" id="headingFour">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
        How do I contact the Support Team?
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
      <div class="accordion-body">
          Solving problems is a Core Value here at T Square! We want all our users to get the help they need quickly and efficiently. 
          <br><br>
          Do drop us an email at <b>help@TSquare.com</b> and our customer service will get back to as soon as possible
      </div>
    </div>
  </div>

</div>


</template>

<script>


export default {


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
    position: relative;
    top: 100px;
}

.accordion-header {
    text-align: center;

}


</style>
