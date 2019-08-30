<template>
  <div class="login">
    <Card class="card">
      <p slot="title">
        <Icon type="ios-film-outline"></Icon>
        供应链智慧云平台
      </p>
      <Form ref="form" :model="formValid" :rules="ruleValidate" :label-width="80">
        <FormItem label="用户名" prop="username">
          <Input v-model="formValid.username" placeholder="请输入用户名"></Input>
        </FormItem>
        <FormItem label="密码" prop="pwd">
          <Input v-model="formValid.pwd" placeholder="请输入密码"></Input>
        </FormItem>
      </Form>
      <Button type="primary" long @click="login">登录</Button>
    </Card>
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
@Component({
  name: 'Login',
})
export default class Login extends Vue {
  private formRef: any;
  private data() {
    return {
      formValid: {
        username: '',
        pwd: '',
      },
      ruleValidate: {
        username: [
          { required: true, message: '用户名不能为空', trigger: 'change' },
        ],
        pwd: [
          { required: true, message: '密码不能为空', trigger: 'change' },
        ],
      },
    };
  }
  private async login() {
    this.formRef = this.$refs.form;
    const isValid = await this.formRef.validate();
    // console.log('isValid', isValid);
  }
}
</script>

<style lang="less">
.login{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .card{
    width: 420px;
  }
}
</style>