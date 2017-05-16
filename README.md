# fullpage

### 使用方法

* [下载](https://github.com/ranyunlong/fullpage/archive/master.zip/)

## html

```html
<div class="page">
    <div class="section section1">
        <h1>1</h1>
    </div>
    <div class="section section2">
        <h1>2</h1>
    </div>
    <div class="section section3">
        <h1>3</h1>
    </div>
</div>
```
## javascript

```javascript
<link rel="stylesheet" href="dist/css/fullpage.css">
<script src="src/js/fullpage.js"></script>
<script type="text/javascript">
    fullpage({
        el: '.page', //绑定fullpage
        option: '.section', //页面项目
    });
</script>
```

## 运行项目
* gulp