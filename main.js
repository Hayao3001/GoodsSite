Vue.use(VueTables.ClientTable);

new Vue({
  el: '#app',
  data() {
    return {
      loading: true,
      errored: false,
      columns: [
        'タイムスタンプ',
        '本名',
        '所属学科',
        '学年',
        '物品名',
        'メールアドレス',
        '電話番号',
        '返却予定日'
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
      .get('https://script.google.com/macros/s/AKfycbzEUPGEwVBwCa1MyTlEvlIqFu9_wjjv4TfXEYscX7ox0UD-meM/exec')
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