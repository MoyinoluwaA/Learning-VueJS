<template>

    <div class="about-enyata p-5 mt-5">
        <h2 class="text-green fw-bold mb-4">Enyata</h2>
        <div>
            <p>
                Enyata is a technology company providing engineering-as-a-service solutions at scale to organizations 
                across multiple industries. Our expert teams of engineers, data scientists, designers, and product managers 
                aggregate decades of industry experience. Innovation and sustainability are at the core of the work we do at 
                Enyata, and that is why our clients trust us.
            </p>
            <p>
                Enyata has an academy which is free and trains students on becoming a world class software engineer. I am privileged 
                to be one of the students for cohort 5.
            </p>
            <p>To learn more about the academy, click <a :href="enyataAcademyUrl" target="_blank">here</a></p>
        </div>
    </div>

</template>

<script>
export default {
    name: 'About Enyata',
    data() {
        return {
            enyataAcademyUrl: 'https://enyata.com/academy'
        }
    }
}
</script>

<style>

</style>