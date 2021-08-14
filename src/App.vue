<template>
  <div id="nav">
    <router-view v-slot="{ Component }">
      <keep-alive keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
  
</template>

<style>

*{
  padding: 0;
  margin: 0;
}


</style>
