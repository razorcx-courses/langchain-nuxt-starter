export default defineNuxtRouteMiddleware((to, from) => {
  // if (to.params.id === '1') {
  //   return abortNavigation()
  // }

  console.log("Middleware to:", to.params);

  const isLoggedIn = useLoggedIn();
  const isSignUp = useSignUp();

  // watch([isLoggedIn, isSignUp], () => {
  console.log("Middleware IsLoggedIn", isLoggedIn.value);
  console.log("Middleware isSignUp", isSignUp.value);

  // In a real app you would probably not redirect every route to `/`
  // however it is important to check `to.path` before redirecting or you
  // might get an infinite redirect loop
  if (!isLoggedIn.value) {
    if (to.path !== "/") {
      console.log("Navigating to /");
      return navigateTo("/");
    }
  }
});
