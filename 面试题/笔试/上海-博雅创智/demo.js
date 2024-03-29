const data = [
  {
    name: "Moscow", count: 12,
    content: "<p>Moscow is the capital city and the most populous federal subject of <b>Russia </b>. Thecity is a major political, economic, cultural and scientific center in Russia and in Eurasia. </p>"
  },
  {
    name: "Amsterdam", count: 25,
    content: "<p>Amsterdam is the capital and most populous city of the <b> Netherlands </b>.Its status as the Dutch capital is mandated by the Constitution of the Netherlandsthough it is not the seat of the Dutch government, which is at the Hague. </p> "
  },
  {
    name: "Lisbon",
    count: 15,
    content: "<p>Lisbon is the largest city and capital of <b>Portugal </ b> with a population of 547,631within its administrative limits on a land area of 84.8 square kilometers. </p>"
  },
  {
    name: "Berlin", count: 19,
    content: "<p>Berlin is the capital city of <b>Germany </b> and one of the 16 states of Germany. With apopulation of 3.3 million people, Berlin is Germany's largest city and is the second most populous cityproper and the seventh most populous urban area in the European Union. </p> "
  },
  {
    name: "Madrid", count: 25,
    content: "<p>Madrid is the capital of <b>Spain </b> and its largest city. The population of the city isroughly 3.3 million and the entire population of the Madrid metropolitan area is calculated to be around6.5 million. </p> "
  },
  {
    name: "Barcelona", count: 10,
    content: "<p>Barcelona is a Spanish city, capital of the autonomous community of Catalonia and thesecond largest city in the country, with a population of 1, 620, 943 within its administrative limits. </p > "

  },
  {
    name: "Zagreb", count: 27,
    content: "<p>Zagreb is the capital and the largest city of the Republic of<b> Croatia </b >.It is located in the northwest of the country, along the Sava river, at thesouthern slopes of the Medvednica mountain. </p> "
  },
  {
    name: "Singapore", count: 30,

    content: "<p>Singapore, officially the Republic of Singapore, is a Southeast Asian sovereign city - state off the southern tip of the Malay Peninsula, 137 kilometers northof the equator. </p> "
  },
  {
    name: "Beijing", count: 14,
    content: "<p>Beijing, sometimes romanized as Peking, is the capital of the People's Republic of Chinaand one of the most populous cities in the world.The population as of 2012 was 20, 693, 000. </p> "
  },

  {
    name: "Paris", count: 5,
    content: "<p>Paris is the capital and most populous city of < b > France </b >.It is situated on the River Seine, in the north of the country, at the heart of the Île - de - France region. </p > "
  }
]

const dataList = document.querySelector('#dataList')
const show = document.querySelector('#show')

const render = () => {
  data
    .sort((v, e) => {
      if (v.name < e.name)
        return -1;
      if (v.name > e.name)
        return 1;
      return 0;
    })
    .forEach(d => {
      const city = document.createElement('span')
      city.className = 'city'
      city.innerHTML = `
      <span class="cityName">${d.name}</span>
      <span>(${d.count})</span>
      `
      dataList.appendChild(city)
      city.onclick = () => show.innerHTML = d.content
    })
}

render()

