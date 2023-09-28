import { ref } from "vue";

// Create a reactive object to serve as the event bus
export const eventBus = ref({
  dataToTransfer: null, // Initialize with your data or leave it as null
});

// export default {
//   eventBus: readonly(eventBus),
// };
