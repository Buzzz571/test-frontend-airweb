<template>
   <!--CART PAGE-->
    <section class="all-cart">
        <section class="cart">
            <div class="cart-logo">
                <span class="cart">
                    <i class="fa-solid fa-cart-shopping"></i>
                </span>
                <h2> Votre panier </h2>
            </div>
        </section>
        <section class="in-cart">
            <div class="article">
                <li>Artcile </li>
                <li>Artcile </li>
                <li>Artcile </li>
            </div>
            <div class="article-price">
                <li>25€</li>
                <li>25€</li>
                <li>25€</li>
            </div>
        </section>
        <section class="total-container">
            <span class="text">TOTAL</span>
            <span class="total-price">125€</span>
        </section>
        <section class="payment">
            <button class="buy-btn" type="button">
                Accéder au paiement
            </button>
        </section>
    </section>
</template>

<script>
export default {
    data() {
        return{

        }
    },

}
</script>

<style lang="scss" scoped>
/* CART PAGE */
.cart-logo {
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: baseline;
}
.cart{
    margin: 15px;
}
.in-cart{  
    margin: 10px;  
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;        
}
.article , .article-price{
    list-style: none;
}
.article li , .article-price li {
    margin-bottom: 16px;
}
.total-container{
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    margin: 10px;
    background: #DADADA;
    border-radius: 5px;
    font-size: 17px;
    font-weight: bold;
    padding: 10px;
}
.payment{
    display: flex;
    justify-content: flex-end;
}
.buy-btn{
    text-transform: uppercase;
    background: #4F4F4F;
    color: #fff;
    padding: 10px;
    margin: 40px 10px;
}
.all-cart{
    max-width: 400px;
}
/* RESPONSIVE CART */
@media(min-width:426px){
.all-cart {
    max-width: 400px;
    margin: auto;
}
}

</style>