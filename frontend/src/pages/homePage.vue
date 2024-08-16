<template>
    <div class="col-5 information">
        <h1>Inscreva-se agora!</h1>
        
        <p>
            Preencha o formulário abaixo para se inscrever e comece a receber nossas
            atualizações diretamente na sua caixa de entrada.
        </p>

        <ul>
            <li class="mb-3">
                <img src="/icone.svg" alt="icone"/>
                <span>
                    <b>Guias e Tutoriais:</b>
                    Aprenda como implementar e otimizar soluções de IoT para sua empresa
                </span>
            </li>
            
            <li class="mb-3">
                <img src="/icone.svg" alt="icone"/>
                <span>
                    <b>Notícias e Tendências:</b>
                    Fique por dentro das últimas novidades e avanços do mundo de IoT.
                </span>
            </li>

            <li class="mb-3">
                <img src="/icone.svg" alt="icone"/>
                <span>
                    <b>Ofertas e Promoções:</b>
                    Receba ofertas especiais e promoções exclusivas para assinantes da nossa newsletter.
                </span>
            </li>
        </ul>

        <form class="information__email" @submit.prevent="subscribe">
            <label for="">E-mail</label>
            <input
                type="email"
                v-model="email"
                placeholder="email@email.com"
                required
            />

            <button type="submit" class="btn btn-primary mt-3">Inscrever-se</button>
        </form>
    </div>

    <div class="col-7 img-section">
        <img
            src="../assets/Imagem.png"
            alt="desenho de homem com notebook no colo, em cima escrito IOT"
        />
        
        <img
            src="../assets/logo-mindtech.svg"
            class="bg-logo"
            alt="logo mindtech"
        />
    </div>
</template>

<script setup>
    import "../styles/homePage.scss";
    import { ref } from "vue";
    import axios from "axios";
    import { useRouter } from "vue-router";
    import {useToast} from 'vue-toast-notification';
    import 'vue-toast-notification/dist/theme-sugar.css';

    const toast = useToast();
    const email = ref("");
    const router = useRouter();

    const subscribe = async () => {
        try {
            await axios.post("http://localhost:3000/user", { email: email.value });
            toast.success('Inscrição realizada com sucesso!', {position: 'top-right'});
            router.push({ path: '/success', query: { email: email.value } });
            email.value = "";
        } catch (error) {
            if (error.response.status === 409) {
                toast.error('E-mail já cadastrado!', {position: 'top-right'});
            } else {
                toast.error('Erro ao fazer a inscrição!', {position: 'top-right'});
            }
            
            email.value = "";
        }
    };

</script>