import {Component, Vue} from 'vue-property-decorator';

@Component
export default class TagHelper extends Vue {
  createTag() {
    const name = window.prompt('请输入标签名');
    if (!name) {
      return window.alert('标签名不可能为空！');
    }
    this.$store.commit('createTag', name);
    if (this.$store.state.createTagError === null) {
      window.alert('添加成功！');
    } else if (this.$store.state.createTagError === 'duplicated') {
      return;
    }
  }
}
