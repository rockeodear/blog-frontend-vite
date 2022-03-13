<template>
  <div class="top-menu">
    <div class="top-main">
      <div class="avatar">
        <el-avatar shape="square" :size="40" :src="avatarUrl"></el-avatar>
      </div>
      <el-divider direction="vertical"></el-divider>
      <template v-for="item in menuList">
        <div :class="`menu-item ${activeBar === item.path ? 'menu-item-active' : ''}`" @click="toPage(item.path)">
          {{ item.text }}
        </div>
      </template>
      <div class="flex-full-empty"></div>
      <div class="search">
        <input type="text" v-model="queryKey" placeholder="请输入关键字" />
        <button type="button">
          <svg-icon name="search" :size="28" />
        </button>
        <span class="icon"></span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getCurrentInstance, onMounted, ref } from 'vue'
import router from 'router'

const avatarUrl = ref(
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202004%2F27%2F20200427000107_hiebd.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1649649936&t=bd11cb149cd14751a0408c895bb7ee5c'
)

const activeBar = ref('/index')

const menuList = [
  {
    text: '首页',
    path: '/index',
  },
  {
    text: '归档',
    path: '/archive',
  },
  {
    text: '分类',
    path: '/categories',
  },
  {
    text: '荒唐走板',
    path: '/journals',
  },
]

onMounted(() => {
  activeBar.value = router.currentRoute.value.path
})

const queryKey = ref('')

const toPage = path => {
  activeBar.value = path
  router.push(path)
}
</script>

<style lang="scss" scoped>
.top-menu {
  background-color: #fff;
  font-size: 14px;
  height: 50px;

  .top-main {
    margin: 0 auto;
    height: 100%;
    width: 78%;
    background-color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }
}
.avatar {
  margin: 5px 10px 0 10px;
}

.menu-item {
  margin: 10px 20px 0 20px;
  padding-bottom: 10px;
  transition: ease 0.5s;
  cursor: pointer;

  &:hover {
    transition: ease 0.5s;
    color: rgba(255, 165, 0, 0.9);
    border-bottom: 2px solid rgba(255, 165, 0, 0.8);
    opacity: 0.8;
  }
}

.menu-item-active {
  transition: ease 0.5s;
  color: #ff6c07;
  border-bottom: 2px solid #ff6c07;
}

