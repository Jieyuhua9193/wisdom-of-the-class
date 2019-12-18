<template>
  <div id="verification">
    <div class="wrapper">
      <div
        class="ver-btn"
        :class="verClass"
        @click="startVer">
        <div class="rect-top"></div>
        <div class="rect-bottom"></div>
        <div class="ver-icon">
          <div
            class="loading ver-icon-loading-ani"
            v-if="status === verStatus.loading"></div>
          <div class="shield">
            <span class="icon-shield"></span>
          </div>
        </div>
        <div class="ver-text">
          <span>{{verText}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

enum verStatus {
  normal = 0,
  success = 1,
  fail = -2,
  loading = -1
}

export default Vue.extend({
  data() {
    return {
      verStatus,
      status: verStatus.normal
    }
  },
  computed: {
    verText(): string {
      if (this.status === verStatus.loading) {
        return '智能验证中...'
      } else if (this.status === verStatus.success) {
        return '验证成功'
      } else if (this.status === verStatus.fail) {
        return '验证失败，危险操作！'
      }
      return '点击按钮开始智能验证'
    },
    verClass(): string {
      if (this.status === verStatus.success) {
        return 'ver-btn-success'
      } else if (this.status === verStatus.fail) {
        return 'ver-btn-fail'
      }
      return 'ver-btn-default'
    }
  },
  methods: {
    startVer() {
      this.status = verStatus.loading;
      setTimeout(() => {
        this.status = verStatus.success;
      }, 1500)
    }
  }
});
</script>

<style scoped>
#verification .wrapper {
  position: relative;
  height: 40px;
}

.wrapper .ver-btn {
  display: flex;
  height: 100%;
  flex-direction: row;
  align-items: center;
  border: 1px solid #dddddd;
  cursor: pointer;
  overflow: hidden;
}

.ver-btn:hover {
  box-shadow: 0 0 8px #128bF1;
  transition: all .2s ease;
}

.ver-icon .loading {
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, #FFFFFF, #128bF1);
  z-index: 1;
  border-radius: 50%;
}

.ver-icon:hover {
  box-shadow: 0 0 10px #128bF1;
  transition: all .2s ease;
}

.ver-icon {
  position: relative;
  background: rgba(97, 89, 235, 0.3);
  display: inline-flex;
  margin-left: 12px;
  width: 29px;
  height: 29px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  z-index: 5;
}

.shield {
  width: 21px;
  height: 21px;
  background: #128bF1;
  border-radius: 50%;
  color: #FFFFFF;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 2;
}

.icon-shield {
  margin-top: 1px;
}

.ver-btn-default .shield {
  animation: defaultWave 1.5s ease infinite
}

.ver-icon-loading-ani {
  animation: loadingWave 1s infinite;
}

.ver-btn-success .ver-text {
  color: #128bF1;
  animation: successTxt 1s;
  animation-iteration-count: 1
}

.ver-btn-fail .rect-top:before, .ver-btn-success .rect-top:before {
  content: "";
  display: block;
  height: 200%;
  position: absolute;
  top: 0;
  left: 0
}

.ver-btn-success .rect-top:before {
  border-left: 1px solid #128bF1;
  animation: successRectLeft .5s;
  animation-iteration-count: 1
}

.ver-btn-fail .rect-top, .ver-btn-success .rect-top {
  position: absolute;
  top: 0;
  height: 20px;
  width: 100%;
  z-index: 4;
  left: 0
}

.ver-btn-success .rect-top {
  animation: successRectTop 1s;
  animation-delay: .5s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards
}

.ver-btn-fail .rect-top:after, .ver-btn-success .rect-top:after {
  content: "";
  display: block;
  height: 100%;
  position: absolute;
  top: -1px;
  right: 0
}

.ver-btn-success .rect-top:after {
  animation: successRectRight .5s;
  animation-delay: 1.5s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards
}

.ver-btn-fail .rect-bottom, .ver-btn-success .rect-bottom {
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 4;
  width: 100%;
  height: 20px;
}

.ver-btn-success .rect-bottom {
  animation: successRectBottom 1s;
  animation-delay: .5s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards
}

.ver-btn-fail .rect-bottom:after, .ver-btn-success .rect-bottom:after {
  content: "";
  display: block;
  height: 100%;
  position: absolute;
  top: 1px;
  right: 0
}

.ver-btn-success .rect-bottom:after {
  animation: successRectBottomRight .5s;
  animation-delay: 1.5s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards
}

@keyframes loadingWave {
  0% {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(360deg)
  }
}

@keyframes defaultWave {
  0% {
    transform: scale(1)
  }
  20% {
    transform: scale(1.3)
  }
  40% {
    transform: scale(1)
  }
  to {
    transform: scale(1)
  }
}

@keyframes successRectLeft {
  0% {
    transform: scaleY(0)
  }
  to {
    transform: scaleY(1)
  }
}

@keyframes successRectTop {
  0% {
    width: 0;
    border-top: 1px solid #128bF1;
  }
  to {
    width: 100%;
    border-top: 1px solid #128bF1
  }
}

@keyframes successRectRight {
  0% {
    height: 0;
    border-right: 1px solid #128bF1;
  }
  to {
    height: 104%;
    border-right: 1px solid #128bF1;
  }
}

@keyframes successRectBottom {
  0% {
    width: 0;
    border-bottom: 1px solid #128bF1;
  }
  to {
    width: 100%;
    border-bottom: 1px solid #128bF1;
  }
}

@keyframes successRectBottomRight {
  0% {
    border-right: 1px solid #128bF1;
  }
  to {
    top: 0;
    border-right: 1px solid #128bF1;
  }
}

@keyframes successTxt {
  0% {
    color: #333
  }
  to {
    color: #128bF1
  }
}

.ver-text {
  margin-left: 12px;
}
</style>