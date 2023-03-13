import React, {Suspense, useState} from "react";
import Box from '@mui/material/Box';
import { ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { StyledEngineProvider } from '@mui/material/styles';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import theme from "./ui/Theme";
import Header from "./ui/Header";
import Footer from "./ui/Footer";

// create dynamic imports
const Services = React.lazy(() => import("./Services.js"));
const CustomSoftware = React.lazy(() => import("./CustomSoftware.js"));
const MobileApps = React.lazy(() => import("./MobileApps.js"));
const Websites = React.lazy(() => import("./Websites.js"));
const Revolution = React.lazy(() => import("./Revolution.js"));
const AboutUs = React.lazy(() => import("./AboutUs.js"));
const Contactus = React.lazy(() => import("./Contactus.js"));
const Estimate = React.lazy(() => import("./Estimate.js"));
const LandingPage = React.lazy(() => import("./LandingPage.js"));

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
                    <Suspense fallback={<Box sx={{ display: 'flex', height: '82vh', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography variant="h1" fontFamily='Pacifico' color="primary">Loading</Typography>
                        </Box>
                    }>

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
                    </Suspense>
                    <Footer value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
                </BrowserRouter>
            </ThemeProvider>
        </StyledEngineProvider>
    );
}

export default Reactmui;