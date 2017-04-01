<template>
    <div>
         <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-menu"></i>巡检任务管理</el-breadcrumb-item>
                <el-breadcrumb-item>任务细节</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        
        <el-form ref="form" :model="form" label-width="150px">
            <el-form-item label="ID" v-if="type === 'modify'">
                <div class="acconut-input" >{{form.id}}</div>
            </el-form-item>
            <el-form-item label="任务名" >
                <div class="acconut-input"> {{form.taskName}}</div>
            </el-form-item>
            <el-form-item label="任务截止时间" >
                <div class="acconut-input"> {{form.deadLine}}</div>
            </el-form-item>
            <el-form-item label="巡检员" >
                <div class="acconut-input"> {{form.inspectorName}}</div>
            </el-form-item>
            <el-form-item label="优先级" >
                 <div v-if="form.priority === '1'" class="priority-tag urgency">{{form.priority | filterPriority }}</div>
                 <div v-if="form.priority === '2'" class="priority-tag important">{{form.priority | filterPriority }}</div>
                 <div v-if="form.priority === '3'" class="priority-tag normal">{{form.priority | filterPriority }}</div>
            </el-form-item>
            <el-form-item label="任务描述" >
                <el-input
                    disabled
                    class="taskDec"
                    type="textarea"
                    autosize
                    v-model="form.taskDec">
                </el-input>
            </el-form-item>
            <el-form-item label="完成时间">
                <div class="progress-text" >{{form.progress === 1 ? form.overTime : "待完成"}}</div>
            </el-form-item>
            <el-form-item label="道路问题描述" v-if="form.progress === '1'">
                <el-input
                    disabled
                    class="taskDec"
                    type="textarea"
                    autosize
                    v-model="form.roadStatusDec">
                </el-input>
            </el-form-item>
            <el-form-item label="道路问题图片(可展示)" v-if="form.progress === '1'" >
                <img v-for="item in imageUrls" v-lazy="item.imageUrl" @click="showBigImg(item.imageUrl)" class="pre-img" alt="">
            </el-form-item>
            <el-form-item label="道路问题视频" v-if="form.progress === '1'">
                <div class="road-video">
                    <div class="video-btn" @click="dialogVideo = true">
                        
                    </div>
                </div>
            </el-form-item>           
        </el-form>

        <el-dialog title="道路视频" v-model="dialogVideo">
            <video-player  ref="VueVideoPlayer"
                :options="playerOptions"
                title="哈哈"
                @play="onPlayerPlay($event)"
                @pause="onPlayerPause($event)"
                @ended="onPlayerEnded($event)"
                @loadeddata="onPlayerLoadeddata($event)"
                @waiting="onPlayerWaiting($event)"
                @playing="onPlayerPlaying($event)"
                @timeupdate="onPlayerTimeupdate($event)"
                @canplay="onPlayerCanplay($event)"
                @canplaythrough="onPlayerCanplaythrough($event)"
                @statechanged="playerStateChanged($event)"
                @ready="playerReadied">
            </video-player>
        </el-dialog>

         <el-dialog title="道路图片查看" v-model="dialogImg">
            <img v-lazy="bigImgUrl" class="bigImg">
        </el-dialog>
    </div>
  
</template>

<script>
   
    export default {
        
        data: function(){
            return{
                form:{
                    id:"17001",
                    taskName: 'ydc201211',
                    deadLine: '123456',
                    inspectorName: "张三",
                    priority: "2",
                    progress: "1",
                    taskDec:"去大扫除，去大扫除，去大扫除，去大扫除，去大扫除，去大扫除",
                    overTime: "2017-4-1 19:22:01",
                    roadStatusDec:"路上有一个坑"
                },

                inspectorOptions:[
                    {
                        inspectorId:1,
                        inspectorName:"张三"
                    },
                    {
                        inspectorId:2,
                        inspectorName:"李四"
                    },
                ],
                imageUrls: [
                    {
                        imageUrlId:1,
                        imageUrl:"/static/img/default.png"
                    },
                    {
                        imageUrlId:2,
                        imageUrl:"/static/img/default.png"
                    }
                    
                ],
                playerOptions: {

                    // component options
                    start: 0,
                    playsinline: false,
                    // videojs options
                    muted: true,
                    language: 'en',
                    playbackRates: [0.7, 1.0, 1.5, 2.0],
                    sources: [{
                        type: "video/mp4",
                        src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
                    }],
                    poster: "/static/img/img.png",
                },
                title:"uausduu",
                type:"add",
                disabled:true,
                inspectorValue:"",
                dialogVideo:false,
                dialogImg:false,
                bigImgUrl:""
            }
        },
        components: {
        },
        created: function(){
            this.fetchData()
        },
        watch: {
            '$route': 'fetchData'
        },
        computed: {
            player() {
                return this.$refs.VueVideoPlayer.player
            }
        },
        filters:{
            filterPriority(value){
                if(value === "1"){
                    return "紧急";
                }else if(value === "2"){
                    return "重要";
                }else{
                    return "一般";
                }
            },
            filterColor(value){
                 if(value === "1"){
                    return "urgency";
                }else if(value === "2"){
                    return "important";
                }else{
                    return "normal";
                }
            }
        },
        methods:{
            onSubmit() {
                this.$message.success('提交成功！');
                this.$emit("onSubmit","123123");
            },

             fetchData () {    
                var isFinish = this.$route.query.isFinish;
            },
            showBigImg(url){
                this.dialogImg = true;
                this.bigImgUrl = url
            }
        }
    }
</script>

<style>
    .acconut-input{
        width: 300px;
    }
    .pre-img{
        width:130px;
        height: 130px;
        margin-right:10px;
        border-radius: 5px;
        cursor: pointer;
    }
    .bigImg{
        width:550px;
    }
    .taskDec{
        width: 300px;
    }
    .road-video{
        width: 130px;
        height: 130px;
        background: #000;
        border-radius: 5px;
        overflow: hidden;
    }
    .priority-tag{
        width: 40px;
        height: 26px;
        color: #fff;
        border-radius: 5px;
        text-align: center;
        line-height: 26px;
        margin-top:5px;
    }
    .urgency{
        background: #ff0000;
    }
    .important{
        background: #1e90ff;
    }
    .normal{
        background: #00fa9a;
    }
    .video-btn{
        background: url("/static/img/video_start.png") no-repeat;
        width: 64px;
        height: 64px;
        margin: 25%;
        
    }
    .video-btn:hover{
        background: url("/static/img/video_start_active.png") no-repeat;
        cursor: pointer;
    }
    .el-dialog{
        width: 600px;
    }
</style>