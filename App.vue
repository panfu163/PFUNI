<script>
	export default {
		onLaunch: function () { //初始化完成时触发（全局只触发一次）
			console.log('App Launch')
		},
		onShow: function () { //启动，或从后台进入前台显示
			console.log('App Show')
		},
		onHide: function () { //从前台进入后台
			console.log('App Hide')
		}
	}
</script>

<style>
</style>
