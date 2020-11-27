<template>
    <div class="home">
        
    </div>
</template>

<script>

export default {
    name: "Home",
    components: {},
    data() {
        return {
            username: "",
            password: ""
        };
    },
    methods: {
        onSubmit(values) {
            console.log("submit", values);
        }
    }
};
</script>
