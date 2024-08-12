<template>
    <div class="container">
        <div class="row banner">
            <div class="circle"></div>

            <div class="col-5 information">
                <h1>Inscreva-se agora!</h1>
                <p>Preencha o formulário abaixo para se inscrever e comece a receber nossas atualizações diretamente na sua caixa de entrada.</p>
    
                <ul>
                    <li class="mb-3"><b>Guias e Tutoriais:</b> Aprenda como implementar e otimizar soluções de IoT para sua empresa.</li>
                    <li class="mb-3"><b>Notícias e Tendências:</b> Fique por dentro das últimas novidades e avanços do mundo de IoT.</li>
                    <li class="mb-3"><b>Ofertas e Promoções:</b> Receba ofertas especiais e promoções exclusivas para assinantes da nossa newsletter.</li>
                </ul>
    
                <div class="information__email">
                    <label for="">E-mail</label>
                    <input type="email" placeholder="email@email.com">
                </div>
    
                <button type="button" class="btn btn-primary">Inscrever-se</button>
            </div>
    
            <div class="col-7 img-section">
                <img src="../assets/Imagem.png" alt="desenho de homem com notebook no colo, em cima escrito IOT">
                <img src="../assets/logo-mindtech.svg" class="bg-logo" alt="logo mindtech">
            </div>
        </div>
    </div>
</template>

<script setup>
    import "../styles/homePage.scss";
</script>