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
      dateObject.getHours() + ":" + dateObject.getMinutes() + ":" + dateObject.getSeconds(),
      temperature: null,
      high: null,
      low: null,
      conditions: null,
      humidity: null,
      pressure: null
    }
  },
  created() {
    fetch('http://api.ipstack.com/129.123.221.168?access_key=73089b0934963bb5ad9bca59add2aa3b')
      .then(response => response.json())
      .then(data => {
        this.city = data['city'];
        this.region = data['region_name'];
        this.country = data['country_name'];
        this.latitude = data['latitude'];
        this.longitude = data['longitude'];

        fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${this.latitude}&lon=${this.longitude}&units=imperial&appid=7aff086bc86f7fe1b8fb0b16ab1accb5`)
          .then(response => response.json())
          .then(data => {
            this.temperature = data["main"]["temp"];
            this.high = data["main"]["temp_max"];
            this.low = data["main"]["temp_min"];
            this.conditions = data["weather"][0]["description"];
            this.humidity = data["main"]["humidity"];
            this.pressure = data["main"["pressure"]];
        });
      });

  }
});

const vm = app.mount('#root');
