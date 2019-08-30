<template>
  <Layout class="home">
    <Header class="app_header">
      <Menu mode="horizontal" theme="dark" active-name="1">
        <div class="layout-logo"></div>
        <div class="layout-nav">
          <MenuItem name="1">
              <Icon type="ios-navigate"></Icon>
              Item 1
          </MenuItem>
          <MenuItem name="2">
              <Icon type="ios-keypad"></Icon>
              Item 2
          </MenuItem>
          <MenuItem name="3">
              <Icon type="ios-analytics"></Icon>
              Item 3
          </MenuItem>
          <MenuItem name="4">
              <Icon type="ios-paper"></Icon>
              Item 4
          </MenuItem>
        </div>
      </Menu>
      <Dropdown trigger="click"  @on-click="headerAction">
        <a href="javascript:void(0)">
            游客
            <Icon type="ios-arrow-down"></Icon>
        </a>
        <DropdownMenu slot="list">
            <DropdownItem name="user_desc">
              <Icon type="md-person" />
              个人资料
            </DropdownItem>
            <DropdownItem name="logout">
              <Icon type="md-exit" />
              注销
            </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </Header>
    <Layout class="layout_con">
      <Sider class="con_sider" v-model="collapsed" :default-collapsed="false" collapsible :collapsed-width="0" :width="200">
        <Menu class="sider_menu" active-name="1-2" theme="dark" width="auto" :open-names="['1']">
          <Submenu name="1">
            <template slot="title">
                <Icon type="ios-navigate"></Icon>
                Item 1
            </template>
            <MenuItem name="1-1">Option 1</MenuItem>
            <MenuItem name="1-2">Option 2</MenuItem>
            <MenuItem name="1-3">Option 3</MenuItem>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
                <Icon type="ios-keypad"></Icon>
                Item 2
            </template>
            <MenuItem name="2-1">Option 1</MenuItem>
            <MenuItem name="2-2">Option 2</MenuItem>
          </Submenu>
          <Submenu name="3">
            <template slot="title">
                <Icon type="ios-analytics"></Icon>
                Item 3
            </template>
            <MenuItem name="3-1">Option 1</MenuItem>
            <MenuItem name="3-2">Option 2</MenuItem>
          </Submenu>
        </Menu>
      </Sider>
      <Layout>
        <Header class="con_header">
          <Breadcrumb>
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Components</BreadcrumbItem>
            <BreadcrumbItem>Layout</BreadcrumbItem>
          </Breadcrumb>
        </Header>
        <Content class="con_content">
            Content
        </Content>
      </Layout>
    </Layout>
  </Layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  private data() {
    return {
      collapsed: false,
    };
  }
  private test(a: number): string {
    // console.log('this is test', a);
    return 'test';
  }
  private headerAction(name: string) {
    // console.log('name', name)
    if (name === 'logout') {
      this.$router.push('/login');
    }
  }
  private mounted() {
    this.test(1);
  }
}
</script>

<style lang="less" scoped>
.app_header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;
}
.layout_con{
  height: calc(100% - 64px);

  .con_sider{
    position: relative;
    .sider_menu{
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 48px;
      overflow-y: auto;
    }
    .ivu-layout-sider-zero-width-trigger{
      top: 10px;
    }
  }
  
  .con_header{
    background-color: #eee;
  }

  .con_content{
    background-color: #fff;
  }
}
</style>
