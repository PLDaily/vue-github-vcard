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
    		position: "right"
    	};
		return {
			githubinit: githubinit
		}
    }
}
</script>