import { onMounted, onUnmounted } from 'vue';

export function useScroll(callback: () => void) {

    onMounted(() => {
        window.addEventListener('scroll', callback);
    });

    onUnmounted(() => {
        window.removeEventListener('scroll', callback);
    })
}