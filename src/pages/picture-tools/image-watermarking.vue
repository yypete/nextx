<template>
    <div>
      <div>全选<input type="checkbox" v-model="selectAll" /></div>
      <div>单选框1<input type="checkbox" v-model="single1" @change="handleCheckboxChange" /></div>
      <div>单选框2<input type="checkbox" v-model="single2" @change="handleCheckboxChange" /></div>
      <div>单选框3<input type="checkbox" v-model="single3" @change="handleCheckboxChange" /></div>
    </div>
  </template>
  
  <script>
  import { ref, watch } from 'vue';
  
  export default {
    setup() {
      // 定义单选框的选中状态
      const single1 = ref(false);
      const single2 = ref(false);
      const single3 = ref(false);
  
      // 定义全选框的选中状态
      const selectAll = ref(false);
  
      // 监听全选框的变化
      watch(selectAll, (newValue) => {
        single1.value = newValue;
        single2.value = newValue;
        single3.value = newValue;
      });
  
      // 监听单选框的变化
      watch([single1, single2, single3], ([newSingle1, newSingle2, newSingle3], [oldSingle1, oldSingle2, oldSingle3]) => {
        // 如果任何一个单选框被选中，则全选框也应该选中
        if (newSingle1 || newSingle2 || newSingle3) {
          selectAll.value = true;
        } else {
          // 如果所有单选框都没有被选中，则全选框也应该取消选中
          selectAll.value = false;
        }
      });
  
      // 处理单选框变化的函数
      const handleCheckboxChange = () => {
        // 当任何一个单选框被选中时，全选框也应该被选中
        if (single1.value || single2.value || single3.value) {
          selectAll.value = true;
        }
      };
  
      return {
        single1,
        single2,
        single3,
        selectAll,
        handleCheckboxChange
      };
    }
  };
  </script>