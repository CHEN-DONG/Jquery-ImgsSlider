# Jquery-ImgsSlider
基于jquery的图片浏览插件，使用方便，对图片尺寸无要求，播放浏览的图片可为任意大小

## Get Started
引入需要的js
```
<script src="scripts/jquery-3.1.0.min.js"></script>
<script src="scripts/imgsSlider.js"></script>
```
创建显示插件dom

```
<div id="imgs_slider"></div>
```
注册组件

```
$('#imgs_slider').ImgsSlider({
     curimg: "",//第一张照片的地址
     imgarray: []//其他所有照片的地址数组
});
```
