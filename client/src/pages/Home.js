import React from "react";
import { StyledBanner, StyledBanner2, StyledBanner3 } from "../components/styled/Banner.styled";


export function HomePage () {


return (<div className="text-center container-fluid no-gutters">
    <StyledBanner>
        <h1 className="BannerText">Job Tracker</h1>
        </StyledBanner>
     <StyledBanner3>
    <h1 className="BannerText">More Efficiant</h1>
     </StyledBanner3>
      <StyledBanner2>
        <h1 className="BannerText">More Organized</h1>
        </StyledBanner2>
      
</div>)





}