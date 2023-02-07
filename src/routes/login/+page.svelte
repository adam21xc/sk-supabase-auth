<script lang="ts">
</script>

<main>
	<h1>Login</h1>
	<form action="?/login" method="POST" class="auth-form">
		<label for=""> Email </label>
		<input type="text" name="email" />
		<label for=""> Password </label>
		<input type="password" name="password" />
		<button type="submit" class="btn btn-primary">Login</button>
	</form>  
	<!-- create an a tag to reset password --> 
	
	<a href="/password_reset" class="btn btn-primary"><h3> Forgot Password?</h3></a>
</main>
