<template>
    <header :class="{ 'scrolled-nav': scrollPosition }">
        <nav>
            <div class="branding">
                <h1><router-link to="/" class="main-logo">LOGO</router-link></h1>
            </div>

            <div v-show="!mobile" class="navigation">
                <ul class="navigation-1">
                    <li><router-link class="link" to="/privateclients">Private clients</router-link></li>
                    <li><router-link class="link" to="/corporates">Corporates</router-link></li>
                    <li><router-link class="link" to="/insights">Insights</router-link></li>
                    <li><router-link class="link" to="/contact">Contact</router-link></li>
                    
                </ul>

                <ul class="navigation-2">
                    <li><router-link class="link" to="/about">About</router-link></li>
                    <li><router-link class="link" to="/careers">Careers</router-link></li>
                </ul>
            </div>

            <div class="icon">
                    <MenuIcon />
                <i @click="toggleMobileNav" v-show="mobile" class="far fa-bars" :class="{'icon-active' : mobileNav}"></i>
            </div>
            
            <transition name="mobile-nav" class="dropdown-nav">
                <ul v-show="mobileNav" class="navigation">
                <li><router-link class="link" to="/privateclients">Private clients</router-link></li>
                <li><router-link class="link" to="/corporates">Corporates</router-link></li>
                <li><router-link class="link" to="/insights">Insights</router-link></li>
                <li><router-link class="link" to="/contact">Contact</router-link></li>
                <li><router-link class="link" to="/about">About</router-link></li>
                <li><router-link class="link" to="/careers">Careers</router-link></li>
            </ul>
            </transition>
        </nav>
    </header>
</template>

<script>

import MenuIcon from 'vue-material-design-icons/Menu.vue';


export default {
    name: 'Navbar',
    data() {
        return {
            scrollPosition: null,
            mobile: null,
            mobileNav: null,
            windowWidth: null,
        }
    },
    components: {
        MenuIcon,
    }
}
</script>

<style lang="scss" scoped>
    header {
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 114.38%);
        z-index: 99;
        width: 100%;
        position: fixed;
        transition: 0.5s ease all;
        color: #ffffff;

        nav {
            position: relative; 
            display: flex;
            flex-direction: row;
            padding: 12px 0;
            transition: .5s ease all;
            width: 90%;
            margin: 0 auto;
            @media (min-width: 1140px) {
                max-width: 1140px;
            }

            ul,
            .link {
                font-weight: 500;
                color: #ffffff;
                list-style: none;
                text-decoration: none;
            }

            li {
                text-transform: capitalize;
                padding: 16px;
                margin-left: 16px;
            }

            .link {
                font-size: 14px;
                transition: .5s ease all;
                padding-bottom: 4px;
                border-bottom: 1px solid transparent;

                &:hover {
                    color: #00afea;
                    border-color: #00afea;
                }
            }

            .branding {
                display:flex;
                align-items: center;
                text-decoration: none;
                color: #ffffff;

                .main-logo {
                    color: #ffffff;
                    list-style: none;
                    text-decoration: none;
                }
            }

            .navigation {
                display: flex;
            }

            .navigation-1  {
                display: flex;
                align-items: center;
                flex: 1;
                justify-content: flex-start;
                
                font-size: 10px;
            }

            .navigation-2 {
                display: flex;
                align-items: center;
                flex: 1;
                justify-content: flex-end;
            }

            .icon {
                display: flex;
                align-items: center;
                position: absolute;
                top: 0;
                right: 24px;
                height: 100%

                i {
                    cursor: pointer;
                    font-size: 24px;
                    transition: 0.8s ease all;
                }
            }

            .icon-active {
                transform: rotate(180deg)
            }

        }
    }   
</style>



