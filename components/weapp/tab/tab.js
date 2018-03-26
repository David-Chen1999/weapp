// components/cdw/tab/tab.js
Component({
  /**
   * 组件的属性列表
   */
  relations: {
    '../tabs/tabs':{
      type:'parent',
      linked: function(target){
        // console.log(target)
      }
    }
  },
  properties: {
    title: String,
    initPage: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
      visible:false
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
