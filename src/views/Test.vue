<template>
  <div id="app">
    <button type="button" class="btn" @click="showModal">Open Modal!</button>

    <ProjectForm v-show="isModalVisible" @close="closeModal">
      <template v-slot:header>
        <h1>Update form</h1>
      </template>
      <template v-slot:body>
        <form @submit.prevent="submitForm" class="project-form">
          <div>
            <label for="name">Name</label>
            <input type="text" id="name" v-model="form.name" />
          </div>
          <div>
            <label for="description">Description</label>
            <textarea id="description" v-model="form.description"></textarea>
          </div>
          <div>
            <label for="start_date">Start date</label>
            <input type="date" id="start_date" v-model="form.start_date" />
          </div>
          <div>
            <label for="end_date">End Date</label>
            <input type="date" id="end_date" v-model="form.end_date" />
          </div>
          <div>
            <label for="etat">État</label>
            <input type="text" id="etat" v-model="form.etat" />
          </div>
          <div>
            <label for="responsible">Responsable</label>
            <input type="text" id="responsible" v-model="form.responsible" />
          </div>
        </form>
      </template>
      <template v-slot:footer>
        <div class="modal-footer">
          <button type="submit">Save</button>
          <button type="button" @click="closeModal">Cancel</button>
        </div>
      </template>
    </ProjectForm>
  </div>
</template>

<style>
.project-form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  margin-bottom: 5px;
}

label {
  color: #aab8c2;
  display: block;
}

input,
textarea {
  border: 1px solid;
  color: white;
  border-color: grey;
  border-radius: 5px;
  width: 700px;
  height: 60px;
  font-size: 14px;
  margin-bottom: 10px;
  background-color: #243447;
}

input:focus, textarea:focus {
  outline: none;
}

input:hover,
textarea:hover {
  border-color: white;
}

input[type="date"]::-webkit-calendar-picker-indicator {
  opacity: 0;
}

button {
  background-color: #1da1f2;
  color: white;
  border: none;
  margin-right: 10px;
  border-radius: 5px;
  padding: 10px;
}
</style>
<script>
import ProjectForm from "../components/modals/ProjectForm.vue";

export default {
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  name: "App",
  components: {
    ProjectForm,
  },
  data() {
    return {
      isModalVisible: false,
      form: {
        name: "",
        description: "",
        start_date: "",
        end_date: "",
        etat: "",
        responsible: "",
      },
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    submitForm() {
      console.log(this.form);
      this.resetForm();
    },
    resetForm() {
      this.form = {
        name: "",
        description: "",
        start_date: "",
        end_date: "",
        etat: "",
        responsible: "",
      };
    },
  },
};
</script>
