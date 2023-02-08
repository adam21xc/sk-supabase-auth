<script>
let email

// const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
//   redirectTo: 'https://example.com/update-password',
// })


</script>


<main>
	<h1>Reset Password</h1>
	<form action="?/login" method="POST" class="auth-form">
		<p>Enter your email address and we will send you instructions to reset your password</p>
		<label for=""> Email Address </label>
		<input type="email" name="email" bind:value={email} />
		<a href="/login"><button type="submit" class="btn btn-primary" >Continue</button></a>
	</form>  

	
	<!-- <a href="/password_reset" class="btn btn-primary"><h3> Forgot Password?</h3></a> -->
</main>