<template>
  <div class="banner">
    <img src="@/assets/img/iStock.png"/>
    <div class="banner-content">
        <p>If not now, then when? </p>
        <h1>
            Time to make <br> your wealth <br> work for you
        </h1>
    </div>
  </div>

  <!-- <div>
    <div v-for="banner in banners" :key="banner" class="swiper-slide">
        <p>{{ banner.label }}</p>
        <img :src="getImage(banner.img)">
    </div>
  </div> -->

</template>

<script>
export default {
    name: 'Slider', 
    // data() {
    //     return {
    //         banners: [
    //             {img: "@/assets/img/iStock.png", label: 'my label'},
    //             {img: "@/assets/img/iStock.png", label: 'label 2'},
    //         ] 
    //     }
    // },
    methods : {
      
    },
}
</script>


<style scoped>
    .banner{
        position: absolute;
        width: 1440px;
        height: 1024px;
        left: 0px;
        top: 0px;
        background: rgba(0, 0, 0, 0.16);
    }
    .banner-content{
        position: absolute;
        text-align: left;
        width: 695px;
        height: 38px;
        left: 120px;
        top: 475px;
    }
    .banner-content, p{
        font-family: Cormorant;
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 38px;
        text-transform: capitalize;
        color: #FFFFFF;
    }
    .banner-content, h1{
        font-family: Poppins;
        font-style: normal;
        font-weight: 200;
        font-size: 60px;
        line-height: 68px;

        text-transform: capitalize;
    }

</style>