<template>
    <div class="container">
        <div class="row banner">
            <div class="circle"></div>
            
            <RouterView />
        </div>
    </div>
</template>

<script setup>
    import "../styles/layout.scss";
    import { RouterView } from 'vue-router'; 
</script>