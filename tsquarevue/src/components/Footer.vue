<template>
<footer class="bg-dark text-light text-center text-md-start" id="footer">
	<div class="container"> 
		<div class="row p-4" style="display: inline-flex">
			<!-- First Column -->
			<div class="col-lg-3 col-md-12 mb-4 mb-md-0 ">
				<h4 class="headers">ABOUT</h4>
				<p style="font-size: 12px">T Square is a web-based application that
				aims to provide opportunities on skills that
				you have always wanted to pick up.</p>
			
				<p style="font-size: 12px">It is a centralised platform to
				connect leaners and tutors.</p> 
			</div>

			<div class="col-lg-1 col-md-12 mb-4 mb-md-0 ">
			</div>


			<!-- Second Column -->
			<div class="col-lg-3 col-md-6 mb-4 mb-md-0">
				<h4 class="headers">CUSTOMER SERVICE</h4>
				<p style="font-size: 15px; text-align:left;"><router-link class="nav-link text-white pl-0" to="/faq" v-on:click.native="scrollToTop()">FAQ</router-link></p> 
				<br>
				<p style="font-size: 12px">
					<b>Need Help:</b> <br>
					<a class="white" href="mailto:contact@tsquare.com.sg">contact@tsquare.com.sg</a>
				</p>
			</div>

			<div class="col-lg-1 col-md-12 mb-4 mb-md-0 ">
			</div>

			<!-- Third Column -->
			<div class="col-lg-3 col-md-6 mb-4 mb-md-0">
				<h4 class="headers">NEWSLETTER</h4>
				<p style="font-size: 12px">Subscribe to know the latest trending courses!</p>
				<div class="input-group mb-3">
					<div class="input-group-prepend">
						<span class="input-group-text" id="basic-addon1">
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/></svg>
						</span>
					</div>
					<input type="text" class="form-control"  style="font-size: 12px" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1">
				</div>
		
				<!-- Button trigger modal -->
				<button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal"  style="font-size: 12px; float: left;">
				Subscribe
				</button> <br><br>

				<!-- Modal -->
				<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
					<div class="modal-dialog">
						<div class="modal-content">
							<div class="modal-header">
								<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
							</div>
							<div class="modal-body"> 
								You have successfully subscribed to our newsletter!
							</div>
						</div>
					</div>
				</div>

				<a href="https://www.instagram.com/t_square__/" target="_blank" >
					<svg style="float:left;" id="igLogo" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
				</a>
			</div>
			<div class="col-lg-1 col-md-12 mb-4 mb-md-0 ">
			</div>
		</div>
	</div>
</footer>

</template>

<script>
export default {
	methods: { 
           scrollToTop() {
                window.scrollTo(0,0);
           }
        }
}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css?family=Raleway:400,500,600,700,800,900');
/* #footer {
	position: absolute;
	bottom:0;
	left:0;
	width:100%;
	height:300px;
} */
.container {
	font-family: 'Raleway', sans-serif
}

.headers {
	font-weight: 500
}

#igLogo {
    filter: invert(98%) sepia(100%) saturate(0%) hue-rotate(315deg) brightness(102%) contrast(103%);
}
a.white{
  color:white;
}

h4, a, p {
	text-align: left;
}

</style>

