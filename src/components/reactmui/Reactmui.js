import React, {useState} from "react";
import Header from "./ui/Header";
import theme from "./ui/Theme";
import { ThemeProvider } from "@mui/material/styles";
import { StyledEngineProvider } from '@mui/material/styles';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Services from "./Services.js";
import CustomSoftware from "./CustomSoftware.js";
import MobileApps from "./MobileApps.js";
import Websites from "./Websites.js";
import Revolution from "./Revolution.js";
import AboutUs from "./AboutUs.js";
import Contactus from "./Contactus.js";
import Estimate from "./Estimate";

import Test from "./ui/Test";
import LandingPage from "./LandingPage";
import Footer from "./ui/Footer";

const Reactmui = () => {
    const [value, setValue] = useState(0);
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Header
                        value={value}
                        setValue={setValue}
                        selectedIndex={selectedIndex}
                        setSelectedIndex={setSelectedIndex} 
                    />
                    <Routes>
                        <Route exact path="/"
                            element={<LandingPage  
                                    value={value}
                                    setValue={setValue}
                                    selectedIndex={selectedIndex}
                                    setSelectedIndex={setSelectedIndex}
                                />}
                        />
                        <Route exact path="/services" element={
                            <Services 
                                value={value}
                                setValue={setValue}
                                selectedIndex={selectedIndex}
                                setSelectedIndex={setSelectedIndex}  
                            />} 
                        />
                            <Route 
                                exact 
                                path="/customsoftware" 
                                element={<CustomSoftware 
                                    value={value}
                                    setValue={setValue}
                                    selectedIndex={selectedIndex}
                                    setSelectedIndex={setSelectedIndex} 
                                />} 
                            />
                            
                            <Route exact path="/mobileapps" element={<MobileApps setValue={setValue} setSelectedIndex={setSelectedIndex} />} />
                            <Route exact path="/websites" element={<Websites setValue={setValue} setSelectedIndex={setSelectedIndex} />} />
                        

                        <Route exact path="/revolution" element={<Revolution />} />
                        <Route exact path="/about-us" element={<AboutUs />} />
                        <Route exact path="/contact-us" element={<Contactus />} />
                        <Route exact path="/estimate" element={<Estimate />} />

                    </Routes>
                    <Footer value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
                </BrowserRouter>
            </ThemeProvider>
        </StyledEngineProvider>
    );
}

export default Reactmui;