<template>
    <div>
        <h1 :class="{ navActive: status }">nav</h1>
    </div>
</template>

<script>
export default {
    props: ["status"]
};
</script>

<style lang="scss" scoped>
.nav-active {
    background: red;
}
</style>