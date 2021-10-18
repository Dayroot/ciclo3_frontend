<template>
    <div class="footer">
        <div class="footer__title">
            <h1>BOOKSTORE</h1>
            <p>buy your books easily and safely</p>
        </div>
        <div class="footer__contact-info">
            <h2>Contact information</h2>
            <div class="footer__item">
                <img src="../../../assets/icons/phone.svg" alt="phone icon">
                <span>018000-4598-264</span>
            </div>
            <div class="footer__item">
                <img src="../../../assets/icons/location.svg" alt="location icon">
                <span>1304 SW Street 123th Miami-Florida</span>
            </div>
            <div class="footer__item">
                <img src="../../../assets/icons/support.svg" alt="support icon">
                <span>Hours of operation: Monday to Friday<br>from 8:30 AM to 6:00 PM</span>
            </div>
           
        </div>
        <div class="footer__help-center">
            <h2>Help Center</h2>
            <div class="footer__item">
                <img src="../../../assets/icons/conditions.svg" alt="conditions icon">
                <span>Terms and Conditions</span>
            </div>
            <div class="footer__item">
                <img src="../../../assets/icons/world.svg" alt="delivery icon">
                <span>International deliveries</span>
            </div>
            <div class="footer__item">
                <img src="../../../assets/icons/question.svg" alt="questions icon">
                <span>Frequent questions</span>
            </div>

        </div>
        <div class="footer_payment-methods">
            <h2>Payment methods</h2>
            <div class="footer__item">
                <span>Paypal</span>
            </div>
            <div class="footer__item">
                <span>Western union</span>
            </div>
            <div class="footer__item">
                <span>Credit card</span>
            </div>
        </div>
    </div>
    
</template>
<style lang="scss" scoped>

    @import "@/assets/ColorPalette.scss";
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap');

    * {
        color: $white;
        font-size: 0.8rem;
    }
    p, span {
        font-family: 'Lato', sans-serif;
    }
    h2 {
        margin-bottom: 10px;
    }
    img {
        width: 15px;
        height: 15px;
        margin-right: 10px;
        object-fit: contain;
    }
    .footer__item {
        height: 20px;
    }
    .footer {
        margin: 30px 0 0 0;
        padding: 20px;
        background-color: $dark-grey;
        display: grid;
        grid-gap: 20px;
        grid-template-areas:"title title title" 
                            "contact help payment"
                            "contact help payment";
    }
    .footer__title {
        grid-area: title;
        text-align: center;
    }
    .footer__contact-info {
        grid-area: contact;
    }
    .footer__help-center {
        grid-area: help;
    }
    .footer_payment-methods {
        grid-area: payment;
    }
    
</style>