<style type="text/css">
body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 14px;
    color: #333;
}
a {
    text-decoration: none!important;
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
    		width: 230,
    		position: "right"
    	};
		return {
			githubinit: githubinit
		}
    }
}
</script>