<template>
<div class="chat-box">
    <div class="avatar">
        <img :src="item.avatar" alt="">
    </div>
    <div class="chat-content">
        <span class="user-name">{{item.name}}</span>
        <span class="user-message">{{item.currentMessage}}</span>
    </div>
</div>
</template>

<script>
export default {
    props : ['item']
}
</script>

<style scoped>
.chat-box{
    display: flex;
    color: white;
    margin-bottom: 10px;
    gap: 10px;
    transition: .2s;
    padding: 10px;
    cursor: pointer;
}
.chat-box:hover{
    background-color: rgba(0, 0, 0, .2);
}
.avatar{
    width: 70px;
    height: 70px;
    overflow: hidden;
    border-radius: 50%;
}
.avatar>img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.chat-content{

}
.chat-content>.user-name{
    display: block;
    font-size: 24px;
    margin: 7px 0;
    text-transform: capitalize;
}
</style>
