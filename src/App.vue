<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
    <div>
        <div class="first-page">
            <!--search bar-->
            <div class="search_bar">
                <div class="search-wrap">
                    <i class="search fa fa-2x fa-search" aria-hidden="true"></i>
                    <input type="text" placeholder="搜索商品">
                    <i class="cancel fa fa fa-2x fa-times-circle" aria-hidden="true"></i>
                </div>
            </div>
            <!--end search bar-->
            <!--carousel-->
            <div id="homeCarousel" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#homeCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#homeCarousel" data-slide-to="1"></li>
                    <li data-target="#homeCarousel" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img v-bind:src="home_data.homepage_data.sub_views[0].components[0].cells[0].cell_image_urls"
                             alt="">
                    </div>
                    <div class="carousel-item">
                        <img v-bind:src="home_data.homepage_data.sub_views[0].components[0].cells[1].cell_image_urls"
                             alt="">
                    </div>
                    <div class="carousel-item">
                        <img v-bind:src="home_data.homepage_data.sub_views[0].components[0].cells[2].cell_image_urls"
                             alt="">
                    </div>
                </div>
                <a class="carousel-control-prev" href="#homeCarousel" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#homeCarousel" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
            <!--end carousel-->
            <!--sub title-->
            <div class="subtitle">
                <div class="subtitle-item" v-for="item in home_data.homepage_data.sub_views[0].components[1].cells">
                    <img v-bind:src="item.cell_image_urls" alt="">
                    <div class="subtitle-text">
                        <span>{{item.cell_sub_titles[0]}}</span>
                    </div>
                </div>
            </div>
            <!--end sub title-->
            <!--image collection-->
            <div class="img-collection">
                <div class="img-wrapper first-img">
                    <img v-bind:src="home_data.homepage_data.sub_views[0].components[2].cells[0].cell_image_urls"
                         alt="">
                </div>
                <div class="img-wrapper second-img">
                    <img v-bind:src="home_data.homepage_data.sub_views[0].components[2].cells[1].cell_image_urls"
                         alt="">
                </div>
                <br>

            </div>
            <div class="img-collection">
                <div class="img-wrapper third-img">
                    <img v-bind:src="home_data.homepage_data.sub_views[0].components[2].cells[2].cell_image_urls"
                         alt="">
                </div>
                <div class="img-wrapper fourth-img">
                    <img v-bind:src="home_data.homepage_data.sub_views[0].components[2].cells[3].cell_image_urls"
                         alt="">
                </div>
                <div class="img-wrapper fifth-img">
                    <img v-bind:src="home_data.homepage_data.sub_views[0].components[2].cells[4].cell_image_urls"
                         alt="">
                </div>
            </div>
            <!--end image collection-->
        </div>
    </div>
</template>

<script>
    let $ = window.jQuery = require('jquery')
    import axios from 'axios'

    export default {
        name: 'app',
        data() {
            return {
                home_data: []
            }
        },
        created() {
            this.getHomeData();
            $('.carousel').carousel({
                interval: 3800
            })
        },
        methods: {
            getHomeData: function () {
                let _this = this;
                axios.get('http://api.glbuyer.com/v1/homepage/formatProductHomePage/test')
                    .then(function (response) {
                        _this.home_data = response.data.data;
                    })
            }
        }
    }
</script>

<style lang="scss">
    @import '/assets/css/variable.scss';
    @import '/assets/css/main.scss';

    +
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
