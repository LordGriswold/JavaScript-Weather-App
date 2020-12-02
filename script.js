var dateObject = new Date();

const app = Vue.createApp({
  data() {
    return {
      city: null,
      region: null,
      country: null,
      latitude: null,
      longitude: null,
      date: dateObject.getMonth() + 1 + "/" + dateObject.getDate() + "/" + dateObject.getFullYear() + ", " +
      dateObject.getHours() + ":" + dateObject.getMinutes() + ":" + dateObject.getSeconds()
    }
  },
  created() {
    fetch('http://api.ipstack.com/129.123.221.168?access_key=73089b0934963bb5ad9bca59add2aa3b')
      .then(response => response.json())
      .then(data => {
        this.city = data['city']
        this.region = data['region_name']
        this.country = data['country_name']
        this.latitude = data['latitude']
        this.longitude = data['longitude']
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.region}&appid=7aff086bc86f7fe1b8fb0b16ab1accb5`)
          .then(response => response.json())
          .then(data => {
           console.log(data);
        });
      });

  }
});

const vm = app.mount('#root');
