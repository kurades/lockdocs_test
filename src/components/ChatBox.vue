<template>
    <div class="chat-box">
      <div class="chat-box-header">
        <div class="header-avatar">
          <img :src="user.avatar" alt="">
        </div>
        <div class="header-content">
          <span class="header-content-name">{{user.name}}</span>
          <span class="header-content-message">123 messages</span>
        </div>
        <div class="header-icons">
          <font-awesome-icon icon="fa-solid fa-video" />
          <font-awesome-icon icon="fa-solid fa-phone" />
          <font-awesome-icon icon="fa-solid fa-ellipsis-vertical" />
        </div>
      </div>
      <div class="chat-box-messages">
          <div 
          v-for="(message,index) in messages" :key="index"
          :class="['message',message.type==='sender' ?'sender':'receiver' ]">
          <div class="avatar">
            <img :src="message.type === 'receiver'?user.avatar:'http://images6.fanpop.com/image/photos/39400000/Angry-Cat-cats-39479104-700-933.jpg'" alt="">
          </div>
          <div class="content">{{message.content}}</div>
          </div>
      </div>
      <div class="chat-box-input">
        <div class="chat-box-input-container">
          <font-awesome-icon icon="fa-solid fa-paperclip" />
          <input type="text" placeholder="Type message here...">
          <font-awesome-icon icon="fa-solid fa-paper-plane" />
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    props : ['user'],

    data(){
      return {
        messages : [
          {
            type : 'sender',
            content : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed erat viverra,'
          },
          {
            type : 'receiver',
            content : 'Etiam nisl nisl, convallis ac cursus eu, ultricies sit amet mauris.'
          },
          {
            type : 'receiver',
            content : 'Ut faucibus efficitur velit,'
          },
          {
            type : 'sender',
            content : 'L adipiscing elit. Morbi tincidunt purus vitae libero lacinia, '
          },
          {
            type : 'sender',
            content : 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. '
          },
          {
            type : 'receiver',
            content : ' elit, quis dignissim risus interdum eu. Etiam id ultricies enim.'
          },
          {
            type : 'receiver',
            content : 'e consequat eu. Duis ut velit porta, '
          },
          {
            type : 'sender',
            content : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed erat viverra,'
          },
          {
            type : 'receiver',
            content : 'nisi nunc maximus erat, a suscipit eros orci eget mauris'
          },
          {
            type : 'sender',
            content : 'Aenean eget justo et tortor sodales interdum.'
          },
          {
            type : 'sender',
            content : 'Etiam accumsan placerat lacinia. Intege'
          },
        ]
      }
    }
  }
</script>

<style scoped>
.chat-box{
  /* width: 1000px; */
  flex: 1;
  /* max-width: 700px; */
  height: 600px;
  background: rgba(0, 0, 0, .2);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
}

.chat-box-header{
  border-radius: 10px 10px 0 0 ;
  background-color: rgba(0, 0, 0, .2);
  color: white;
  display: flex;
  gap: 20px;
  padding: 10px;
  /* height: 90px; */
}
.header-avatar{
  width: 80px;
  height: 80px;
  overflow: hidden;
  border-radius: 50%;
}
.header-avatar>img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.header-content>.header-content-name{
  font-size: 2rem;
  margin: 10px 0;
  display: block;
}
.header-icons{
  font-size: 2rem;
  margin-left: auto;
}
.header-icons>*{
  margin: 15px 20px 0 20px;
}
.chat-box-input{
  margin-top: auto;
}
.chat-box-input-container{
  background: rgba(0, 0, 0, .2);
  border-radius: 10px;
  margin: 10px;
  color: white;
  display: flex;
  padding: 10px;
  gap: 10px;
  font-size: 1.5rem;
  align-items: center;
  
}
.chat-box-input-container>input{
  flex : 1;
  background-color: transparent;
  outline: none;
  border: none;
  color: white;
  font-size: 18px;
  padding: 8px 0;
}
.chat-box-input-container>input::placeholder{
  color: #e1e1e1;
}
.chat-box-messages{
  overflow-y: scroll;
  padding: 0 10px;
}
.chat-box-messages::-webkit-scrollbar{
  display: none;
}
.message{
  display: flex;
}
.message.sender{
  flex-direction: row-reverse;
}
.message>.content{
  color: white;
  font-size: 18px;
  margin: 10px;
  display: inline-block;
  padding: 10px;
  border-radius: 10px;
}
.message.sender>.content{
  text-align: start;
  background-color: #7f4be7;
  margin-left: 10px;
}
.message.receiver>.content{
  text-align: end;
  background-color: #0dc57b;
  margin-right: 10px;
}
.message>.avatar{
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
}
.message>.avatar img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>