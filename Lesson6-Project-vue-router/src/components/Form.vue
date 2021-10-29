<template>

    <form>
        <InputField 
            label="Name"
            identifier="name"
            type="text"
            placeholder="Name"
            v-model="formData.name"
        />

        <InputField 
            label="Email"
            identifier="email"
            type="email"
            placeholder="abc@email.com"
            v-model="formData.email"
        />

        <InputField 
            label="Subject"
            identifier="subject"
            type="text"
            placeholder="Summary of message"
            v-model="formData.subject"
        />

        <label class="form-label fs-5" for="message">Message</label><br>
        <textarea class="form-control message px-4" name="message" id="message" 
            placeholder="Type your message here..." v-model="formData.message" required>
        </textarea>

        <div>
            <Button 
                buttonText="Send"
                :isValidated="isValidated"
                :submitForm="submitForm"
                class="btn-custom"
            />
        </div>
    </form>

</template>

<script>

import InputField from './InputField.vue'
import Button from './Button.vue'

export default {
    name: 'Form',
    components: {
        InputField,
        Button
    },
    data() {
        return {
            formData: {
                name: '',
                email: '',
                subject: '',
                message: ''
            }
        }
    },
    computed: {
        isValidated() {
            if (this.formData.name && this.formData.email && this.formData.subject && this.formData.message) return true
            return false
        }
    },
    methods: {
        submitForm() {
            alert('Thanks for contacting me. I will get back to you soon.')
            this.resetForm()
        },
        resetForm() {
            this.formData.name = '',
            this.formData.email = '',
            this.formData.subject = '',
            this.formData.message = ''
        }
    }
}
</script>