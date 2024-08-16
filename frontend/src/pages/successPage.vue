<template>
    <div class="content">
        <img src="/icone.svg" class="check" alt="check">
        <h1>Obrigado por se inscrever na nossa newsletter!</h1>
        <p>
            Agora você faz parte da comunidade Mindtech e está a um passo de ficar atualizado com as últimas inovações e tendências em Internet das Coisas (IoT).
            <AlertDialogRoot>
                <AlertDialogTrigger class="trigger">
                    <span>Clique aqui para desinscrever-se</span>
                </AlertDialogTrigger>
                
                <AlertDialogPortal>
                    <AlertDialogOverlay class="AlertDialogOverlay" />

                    <AlertDialogContent class="AlertDialogContent">
                        <AlertDialogTitle class="AlertDialogTitle">
                            Você tem certeza que quer se desinscrever?
                        </AlertDialogTitle>
                        
                        <AlertDialogDescription class="AlertDialogDescription">
                            Esta ação não pode ser desfeita. Isso excluirá permanentemente sua conta e removerá seus dados de nossos servidores.
                        </AlertDialogDescription>
                        
                        <div class="btn-section">
                            <AlertDialogCancel class="Button mauve">
                                Cancelar
                            </AlertDialogCancel>
                            
                            <AlertDialogAction
                                class="Button red"
                                @click="unsubscribe"
                            >
                                Remover
                            </AlertDialogAction>
                        </div>
                    </AlertDialogContent>
                </AlertDialogPortal>
            </AlertDialogRoot>
        </p>
        <img src="../assets/logo-mindtech.svg" class="logo" alt="logo">
    </div>
</template>

<script setup>
    import "../styles/successPage.scss";
    import { useRoute } from 'vue-router';
    import { useToast } from 'vue-toast-notification';
    import axios from "axios";
    import { useRouter } from "vue-router";
    import {
        AlertDialogAction,
        AlertDialogCancel,
        AlertDialogContent,
        AlertDialogDescription,
        AlertDialogOverlay,
        AlertDialogPortal,
        AlertDialogRoot,
        AlertDialogTitle,
        AlertDialogTrigger,
    } from 'radix-vue'

    const toast = useToast();
    const router = useRouter();
    const route = useRoute();
    const email = route.query.email;

    const unsubscribe = async () => {
        if (!email) {
            toast.error('E-mail não encontrado!', { position: 'top-right' });
            return;
        }

        try {
            await axios.delete('http://localhost:3000/user', {
                data: { email }
            });
            
            toast.success('Remoção realizada com sucesso!', { position: 'top-right' });
            router.push("/");
        } catch (error) {
            toast.error('Erro ao desinscrever-se!', { position: 'top-right' });
        }
    };  
</script>
