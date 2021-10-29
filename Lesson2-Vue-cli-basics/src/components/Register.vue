<template>
    <div class="d-flex">
        <div class='w-50'>
            <form class="form-container">
                <div class="form-input my-3">
                    <label for='name'>Name</label>
                    <input type="text" v-model='formData.name' />
                </div>
                <div class="form-input my-3">
                    <label for='email'>Email</label>
                    <input type="email" v-model='formData.email' />
                </div>
                <button @click.prevent='submitForm' class="submit-btn" :class="{ disabled : !isValidated }" :disabled='!isValidated'>Log In</button>
            </form>
        </div>
        
        <div class="w-50">
            <table class="table">
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
                <tr v-for='(data, index) in tableData' :key='index'>
                    <td>{{ data.name }}</td>
                    <td>{{ data.email }}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            formData: {
                name: '',
                email: ''
            },
            tableData: []
        }
    },
    computed: {
        isValidated() {
            if (this.formData.name && this.formData.email) return true
            return false
        }
    },
    methods: {
        submitForm() {
            this.tableData.push({...this.formData})
            this.formData.name = ''
            this.formData.email = ''
        }
    }
}
</script>

<style scoped>
* {
    box-sizing: border-box;
}

.my-3 {
    margin: 16px 0;
}

.w-50 {
    width: 50%;
}

.d-flex {
    display: flex;
}

.form-container {
    max-width: 350px;
    margin: 40px auto;
    padding: 40px 20px;
    border: 1px solid tomato;
    border-radius: 15px;
}

.form-input label{
    display: block;
}

.form-input input{
    width: 100%;
    margin: 6px 0 0;
    padding: 8px 22px;
    border-radius: 8px;
    border: 1px solid #000;
}

.form-input input:focus {
    border: 2px solid tomato;
}

.form-input input:focus-visible {
    outline: unset;
}

.submit-btn {
    background-color: tomato;
    color: #FFF;
    border-radius: 20px;
    border: 1px solid tomato;
    padding: 10px 20px;
    cursor: pointer;
    margin-top: 24px;
}

.table {
    width: 400px;
    margin: 40px 20px;
    border: 1px solid tomato;
    border-spacing: 0;
}

td, th {
    padding: 8px 15px;
}

tr:nth-of-type(2n) {
    background-color: tomato;
    color: #FFF;
}

th {
    text-align: left;
}

.disabled {
    background-color: gray;
    border-color: gray;
}

</style>