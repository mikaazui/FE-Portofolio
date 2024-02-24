<template>
  <!-- modal -->
  <input type="checkbox" v-model="show_modal" class="modal-toggle" />
  <div class="modal" role="dialog">
    <div class="modal-box">
      <form method="dialog">
        <label @click="$emit('close')" class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
      </form>
      <div class="text-xl font-semibold">Edit Education Data</div>
      <div>

        <label class="form-control w-full max-w-xs">
          <div class="label">
            <span class="label-text">institution Name</span>
          </div>
          <input  type="text" placeholder="institution Name"
            class="input input-bordered w-full max-w-xs" />
          <div class="text-xs text-right text-error" >{{  }}</div>
        </label>
        <!--  -->
        <label class="form-control w-full max-w-xs">
          <div class="label">
            <span class="label-text">City</span>
          </div>
          <input  type="text" placeholder="City"
            class="input input-bordered w-full max-w-xs" />
          <div class="text-xs text-right text-error" >{{  }}</div>
        </label>
        <!--  -->
        <label class="form-control w-full max-w-xs">
          <div class="label">
            <span class="label-text">Start Year</span>
          </div>
          <input  type="text" placeholder="Start Year"
            class="input input-bordered w-full max-w-xs" />
          <div class="text-xs text-right text-error" >{{  }}</div>
        </label>
        <!--  -->
        <label class="form-control w-full max-w-xs">
          <div class="label">
            <span class="label-text">End Year Year</span>
          </div>
          <input  type="text" placeholder="End Year"
            class="input input-bordered w-full max-w-xs" />
          <div class="text-xs text-right text-error" >{{  }}</div>
        </label>
        <!--  -->
        <label class="form-control w-full max-w-xs">
          <div class="label">
            <span class="label-text">Major</span>
          </div>
          <input  type="text" placeholder="Major"
            class="input input-bordered w-full max-w-xs" />
          <div class="text-xs text-right text-error" >{{  }}</div>
        </label>
        <!--  -->
        <label class="form-control w-full max-w-xs">
          <div class="label">
            <span class="label-text">Degree</span>
          </div>
          <input  type="text" placeholder="Degree"
            class="input input-bordered w-full max-w-xs" />
          <div class="text-xs text-right text-error" >{{  }}</div>
        </label>

      </div>
      <div class="modal-action">
        <label @click="$emit('close')" class="btn text-white btn-error">Cancel</label>
        <label class="btn text-white btn-success" @click="$emit('yes')">Confirm Edit</label>
      </div>
    </div>
    <form method="dialog" class="modal-backdrop">
      <label @click="$emit('close')">close</label>
    </form>
  </div>
</template>

<script setup>
const props = defineProps({
  show: Boolean
  // text_confirm: String
})
defineEmits(['close', 'yes'])
const show_modal = ref(false)
watchEffect(() => {
  show_modal.value = props.show
})


</script>

<style></style>