/*let currentStep = 0;
const form = document.getElementById('myForm');
const steps = document.querySelectorAll('.step');

showStep(currentStep);

function showStep(stepIndex) {
    steps[currentStep].style.display = 'none';
    steps[stepIndex].style.display = 'block';

    if (stepIndex === 0) {
        document.querySelector('.prev').style.display = 'none';
    } else {
        document.querySelector('.prev').style.display = 'inline-block';
    }

    if (stepIndex === steps.length - 1) {
        document.querySelector('.next').style.display = 'none';
        document.querySelector('.submit').style.display = 'inline-block';
    } else {
        document.querySelector('.next').style.display = 'inline-block';
        document.querySelector('.submit').style.display = 'none';
    }

    currentStep = stepIndex;
}

document.querySelector('.next').addEventListener('click', function() {
    if (currentStep < steps.length - 1) {
        showStep(currentStep + 1);
    }
});

document.querySelector('.prev').addEventListener('click', function() {
    if (currentStep > 0) {
        showStep(currentStep - 1);
    }
});

document.querySelector('.submit').addEventListener('click', function() {
    alert('Form submitted!');
    form.reset();
    showStep(0);
});
*/
function show2nd() {
    document.getElementById("drop").innerHTML = `
    <div class="nd">
    <h1>Select your plan</h1>
   <p>
    You have the option of monthly or yearly billing.
  </p>
   <div class="plan">
    <button>
    <img src="./assets/images/icon-arcade.svg" alt="icon-arcade"><br>
      <b>Arcade</b><br>
      <small>$9/mo</small>
     </button>
   
    <button>
    <img src="./assets/images/icon-advanced.svg" alt="icon-advanced"><br>
      <b>Advanced</b><br>
     <small>$12/mo</small>
    </button>
   
    <button>
    <img src="./assets/images/icon-pro.svg" alt="icon-pro"><br>
      <b>Pro</b><br>
      <small>$15/mo</small>
    </button>
   
   </div>
   <div class="toogle">
    <p>Monthly</p>
   <p>Yearly</p>
   </div>
 
   <a href="" onclick="goBack()">Go Back</a>
   <button class="button" onclick="show3rd()">Next Step</button>
   </div>

    `
}
function show3rd() {
    document.getElementById("drop").innerHTML = `
    <div class="rd">
    <h1>Pick add-ons</h1>
  <p> Add-ons help enhance your gaming experience.</p>
 
   <div class="checkbox">
   <button>
    <input type="checkbox" name="checkbox" id="">
   <p class="p"> Online service <br>
    <small> Access to multiplayer games</small>
   </p>
   <p class="t">+$1/mo</p>
  </button>
  <button>
    <input type="checkbox" name="checkbox" id="">
   <p class="p"> Larger storage <br>
    <small> Extra 1TB of cloud save</small>
   </p>
   <p class="t">+$2/mo</p>
  </button>

  <button>
    <input type="checkbox" name="checkbox" id="">
   <p class="p"> Customizable Profile <br>
    <small> Custom theme on your profile</small>
   </p>
   <p class="t">+$2/mo</p>
  </button>
   </div>
   <a href="" onclick="goBack()">GO Back</a>
   <button class="button" onclick="show4th()">Next Step</button>
   </div>
    `
}
function show4th() {
    document.getElementById("drop").innerHTML = `
    <div class="last-step">
    <h1>Finishing up</h1>
    <p>Double-check everything looks OK before confirming.</p>
    <!-- Dynamically add subscription and add-on selections here -->
  
   <p> Total (per month/year)</p>
  
    <a href="#">Go Back</a>
    <button class="button" onclick="show5th()">Confirm</button>
  
  </div>
    `
}
function show5th() {
    document.getElementById("drop").innerHTML = `
    <div class="mssg">
    <img src="./assets/images/icon-thank-you.svg" alt="icon-thank-you">
    <h2>
      Thank you!
    </h2>
     <p>Thanks for confirming your subscription! We hope you have fun 
      using our platform. If you ever need support, please feel free 
      to email us at support@loremgaming.com.</p>
   
   </div>
    `
}