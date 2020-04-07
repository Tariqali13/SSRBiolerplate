import React from "react";
import { Tabs } from "../../../components";
const TabsSection = () => {
  return (
    <div className="feature-tabs-container">
      <div className="container">
        <ul className="nav nav-fill">
          <Tabs
            color="#a0c200"
            viewBox="0 0 20 19.906"
            active="active"
            transform="translate(-98 -712.063)"
            href_id="#sec-aio"
            heading="All-In-One-Platform"
            d="M117.471,714.735l-4.486-2.558a1,1,0,0,0-1,0l-4,2.278-4-2.278a1,1,0,0,0-1,0l-4.486,2.558a1,1,0,0,0-.51.869v5.116a1,1,0,0,0,.51.869l4,2.268v4.537a1,1,0,0,0,.509.87l4.5,2.557a1,1,0,0,0,1,0l4.476-2.557a1,1,0,0,0,.51-0.87v-4.537l4-2.268a1,1,0,0,0,.51-0.869V715.6A1,1,0,0,0,117.471,714.735ZM100,720.14v-4l3.5-2,3.5,2v4l-3.5,2Zm11.49,7.674-3.5,2-3.5-2v-4l3.5-2,3.5,2v4Zm4.5-7.674-3.5,2-3.5-2v-4l3.5-2,3.5,2v4Z"
          />

          <Tabs
            color="#667284"
            viewBox="0 0 20 20"
            active=""
            transform="translate(-324 -712)"
            href_id="#sec-customization"
            heading="Customization"
            d="M343,712H325a1,1,0,0,0-1,1v18a1,1,0,0,0,1,1h18a1,1,0,0,0,1-1V713A1,1,0,0,0,343,712Zm-10,18h-7V720h7v10Zm9,0h-7V720h7v10Zm0-12H326v-4h16v4Z"
          />

          <Tabs
            color="#667284"
            viewBox="0 0 20 20"
            active=""
            transform="translate(-511 -713)"
            href_id="#sec-learning"
            heading="Learning Academy"
            d="M528,713H514a3,3,0,0,0-3,3v10a3,3,0,0,0,3,3h6v2h-4a1,1,0,1,0,0,2h10a1,1,0,1,0,0-2h-4v-2h6a3,3,0,0,0,3-3V716A3,3,0,0,0,528,713Zm1,13a1,1,0,0,1-1,1H514a1,1,0,0,1-1-1V716a1,1,0,0,1,1-1h14a1,1,0,0,1,1,1v10Z"
          />

          <Tabs
            color="#667284"
            viewBox="0 0 20 20"
            active=""
            transform="translate(-731 -713)"
            href_id="#sec-marketing"
            heading="Sales & Marketing"
            d="M741,717a1,1,0,0,0-1,1v10a1,1,0,1,0,2,0V718A1,1,0,0,0,741,717Zm-5,6a1,1,0,0,0-1,1v4a1,1,0,1,0,2,0v-4A1,1,0,0,0,736,723Zm10-2a1,1,0,0,0-1,1v6a1,1,0,1,0,2,0v-6A1,1,0,0,0,746,721Zm2-8H734a3,3,0,0,0-3,3v14a3,3,0,0,0,3,3h14a3,3,0,0,0,3-3V716A3,3,0,0,0,748,713Zm1,17a1,1,0,0,1-1,1H734a1,1,0,0,1-1-1V716a1,1,0,0,1,1-1h14a1,1,0,0,1,1,1v14Z"
          />

          <Tabs
            color="#667284"
            viewBox="0 0 20 20"
            active=""
            transform="translate(-944 -713)"
            href_id="#sec-analytics"
            heading="Analytics"
            d="M949.5,727a1.5,1.5,0,0,0,1.5-1.5h0a0.752,0.752,0,0,0,0-.15l2.79-2.79h0.46l1.61,1.61v0.079a1.5,1.5,0,0,0,3,0V724.17l3.64-3.671h0A1.5,1.5,0,1,0,961,719a0.742,0.742,0,0,0,0,.149l-3.61,3.611h-0.16L955.5,721a1.5,1.5,0,0,0-3,0l-3,3h0A1.5,1.5,0,1,0,949.5,727Zm13.5,4H946V714a1,1,0,0,0-2,0v18a1,1,0,0,0,1,1h18A1,1,0,1,0,963,731Z"
          />

          <Tabs
            color="#667284"
            viewBox="0 0 20 20"
            active=""
            transform="translate(-1094 -713)"
            href_id="#sec-hosting"
            heading=" Hosting & Security"
            d="M1107,713h-10a3,3,0,0,0-3,3v14a3,3,0,0,0,3,3h10a3,3,0,0,0,3-3V716A3,3,0,0,0,1107,713Zm1,17a1,1,0,0,1-1,1h-10a1,1,0,0,1-1-1V716a1,1,0,0,1,1-1h10a1,1,0,0,1,1,1v14Zm-3.62-8.2a3,3,0,1,0-4.76,0,4,4,0,1,0,5.59.835A3.778,3.778,0,0,0,1104.38,721.8ZM1102,719a1,1,0,1,1-1,1A1,1,0,0,1,1102,719Zm0,8a2,2,0,1,1,2-2A2,2,0,0,1,1102,727Z"
          />
        </ul>
      </div>
    </div>
  );
};
export { TabsSection };
