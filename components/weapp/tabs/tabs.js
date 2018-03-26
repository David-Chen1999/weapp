// components/cdw/tabs.js
Component({
  relations: {
    '../tab/tab':{
      type:'child',
      linked: function(target){
        this.data.list.push(target.properties.title);
        this.setData({
          list: this.data.list
        })
      }
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    activeIndex: 0,
    list: []
  },
  //组件布局完成后执行,初始化initPage
  ready:function(){
    let nodes =this.getRelationNodes('../tab/tab');
    //未定义initPage 的值
    let noInit = nodes.every(function(v){
      return v.properties.initPage == false;
    })
    if(noInit){
      nodes[0].setData({
        visible: true
      })
      return;
    }
    nodes.map((v,i)=>{
      if(v.properties.initPage){
        v.setData({
           visible:true
        })
        this.setData({
          activeIndex: i
        })
      }
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    action(event) {
      let { activeIndex} = this.data;
      let idx = event.currentTarget.dataset.idx;

      if (activeIndex == idx) return;

      activeIndex = idx;

      let nodes =this.getRelationNodes('../tab/tab');
      nodes.map((v,i)=>{
         // v.properties.initPage = false;
        if(i == activeIndex){
          nodes[i].setData({
            visible: true
          }) 
        } else {
          nodes[i].setData({
            visible: false
          }) 
        }
      })
      this.setData({
        activeIndex: activeIndex
      });

      this.triggerEvent('change', { activeIndex });
    }
  }
})
