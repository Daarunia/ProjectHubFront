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
            <VueDatePicker
              id="start_date"
              class="input"
              v-model="form.start_date"
            ></VueDatePicker>
          </div>
          <div>
            <label for="end_sate">End date</label>
            <VueDatePicker
              id="end_date"
              class="input"
              v-model="form.end_date"
            ></VueDatePicker>
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
          <button type="submit" @click="submitForm">Save</button>
          <button type="button" @click="closeModal">Cancel</button>
        </div>
      </template>
    </ProjectForm>
  </div>
</template>

<style>
.dp__input {
  display: flex;
  border: 1px solid;
  color: white;
  border-color: grey;
  border-radius: 5px;
  width: 705px;
  height: 60px;
  font-size: 14px;
  margin-bottom: 10px;
  background-color: #243447;
}

.db_input:hover {
  border-color: white;
}

textarea {
  resize: vertical;
}

.project-form {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  flex-direction: column;
}

date-picker {
  display: flex;
  align-content: center;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  margin-bottom: 5px;
}

label {
  padding: 3px;
  color: #aab8c2;
  display: block;
}

date-picker {
  display: flex;
}

input,
textarea,
.input {
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

input:focus,
textarea:focus {
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
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import axios from "axios";

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
    VueDatePicker,
  },
  data() {
    return {
      isModalVisible: false,
      form: {
        name: "",
        description: "",
        start_date: null,
        end_date: null,
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
    resetForm() {
      this.form = {
        name: "",
        description: "",
        start_date: new Date(),
        end_date: new Date(),
        etat: "",
        responsible: "",
      };
    },
    submitForm() {
      axios
        .post("http://127.0.0.1:8000/api/projects", this.form)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
      this.resetForm();
      this.closeModal();
    },
  },
};
</script>
