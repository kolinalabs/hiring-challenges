<template>
  <div class="box">
    <slot name="title">
      <h2>Métricas</h2> 
    </slot>
    <table class="table">
      <thead>
        <slot name="head"></slot>
      </thead>
      <tbody>
        <slot name="rows"></slot>
      </tbody>
    </table>
  </div>
</template>

<script>

</script>

<style scoped>
  .box {
    background-color: #ffffff;
    border: 2px solid #e7eaec;
    margin: 8px 0;
    padding: 15px;
  }

  .box h2 {
    font-size: 2em;
    font-weight: 300;
    margin: 0;
    text-align: center;
  }

  .box h2 span {
    display: block;
    font-size: 0.5em;
    font-style: italic;
    font-weight: 300;
    padding: 8px 0;
  }

  .table {
    display: table;
    border-collapse: collapse;
    text-align: center;
    width: 100%;
  }

  .table td,
  .table th {
    padding: 15px;
    vertical-align: top;
    width: 33.3%;
  }

  .table td {
    border-top: 1px solid #e7eaec;
  }
</style>
