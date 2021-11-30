<template>
  <div>
      <Slider />

      <div class="about-section">
        <div class="about-section-content">
            <h1>Building a lasting legacy <br> for individuals, families and <br> businesses globally</h1>
          
            <p>It is a long established fact that a <br> reader will be distracted by the <br> readable content of a page when <br> looking at its layout.</p>
         
        </div>
        
        <img class="vector" src="@/assets/img/Vector.png"/>
        
      </div>

      <div class="our-services">
        <div class="service-one">
          <h1> Design <br> Driven</h1>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
          <img src="@/assets/img/iStock-1.png"/>
        </div>

        <div class="service-one">
          <h1> Affordable <br> Luxury</h1>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
          <img src="@/assets/img/iStock-2.png"/>
        </div>

        <div class="service-one">
          <h1> Detailed  <br> craftsmanship </h1>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
          <img src="@/assets/img/iStock-3.png"/>
        </div>
      </div>
  </div>
</template>

<script>
import Slider from '@/components/Slider'

export default {
  name: 'Home',
  components: {
    Slider
  }
}
</script>

<style>

.banner {
  position: relative;
  width: 493px;
  height: 68px;
  
  font-family: Poppins;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 68px;
  text-align: right;
  text-transform: capitalize;
  
  color: #FFFFFF;
}

.about-section {
  position: relative;
  width: 1440px;
  height: 729px;
  left: -8px;
  right: 0px;
  top: 868px;

  background-color: #07424D;
}

.about-section-content {
  position: absolute;
  left: 118px;
  top: 179px;
  color: #FFFFFF;
}

.about-section-content h1 {
  font-family: Cormorant;
  font-style: normal;
  font-weight: 500;
  font-size: 50px;
  line-height: 58px;
  text-transform: capitalize;
}

.about-section-content p {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 26px;
  text-transform: capitalize;
}

.vector {
  position: absolute;
  left: 57.56%;
  right: -52.01%;
  top: 9%;
  bottom: 42.57%;
}

.our-services {
  position: relative;
  display: flex;
  width: 1440px;
  left: -8px;
  top: 868px;
  background-color: #E9DDCF;
}
.service-one {
  top: 66px;
  margin-top: 40px;
  margin-left: 100px;
  margin-bottom: 72px;
  width: 350px;
}
.service-one, h1 {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 48px;
  letter-spacing: -1px;
  text-transform: capitalize;
}

.service-one, p{
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 26px;
  text-transform: capitalize;
}

</style>
