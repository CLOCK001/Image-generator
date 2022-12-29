const app = Vue.createApp({
    //data or output
    data(){
        return{
            pic : 'https://picsum.photos/200/300'
        }
    },
    methods:{
        random() {
            //RANDOM NUMBER
            numberRAND = Math.floor(Math.random() * 1001);
            //add the random number to the site link
            this.pic = 'https://picsum.photos/id/' + numberRAND + '/200/300'
        }
    }
})

//add to app id
app.mount('#app')