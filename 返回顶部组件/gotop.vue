<style>
    .back-to-top {
        position: fixed;
        bottom: 55px;
        right: 15px;
        width: 40px;
        height: 40px;
        background-size: 100% 100%;
        background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAFFUlEQVRoQ+1aW3ITORTVdSz9AisYs4KxV0CyAuwVkKyA+CNS5SvmK6X2h50VkKyAsIIJK8CzAsgKyPz60aKO6sold9p2P2xDTdFVVEJaLd1z3w+R2MEzGo1ezufzN0KItnPu2DnXIqJWvLVz7jsR4d+DEGLSbDa/9Pv9p7rHU9UNQPR0On1LROcgvOI+E+fcWCn1uSqY0gCur69bzWbznXMOhL8MhDvn/iMiEPTAnP6ekUCLJQMJtYnoRfT+iYjG8/n87vLycuW7bYwpBWA4HF7FhINoIcQ9DtdaT7YdFr9PkgTqBiZ0IzBQqYHW+qboXoUAgOtHR0efIlV5xEFSyvuqog8Esiqesir+xX+fLBaLXhFpbAVgrQWHPgZ1cc59UEqN6xKe5TADOSeiK3735Jw7M8bcb5LGRgBJkpwKIUA8HnC9W1ZViqpCWAfVgloKIYI0zrTWt+v2WQsgJt45969S6njXXF9HFEsDzuBvXrMWRC4AVhvovHDO3Smlzg9FfMY2xkT0juno5anTMwBssF+h84fm/Bq7CJJ4WiwWnaxhPwOQJAmIhx4+Sinbh+Z8HojZbAYXDZuYaK078ZoVANbaQeQFOvs22KIGzoYNxkKl+8aYcfh2CSCjOh+MMYOiBxxiXZIkIPq9EGJFlZYAIu7vTHWSJPEuWGt9VhckPFNQJcSiwGAPgF9+42C10e8WIYTd4Eci6rLY75VSZ3XtyVqLQDeCFKSUr7GfBxB8PnIbpVSrzkHMjH9yMtSJlPKk7t7T6RQpORJBz+gAwHse+HxjDKJvpYeNDcQvs9TMRkjWTuo4B2vtLccG75GIOfaDD6rseeKciVPrYyGE9xxCiA6n2eBcoRxnHQdjjySlfEUh6uJQY8w6zm2USDbtIKJTcDlJEsdGTJw+g3tb04Nt4rfWon544ZzrAUDw/Z+11t7oyjzW2hGnwvDRKzlTDCA4i+l0usxxUI0ZY/plzmObRVn6Bt4InFn+p6zvjwNfXs6UBRCBiHOclcBUBEx07hdI4BsX4KXdZ6Q6N1prVFcrTx6AsCAKTJXP9Y2CcAgRnVxcXEAaO3s2AahzyHA4RF0Nbyf+ANjEyT8SWMOdrAqhD4Ncu7QxbdPjfUkgch6PtdzorwKQdaO1AtmvsIE4di1TCeQoWutX27ha5v0eVQi5G2r23s6SuTxg+wAQG7BP5nCwtXbCSVZuRC3D9XjtPgCEdBp5lzGmvVLQxJVOVaL3CSCvclyWlNlK53cEEErKuHJ8VtQjQVJKdeqUfgE8DsTvcRukKmO4zv6KxPNZUY9N0VZpNBqwBRQKv21bJVu3/38aW5HYvUfapSpVVRt8l1Ed73ni/XKbu0GV0Ius2wqpS/xsNvMtGqhOmqbtrc1djguYyvj2uhDiVkrZ34VRlwHDLhM0oLuBertYez0ckpnOHFQSOc2xcgOOPBA8qO7VaUoVkQC3Xz5Fg/JqI6bIqNFqQT/Hz3WJaNBsNm92rVJsrFdRiwYj3NNaQ74AgmME5sG+KcXSGEsp7+oC4WsK79M0xajVX09AnpOmaXcnY9ZY7BxZUT+EKTt6nZgoIgksPejmfj8k7DuCPDgflIncW+fEWb0N81whBFrdK9cF4HZxmSNNU3+xI/4W1wwajQbSAHgV+PKVawpCCNyZKD1/Lg0gEMWeoovrAlG/s4idLtdAVXBNoc7EvzKAmFKWiucsEeEndDkMqv1SJhadaX/dRin1UNd+sO9PEBe2DDt4nZIAAAAASUVORK5CYII=");
    }
</style>
<template>
    <div class="back-to-top" @click="backTop" v-if="showBackStatus"></div>
</template>
<script>
    import Vue from 'vue';
    import {
        showBack,
        animate
    } from '../js/backtop.js';
    export default {
        props: ['speed'],
        data() {
            return {
                showBackStatus: false,
            };
        },
        mounted() {
            this.initData();
        },
        methods: {
            async initData() {
                showBack(status => {
                    this.showBackStatus = status;
                });
            },
            backTop() {
                animate(document.body, {
                    scrollTop: '0'
                }, 300, 'ease-out');
            },
        }
    };
</script>