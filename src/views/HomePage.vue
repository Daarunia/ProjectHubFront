<template>
  <div class="container">
    <div class="card-container">
      <div v-for="project in json.data" :key="project.id" class="card">
        <h2 class="project-name">{{ project.name }}</h2>
        <p>Description: {{ project.description }}</p>
        <p>Date de début: {{ project.start_date }}</p>
        <p>Date de fin: {{ project.end_date }}</p>
        <p>État: {{ project.etat }}</p>
        <p>Responsable: {{ project.responsible }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      json: "",
    };
  },
  mounted() {
    axios
      .get("http://localhost:8000/api/projects")
      .then((response) => {
        this.json = response.data;
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>

<style scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.container {
  width: 60%;
  margin: 0 auto;
}

.project-name {
  text-align: center;
}
.card {
  border: 1px;
  border-radius: 4px;
  padding: 10px;
  background-color: #422541;
}
</style>
