<template>
  <div>
    <div id="notfound">
      <h1>404 not found</h1>
      <p><v-btn to="/dashboard">Go to home</v-btn></p>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style>
  #notfound{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  #notfound h1 {
    font-size: 50px;
    margin-bottom: 30px;
  }


</style>


