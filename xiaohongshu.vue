<template>
  <div class="container">
    <div class="video-bg">
      <video
        poster="//ci.xiaohongshu.com/9e244c50-108b-41df-b649-537f318124a9"
        muted
        loop="loop"
        class="my-video"
        src="https://dc.xhscdn.com/9379abe0-7ad8-11e9-8794-9320f6c9d557/%E8%83%8C%E6%99%AF%E8%A7%86%E9%A2%91.mp4"
        preload="auto"
      />
    </div>
    <div class="content">
      <div class="middle">
        <div class="middle-wrapper">
          <div class="iphone-wrapper"><iphone /></div>
          <div class="description">
            <div class="logo-big" />
            <h2 class="lifestyle">标记我的生活</h2>
            <h5 class="lifestyle-english" />
            <div class="qrcodes">
              <div class="ios"><span class="ios-icon">
                <reds-icon
                  icon="IOS"
                  size="24"
                />
              </span>{{ home.ios }}</div>
              <div class="android"><span class="android-icon">
                <reds-icon
                  icon="Android"
                  size="24"
                />
              </span>{{ home.android }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import RedsIcon from '@xhs/reds-icon-web'
  import Iphone from '~/components/Iphone.vue'
  import '~/assets/IOS.svg'
  import '~/assets/Android.svg'

  export default {
    name: 'Main',
    components: {
      RedsIcon,
      Iphone,
    },
    data() {
      return {
        ifMuted: true,
        headerStyle: {
          color: '#333',
        },
      }
    },
    computed: {
      home() {
        return {
          ios: 'iOS 版',
          android: 'Android 版',
        }
      },
    },
    mounted() {
      this.loadVideo()
    },
    methods: {
      loadVideo() {
        const videoTag = document.querySelector('.video-bg .my-video')

        videoTag.addEventListener('loadeddata', () => {
          if (videoTag.readyState >= 2) {
            videoTag.play()
          }
        })
      },
    },
  }
</script>

<style lang="stylus" scoped>
  .container
    top 0
    left 0
    right 0
    bottom 0
    position fixed
  .video-bg
    position absolute
    right 0
    bottom 0
    left 0
    top 0
    &:before
      content ''
      position absolute
      width 100%
      height 100%
      background rgba(0, 0, 0, 0)
    .my-video
      min-width 100%
      min-height 100%
  .content
    position relative
    left 0
    top 0
    right 0
    bottom 0
    width 100%
    height 100%
    .middle
      top 0
      left 0
      right 0
      bottom 0
      position absolute
      width 100%
      height 100%
      .middle-wrapper
        top 50%
        left 50%
        transform translate(-60%, -60%)
        display flex
        flex-direction row
        justify-content center
        align-items center
        position absolute
        .iphone-wrapper
          margin-right 60px
        .description
          display flex
          flex-direction column
          justify-content center
          align-items flex-start
          .logo-big
            width 143px
            height 50px
            background-image url("//ci.xiaohongshu.com/83074709-0d05-4d1c-9d38-24a8e910d914")
            background-size contain
            background-repeat no-repeat
            background-position center center
          .lifestyle
            white-space nowrap
            color #fff
            font-size 48px
            font-weight 500
            margin 0
            margin-top 13px
          .lifestyle-english
            white-space nowrap
            color #fff
            font-size 14px
            font-family Helvetica, Arial, sans-serif
            font-style oblique
            font-weight 400
            margin 0
            margin-top 20px
          .qrcodes
            margin-top 36px
            display flex
            flex-direction row
            justify-content flex-start
            align-items center
            div
              display flex
              flex-direction row
              justify-content center
              align-items center
              width 150px
              height 40px
              border-radius 20px
              background-color rgba(255, 255, 255, 1)
              margin-right 15px
              cursor pointer
              position relative
              &:before
                content ''
                position absolute
                top 35px
                left 0px
                width 100%
                height 142px
                border-radius 0 0 20px 20px
                background-color rgba(255, 255, 255, 1)
                opacity 0
              &:after
                content ''
                position absolute
                top 40px
                left 8px
                width 134px
                height 134px
                border-radius 12px 12px 12px 12px
                background-image url("//ci.xiaohongshu.com/0b84da4e-3984-4603-a2f2-72a806e5494d")
                background-repeat no-repeat
                background-size contain
                opacity 0
              &:hover
                border-radius 20px 20px 0 0
                &:before
                  top 40px
                  opacity 1
                &:after
                  top 40px
                  opacity 1
              span
                display inline-block
                width 24px
                height 24px
                margin-right 6px
            .android
              &:after
                background-image url("//ci.xiaohongshu.com/8aa9236a-43ef-44f0-97d3-3167847de82a")
  @media screen and (min-height: 900px)
    .middle-wrapper
      zoom 1.0
  @media screen and (min-height: 820px) and (max-height: 900px)
    .middle-wrapper
      zoom 0.9
  @media screen and (max-height: 820px)
    .middle-wrapper
      zoom 0.8
  @media screen and (max-height: 720px)
    .middle-wrapper
      zoom 0.7
  @media screen and (max-height: 540px)
    .middle-wrapper
      zoom 0.6
  @media screen and (min-width: 1250px) and (max-width: 1400px)
    .footer
      zoom 0.9
  @media screen and (max-width: 1250px) and (min-width: 1101px)
    .header
      zoom 0.9
    .footer
      zoom 0.8
  @media screen and (max-width: 1101px) and (min-width: 1030px)
    .header
      zoom 0.8
    .footer
      zoom 0.7
  @media screen and (max-width: 1030px) and (min-width: 1024px)
    .header
      zoom 0.8
    .footer
      zoom 0.6
  @media screen and (max-width: 1024px)
    .header
      zoom 0.8
    .footer
      zoom 0.6
</style>
