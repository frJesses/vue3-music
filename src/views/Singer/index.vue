<script setup>
import { onMounted, ref } from 'vue'
import { getSingerNavList } from '@/servies/Singer'
import SectionHeader from '@/components/SectionHeader'
import MusicItem from '@/components/MusicItem'
import LetterSelect from './components/LetterSelect.vue'
import { useRouter } from 'vue-router'
import useSinger from '@/store/singer'
const singerStore = useSinger()
const singerNav = ref([])
onMounted(() => {
  if (!singerStore.singerList.length) {
    singerStore.getSingerCategoryList()
  }
  singerNav.value = getSingerNavList()
})
// 点击歌手图片
const router = useRouter()
const singerImgClick = (item) => {
  router.push(`/artist?id=${item.id}`)
}
</script>

<template>
  <div class="singer-wrapper wrapper">
    <div class="left">
      <div class="left-nav" v-for="item in singerNav" :key="item.title">
        <h2 class="left-title">{{item.title}}</h2>
        <ul v-for="list in item.data" :key="list.id" class="left-item">
          <li :class="{'active': singerStore.leftNavCurrent === list.id}" @click="singerStore.changeLeftNav(list)">
            <router-link :to="`/discover/artist?type=${list.type}&area=${list.area}`">{{list.name}}</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="right wrapper">
      <SectionHeader :title="singerStore.singerTitle" :more="''" />
      <LetterSelect/>
      <MusicItem :list="singerStore.singerList.slice(0, 10)" :total="5" :imgUrlField="'picUrl'" :maskVisible="false"
        @imgClick="singerImgClick" class="singer-item">
        <template v-slot="{item}">
          <div class="singer-name">
            <router-link class="name" :to="`/artist?id=${item.id}`">{{item.name}}</router-link>
            <router-link :to="`/user/home?id=${item.accountId}`" v-if="item.accountId">
              <el-icon class="user-icon">
                <UserFilled />
              </el-icon>
            </router-link>
          </div>
        </template>
      </MusicItem>
      <div class="other-singer">
        <template v-for="item in singerStore.singerList.slice(10)" :key="item.id">
          <div class="other-singer-item">
            <router-link class="name" :to="`/artist?id=${item.id}`">{{item.name}}</router-link>
            <router-link :to="`/user/home?id=${item.accountId}`" v-if="item.accountId">
              <el-icon class="user-icon">
                <UserFilled />
              </el-icon>
            </router-link>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.singer-wrapper {
  display: flex;
  padding: 0;

  .left {
    width: 180px;
    padding: 40px 10px 0;

    .left-nav {
      border-bottom: 1px solid #d3d3d3;
      padding: 10px 0;

      &:last-child {
        border-bottom: none;
      }

      .left-title {
        font-size: 16px;
        padding: 10px 0;
      }

      .left-item {
        li {
          line-height: 29px;
          padding-left: 20px;
          border: 1px solid transparent;
          cursor: pointer;

          &.active {
            color: #9b0909;
            border-color: #d3d3d3;
          }
        }
      }
    }
  }

  .right {
    flex: 1;
    border-right: none;

    .singer-item {
      margin-left: -17px;

      :deep(.item) {
        padding: 0 0 30px 17px;

        .cover {
          width: 130px;
          height: 130px;
        }
      }

      .singer-name {
        margin-top: 13px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #000;

        .name {
          &:hover {
            text-decoration: underline;
          }
        }

        .user-icon {
          color: #C10D0C;
          font-size: 16px;
        }
      }
    }

    .other-singer {
      display: flex;
      flex-wrap: wrap;
      border-top: 1px dotted #999;
      padding-top: 15px;

      .other-singer-item {
        width: 20%;
        margin-bottom: 20px;
        display: flex;
        align-items: center;

        .user-icon {
          color: #C10D0C;
          font-size: 16px;
          margin-left: 3px;
        }

        .name {
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
}
</style>
