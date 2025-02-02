<template>
  <div class="test-component">
    <h1>SCSS Test</h1>
    <p>This is a test of SCSS configuration.</p>
  </div>
</template>

<style lang="scss">
  .test-component {
  padding: 1rem;
  
  h1 {
    color: $primary-color;
    font-size: 1.5rem;
    font-weight: bold;
    
    @include mq(md) {
      font-size: 2rem;
    }
  }
  
  p {
    color: $secondary-color;
    margin-top: 0.5rem;
  }
}
</style>
