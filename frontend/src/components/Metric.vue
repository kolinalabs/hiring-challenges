<template>
  <div class="page">
    <header class="header">
      <h1 class="title">Métricas</h1>
      <span class="date">{{ getDate }}</span>
    </header>
    <section>
      <Table>
        <h2 slot="title">
          Milestones
          <span>Issues por grupos ativos</span>
        </h2>
        <tr slot="head">
          <th>Título</th>
          <th>Abertas</th>
          <th>Concluídas/Total (%)</th>
        </tr>
        <tr
          slot="rows"
          v-for="milestone in milestones">
          <td>{{ milestone.name }}</td>
          <td>{{ milestone.issues.open }}</td>
          <td>
            {{ milestone.issues.closed }}
            /
            {{ milestone.issues.total }}
          </td>
        </tr>
      </Table>
      <Table>
        <h2 slot="title">
          Labels
          <span>Issues por módulos</span>
        </h2>
        <tr slot="head">
          <th>Título</th>
          <th>Abertas</th>
          <th>Total</th>
        </tr>
        <tr
          slot="rows"
          v-for="label in labels">
          <td>{{ label.name }}</td>
          <td>{{ label.issues.open }}</td>
          <td>{{ label.issues.total }}</td>
        </tr>
      </Table>
    </section>
  </div>
</template>

<script>
  export default {
    data: () => ({
      milestones: [],
      labels: []
    }),
    computed: {
      getDate() {
        const months = [
          'janeiro',
          'fevereiro',
          'março',
          'abril',
          'maio',
          'junho',
          'julho',
          'agosto',
          'setembro',
          'outubro',
          'novembro',
          'dezembro'
        ]

        const time = new Date()

        const year = time.getFullYear()
        const month = months[time.getMonth()]
        const day = time.getDate()

        return `domingo, ${day} de ${month} de ${year}`
      }
    },
    mounted() {
      fetch('http://localhost:3000/metrics/milestones')
        .then(x => x.json())
        .then(x => { this.milestones = x })

      this.labels = [
        { name: 'Static', issues: { open: 1, closed: 1, total: 2 } }
      ]
    }
  }
</script>

<style scoped>
  .page {
    padding: 8px;
  }

  .header {
    background-color: #ffffff;
    display: block;
    padding: 15px;
  }

  .title {
    font-weight: 400;
    margin: 0;
  }

  .date {
    display: block;
    padding-top: 5px;
  }

  .clearfix:after,
  .clearfix:before {
    content: "";
    display: table;
  }

  .clearfix:after {
    clear: both;
  }
</style>
