import Product from './components/Product'
import './App.css'

function App() {
  return (
    <main class="main">
      <div className="title">
        <h1>Gaming Mouse Collection</h1>
      </div>

      <div className="App">
        <Product
          img = "https://cdn.shopify.com/s/files/1/0355/8296/7943/products/g705-gallery-3_500x.jpg?v=1676882769"
          alt = "logitech"
          name = "Logitech G705 Wireless Gaming Mouse (Off-White)"
          desc = "SKU: 0097855169037"
          price = "	₱5,995.00"
        />

        <Product
          img = "https://cdn.shopify.com/s/files/1/0355/8296/7943/products/4_21c01ae9-238e-4177-b822-341f192ca667_500x.png?v=1676797783"
          alt = "corsair"
          name = "CORSAIR IRONCLAW RGB FPS/MOBA GAMING MOUSE"
          desc = "SKU: 0843591061919"
          price = "	₱2,950.00"
        />

        <Product
          img = "https://cdn.shopify.com/s/files/1/0355/8296/7943/products/4250288198104_500x.jpg?v=1676902326"
          alt = "roccat"
          name = "Roccat Kone Xtd Max Performance Gaming Mouse Black"
          desc = "SKU: 4250288198104"
          price = "	₱4,695.00"
        />

        <Product
          img = "https://cdn.shopify.com/s/files/1/0355/8296/7943/products/M711WP-1_500x.jpg?v=1676920822"
          alt = "redragon"
          name = "Redragon Cobra Gaming Mouse (White/Pink) (M711WP)"
          desc = "SKU: 6950376715562"
          price = "	₱1,095.00"
        />

        <Product
          img = "https://cdn.shopify.com/s/files/1/0355/8296/7943/products/8886419333234_500x.jpg?v=1676813734"
          alt = "razer"
          name = "RAZER OROCHI V2 MOBILE WIRELESS GAMING MOUSE"
          desc = "SKU: 8886419333234"
          price = "	₱2,595.00"
        />

        <Product
          img = "https://cdn.shopify.com/s/files/1/0355/8296/7943/products/811659031747_500x.jpg?v=1676778983"
          alt = "razer"
          name = "RAZER BASILISK CUSTOMIZABLE GAMING MOUSE (MERCURY)"
          desc = "SKU: 811659031747"
          price = "	₱3,595.00"
        />

        <Product
          img = "https://cdn.shopify.com/s/files/1/0355/8296/7943/products/1_68ffb49d-06fd-42d1-8fc0-9f71f35894b0_500x.jpg?v=1676789472"
          alt = "razer"
          name = "RAZER VIPER ULTIMATE WIRELESS GAMING MOUSE WITH CHARGING DOCK (QUARTZ)"
          desc = "SKU: 0811659038845"
          price = "	₱5,495.00"
        />

        <Product
          img = "https://cdn.shopify.com/s/files/1/0355/8296/7943/products/1_3606f072-9236-405d-97a9-814c93c9c09e_500x.jpg?v=1676874020"
          alt = "kinesis"
          name = "Kinesis Gaming Vektor RGB Gaming Mouse (PD9VEK)"
          desc = "SKU: 0607998950043"
          price = "	₱2,295.00"
        />

      </div>
  </main>
  )
}

export default App
