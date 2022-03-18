import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Index from './routes/Index';


// import CSS
import  './assets/style/bg.css'
import  './assets/style/fontsize.css'
import  './assets/style/letterspacing.css'
import  './assets/style/lineheight.css'
import  './assets/style/fontfamily.css'
import  './assets/style/textcolor.css'
import  './assets/style/button.css'
import  './assets/style/shadow.css'
import  './assets/style/banner.css'
import  './assets/style/body.css'
import  './assets/style/form.css'
import  './assets/style/border.css'
import  './assets/style/round-profile-pic.css'
import  './assets/style/overflow.css'
import  './assets/style/scrollbar.css'
import  './assets/style/lib/swiper.css'
import  './assets/style/pulse-button.css'
import  './assets/style/padding.css'
import  './assets/style/dropdown.css'
import  './assets/style/hover.css'
import  './assets/style/textprops.css'
import  './assets/style/width.css'
import  './assets/style/checkbox.css'
import  './assets/style/radio.css'
import  './assets/style/cursor.css'
import  './assets/style/zindex.css'
import  './assets/style/mediaqueries/lg-queries.css'
import  './assets/style/toggle-switch.css'
import  './assets/style/resize.css'
import  './assets/style/transition.css'
import  './assets/style/opacity.css'

import AboutUs from './routes/AboutUs';
import Learn from './routes/Learn';
import Explore from './routes/Explore';
import Collected from './routes/dashboard/Collected';
import Created from './routes/dashboard/Created';
import NftDetails from './routes/NftDetails';
import Activity from './routes/dashboard/Activity';
import Items from './routes/dashboard/Items';
import Inventory from './routes/dashboard/Inventory';
import SoldItems from './routes/dashboard/SoldItems';
import CustomerDB from './routes/dashboard/CustomerDB';
import UploadProduct from './routes/UploadProduct';
import UploadNftStep1 from './routes/upload-nft/UploadNftStep1';
import UploadNftStep2 from './routes/upload-nft/UploadNftStep2';
import UploadNftStep3 from './routes/upload-nft/UploadNftStep3';
import UploadNftStep4 from './routes/upload-nft/UploadNftStep4';

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Index />} />
                <Route exact path="/aboutus" element={<AboutUs />} />
                <Route exact path="/learn" element={<Learn />} />
                <Route exact path="/explore/:id" element={<Explore />} />
                <Route exact path="/nft-details" element={<NftDetails />} />
                <Route exact path="/dashboard/collected" element={<Collected />} />
                <Route exact path="/dashboard/created" element={<Created />} />
                <Route exact path="/dashboard/activity" element={<Activity />} />
                <Route exact path="/dashboard/items" element={<Items />} />
                <Route exact path="/dashboard/inventory" element={<Inventory />} />
                <Route exact path="/dashboard/sold-items" element={<SoldItems />} />
                <Route exact path="/dashboard/customers-db" element={<CustomerDB />} />
                <Route exact path="/upload-product" element={<UploadProduct />} />
                <Route exact path="/upload-nft/step1" element={<UploadNftStep1 />} />
                <Route exact path="/upload-nft/step2" element={<UploadNftStep2 />} />
                <Route exact path="/upload-nft/step3" element={<UploadNftStep3 />} />
                <Route exact path="/upload-nft/step4" element={<UploadNftStep4 />} />
            </Routes>
        </Router>
    );
}

export default App
