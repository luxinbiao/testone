 $(function()
 {
 		var map = new AMap.Map('mapDiv', {
              resizeEnable: true,
              center:[112.925974,28.223135],
              zoom:10,
          });
          map.on('indoor_create',function(){
              map.indoorMap.showIndoorMap('B000A856LJ',5);
          })
    //地图工具 
    
     map.plugin(['AMap.ToolBar','AMap.Scale','AMap.OverView','AMap.Geolocation','AMap.MapType'],
    function(){
        map.addControl(new AMap.ToolBar());//集成了缩放、平移、定位等功能按钮在内的组合控件
        map.addControl(new AMap.Scale());//展示地图在当前层级和纬度下的比例尺
        map.addControl(new AMap.OverView({isOpen:true}));//右下角的缩放图 
        
         map.addControl(new AMap.Geolocation());//定位
         map.addControl(new AMap.MapType());//卫星和路况
});
 })