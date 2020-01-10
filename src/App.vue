<template>
  <div id="material-kit" class="html-bg clientStyle">
    <div :class="{'nav-open': NavbarStore.showNavbar}">
      <router-view name="header"/>
      <div>
        <router-view/>
      </div>
      <router-view name="footer"/>
    </div>
  </div>
</template>
<script>
	export default {
		name:"app",
		methods: {
			_isMobile() {
				 let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
				 return flag;
			}
		},
		mounted() {
			/*if(this.$route.path=='/'||this.$route.path=='/m_index'){
				if (this._isMobile()) {
					this.$router.replace('/m_index');
                } else {
					this.$router.replace('/');
		        }
			}*/
			if(this.$route.path==='/appTest'||this.$route.path==='/m_appTest'){
              if (this._isMobile()) {
                this.$router.replace('/m_appTest');
                $(".html-bg").removeClass('clientStyle')
              } else {
                this.$router.replace('/appTest');
                $(".html-bg").addClass('clientStyle')
              }
            }else{
              $(".html-bg").addClass('clientStyle')
            }
		}
	}
</script>
<style scoped>
  .clientStyle{
    width:100%;
    min-width:1440px;
    padding:0 20px;
  }
</style>
