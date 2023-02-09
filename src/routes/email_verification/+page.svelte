<script>

export let form  

// async function resetPassword(email) { 
// 	console.log("resetPassword")
//   const { data, error } = await supabaseClient.auth.resetPasswordForEmail(email, {
//     redirectTo: 'http://localhost:5173/reset_password',
//   });

//   if (error) { 
// 	console.log(error)
//     throw new Error(error); 
	
//   }

//   console.log(data)
//   return data;
// }



</script>



<main>
	<h1>Enter Email</h1>
	<form action="?/reset_password" method="POST" class="auth-form">
		<label for="" > Email </label>
		<input type="email" name="email" value={form?.email ?? ''} placeholder="Enter Email..." />
		<button type="submit" class="btn btn-primary">Continue</button>
	</form>  
	<h3>After submission check your email for verification link</h3>
	
	<!-- <h3>Type in Email</h3>
	<input type="email" name="email" bind:value={email} />
	<button type="submit" class="btn btn-primary" on:click={resetPassword(email)}>Continue</button> -->
	
	
</main> 
