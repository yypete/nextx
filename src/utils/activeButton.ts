import { ref } from 'vue';

export function useActiveButton() {
    const activeButton = ref<string>('');
    const setActiveButton = (buttonName:string) => {
        activeButton.value = buttonName;
    };
    return {
        activeButton,
        setActiveButton,
    };
}
