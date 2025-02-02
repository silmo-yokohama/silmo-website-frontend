<template>
  <nav class="flex-1 flex flex-col items-center justify-center">
    <transition-group
      tag="div"
      class="space-y-8"
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <slot />
    </transition-group>
  </nav>
</template>
