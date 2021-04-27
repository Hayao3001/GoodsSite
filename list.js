Vue.use(VueTables.ClientTable);

new Vue({
  el: '#app',
  data() {
    return {
      loading: true,
      errored: false,
      columns: [
        '物品名',
        '種類',
        'ISBN',
        '貸出状況'
      ],
      data: [],
      options: {
        sortable: [
          'name'
        ],
        texts: {
          filterPlaceholder: 'search'
        },
        columnsDropdown: true,
        perPage: 25
      }
    }
  },
  filters: {
    currencydecimal(value) {
      return value.toFixed(2)
    }
  },
  mounted() {
    // axiousを用いてスプレットシート（APIサーバ化）から値を取得
    axios
      .get('https://script.google.com/macros/s/AKfycby85ok9yaaik5KS4EPCPOVNFGyHLBlbQybP6d3xvzQboyEkvtU/exec')
      .then(response => {
        this.data = response.data
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
  }
})