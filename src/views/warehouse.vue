<template>
	<section class="mail-list">
		<div class="row">
			<div class="col-sm-12">
				<section >
					<header class="wh_title">
						Robot Warehouse
					</header>
					<div class="panel-body">
						<table class="table table-bordered table-hover general-table">
							<thead>
								<tr>
									<th><input type="checkbox" @click="selectAll"></th>
									<th>Instance Id</th>
									<th>Robot Name</th>
									<th>Trade Type</th>
									<th>Exchange</th>
									<th>Standard Coin</th>
									<th>Account Amount</th>
									<th>Cumsum Return</th>
									<th>Running Days</th>
									<th>Number of Orders</th>
									<th>Status</th>
									<th>Actions</th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="(list,index) in robotList">
									<td style="text-align: center;">
										<input type="checkbox" :value="index" v-model="selectArr">
									</td>
									<td>{{list.SerialNo}}</td>
									<td v-show="$i18n.locale!='zh-CN'">{{list.RobotLocalName}}</td>
									<td v-show="$i18n.locale=='en-US'">{{list.RobotName}}</td>
									<td>long</td>
									<td>{{list.Exchange}}</td>
									<td>{{list.StandardCoin}}</td>
									<td>23.6</td>
									<td>{{list.CumprodReturn|fix2}}%</td>
									<td>28</td>
									<td>6</td>
									<td>
										<label class="label ui-draggable label-warning" style="padding-top:4px ;">
														{{4|robotStatus}}
										            </label>
									</td>
									<td>
										<a style="cursor: pointer;">Stop</a> |
										<a style="cursor: pointer;">Delete</a> |
										<a style="cursor: pointer;" @click="goDetail">Detail</a>
									</td>
								</tr>

							</tbody>
						</table>
						<div class="alert alert-warning fade in" v-show="robotList.length==0">
							<strong>Sorry!</strong> No information at all.
						</div>
					</div>
					<div class="col-lg-10">
						<input type="checkbox" @click="selectAll"><label class="select_all">Select all</label>

						<button type="submit" class="btn btn-primary run_all_btn">Run All</button>

						<!--<button type="submit" class="submit_all_btn">Submit</button>
						<button type="submit" class="delete_select_btn" @click="delAll">Delete</button>-->
					</div>
				</section>

			</div>
		</div>
	</section>
</template>

<script>
	import { getRobotInfo, getUserInfo } from '../api/api';
	export default {
		data() {
			return {
				selectArr: [],
				robotList: [],
				rbtInfoParm: {

				},
				first: 0,
			}
		},
		mounted() {
			this.getuseInfo();
			$('.mail-list').css("height", document.documentElement.clientHeight - 100 + "px")
		},
		methods: {
			getuseInfo() {
				getUserInfo(this.empty).then(data => {
					if(data.success == 0) {
						this.rbtInfoParm.user_id = data.data.userId;
						this.getrbtInfo();
					} else {
						this.$toast.center(data.message);
					}
				});
			},
			getrbtInfo() {
				this.rbtInfoParm.status = "0";
				getRobotInfo(this.rbtInfoParm).then(data => {
					if(data.code == 200) {
						console.log(data);
						this.robotList = data.data;
					} else {
						this.$toast.center(data.message);
						//	                console.log(data)
					}
				});
			},
			goDetail() {
				this.$router.push('/robot/instanceDetail')
			},
			selectAll(event) {
				var _this = this;
				if(!event.currentTarget.checked) {
					this.selectArr = [];
				} else { //实现全选
					_this.selectArr = [];
					_this.robotList.forEach(function(item, i) {
						_this.selectArr.push(i);
					});
				}
			}

		}
	}
</script>

<style>
	.wh_title{
		font-size: 30px;
		color: #000000;
		margin-top: 45px;
		margin-left: 33px;
		margin-bottom: 20px;
	}
</style>
