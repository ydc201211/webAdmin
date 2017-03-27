 <template>
     
 </template>

 <script>
      export default {
        data: function(){
            return {
            }
        },
        components: {
                VueCoreImageUpload
        },
        methods: {
            onSubmit() {
                this.$message.success('提交成功！');
            }
        }
    }
 </script>
