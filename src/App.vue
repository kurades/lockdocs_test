<template>
  <div class="container">
    <div class="side-box">
      <div class="search-container">
        <input type="text" placeholder="Type here...">
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
      </div>
      <div class="chats-container">
        <user-item v-for="user in users" 
        :key="user.id" 
        :item="user" 
        @click.native="changeUser(user.id)">
        </user-item>
      </div>
    </div>
    <chat-box :user="users[currentUser-1]">
    </chat-box>
  </div>
</template>

<script>
import UserItem from './components/UserItem.vue'
import ChatBox from './components/ChatBox.vue'
export default {
  name: 'App',
  methods: {
    changeUser(uid) {
      this.currentUser = uid;
    }
  },
  data() {
    return {
      users: [
        {
          id: 1,
          name: 'name 1',
          currentMessage: 'this is a message 1',
          avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKJiD4KLWsd2S2CFzQOAkMK2ucew_dnvO8Lg&usqp=CAU'
        },
        {
          id: 2,
          name: 'name 2',
          currentMessage: 'this is a message 2',
          avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-d8Ulr8PhmivZwq61ZIMBLH_PJxPTYF9gFw&usqp=CAU'
        },
        {
          id: 3,
          name: 'name 3',
          currentMessage: 'this is a message 3',
          avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgAf0RUJ3H_RSHf6VaSBGWW1_qiOUIypCU6g&usqp=CAU'
        },
        {
          id: 4,
          name: 'name 4',
          currentMessage: 'this is a message 4',
          avatar: 'https://lh3.googleusercontent.com/-oauOGfRGLBU/YkayObi8ECI/AAAAAAAA6uU/6hJIvhjz_74WHTMNvD7XRFdfiFK60tO1gCNcBGAsYHQ/s0/avatar-anime.jpg'
        },
        {
          id: 5,
          name: 'name 5',
          currentMessage: 'this is a message 5',
          avatar: 'https://img.meta.com.vn/Data/image/2022/01/06/avatar-tiktok-24.jpg'
        },
        {
          id: 6,
          name: 'name 6',
          currentMessage: 'this is a message 6',
          avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgpAXlwU5GVNw-WrWDoZfltd-2hoO8-Npj8g&usqp=CAU'
        }
      ],
      currentUser: 1
    }
  },
  components: {
    UserItem,
    ChatBox,
  }
}
</script>

<style>
body {
  margin: 0;
}

.container {
  width: auto;
  height: 100vh;
  background-image: linear-gradient(to left, #5800FF, #72FFFF);
  display: flex;
  align-items: center;
  padding: 0 80px;
  gap: 20px;
}

.side-box {
  width: 300px;
  max-height: 600px;
  height: 600px;
  /* padding: 10px; */
  background-color: rgba(0, 0, 0, .2);
  border-radius: 10px;

}

.chats-container {
  height: calc(100% - 70px);
  overflow-y: scroll;
}

.chats-container::-webkit-scrollbar {
  display: none;
}

.search-container {
  /* width: 300px; */
  height: 50px;
  background: rgba(0, 0, 0, .2);
  border-radius: 10px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  margin: 10px;
}

.search-container>input {
  outline: none;
  border: none;
  color: white;
  font-size: 16px;
  flex: 1;
  background-color: transparent;
}

.search-container>input::placeholder {
  color: #e7e7e7;
}
</style>