.search {
  position: relative;
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  input {
    background-color: rgba(28, 28, 28, 0.05);
    width: 170px;
    height: 34px;
    border: 1px solid transparent;
    padding: 0 14px 0 16px;
    color: #8c939d;
    transition: width 0.35s, border-color 0.35s, padding-right 0.35s;
    border-radius: 17px 0 0 17px;
  }
  input:focus {
    background: #fff;
    border-color: #ff6c07;
    padding-right: 28px;
    width: 170px;
  }
  & input:focus ~ span.icon {
    transform: translate3d(0, -50%, 0) rotateY(180deg);
    -webkit-transform: translate3d(0, -50%, 0) rotateY(180deg);
  }
  button {
    position: relative;
    z-index: 1;
    width: 50px;
    height: 34px;
    color: #fff;
    border: none;
    background: #ff6c07;
    border-radius: 0 17px 17px 0;
  }
  .icon {
    position: absolute;
    top: 50%;
    right: 44px;
    width: 28px;
    height: 38px;
    background-size: 100% !important;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAmCAYAAADX7PtfAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAHKElEQVRYw93Xe3DNdxrH8ecXiSK7i1qWFWW3rekiE2x3VEemtkkVVbWy4jY6atma2YpS6rJoozvbpRF1qW1EEYIk5xZE5EKE3CQi0SB30VwEIeeWnDi3nPf+kUNTE1R3mNn945n5nZkz8zrP53y/39/3EUCeZsn/HCgi80Rky1MDn/H2vjB6SpBVRMb9V6CI+InIBhE58bOez5b9xm9E0wu//0NTr/4+9SKyX0TGicjiP320kpBd+xCRv/0kUFEUf49OnfJGBwWzWn3UcfCGSa8xO1zxFoi3gLbJyZb8S/QeOIhRb0/hiA1GvjkREfF9bFBEQv0C3ySyrIaEO5DjaCXFYkdttKEyWFEbrKiNNjRmBztLrrIqVsfAYb507tJVryjKi48FisiK8Qs/IL4FVEYbOTY7l3FSjJNCp4PDpnZoOzi+BSKKq+j3wostiqK8/KPBv27+6pja9H03uXYHl3FwyeWgGCcFTscPwXalMdnZU1VPn4GDTCLS90eB2ibHHpXRhtpgRWWwkmqxU4yTEpwcvaUno7kZ7f1dtitds4tVcYcRkZMiskhRlCEPBdUG2/a7oNpoQ2Oyc8zUwrsp+QREp7CxpA6N0YbaaENtvBtrW2lMdsIy8xn00u/4aPly9h04QEBgICKy+oGgymiNUBltaN2xflxwlUmqdArKvyX0RBZf1ejbge5y/zi10cbg4SO4Ul3N8dRUqmprcQETJ01CUZQxHXdotH+jMtpYdLact9RniMzOxX6rDAzlrEzOIKLO+EPMXRqTnbCs88yePQuA18aOpWuPXuyIiKCouBgROfQA0Bq1tqiGsPRsMFbiaigBfQXoy1mZnMnOa6YOMBsHb7ewKbuAWTNnAhAQGEjPPn3JyMmh2W5HUZScDkGd0b5/RuoFqmtLiNj8GSLCxcwEMFTw95RM/l1ruBepxtTW2YKMYiYdPouuycHg4SOpqa8nTqPhclkZDuBcYSEiEtMxaLZHByXmU1qUiYeHByLCsZhIMFayPfMs/yy9TrzZQZzByqeX6pigzSLqbB5z4k+jNTvYcCqbvj4++i/Cwi7kFZxvidq/3+UzYAAi8l6HYLzZfiAoIZfoiHBEBBGhNDcZ9BXkln5LoCaLoMR8punOsCM7j8b6EjBWsDjxDHtuNKE1O9h95RrT14QyJngm01at48u8IkTktPtg6da9e/dffb8PTXbVVG0mqRva4pw8PgBMV6CxHBrLuVhZRMO1Ypw3LrPt8zXYrl8CfTmrUzL5ut2C0jY50TW3om1yEm+B/oNf0rvBYfPff//59pEefUd9BtKPU5oQS+vtMmgsx3W7DJf7GfNV5kyfgoiQpNoNxko+Tsog8u6Cuu8wiLfAb/2Gt7hBRUR6tAdTpmozQV/etjrbYXfBxspzKEpb3MU5x8FYwUxdOirDfXvTvT+1TU569vt17YP+w+RJ0ae4WdUWlcsdJfqKtmd9BWcSDiIijHvdH8xVVFdfYmpiPjqznQP1BmIamu6dRBqTnfCcQkQkukPQPyZdNToqzfZWaLKzuvwiGCpoLcrAnqS917G1/iKfL5iLMUkH3xWiK8hnWX4Vhy0uJi9ayqpYHRqzo+1stbgIePc9u4i83iE4O7128cvRp1mRZ2Hy+qRWQ25aW2d1RW0x3+04/zScTITcNJYmZxFxzcj+2lsM8vUjrrHlXrRR1Q107tLlYodnqaIo2iHDhlp8g+bzaSkcqbO0xiXn80boCdbtOkXuuUJuVRdjqbuI42YxNXmpLFkwh6FvTOCoDdeYP09nVazOpWtuRW20oWtu5Z0PlyMiwR2CIrJbG7WNyPD1DBrxCoEh61snhEYwcc1WXvnLelffgOX6gcE7VN1+3sM2cuwfEU9PRCRtftgWQnbupVf/AQSvXMta3TE0ZgeHbprx7tGz6oGvJxHx8vDyOr35sxWYrp4n8VAEsZGbiNsVTvy+7TzXr0+j+3sHRkx4G1GUnc90885bGhWDh4dHlqIo10Xk9oqDanQWF/M3bUVEPnjo+/CTEkJeXbgOX9+h/GPlIrR7t3I8difHYiLp3evZanf03iIyQkR6iKcXnl6dTymK0lVRFD8RmTpj7XqO2mDIq/6ISM+HgicbnPM+r4TVhS1M26IhYNlGxixcg4hiFpHnOrjd/fL+z8P8XyPmtoVOXl6Zj7xinLrpnLux3EXaDQff1ED4dxD8ZRwisvYxbuHquf8KR0Q2PRJcdcm5JL3BwR2blRablVZg1KhRLkVRej8GOFg6dUJEFj0S3F3NYpPVRrPNSovDweGEBERkx0+YNWYoivL8I8E7Tue8O04nFrsdBzDG3x8R8Xli01NISMiSrdu2kZGTzd7oaERk7xMd12ZFJC0b/8nX9Brsh4ikiUj3Jwpes/Ph3qzLeHb7RbGIeD7xgfRIQsIyH5/+RkVR+j+VCXjkyJHdFEXx/r+b8f8DZyW8Jd6/P38AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDItMjBUMTE6NTI6MjQrMDA6MDA4bfPmAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTAyLTIwVDExOjUyOjI0KzAwOjAwSTBLWgAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAAASUVORK5CYII=);
    transform: translate3d(100%, -50%, 0) rotateY(180deg);
    transition: transform 0.35s, -webkit-transform 0.35s;
  }
}
</style>
