<template>
	<div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog"  id="buy_success" class="modal fade" style="padding-right: 0px !important;" >
		<div class="modal-dialog" style="width: 400px !important; top:250px">
			<button id="close" type="button" class="close" style="display: none;" data-dismiss="modal" aria-hidden="true"></button>
			<div class="modal-content pair-box" style="width: 400px !important;height: 200px;position: relative;text-align: center;">
					<img src="../assets/img/buysuccess.png">
					<div style="color: #fff;">{{ $t("netnew.SubscribeSuccess") }}</div>
			</div>
		</div>

	</div>
</template>

<script>
	export default {

	}
</script>

<style>


</style>
