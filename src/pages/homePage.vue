<template>
    <div class="col-5 information">
        <h1>Inscreva-se agora!</h1>
        <p>Preencha o formulário abaixo para se inscrever e comece a receber nossas atualizações diretamente na sua caixa de entrada.</p>

        <ul>
            <li class="mb-3"><b>Guias e Tutoriais:</b> Aprenda como implementar e otimizar soluções de IoT para sua empresa.</li>
            <li class="mb-3"><b>Notícias e Tendências:</b> Fique por dentro das últimas novidades e avanços do mundo de IoT.</li>
            <li class="mb-3"><b>Ofertas e Promoções:</b> Receba ofertas especiais e promoções exclusivas para assinantes da nossa newsletter.</li>
        </ul>

        <form class="information__email" @submit.prevent="subscribe">
            <label for="">E-mail</label>
            <input type="email" v-model="email" placeholder="email@email.com" required>
            
            <button type="submit" class="btn btn-primary mt-3">Inscrever-se</button>
        </form>

    </div>

    <div class="col-7 img-section">
        <img src="../assets/Imagem.png" alt="desenho de homem com notebook no colo, em cima escrito IOT">
        <img src="../assets/logo-mindtech.svg" class="bg-logo" alt="logo mindtech">
    </div>
</template>

<script setup>
    import "../styles/homePage.scss";
    import { ref } from "vue";
    import axios from "axios";

    const email = ref('');

    const subscribe = async () => {
        try {
            await axios.post('http://localhost:5000/api/subscribe', { email: email.value });
            alert('Inscrição realizada com sucesso!');
            email.value = ''; 
        } catch (error) {
            console.error('Erro ao se inscrever:', error);
            alert('Ocorreu um erro. Tente novamente.');
        }
    };
</script>