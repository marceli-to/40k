<template>
  <div class="app mx-auto">
    <div class="counter">
      <label>Current</label>
      <div class="counter__achieved">
        1&thinsp;395.00 (7%)
      </div>
      <label>Target</label>
      <div class="counter__goal">40&thinsp;000.00</div>
    </div>
    <form>
      <h2>Add entry</h2>
      <form-group>
        <input type="text" v-model="form.phone" maxlength="30" placeholder="Amount" />
      </form-group>
    </form>
  </div>
</template>
<script>
import NProgress from 'nprogress';
import ErrorHandling from "@/shared/mixins/ErrorHandling";
import FormGroup from "@/shared/components/ui/form/FormGroup.vue";
import FormError from "@/shared/components/ui/form/FormError.vue";

export default {

  components: {
    NProgress,
    FormGroup,
    FormError
  },

  mixins: [ErrorHandling],

  data() {
    return { 

      // Form
      form: {
        amount: null,
      },

      // Validation
      errors: {
        amount: null,
      },
    }
  },

  methods: {

    submit() {
      // NProgress.start();
      // this.isLoading = true;
      // this.axios.post(`${this.routes.student.register}`, this.form).then(response => {
      //   NProgress.done();
      //   this.isRegistered = true;
      //   this.isLoading = false;
      // });
    },
  },
}
</script>
