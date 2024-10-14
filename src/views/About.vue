<template>
    <div class="about-page">
        <header class="about-header fade-in">
            <h1>About Us</h1>
        </header>
        <div class="about-body">
            <p class="fade-in">
                Welcome to Pancoran Soccer Field! As a sports destination in the heart of Jakarta's city center, we are
                offering two soccer fields and one 3x3 basketball court for your recreational and competitive
                activities. Our goal is to make our venue the second home for soccer enthusiasts in Jakarta and its
                surrounding areas.
            </p>
            <p class="fade-in">
                What sets us apart is the quality of our fields, which meet FIFA standards, ensuring an optimal playing
                experience for soccer enthusiasts. Additionally, we provide comprehensive facilities to support
                activities and offer comfort for visitors.
            </p>
            <p class="fade-in">
                Carefully prepared to meet the needs of sports enthusiasts, Pancoran Soccer Field delivers an
                unparalleled experience in playing soccer and basketball. The support from the Air Force further
                enhances our excellence in managing this facility, ensuring professional and reliable management.
                Pancoran Soccer Field is ready to be your top choice for enjoying sports and relaxation in Jakarta.
            </p>
        </div>
    </div>
</template>

<style scoped>
.about-page {
    margin: 2rem auto;
    padding: 1rem;
    max-width: 800px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.about-header {
    text-align: center;
    margin-bottom: 2rem;
}

.about-header h1 {
    font-size: 2.5rem;
    font-weight: bold;
}

.about-body {
    line-height: 1.6;
    font-size: 1.1rem;
}

.about-body p {
    margin-bottom: 1.5rem;
}

/* Animation Styles */
.fade-in {
    animation: fadeIn 0.8s ease forwards;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
        /* Start slightly lower */
    }

    to {
        opacity: 1;
        transform: translateY(0);
        /* End in place */
    }
}

@media (min-width: 1024px) {
    .about-body {
        font-size: 1.2rem;
    }
}
</style>