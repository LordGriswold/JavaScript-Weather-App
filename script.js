const app = Vue.createApp({
  data() {
    return {
      city: null,
      region: null,
      country: null,
      latitude: null,
      longitude: null
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
      });
      document.getElementById("location").textContent = "Hai"
  }
});

const vm = app.mount('#root');
