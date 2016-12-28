# vue-github-vcard

### 使用示例

```git
git clone https://github.com/PLDaily/vue-slider.git
```

```git
npm install
```
```git 
//测试
gulp dev
```
```git
//发布
gulp default
```

### 调用示例
```javascript
<style type="text/css">
*{
	padding: 0;
	margin: 0;
}
</style>
<template>
<div id="main">
	<github :githubinit="githubinit"></github>
</div>
</template>
<script>
import Github from './Github.vue'
export default {
    components: { 'github': Github },
    data () {
    	var githubinit = {
    		username: "PlDaily",
    		width: 260,
    		position: "right"//"left": 左侧；"center": 居中；"right"：右侧
    	};
		return {
			githubinit: githubinit
		}
    }
}
</script>
```


### sliderinit参数

|  参数名称 | 类型 | 是否必须 |  示例  | 参数说明 | 默认 |
| :-----: | :----: | :--: | :--: | :-----: |:----------: |
| username | string |  是   | "PlDaily"  | github用户名 | 无 |
| width | number |  是   | 320  | github名片宽度 | 无 |
| position | string |  是   | "right"  | github名片头像显示位置 | 无 |


### 具体项目中运用

[vuejs-project](https://github.com/PLDaily/vuejs-project)

### 完善
1.样式调整
