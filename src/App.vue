<template>
  <div id="app">
    <div class="header">
      <a href="/">Github Userboard</a>
    </div>
    <div class="container">
      <router-view/>
    </div>
    <div class="footer">
    </div>
  </div>
</template>

<style>

.container {
  margin-top: 50px;
  width:100%;
}
.header {
  z-index: 999;
  background-color: black;
  color: white !important;
  padding: 20px;
  position: fixed;
  width: 100%;
  top: 0px;
  left: 0px;
}
.footer {
  z-index: 999;
  background-color: black;
  color: white !important;
  padding: 20px;
  position: fixed;
  width: 100%;
  bottom: 0px;
  left: 0px;
}
</style>
