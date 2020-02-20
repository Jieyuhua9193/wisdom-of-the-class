<template>
  <Modal
    :width="800"
    :footer-hide="true"
    :closable="false"
    :value="show"
    @on-visible-change="init"
    @on-cancel="$emit('close')">
    <div class="activation">
      <div class="title">
        <span class="icon-shield"></span>
        账号激活
      </div>
      <h3 class="msg">{{msg}}</h3>
      <div class="form__wrap">
        <Input
          class="ac__input"
          number
          v-model="code"
          :maxlength="4"
          size="large"/>
        <Button
          :disabled="Boolean(sendActivationEmailWaitTime)"
          @click="reSend"
          class="button">
          重新发送
          <span
            v-if="sendActivationEmailWaitTime">
            {{sendActivationEmailWaitTime}}
          </span>
        </Button>
        <Button
          type="primary"
          @click="activate"
          class="button">激活
        </Button>
      </div>
    </div>
  </Modal>
</template>

<script lang="ts">
import Vue from 'vue';
import userVuex from '@/pages/user/vuex/common';
import userClient from '@/pages/user/apis';

export default Vue.extend({
  mixins: [userVuex],
  props: {
    show: {
      type: Boolean,
      default: false
    },
    msg: { type: String }
  },
  data() {
    return {
      code: null
    }
  },
  methods: {
    reSend() {
      this.$store.commit('UPDATE_SEND_ACTIVATION_EMAIL_TIME')
      this.getVerificationCode();
    },
    init(enable: boolean) {
      if (enable) {
        this.code = null;
        if (!(this as any).sendActivationEmailWaitTime) {
          this.$store.commit('UPDATE_SEND_ACTIVATION_EMAIL_TIME');
          this.getVerificationCode();
        }
      }
    },
    getVerificationCode() {
      userClient.getVerificationCode({
        email: (this as any).email
      }).success(r => {
        console.log('发送成功', r);
      })
    },
    activate() {
      userClient.activate({
        email: (this as any).email,
        code: this.code
      }).success(r => {
        this.$Message.success('激活成功');
        this.$emit('close');
        this.$emit('finish');
      })
    }
  }
});
</script>

<style scoped>
.activation {
  padding: 40px 30px 80px 30px;
}
.activation .title {
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 40px;
}
.msg {
  color: #999;
}
.form__wrap {
  margin-top: 30px;
}
.ac__input {
  display: inline-block;
  width: 170px;
}
.button {
  height: 55px;
  width: 130px;
  margin-left: 30px;
  font-size: 14px;
  font-weight: bold;
}
.button:last-child {
  margin-left: 10px;
}
</style>

<style>
.ac__input .ivu-input {
  height: 55px;
  width: 170px;
  font-size: 22px;
  font-weight: bold;
  letter-spacing: 20px;
  text-indent: 20px;
}
</style>
